import React from 'react'

const SignIn = (props) => {

    const {signIn, signOut, user} = props;

    const getSignInOutJsx = () => {
        return user ? <button onClick={signOut}>Sign Out</button> : <button onClick={signIn}>Sign In</button>

    }

    return (
        <div>
            <h1>Discover thousands of recipies under 350 calories</h1>
            {getSignInOutJsx()}
        </div>
    )
}

export default SignIn
