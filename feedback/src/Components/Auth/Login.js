import React, { Component } from 'react';
import { Form, Input, Button } from 'element-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postLogin } from '../../Store/Actions/_actions';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    componentWillReceiveProps(props) {
        this.props = props;
        // if (this.props.Authenticate) {
        //     const { history } = this.props;
        //     history.push(this.props.Authenticate.redirect)
        // }
    }

    componentWillMount() {
        console.log(this.props, 22);
    }

    state = {
        form: {
            username: "rafsan@gmail.com",
            password: "rafsan"
        },
        rules: {
            username: [
                { type:'email', required: true, message: 'Required valid email', trigger: 'blur' }
            ],
            password: [
                { required: true, message: 'Required password', trigger: 'blur' }
            ]
        }
    }

    setValue = (key, value) => {
        const state = { ...this.state }
        state.form[key] = value;
        this.setState({ state });
    }

    sendLoginInformation = () => {
        this.refs.login.validate((valid) => {
            if (valid) {
               const { history } = this.props;
                
                this.props.postLogin(this.state.form.username, this.state.form.password, history)
                
            } else {
                console.log('error')
                return;
            }
        })
    }

    render() {
        return(
            <div>
                <Form ref="login" model={this.state.form} rules={this.state.rules} labelPosition="top" labelWidth="100">
                    <Form.Item label="Email" prop="username">
                        <Input
                        type="email"
                        onChange={(e) => {
                            this.setValue('username', e);
                        }}
                        value={this.state.form.username}/>
                    </Form.Item>

                    <Form.Item label="Password" prop="password">
                        <Input
                        type="password"
                        onChange={(e) => {
                            this.setValue('password', e);
                        }}
                        value={this.state.form.password}/>
                    </Form.Item>
                    <Button 
                        type="primary"
                        onClick={() => this.sendLoginInformation()}
                        loading={this.props.Authenticate.loading}
                    >Sign In</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        postLogin
    }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));