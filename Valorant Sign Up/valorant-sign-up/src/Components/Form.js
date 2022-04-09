import React, {useState} from 'react';
import styles from '../style.module.css';
const Form = (props) => {

const {userList,setUserList} = props;

const [firstName,setFirstName] = useState('');
const [lastName,setLastName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [confirmPassword,setConfirmPassword] = useState('');

const handleForm =(e) => {
    e.preventDefault();
    setUserList([...userList,{
        firstName : firstName,
        lastName : lastName,
        email : email,
        password : password
    }])
    console.log(userList);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
}
return (
<div>
    <html lang="en">
        <body>
            <div className="wrapper">
                <div className="container">
                    <div className="container-content">
                        {/* <!-- Add togle music player --> */}
                            <div className="valorant-logo">
                                <img src="/images/Valorant Logo.png" alt=""/>
                            </div>
                            <h1>Sign in</h1>    
                            <form action="#" onSubmit={(e) => handleForm(e)}>
                            {/* <!-- Add Validations --> */}
                            <div>
                                <label for="firstName"></label>
                                <input type="text" placeholder="First Name" value={firstName}required
                                    onChange={(e)=> {
                                    setFirstName(e.target.value);
                                }} />  
                            </div>
                            <div>
                                <label for="lastName"></label>
                                <input type="text" placeholder="Last Name" value={lastName}required
                                    onChange={(e)=> {
                                    setLastName(e.target.value);
                                }} />
                            </div>
                            <div>
                                <label for="email"></label>
                                <input type="text" placeholder="Email" value={email}required
                                    onChange={(e)=> {
                                    setEmail(e.target.value);
                                }} /> 
                            </div>
                            <div>
                                <label for="password"></label>
                                <input type="text" placeholder="Password" value={password}required
                                    onChange={(e)=> {
                                    setPassword(e.target.value);
                                }} />
                            </div>
                            <div>
                                <label for="confirmPassword"></label>
                                <input type="text" placeholder="Confirm Password" value={confirmPassword}required
                                    onChange={(e)=> {
                                    setConfirmPassword(e.target.value);
                                }} />
                            </div>
                            <div className="login-with">
                                <a href="#" ><img class="gmail-logo" src="/images/Gmail Logo.jpeg" alt=""/></a>
                                <a href="#" ><img class="apple-logo" src="/images/Apple Logo.webp" alt=""/></a>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox"/>
                                <label for="staySignIn">Stay signed in</label>
                            </div>
                            
                            <div>
                                <button type="submit" className="login-logo">></button>
                            </div>
                        </form>
                        <footer>
                        <p>Not the real Valorant Site</p>
                        <p>Created by <a href="https://github.com/JonelBriones" target="_blank">Jonel Briones</a></p>
                        </footer>    
                    </div>
                </div>
            </div>    
        </body>
    </html>
</div>
)
}

export default Form;