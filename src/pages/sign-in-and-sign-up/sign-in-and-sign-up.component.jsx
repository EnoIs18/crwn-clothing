import React from 'react'
import SignUp from '../../components/sign-up/sign-up.component'
import './sign-in-and-sign-up.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component'

const SignInAndSignUp = () => (
   <div className ='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
    </div>
)
export default SignInAndSignUp