const LoanTDG = require("../TDG/LoanTDG.js");
const IdentityMap = require("../IdentityMap.js");
const UnitOfWork = require("../UnitOfWork.js");

class LoanMapper {
  constructor() {
    this.LoanTDG = new LoanTDG();
    this.LoanUnitOfWork = new UnitOfWork();
    this.LoanIdentitymap = new IdentityMap();
  }

  viewAllLoans(callback) {
	console.log("[LoanMapper] viewLoans()");
    let IDM = this.LoanIdentitymap;
    var result = IDM.getData();
    //console.log(result);
    if (result.length == 0) {
      this.LoanTDG.viewAllLoans(function(msg) {
        IDM.putData(msg);
        callback(msg.data);
      });
    } else {
      callback(result[0]);
    }
  }

  //The below method helps to view loans of one specific user
  viewUserLoans(userId,callback) {
    console.log("[LoanMapper] viewLoans()");
    let IDM = this.LoanIdentitymap;
    var result = IDM.getData();
    //console.log(result);
    if (result.length == 0) {
      this.LoanTDG.viewUserLoans(userId,function (msg) {
        IDM.putData(msg);
        callback(msg.data);
      });
    } else {
      callback(result[0]);
    }
  }
  

  addLoanItem(userId, item, callback) {
	console.log("[LoanMapper] addLoantItem()");
    this.LoanUnitOfWork.addNew(userId, item);
  }

  addReturnItem(userId, item, callback) {
	console.log("[LoanMapper] addReturnItem()");
    this.LoanUnitOfWork.addDirty(userId, item);
  }
  viewUncommittedWork(id,callback){
	console.log("[LoanMapper] viewUncommittedWork()");
	let view = this.LoanUnitOfWork.viewUncommittedWork(id);
	callback(view);
  }


  commit(userId, callback) {
	console.log("[LoanMapper] commit()");
    let items = this.LoanUnitOfWork.commit(userId);
    console.log("commitss");
    console.log(items);
  
    let add = items.registration;
    for (var i = 0; i < add.length; i++) {
      this.LoanTDG.loanItem(userId, add[i].idDesc, add[i].category, function (msg) {
        console.log(msg);
      });
    }
    let updates = items.updates;
    for (var i = 0; i < updates.length; i++) {
      this.LoanTDG.returnItem(userId, updates[i].itemId, function (msg) {
        console.log(msg);
      });
    }

    //empty IdentityMap
    let IDM = this.LoanIdentitymap;
    IDM.empty(userId);
  }
}

module.exports = LoanMapper;
