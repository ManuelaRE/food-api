import React from 'react';
import Signin from '../../components/SignIn';
import {Router} from '@reach/router';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

const Routes = (props) => {
const {user, signIn, signOut} = props;

    return (
        <Router>
            <Signin path="/" signIn={signIn} signOut={signOut} user={user}/>
            <PrivateRoutes path="/" user={user}>

            </PrivateRoutes>
        </Router>
    )
}

export default Routes
