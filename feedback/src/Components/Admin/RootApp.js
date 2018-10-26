import React, { Component } from 'react';
import { Menu } from 'element-react';
import { Link } from 'react-router-dom';

const root = "/admin";
 
class RootApp extends Component {

    constructor(props) {
        super(props);
    }

    onSelect = () => {
        console.log("select")
    }

    render() {
        return (
            <div>
                <Menu theme="dark" defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
                    
                    <Link to={`${root}`}>
                        <Menu.Item index="1">SJ Innovation BD</Menu.Item>
                    </Link>

                    <Link to={`${root}/employee`}>
                        <Menu.Item index="2">Employee</Menu.Item>
                    </Link>
                    <Link to={`${root}/questions`}>
                        <Menu.Item index="3">Questions</Menu.Item>
                    </Link>
                    <Link to={`${root}/types`}>
                        <Menu.Item index="4">Types</Menu.Item>
                    </Link>
                </Menu>
            </div>
        );
    }

}

export default RootApp;