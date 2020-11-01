import React from 'react'

const Nav = (props) => {

    const {signIn, signOut, user} = props;


  const getSignInOutJsx = () => {
    return user ?  <button onClick={signOut} >Sign Out</button> : <button onClick={signIn} >Sign In</button>

}

    return (
        <div>
            {getSignInOutJsx()}
        </div>
    )
}

export default Nav
