import React, { Component } from 'react';
import { Form, Input, Layout } from 'element-react';

class Registration extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        form: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_password: ""
        },
        rules: {
            first_name: [
                { required: true, message: 'First name required!', trigger: 'blur' }                
            ],
            last_name: [
                { required: true, message: 'Last name required!', trigger: 'blur' }                                
            ],
            email: [
                { type: 'email', required: true, message: 'valid email required!', trigger: 'blur' }                                
            ],
            password: [
                { required: true, message: 'Password required!', trigger: 'blur' }                                
            ],
            confirm_password: [
                { required: true, message: 'Confirm Password required!', trigger: 'blur' }                                
            ]
        }
    }

    render() {
        return (
            <div>
                <Form ref="registration" rules={this.state.rules} model={this.state.form} labelPosition="top">
                    <Layout.Row gutter="20">
                        <Layout.Col span="12">
                            <Form.Item label="First Name" prop="first_name">
                                <Input value={this.state.form.first_name} />
                            </Form.Item>
                        </Layout.Col>
                        <Layout.Col span="12">
                            <Form.Item label="Last Name" prop="last_name">
                                <Input value={this.state.form.first_name} />
                            </Form.Item>
                        </Layout.Col>
                    </Layout.Row>
                    <Form.Item label="Email" prop="email">
                        <Input value={this.state.form.first_name} />
                    </Form.Item>
                    <Layout.Row gutter="20">
                        <Layout.Col span="12">
                            <Form.Item label="Password" prop="password">
                                <Input value={this.state.form.first_name} />
                            </Form.Item>
                        </Layout.Col>
                        <Layout.Col span="12">
                            <Form.Item label="Confirm Password" prop="confirm_password">
                                <Input value={this.state.form.first_name} />
                            </Form.Item>
                        </Layout.Col>
                    </Layout.Row>
                </Form>
            </div>
        );
    }
}

export default Registration;