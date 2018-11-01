import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

// Components
import AdminRoot from '../Components/Admin/RootApp';
import Types from '../Components/Admin/Types/Types';
import Questions from '../Components/Admin/Questions/Questions';
import Employee from '../Components/Admin/Empolyee/Employee';

import ClientRoot from '../Components/Client/RootApp';

import Auth from '../Components/Auth/Auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Protected = ({ component: Component , ...rest}) => {

    return(
        <Route {...rest} render={() => {
            if (!rest.isAuthenticated) {
                return(
                    <Redirect
                      to={{
                        pathname: "/auth",
                        state: { from: rest.location }
                      }}
                    ></Redirect>
                )
            } else {
                if ('status' in rest.isAuthenticated) {
                    return(
                        <Component
                            { ...rest }
                        />
                    )
                } else {
                    return (
                        <Redirect
                        to={{
                            pathname: "/auth",
                            state: { from: rest.location }
                        }}
                        ></Redirect>
                    )
                }
            }
        }}></Route>
    )
}

const ProtectedAuth = ({ component: Component , ...rest}) => {
    console.log(rest, 'mok');
    return(
        <Route {...rest} render={() => {
            if (!rest.isAuthenticated) {
                return(
                    <Component
                        { ...rest }
                    />
                )
            } else {
                return (
                    <Redirect
                        to={{
                            pathname: rest.isAuthenticated.redirect,
                            state: { from: rest.location }
                        }}
                    ></Redirect>
                )
            }
        }}></Route>
    )
}

const routes = (props) => {
    return (
        <div>
            <ProtectedAuth path="/auth" { ...props } component={Auth}></ProtectedAuth>
            <Route exact path="/" component={ClientRoot}></Route>
            <Protected path="/admin" { ...props} component={AdminRoot}></Protected>
            <Protected path="/admin/types" { ...props } component={Types}></Protected>
            <Protected path="/admin/questions" { ...props} component={Questions}></Protected>
            <Protected path="/admin/employee" { ...props} component={Employee}></Protected>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}


export default withRouter(connect(mapStateToProps)(routes));