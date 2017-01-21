import React, { Component } from 'react';
import background1 from './img/contact_main.jpg';

class Contact extends React.Component {
    componentWillMount() {
        document.title = "Contact | REDCODE"
    }
    render() {
        return (
            <div>
                <section
                    className="section--hero theme--dark" style={{ backgroundImage: 'url(' + background1 + ')' }}>
                    <div
                        className="wrapper">
                        <p
                            className="headline">Contact:</p>
                        <h1>Get in Touch</h1>
                        <a
                            href="#details" className="button--more" data-scrollto> <span
                            className="label">read more</span> </a>
                    </div>
                </section>
                <section
                    className="section--contact theme--brand" id="details">
                    <article
                        className="wrapper">
                        <header
                            className="section-header">
                            <h2 className="h3" data-inview="bottom">Leave IT to us</h2>
                        </header>
                        <div
                            className="section-content">
                            <div
                                className="contact" data-inview="bottom">
                                <div
                                    className="contact-details">
                                    <div
                                        className="wysiwyg-content">
                                        <p>Find us: REDCODE JSC</p>
                                        <p>address: 270B/64/22/5 Ly Thuong Kiet St., Ward 6, Tan Binh Dist., Ho Chi Minh city, Vietnam<br
                                            /> phone   : +84 939 6939 08<br />email     : info@redcode.com<br />website  : redcode.vn</p>
                                    </div>
                                </div>
                                <form
                                    className="contact-form" data-form="contact">
                                    <div
                                        className="input-group--placeholder"> <label>name</label> <input
                                        type="text" name="name" placeholder="name" /> <span
                                        className="error-message">Please fill in correctly</span></div>
                                    <div
                                        className="input-group--placeholder"> <label>e-mail</label> <input
                                        type="email" name="email" placeholder="e-mail" /> <span
                                        className="error-message">Please fill in correctly</span></div>
                                    <div
                                        className="input-group--placeholder"> <label>phone</label> <input
                                        type="phone" name="phone" placeholder="phone" /> <span
                                        className="error-message">Please fill in correctly</span></div>
                                    <div
                                        className="input-group--placeholder"> <label>address</label> <input
                                        type="address" name="address" placeholder="address" /> <span
                                        className="error-message">Please fill in correctly</span></div>
                                    <div
                                        className="input-group--placeholder"> <label>message</label><textarea name="message" placeholder="message"></textarea><span
                                        className="error-message">Please fill in correctly</span></div>
                                    <div
                                        className="button-group has-ajax-message">
                                        <button
                                            className="button has-hover" type="submit"> <span
                                            className="label">send</span> </button>
                                        <div
                                            className="ajax-message ok">Your message has been sent.</div>
                                        <div
                                            className="ajax-message error">Error. Please correct.</div>
                                    </div>
                                </form>
                                <div
                                    className="contact-details layout--smaller">
                                    <div
                                        className="wysiwyg-content">
                                        <p>Billing information:<br
                                      		/>Utlimate Beneficiary: REDCODE JOINT STOCK COMPANY<br
                                            /> USD Account No: 189711949<br
                                            /> Bank: ASIA COMMERCIAL BANK, HO CHI MINH, VIET NAM<br
                                            /> SWIFT code:: ASCBVNVX</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="map" data-inview="bottom">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501704.2131678913!2d106.41418046297919!3d10.768033856602827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1482273430216" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        );
    }
}

export default Contact;