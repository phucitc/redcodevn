import React, { Component } from 'react';
import ContactIcon from '../assets/canvas/ContactIcon.svg';

class PageFooter extends Component {
    render() {
        return (
            <footer
                className="footer">
                <div
                    className="wrapper">
                    <div
                        className="contact">
                        <a
                            href="#" className="link--icon">
                            <span
                                className="icon">
                                <img src={ContactIcon} style={{ width: '2.3rem', height: '1.5rem' }} />
                            </span>
                            <span
                                className="label">Contact us:Info@redcode.vn</span> 
                        </a>
                    </div>
                    <div
                        className="socials">
                        <ul>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/demo?trk=company_logo" target="_blank" className="link--icon">
                                    <span
                                        className="icon" dangerouslySetInnerHTML={{ __html: `<svg id="3915942a-c51d-40da-aa54-6907976667d9" data-name="Warstwa 1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <title>icon-linkedin</title>
    <path d="M9,6.47v0l0,0H9Z"/>
    <path d="M3.63,15.29H0.2V5H3.63V15.29ZM1.92,3.57h0A1.79,1.79,0,1,1,1.94,0,1.79,1.79,0,1,1,1.92,3.57ZM16,15.29H12.57V9.77c0-1.39-.5-2.33-1.74-2.33A1.88,1.88,0,0,0,9.07,8.69,2.34,2.34,0,0,0,9,9.53v5.76H5.53s0-9.35,0-10.32H9V6.44a3.41,3.41,0,0,1,3.09-1.7C14.31,4.73,16,6.21,16,9.38v5.92Z"/>
</svg>` }} >
                                        
                                    </span>
                                    <span
                                        className="label">LinkedIn</span> 
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/_demo_" target="_blank" className="link--icon">
                                    <span
                                        className="icon" dangerouslySetInnerHTML={{ __html: `<?xml version="1.0" encoding="utf-8"?>
<svg
    version="1.1" id="de271766-c397-46e9-8e1b-bd39495b4181"
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    x="0px" 
    y="0px" 
    viewBox="0 0 15 12"
    style="enable-background:new 0 0 15 12;" 
    xml:space="preserve">
    <style type="text/css">
        .icon-twitter__st0{fill:#FFFFFF;}
    </style>
    <title>icon-twitter</title>
    <path 
        class="icon-twitter__st0" 
        d="M13.4,3c0,0.1,0,0.3,0,0.4c0,4.7-3.8,8.6-8.5,8.6c0,0-0.1,0-0.1,0c-1.6,0-3.3-0.5-4.7-1.4c0.2,0,0.5,0,0.7,0
            c1.4,0,2.7-0.4,3.8-1.2c-1.3,0-2.4-0.9-2.8-2.1c0.2,0,0.4,0.1,0.6,0.1c0.3,0,0.5,0,0.8-0.1c-1.4-0.3-2.5-1.5-2.4-3l0,0
            c0.4,0.2,0.9,0.4,1.4,0.4C0.8,3.7,0.3,2,1.1,0.6c1.5,1.9,3.8,3,6.2,3.1C6.9,2.1,7.9,0.5,9.4,0c1.1-0.3,2.4,0,3.1,0.9
            c0.7-0.1,1.3-0.4,1.9-0.7c-0.2,0.7-0.7,1.3-1.3,1.7c0.6-0.1,1.2-0.2,1.7-0.5C14.5,2,14,2.6,13.4,3z"/>
</svg>` }} >
                                        
                                    </span>
                                    <span
                                        className="label">Twitter</span> 
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/demo.software/" target="_blank" className="link--icon">
                                    <span
                                        className="icon" dangerouslySetInnerHTML={{ __html: `<svg id="3391af41-e6e8-4651-9979-573fda79d219" data-name="Warstwa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.21 14.21">
    <defs>
        <style>.a2f60c5d-504c-4853-882d-e9921feb851d{fill:#fff;}</style>
    </defs>
    <title>icon-facebook</title>
    <path id="5b6f3dc3-6551-49df-a4fd-338aa58c5338" data-name="White" class="a2f60c5d-504c-4853-882d-e9921feb851d" d="M13.82,0.4H1.18a0.78,0.78,0,0,0-.78.78V13.82a0.78,0.78,0,0,0,.78.78H8V9.1H6.13V7H8V5.38a2.58,2.58,0,0,1,2.76-2.83,15.19,15.19,0,0,1,1.65.08V4.54H11.26a0.89,0.89,0,0,0-1.06,1V7h2.12L12,9.1H10.2v5.5h3.62a0.78,0.78,0,0,0,.78-0.78V1.18A0.78,0.78,0,0,0,13.82.4Z" transform="translate(-0.4 -0.4)"/>
</svg>` }} >
                                        
                                    </span>
                                    <span
                                        className="label">Facebook</span> 
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="copyrights"> &copy; 2016 Design company copy right</div>
                    
                </div>
            </footer>
        );
    }
}

export default PageFooter;