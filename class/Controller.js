const BookMapper = require("./Mapper/BookMapper.js");
const MusicMapper = require("./Mapper/MusicMapper.js");
const MagazineMapper = require("./Mapper/MagazineMapper.js");
const MovieMapper = require("./Mapper/MovieMapper.js");
const TransactionHistoryMapper = require("./Mapper/TransactionHistoryMapper.js");
const LogActivityMapper = require("./Mapper/LogActivityMapper");
const UserMapper = require("./Mapper/UserMapper");
const LoanMapper = require("./Mapper/LoanMapper");

class Controller {
  constructor() {
    this.BookMapper = new BookMapper();
    this.MusicMapper = new MusicMapper();
    this.MagazineMapper = new MagazineMapper();
    this.MovieMapper = new MovieMapper();
    this.TransactionHistory = new TransactionHistoryMapper();
    this.LogActivity = new LogActivityMapper();
    this.UserMapper = new UserMapper();
	this.LoanMapper = new LoanMapper();
  }

  // for BookMapper
  bookAdd(userId, item, confirmation) {
	console.log("[Controller] bookAdd()");
    this.BookMapper.addItem(userId, item);
    confirmation({ status: "true", message: "no message" });
  }
  bookRemoveAdd(userId, index_, confirmation) {
	console.log("[Controller] bookRemoveAdd()");
    this.BookMapper.removeNewItem(userId, index_);
    confirmation({ status: "true", message: "no message" });
  }
  bookModify(userId, item, confirmation) {
    this.BookMapper.modifyItem(userId, item);
    confirmation({ status: "true", message: "no message" });
  }
  bookRemoveModify(userId, index_, confirmation) {
	console.log("[Controller] bookRemoveModify()");
    this.BookMapper.removeModifyItem(userId, index_);
    confirmation({ status: "true", message: "no message" });
  }
  bookDelete(userId, itemId, confirmation) {
    this.BookMapper.deleteItem(userId, itemId);
    confirmation({ status: "true", message: "no message" });
  }
  bookRemoveDelete(userId, index_, confirmation) {
	console.log("[Controller] bookRemoveDelete()");
    this.BookMapper.removeDeleteItem(userId, index_);
    confirmation({ status: "true", message: "no message" });
  }
  bookView(confirmation) {
    this.BookMapper.viewItems(function(msg){
      confirmation(msg);
    })
  }
  bookUncommitedWork(userId, confirmation) {
    this.BookMapper.viewUncommittedWork(userId,function(msg){
      confirmation(msg);
    }); 
  }
  bookCommit(userId, confirmation) {
    this.BookMapper.commit(userId, function(g_msg) {
      confirmation(g_msg);
    });
  }
  // for MagazineMapper
  magazineAdd(userId, item, confirmation) {
    this.MagazineMapper.addItem(userId, item);
    confirmation({ status: "true", message: "no message" });
  }
  magazineRemoveAdd(userId, index_, confirmation) {
	console.log("[Controller] magazineRemoveAdd()");
    this.MagazineMapper.removeNewItem(userId, index_);
    confirmation({ status: "true", message: "no message" });
  }
  magazineModify(userId, item, confirmation) {
    this.MagazineMapper.modifyItem(userId, item);
    confirmation({ status: "true", message: "no message" });
  }
  magazineRemoveModify(userId, index_, confirmation) {
	console.log("[Controller] magazineRemoveModify()");
    this.MagazineMapper.removeModifyItem(userId, index_);
    confirmation({ status: "true", message: "no message" });
  }
  magazineDelete(userId, itemId, confirmation) {
    this.MagazineMapper.deleteItem(userId, itemId);
    confirmation({ status: "true", message: "no message" });
  }
  magazineRemoveDelete(userId, index_, confirmation) {
	console.log("[Controller] magazineRemoveDelete()");
    this.MagazineMapper.removeDeleteItem(userId, index_);
    confirmation({ status: "true", message: "no message" });
  }
  magazineView(confirmation) {
    this.MagazineMapper.viewItems(function (msg) {
      confirmation(msg);
    })
  }
  magazineUncommitedWork(userId, confirmation) {
    this.MagazineMapper.viewUncommittedWork(userId, function (msg) {
      confirmation(msg);
    });

  }

  magazineCommit(userId, confirmation) {
    this.MagazineMapper.commit(userId, function (g_msg) {
      confirmation(g_msg);
    });
  }
  // for MusicMapper
  musicAdd(userId, item, confirmation) {
    this.MusicMapper.addItem(userId, item);
    confirmation({ status: "true", message: "no message" });
  }
  musicRemoveAdd(userId, index_, confirmation) {
	console.log("[Controller] musicRemoveAdd()");
    this.MusicMapper.removeNewItem(userId, index_);
    confirmation({ status: "true", message: "no message" });
  }
  musicModify(userId, item, confirmation) {
    this.MusicMapper.modifyItem(userId, item);
    confirmation({ status: "true", message: "no message" });
  }
  musicRemoveModify(userId, item, confirmation) {
	console.log("[Controller] musicRemoveDelete()");
    this.MusicMapper.removeModifyItem(userId, item);
    confirmation({ status: "true", message: "no message" });
  }
  musicDelete(userId, itemId, confirmation) {
    this.MusicMapper.deleteItem(userId, itemId);
    confirmation({ status: "true", message: "no message" });
  }
  musicRemoveDelete(userId, index_, confirmation) {
	console.log("[Controller] musicRemoveDelete()");
    this.MusicMapper.removeDeleteItem(userId, index_);
    confirmation({ status: "true", message: "no message" });
  }
  musicView(confirmation) {
    this.MusicMapper.viewItems(function (msg) {
      confirmation(msg);
    })
  }
  musicUncommitedWork(userId, confirmation) {
    this.MusicMapper.viewUncommittedWork(userId, function (msg) {
      confirmation(msg);
    });

  }
  musicCommit(userId, confirmation) {
    this.MusicMapper.commit(userId, function (g_msg) {
      confirmation(g_msg);
    });
  }

  // for MovieMapper
  movieAdd(userId, item, confirmation) {
    this.MovieMapper.addItem(userId, item);
    confirmation({ status: "true", message: "no message" });
  }
  movieRemoveAdd(userId, index_, confirmation) {
	console.log("[Controller] movieRemoveAdd()");
    this.MovieMapper.removeNewItem(userId, index_);
    confirmation({ status: "true", message: "no message" });
  }
  movieModify(userId, item, confirmation) {
    this.MovieMapper.modifyItem(userId, item);
    confirmation({ status: "true", message: "no message" });
  }
  movieRemoveModify(userId, index_, confirmation) {
	console.log("[Controller] movieRemoveModify()");
    this.MovieMapper.removeModifyItem(userId, index_);
    confirmation({ status: "true", message: "no message" });
  }
  movieDelete(userId, itemId, confirmation) {
    this.MovieMapper.deleteItem(userId, itemId);
    confirmation({ status: "true", message: "no message" });
  }
  movieRemoveDelete(userId, index_, confirmation) {
	console.log("[Controller] movieRemoveDelete()");
    this.MovieMapper.removeDeleteItem(userId, index_);
    confirmation({ status: "true", message: "no message" });
  }
  movieView(confirmation) {
    this.MovieMapper.viewItems(function (msg) {
      confirmation(msg);
    })
  }
  movieUncommitedWork(userId, confirmation) {
    this.MovieMapper.viewUncommittedWork(userId, function (msg) {
      confirmation(msg);
    });

  }
  movieCommit(userId, confirmation) {
    this.MovieMapper.commit(userId, function (g_msg) {
      confirmation(g_msg);
    });
  }

  // for TransactionHistoryMapper
  transactionHistoryAdd(userId, action, itemId, confirmation) {
    this.TransactionHistory.addActivity(userId, action, itemId, function(msg) {
      confirmation(msg);
    });
  }

  transactionHistoryView(confirmation) {
    this.TransactionHistory.viewActivity(function(msg){
		confirmation(msg);
	});
  }

  // for LogActivityMapper
  logActivityMapperAdd(userId, action, confirmation) {
    this.LogActivity.addActivity(userId, action, function(msg){
		confirmation(msg)
	});
  }

  logActivityMapperView(confirmation) {
    this.LogActivity.viewActivity(function(msg){
		confirmation(msg);
	});
  }
   // for UserMapper
  userLogin(email,password,confirmation){
	  this.UserMapper.login(email, password,function(msg){
		  confirmation(msg);
	  });
  }
  userAdd(userId, user, confirmation) {
    this.UserMapper.addUser(userId, user);
    confirmation({ status: "true", message: "no message" });
  }
  userRemoveAdd(userId, index_, confirmation) {
	console.log("[Controller] userRemoveAdd()");
    this.UserMapper.removeNewUser(userId, index_);
    confirmation({ status: "true", message: "no message" });
  }
  userModify(userId, user, confirmation) {
    this.UserMapper.modifyUser(userId, user);
    confirmation({ status: "true", message: "no message" });
  }
  userRemoveModify(userId, index_, confirmation) {
	console.log("[Controller] userRemoveModify()");
    this.UserMapper.removeModifyUser(userId, index_);
    confirmation({ status: "true", message: "no message" });
  }
  userDelete(userId, userId_del, confirmation) {
    this.UserMapper.deleteUser(userId, userId_del);
    confirmation({ status: "true", message: "no message" });
  }
  userRemoveDelete(userId, index_, confirmation) {
	console.log("[Controller] userRemoveDelete()");
    this.UserMapper.removeDeleteUser(userId, index_);
    confirmation({ status: "true", message: "no message" });
  }
  userView(confirmation) {
    this.UserMapper.viewUsers(function(msg){
		confirmation(msg);
	});
    
  }
  userUncommitedWork(userId, confirmation) {
    this.UserMapper.viewUncommittedWork(userId,function(msg){
		confirmation(msg);
	});
  }
  userCommit(userId, confirmation) {
    this.UserMapper.commit(userId, function(g_msg) {
      confirmation(g_msg);
    });
  }
  //for LoanMapper
  loanViewAll(confirmation) {
    this.LoanMapper.viewAllLoans(function(msg){
      confirmation(msg)
    });
  }

  loanViewUser(userId,confirmation) {
    this.LoanMapper.viewUserLoans(userId,function (msg) {
      confirmation(msg)
    });
  }

  loanAddItem(userId, itemId, confirmation){
	this.LoanMapper.addLoanItem(userId,itemId); 
	confirmation({ status: "true", message: "no message" });
  }
  loanRemoveAdd(userId, index_, confirmation) {
	console.log("[Controller] bookRemoveAdd()");
    this.LoanMapper.removeLoanItem(userId, index_);
    confirmation({ status: "true", message: "no message" });
  }
  loanAddReturn(userId, itemId, confirmation){
	this.LoanMapper.addReturnItem(userId,itemId); 
	confirmation({ status: "true", message: "no message" });
  }
  loanRemoveReturn(userId, index_, confirmation) {
	console.log("[Controller] loanRemoveReturn()");
    this.BookMapper.removeReturnItem(userId, index_);
    confirmation({ status: "true", message: "no message" });
  }
  loanUncommitedWork(userId,confirmation){
	  this.LoanMapper.viewUncommittedWork(userId, function(msg){
		  confirmation(msg);
	  })
  }
  loanCommit(userId,confirmation){
	this.LoanMapper.commit(userId, function(msg){
		confirmation(msg);
	})
  }
}

module.exports = Controller;
