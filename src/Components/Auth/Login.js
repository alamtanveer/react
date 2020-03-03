import React from 'react';


// Example JS object used for CSS styling
const styles = {
    facebookBtn: {
        backgroundColor: 'rgb(51, 89, 157)'
    },
    form: {
        textAlign: 'center'
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email       : "tanveer.alam@blazeclan.com",
            password    : "tanveer@786"
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePwd = this.handleChangePwd.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    handleOnSubmit = (e) =>{
        debugger;
        e.preventDefault();
        if(this.state.email === "tanveer.alam@blazeclan.com" && this.state.password === "tanveer@786"){
            this.props.history.push('/app');
            console.log('Submitted!');
        }
    }
    handleChangeEmail(event) {
        debugger;
        this.setState({email: event.target.value});
    }
    handleChangePwd(event) {
        debugger;
        this.setState({password: event.target.value});
    }
    render() {
        return (
            <div className="col-md-4 mx-auto">
                <form style={styles.form} onSubmit={this.handleOnSubmit.bind(this)}>
                    <h4>Welcome Back!</h4>
                    <div className='form-group row'>
                        <input className='input' type='text' value={this.state.email} placeholder='Email' onChange={this.handleChangeEmail} />
                    </div>
                    <div className='form-group row'>
                        <input className='input' type='password' value={this.state.password} placeholder='Password' onChange={this.handleChangePwd} />
                    </div>
                    <div className='form-group row'>
                        <button className='btn' type='submit'>Log In</button>
                    </div>
                    <div className='form-group row'>
                        <button className='fb' type='submit'>Connect with Facebook</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;