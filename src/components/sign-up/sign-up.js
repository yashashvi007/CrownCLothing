import React from 'react'
import FormInput from './../form-input/form-input'
import Button from './../custom-button/custom-button'

import {auth , createUserProfile} from './../../firebase/firebase.utils'
import './sign-up.scss'

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''
        }
    }

    handleOnSubmit =async (event)=>{
        event.preventDefault();

        const {displayName , email , password , confirmPassword } = this.state

        if(password !== confirmPassword){
            alert("password's does'nt match")
            return ;
        }
         
         try {

            const {user} = await auth.createUserWithEmailAndPassword(email , password)
             await createUserProfile(user  , {displayName})

             this.setState({
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
             })
         } catch (err) {
             console.log('erererererer' , err.message ) 
         }
    }
    

    handleOnChange = (event)=>{
        const {name , value} = event.target
        
        this.setState({[name] : value})

    }


    render(){
        return (
          <div className='sign-up'  >
             <h2>
                 i do not have a account 
             </h2>

             <span>Sign Up with your email and password</span>

             <form className='sign-up-form' onSubmit={this.handleOnSubmit} >
               <FormInput type='text' name='displayName' value={this.state.displayName} label='displayname' handleOnChange={this.handleOnChange} required />
               <FormInput type='email' name='email' value={this.state.email} label='email' handleOnChange={this.handleOnChange} required />
               <FormInput type='password' name='password' value={this.state.password} label='password' handleOnChange={this.handleOnChange} required />
               <FormInput type='password' name='confirmPassword' value={this.state.confirmPassword} label='confirmPassword' handleOnChange={this.handleOnChange} required />
               <Button type='submit' >Sign Up</Button>
             </form>
          </div>
        )
    }
}

export default SignUp;
