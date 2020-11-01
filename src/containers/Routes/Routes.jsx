import React from 'react';

import {Router} from '@reach/router';
import Dashboard from '../Daskboard/Dashboard';

const Routes = (props) => {

const {user, recipes} = props;

    return (
        <Router>
            <Dashboard path="/" user={user} recipes={recipes} />
        </Router>
    )
}

export default Routes
