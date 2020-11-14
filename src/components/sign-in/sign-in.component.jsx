import React from 'react';
import './sign-in.styles.scss';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    //target is the the input element we are passing in the form
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;
 
        //dynamically sets the state
        this.setState({[name]: value});
    }
    render() {
        return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span> Sign in with email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput name = "email" 
                        type="email" 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        label="email"
                        required />
                <FormInput name = "password" 
                       type="password" 
                       value={this.state.password} 
                       handleChange={this.handleChange}
                       label="password"
                       required />
                <div className='buttons'>
                    <CustomButton type="submit"> Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
                </div>
            </form>
         
        </div>

        )
    }   
}

export default SignIn;