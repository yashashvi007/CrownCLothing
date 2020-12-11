import React from 'react'
import FormInput from './../form-input/form-input'
import Button from './../custom-button/custom-button'
import {signInWithGoogle} from './../../firebase/firebase.utils'
import './sign-in.scss'

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault();

        this.setState({email: '' , password : ''})
    }

    handleOnChange = (event)=>{
       const {value , name} = event.target;
       
       this.setState({[name] : value})

    }



    render(){
        return (
            <div className='sign-in' >
               <h2>i already have an account</h2>
               <span>Sign in with your email and password</span>

               <form onSubmit={this.handleSubmit} >
                   <FormInput name='email' type='email' value={this.state.email} handleOnChange={this.handleOnChange} label='Email' required />
                   
                   <FormInput name='password' type='password' value={this.state.password} handleOnChange={this.handleOnChange} label='Password' required />
                   

                  <div className='buttons' >
                  <Button type='submit' >Sign In</Button>
                   <Button onClick={signInWithGoogle} isGoogleSignIn >Sigin With Google</Button>
                  </div>
               </form>
            </div>
        )
    }
}

export default SignIn