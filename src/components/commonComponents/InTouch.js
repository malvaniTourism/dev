import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import touch from '../../assets/img/others/11.png';
import { comnPost } from '../../services/comnServ';

const InTouch = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        var formData = new FormData();
        formData.append('user_id', localStorage.getItem('user_id'));
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', number);
        formData.append('contact_meta', '')
        formData.append('message', message);

        comnPost('v1/api/contact', formData)
        .then(res => {
            console.log('res', res);
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="contact-area pd-top-108">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-lg-center text-left">
                            <h2 className="title">Get In Touch!</h2>
                            <p>
                                Vestibulum blandit viverra convallis. Pellentesque ligula urna,
                                fermentum ut semper in, tincidunt nec dui. Morbi mauris lacus,
                                consequat eget justo in
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 offset-xl-1 col-lg-6">
                        <div className="thumb">
                            <img src={touch} alt="image" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <form className="tp-form-wrap">
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">Name</span>
                                        <input type="text" onChange={(e) => setName(e.target.value)} />
                                    </label>
                                </div>
                                <div className="col-md-6">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">Number</span>
                                        <input type="tel" onChange={(e) => setNumber(e.target.value)} maxLength={10} />
                                    </label>
                                </div>
                                <div className="col-lg-12">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">Email</span>
                                        <input type="email" onChange={(e) => setEmail(e.target.value)} />
                                    </label>
                                </div>
                                <div className="col-lg-12">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">Message</span>
                                        <textarea defaultValue={""} onChange={(e) => setMessage(e.target.value)} />
                                    </label>
                                </div>
                                <div className="col-12">
                                    {/* <a className="btn btn-yellow" href="#">
                                        Send Message
                                    </a> */}
                                    <div className="d-list-btn-wrap btn-yellow d-list alignCenter mx-auto bkNow" onClick={() => sendMessage()}>
                                        <text className="whiteAlign bold mdText" href="#">Send Message</text>
                                        <i className="fa fa-paper-plane" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InTouch;