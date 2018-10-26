import React from 'react';
import { Route } from 'react-router-dom';

// Components
import AdminRoot from '../Components/Admin/RootApp';
import Types from '../Components/Admin/Types/Types';
import Questions from '../Components/Admin/Questions/Questions';
import Employee from '../Components/Admin/Empolyee/Employee';

import ClientRoot from '../Components/Client/RootApp';

const routes = () => {
    return (
        <div>
            <Route exact path="/" component={ClientRoot}></Route>
            <Route path="/admin" component={AdminRoot}></Route>
            <Route path="/admin/types" component={Types}></Route>
            <Route path="/admin/questions" component={Questions}></Route>
            <Route path="/admin/employee" component={Employee}></Route>
        </div>
    )
}

export default routes;