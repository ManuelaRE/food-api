import React from 'react';
import Signin from '../../components/SignIn';
import {Router} from '@reach/router';

const Routes = () => {
    return (
        <Router>
            <Signin path="/" />
        </Router>
    )
}

export default Routes
