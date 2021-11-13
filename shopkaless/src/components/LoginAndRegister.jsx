import React, { useContext, useState } from 'react';
import { ContextProvider } from "../context/Context";
import time from "../assets/images/time.png";

function LoginAndRegister(props) {
    const { clickToggle, handleClickToggle, clickLogin, handleClickLogin, handleLogin, handleRegister } = useContext(ContextProvider)
 
    const ClassLogin = clickLogin ? "login " : "login active"
    const Class = clickLogin ? "login__content" : "login__content active"
    const ClassOvelay = clickLogin ? "llogin__ovelay " : "login__ovelay active"


    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        firstname:"",
        lastname:""
    })

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const clearInput = () => {
        setInputs({
            email: "",
            password: "",
            firstname:"",
            lastname:""
        })
    }
    const handleInputLogin = (e) => {
        e.preventDefault();
        if (inputs.email === "" && inputs.password === "") {
            alert("bạn chưa nhập gì")
            return;
        }
        handleLogin(inputs);
        clearInput()
    }

    const handleInputRegister = (e) =>{
        e.preventDefault();
        if (inputs.firstname === "") {
            alert("Bạn chưa nhập firstname");
            return;
        } else if (inputs.lastname === "") {
            alert("Bạn chưa nhập lastname");
            return;
        } else if (inputs.email === "") {
            alert("Bạn chưa nhập email");
            return;
        }
        else if (inputs.password === "") {
            alert("Bạn chưa nhập password");
            return;
        }
        else if (inputs.firstname.length < 10 && inputs.lastname.length < 10) {
            handleRegister(inputs);
            clearInput();
        }
        else {
            alert("firstname and lastname không được quá 15 ký tự")
        }
    }
    return (
        <div className={ClassLogin} >
            <div className="login__inner">
                <div className={ClassOvelay} onClick={handleClickLogin}></div>
                <div className={Class}>
                    {
                        clickToggle ? <div className="login__box">
                            <div className="login__head">
                                <h3>Login</h3>
                                <img src={time} alt="" onClick={handleClickLogin} />
                            </div>
                            <div className="login__form">
                                <div className="login__form-item">
                                    <label>Email <span>*</span></label>
                                    <input type="email"
                                        name="email"
                                        value={inputs.email}
                                        onChange={handleChange}
                                        placeholder="Email" />
                                </div>
                                <div className="login__form-item">
                                    <label>Password <span>*</span></label>
                                    <input type="password"
                                        name="password"
                                        value={inputs.password}
                                        onChange={handleChange}
                                        placeholder="Password" />
                                </div>
                                <div className="login__form-item">
                                    <button onClick={handleInputLogin}>Sign Up</button>
                                </div>
                                <p>New customer? <b onClick={handleClickToggle}>Create your account</b></p>
                            </div>
                        </div> :
                            <div className="login__box">
                                <div className="login__head">
                                    <h3>Register</h3>
                                    <img src={time} alt="" onClick={handleClickLogin} />
                                </div>
                                <div className="login__form">
                                    <div className="login__form-item">
                                        <label>First Name <span>*</span></label>
                                        <input type="text"
                                            name="firstname"
                                            value={inputs.firstname}
                                            onChange={handleChange}
                                            placeholder="First Name" />
                                    </div>
                                    <div className="login__form-item">
                                        <label>Last Name <span>*</span></label>
                                        <input type="text"
                                            name="lastname"
                                            value={inputs.lastname}
                                            onChange={handleChange}
                                            placeholder="Last Name" />
                                    </div>
                                    <div className="login__form-item">
                                        <label>Email<span>*</span></label>
                                        <input type="email"
                                            name="email"
                                            value={inputs.email}
                                            onChange={handleChange}
                                            placeholder="Email" />
                                    </div>
                                    <div className="login__form-item">
                                        <label>Password <span>*</span></label>
                                        <input type="password"
                                            name="password"
                                            value={inputs.password}
                                            onChange={handleChange}
                                            placeholder="Password" />
                                    </div>
                                    <div className="login__form-item">
                                        <button onClick={handleInputRegister}>Register</button>
                                    </div>
                                    <p>Already have an account? <b onClick={handleClickToggle}>Login Here</b></p>
                                </div>
                            </div>
                    }
                </div>
            </div>

        </div>
    );
}

export default LoginAndRegister;