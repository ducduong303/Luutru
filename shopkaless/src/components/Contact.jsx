import React, { Component } from 'react';
import CustomTitle from './CustomTitle';
import Header from './Header';
import LoginAndRegister from './LoginAndRegister';
import YourCart from './YourCart';
import Footer from './Footer';

class Contact extends Component {


    handleInputRegister = () => {
        alert("xin lỗi chức năng này chưa hoàn thành ")
    }
    render() {
        return (
            <>
                <Header></Header>
                <LoginAndRegister></LoginAndRegister>
                <YourCart></YourCart>
                <CustomTitle title="Contact"
                    desc="The freshest and most exciting news"></CustomTitle>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="login__box col-8" >
                        <div className="login__form">
                            <div className="login__form-item">
                                <label>Tên của bạn  <span>*</span></label>
                                <input type="text"
                                    name="name"
                                    // value={inputs.firstname}
                                    // onChange={handleChange}
                                    placeholder="Tên của bạn" />
                            </div>
                            <div className="login__form-item">
                                <label>Địa chỉ Email <span>*</span></label>
                                <input type="text"
                                    name="email"
                                    // value={inputs.lastname}
                                    // onChange={handleChange}
                                    placeholder="Email" />
                            </div>
                            <div className="login__form-item">
                                <label>Tiêu đề<span>*</span></label>
                                <input type="text"
                                    name="title"
                                    // value={inputs.email}
                                    // onChange={handleChange}
                                    placeholder="Tiêu đề" />
                            </div>
                            <div className="login__form-item">
                                <label>Thông điệp <span>*</span></label>
                                <textarea
                                    rows="4" cols="50"
                                    placeholder="Thông điệp"
                                >

                                </textarea>
                            </div>
                            <div className="login__form-item" >
                                <button onClick={this.handleInputRegister}>Đóng góp ý kiến</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </>
        );
    }
}

export default Contact;