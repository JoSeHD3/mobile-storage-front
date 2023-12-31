import React, {useState} from 'react';
import bcrypt from 'bcryptjs';
import { Link } from 'react-router-dom';

const address = "http://127.0.0.1:8086/authenticate";

async function checkLoginData(cred){
    return fetch(address, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    }).then(data => data.json());
}

function Login(){
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loginUsername, setLoginUsername] = useState();
    const [loginPassword, setLoginPassword] = useState();

    const handleSubmit = async e => {        
        e.preventDefault();
        const response = await checkLoginData({
            loginUsername,
            loginPassword
        });
		if(response.cancaled == false)
		{
            localStorage.setItem("token", response['token']);
            //localStorage.setItem('user', JSON.stringify(response['user']));
            window.location.href = "/pages/home";
            setIsSubmitted(true);
        } else if(response.cancaled == true){
			alert("Konto nieaktywne");
            console.log("Server response error");
		} 
		else {
            alert("Nieprawidłowe dane logowania");
            console.log("Server response error");
        }
    }

    return(
        <div className="loginForm">
            <form onSubmit={handleSubmit}>
                <div className="loginInput">
                    <label>Username: </label>
                    <input type="text" name="loginName" required onChange={e => setLoginUsername(e.target.value)}/>
                </div>
                <div className="loginInput">
                    <label>Password: </label>
                    <input type="password" name="loginPassword" required onChange={e => setLoginPassword(e.target.value)}/>
                </div>
                <div className="loginButton">
                    <input type="submit" name="loginSubmit" value="Zaloguj"/>
                </div>
                <div>
                    <Link to="/register">Zarejestruj sie!</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;