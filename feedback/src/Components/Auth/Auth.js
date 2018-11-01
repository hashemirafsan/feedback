import React, { Component } from 'react';
import { Tabs, Card, Layout } from 'element-react';
import { withRouter } from 'react-router-dom';
import './css/auth.css';

import Login from './Login';
import Registration from './Registration';

class Auth extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="feedback_auth">
                <Layout.Col span="8" offset="8">
                    <Card className="box-card">
                    <p style={{ textAlign: 'center' }}>SJ Innovation BD</p>
                    <Tabs activeName="1" onTabClick={ (tab) => console.log(tab.props.name) }>
                        <Tabs.Pane label="Sign In" name="1">
                            <Login {...this.props}></Login>
                        </Tabs.Pane>
                        <Tabs.Pane label="Register" name="2">
                            <Registration></Registration>
                        </Tabs.Pane>
                    </Tabs>
                    </Card>
                </Layout.Col>
            </div>
        )
    }
}

export default withRouter(Auth);