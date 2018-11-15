import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import HeaderComponent from './Common/header/header'
import FooterComponent from './Common/footer/footer'
import {Carousel, notification} from "antd";
import Magazine from "../images/magazine.jpg";
import Music from "../images/music.jpg";
import Movie from "../images/movie.png";
import Book from "../images/book.jpg";
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import Controller from '../class/controller'
import {Redirect} from "react-router";
let controller = new Controller;
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: '',
            errorEmail:false,
            errorPassword:false,
        }
    }
    changeEmail=(e)=>{
        this.setState({email:e.target.value})
        this.setState({errorEmail: false})
    }
    changePassword=(e)=>{
        this.setState({password:e.target.value})
        this.setState({errorPassword: false})
    }
    login=()=>{
        let {email, password } = this.state;
        if(!email || !password){
            if(!email){
                this.setState({errorEmail: true})
            }
            if(!password){
                this.setState({errorPassword: true})
            }
            this.loginError();
        }else{
            let temp = this.props;
            let temp2 = this;
            let user = {
                FirstName: "Erdem",
                LastName: "Kepenek",
                Address: '0015 Concordia University, Montreal, Quebec',
                email: email,
                phone: 2147483647,
                type: 1

            }
            console.log(controller)
            localStorage.setItem('jwtToken',JSON.stringify(user));
            temp.dispatch({type: 'addUserProfile', data: user});
            temp2.loginConfirmation();
            if(user.type ===1){
                temp.history.push(`/adminpanel`)
            }else{
                temp.history.push(`/dashboard`);
            }
            /*controller.login(email,password,function(data){
                console.log(data)
                localStorage.setItem('jwtToken',JSON.stringify(data[0].email));
                temp.dispatch({type: 'addUserProfile', data: data[0].email});
                temp2.loginConfirmation();
                temp.history.push(`/dashboard`);
            });*/
        }
    }
    loginConfirmation = () => {
        notification.success({
            message: 'Hello!',
            description: 'Welcome to your Dashboard!',
            duration: 6,
        });
    };
    loginError = () => {
        notification.error({
            message: 'Error',
            description: 'You information is Missing!',
            duration:6,
        });
    };
    signup=()=> this.props.history.push(`/signup`);
    render() {
        if(this.props.userProfile) {
            return (<Redirect to={'/dashboard'}/>);
        }else {
            return (<div className='main-container'>
                <HeaderComponent/>
                <div className='MainContainer-ant-carousel'>
                    <div className='login-form'>
                        <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
                            <Grid.Column style={{maxWidth: 450, opacity: 0.9}}>
                                <Form size='large'>
                                    <Segment stacked>
                                        <Header as='h2' className='login-Header' textAlign='center'>Log-in to your
                                            account
                                        </Header>
                                        <Form.Input
                                            fluid
                                            icon='user'
                                            iconPosition='left'
                                            placeholder='E-mail address'
                                            value={this.state.email}
                                            error={this.state.errorEmail}
                                            onChange={this.changeEmail}/>
                                        <Form.Input
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Password'
                                            type='password'
                                            value={this.state.password}
                                            error={this.state.errorPassword}
                                            onChange={this.changePassword}
                                        />

                                        <Button className='login-button' fluid size='large' onClick={this.login}>
                                            Login
                                        </Button>
                                    </Segment>
                                </Form>
                                <Message>
                                    New to us? <a onClick={this.signup}>Sign Up</a>
                                </Message>
                            </Grid.Column>
                        </Grid>
                    </div>
                    <Carousel autoplay effect="fade">
                        <Image src={Magazine}/>
                        <Image src={Music}/>
                        <Image src={Movie}/>
                        <Image src={Book}/>
                    </Carousel>
                </div>
                <FooterComponent/>
            </div>)
        }
    }
}

function mapStateToProps(state){
    return {
        userProfile: state.AdminReducer.userProfile
    };

}
export default withRouter(connect(mapStateToProps)(Login));