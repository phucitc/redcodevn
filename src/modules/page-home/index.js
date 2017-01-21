import React, { Component } from 'react';
import icon1 from './img/icon1.svg';
import icon2 from './img/icon2.svg';
import icon3 from './img/icon3.svg';
import icon4 from './img/icon4.svg';
import background1 from './img/Banner-main-en.jpg';
import background2 from './img/home01.jpg';
import background3 from './img/home02.jpg';
import imageLineGroup from './img/line-group.png';
import imageLineGroupW from './img/line-group-w.png';

class Home extends Component {
    componentWillMount() {
        document.title = "Home | REDCODE"
    }
    render() {
        return (
            <div>
            <section
                        className="section--hero theme--dark layout--fullpage" style={{ backgroundImage: 'url(' + background1 + ')' }}>
                        <div
                            className="wrapper">
                            <a
                                        href="#read-more-here" className="button--more" data-inview="bottom" style={{ marginLeft: '44%' }} data-scrollto> <span
                                        className="label" >read more</span> </a>                           
                        </div>
                    </section>
                    <section
                        className="section--introduction" id="details">
                        <div
                            className="bg-helper wrapper">
                            <div
                                className="block theme--white">
                                <div
                                    className="field" data-field="#878B91"></div>
                            </div>
                            <div
                                className="block theme--brand">
                                <div
                                    className="field" data-field="#ffffff"></div>
                            </div>
                        </div>
                        <div
                            className="wrapper">
                            <article
                                className="block introduction theme--white" id="read-more-here">
                                <header
                                    className="section-header">
                                    <h2 className="headline en" data-inview="bottom"><img src={imageLineGroup} alt=""/>&nbsp;our services:</h2>
                                    <h2 className="headline vn" data-inview="bottom"><img src={imageLineGroup} alt=""/>&nbsp;our services:</h2>
                                </header>
                                <div
                                    className="content en">
                                    <p
                                        className="lead" data-inview="bottom">Redcode builds reliable backend systems, web & mobile applications that help your company performance higher

    </p>
                                    <h1 data-inview="bottom">We turn great ideas into successful products</h1>
                                    <a
                                        href="#" className="button--more" data-inview="bottom" > <span
                                        className="label">read more</span> </a>
                                </div>
                                <div
                                    className="content vn">
                                    <p
                                        className="lead" data-inview="bottom">R builds reliable backend systems</p>
                                    <h1 data-inview="bottom">We turn great ideas into successful</h1>
                                    <a
                                        href="#" className="button--more" data-inview="bottom"> <span
                                        className="label">read more</span> </a>
                                </div>
                            </article>
                            <article
                                className="block theme--brand group-our-work">
                                <header
                                    className="section-header en">
                                                                
                                    <h2 className="headline" data-inview="bottom"><img src={imageLineGroupW} alt=""/>&nbsp;our developers work in:</h2>
                                </header>
                                <header
                                    className="section-header vn">
                                                                
                                    <h2 className="headline" data-inview="bottom"><img src={imageLineGroupW} alt=""/>&nbsp;nhà phát triển:</h2>
                                </header>
                                <div
                                    className="content">
                                    <ul
                                        className="logotypes layout--2col">
                                        <li
                                            data-inview="bottom">
                                            <svg
                                                version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 46 46">
                                                <path
                                                    fill="#FFFFFF" d="M0,0l0,46l46,0l0-46L0,0z M25,35.9c0,4.5-2.6,6.5-6.4,6.5c-3.5,0-5.5-1.8-6.5-3.9l0,0l0,0l0,0l3.5-2.1 c0.7,1.2,1.3,2.2,2.8,2.2c1.4,0,2.3-0.6,2.3-2.7l0-14.7l4.3,0L25,35.9z M35.2,42.4c-4,0-6.6-1.9-7.9-4.4l0,0l3.5-2 c0.9,1.5,2.1,2.6,4.3,2.6c1.8,0,2.9-0.9,2.9-2.1c0-1.5-1.2-2-3.1-2.9l-1.1-0.5c-3.1-1.3-5.2-3-5.2-6.5c0-3.2,2.5-5.7,6.3-5.7 c2.7,0,4.7,1,6.1,3.5l-3.4,2.2c-0.7-1.3-1.5-1.9-2.8-1.9c-1.3,0-2.1,0.8-2.1,1.9c0,1.3,0.8,1.8,2.7,2.6l1.1,0.5 c3.7,1.6,5.7,3.2,5.7,6.8C42.4,40.2,39.3,42.4,35.2,42.4z"/>
                                            </svg>
                                        </li>
                                        <li data-inview="bottom">
                                            <svg
                                                version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 48.6 49.1">
                                                <g>
                                                    <path id="path1948_3_" opacity="0.5" fill="#FFFFFF" d="M24,0c-2,0-3.9,0.2-5.6,0.5c-5,0.9-5.9,2.7-5.9,6.1V11l11.7,0v1.5l-11.7,0 l-4.4,0c-3.4,0-6.4,2-7.3,5.9c-1.1,4.5-1.1,7.2,0,11.9c0.8,3.5,2.8,5.9,6.2,5.9l4,0l0-5.4c0-3.9,3.3-7.3,7.3-7.3l11.7,0 c3.3,0,5.9-2.7,5.9-6l0-11.2c0-3.2-2.7-5.6-5.9-6.1C28.1,0.1,26,0,24,0z M17.7,3.6c1.2,0,2.2,1,2.2,2.2c0,1.2-1,2.2-2.2,2.2 c-1.2,0-2.2-1-2.2-2.2C15.5,4.6,16.5,3.6,17.7,3.6z"/>
                                                    <path id="path1950_3_" fill="#FFFFFF" d="M37.4,12.5v5.2c0,4-3.4,7.4-7.3,7.4l-11.7,0c-3.2,0-5.9,2.7-5.9,6l0,11.2 c0,3.2,2.8,5,5.9,6c3.7,1.1,7.3,1.3,11.7,0c3-0.9,5.9-2.6,5.9-6v-4.5l-11.7,0v-1.5l11.7,0l5.9,0c3.4,0,4.7-2.4,5.9-5.9 c1.2-3.7,1.2-7.2,0-11.9c-0.8-3.4-2.4-5.9-5.9-5.9L37.4,12.5z M30.8,40.8c1.2,0,2.2,1,2.2,2.2c0,1.2-1,2.2-2.2,2.2 c-1.2,0-2.2-1-2.2-2.2C28.6,41.8,29.6,40.8,30.8,40.8z"/>
                                                </g>
                                            </svg>
                                        </li>
                                        <li data-inview="bottom">
                                            <svg
                                                version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 35.1 55.9">
                                                <g>
                                                    <path
                                                        fill="#FFFFFF" d="M35.1,35.1c0,4,0,7.9,0,11.8c0,0.6,0.1,1.2-0.4,1.6c-0.8,0.6-1.6,1.2-2.5,1.5c-1.7,0.6-3.4,1.2-5.2,1.7 c-1.2,0.3-2.4,0.4-3.6,0.7c-1.4,0.3-2.8,0.6-4.2,0.8c-1.1,0.2-2.2,0.3-3.3,0.5c-1.2,0.2-2.3,0.4-3.5,0.6c-1.3,0.2-2.6,0.3-3.9,0.4 c-1.1,0.2-2.3,0.4-3.4,0.6c-0.8,0.1-1.6,0.2-2.3,0.3C1.9,55.6,1,55.7,0,55.9c0-4.3,0-8.6,0-13.1c1.4-0.2,2.8-0.4,4.2-0.6 c1.3-0.2,2.6-0.4,4-0.6c1.6-0.2,3.3-0.4,4.9-0.6c1-0.1,1.9-0.3,2.9-0.5c0.7-0.1,1.5-0.3,2.2-0.4c1.6-0.3,3.3-0.6,4.9-0.9 c1.8-0.3,3.6-0.6,5.3-1.1c2.1-0.5,4.1-1.2,5.9-2.4C34.6,35.6,34.8,35.4,35.1,35.1z"/>
                                                    <path
                                                        fill="#FFFFFF" d="M35,0c0,0.2,0,0.3,0,0.4c0,4.1,0.1,8.1,0,12.2c0,0.4-0.5,1-1,1.3c-1.2,0.7-2.5,1.3-3.8,1.8 c-1.1,0.4-2.4,0.6-3.6,0.8c-2.3,0.5-4.6,1-6.9,1.4c-1.8,0.3-3.6,0.6-5.4,0.9c-1.8,0.3-3.7,0.5-5.5,0.7C6,19.9,3,20.3,0,20.8 c0-4.1,0-8.3,0-12.5c0-0.6,0.5-0.6,0.8-0.7c1.6-0.3,3.3-0.5,4.9-0.7c2.1-0.3,4.2-0.5,6.4-0.9c2.4-0.4,4.8-0.8,7.2-1.2 c1.7-0.3,3.5-0.5,5.2-0.9c1.1-0.2,2.1-0.6,3.2-0.9c1.3-0.4,2.7-0.7,4-1.1c0.9-0.3,1.8-0.9,2.6-1.3C34.6,0.6,34.7,0.3,35,0z"/>
                                                    <path
                                                        fill="#FFFFFF" d="M0,38.3c0-2.5,0-5,0-7.4c0-1.6,0-3.2,0-4.8c0-0.7,0.4-0.9,0.9-1c1.1-0.2,2.1-0.4,3.2-0.5 c1.3-0.2,2.6-0.3,3.8-0.4c0.8-0.1,1.5-0.2,2.2-0.4c1.1-0.2,2.1-0.3,3.2-0.5c1.8-0.3,3.7-0.5,5.5-0.8c2.6-0.5,5.2-0.9,7.8-1.4 c2.2-0.5,4.4-1.1,6.5-2.1c0.7-0.3,1.2-0.8,1.9-1.3c0,0.2,0,0.5,0,0.7c0,3.7-0.1,7.3,0,11c0,1.3-0.7,1.9-1.6,2.4 c-2.8,1.5-6,2.2-9.1,2.8c-1.9,0.4-3.7,0.8-5.6,1.1c-3.1,0.5-6.1,0.8-9.2,1.2C6.4,37.3,3.2,37.8,0,38.3z"/>
                                                </g>
                                            </svg>
                                        </li>
                                        <li
                                            data-inview="bottom">
                                            <svg
                                                version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 72.9 39.2">
                                                <g>
                                                    <path
                                                        fill="#FFFFFF" d="M47.9,30.6c-0.5,0.5-1.1,0.9-1.8,1.2c-0.5,0.2-1.1,0.4-1.6,0.4c-0.7,0-1.4-0.1-2.1-0.3 c-0.8-0.3-1.4-0.9-1.7-1.7c-0.3-0.8-0.3-1.5-0.2-2.3c0.2-1,0.8-1.7,1.6-2.3c0.8-0.5,1.6-0.8,2.6-0.9c0.9-0.1,1.8-0.2,2.6-0.2 c0.3,0,0.2,0,0.2-0.3c0-0.5,0-1.1-0.1-1.6c-0.2-0.9-0.7-1.3-1.6-1.4c-0.9-0.1-1.9,0-2.8,0.2c-0.5,0.1-1,0.3-1.4,0.4 c-0.1,0-0.2,0-0.2-0.1c-0.1-0.4-0.2-0.8-0.3-1.2c0-0.1,0-0.2,0.1-0.2c0.2-0.1,0.3-0.2,0.5-0.2c1.5-0.5,3-0.8,4.5-0.8 c0.6,0,1.2,0.1,1.8,0.4c1.2,0.5,1.8,1.4,2,2.6c0,0.2,0,0.4,0,0.7c0,2.8,0,5.6,0,8.4c0,0.3,0.1,0.3-0.3,0.3c-0.5,0-0.9,0-1.4,0 c-0.2,0-0.2,0-0.3-0.2C48,31.3,47.9,31,47.9,30.6z M47.6,27.6c0-0.4,0-0.8,0-1.2c0-0.3,0-0.3-0.3-0.3c-0.6,0-1.2,0-1.8,0.1 c-0.5,0-1,0.1-1.5,0.3c-0.6,0.2-0.9,0.7-1.1,1.3c0,0.2-0.1,0.4-0.1,0.7c0,0.8,0.5,1.5,1.3,1.7c0.4,0.1,0.7,0.1,1.1,0 c0.8-0.2,1.5-0.6,2.2-1.1c0.1-0.1,0.1-0.2,0.1-0.2C47.6,28.5,47.6,28,47.6,27.6z"/>
                                                    <path
                                                        fill="#FFFFFF" d="M70.7,30.7c-0.1,0-0.1,0-0.1,0.1c-0.9,0.8-1.9,1.3-3.1,1.4c-0.9,0.1-1.9,0-2.7-0.5 c-0.5-0.3-0.9-0.7-1.1-1.2c-0.4-0.8-0.5-1.6-0.3-2.5c0.2-1.1,0.8-1.8,1.7-2.4c0.8-0.5,1.6-0.8,2.5-0.9c0.9-0.1,1.8-0.2,2.7-0.2 c0.2,0,0.2,0,0.2-0.2c0-0.6,0-1.1-0.2-1.7c-0.2-0.8-0.8-1.2-1.6-1.3c-1-0.1-1.9,0-2.8,0.2c-0.5,0.1-0.9,0.3-1.4,0.4 c-0.2,0.1-0.2,0.1-0.2-0.1c-0.1-0.4-0.2-0.7-0.3-1.1c0-0.2,0-0.2,0.1-0.3c0.5-0.2,1-0.4,1.5-0.5c1.2-0.3,2.3-0.5,3.5-0.4 c0.6,0,1.2,0.1,1.8,0.4c1.2,0.5,1.8,1.5,2,2.8c0,0.2,0,0.3,0,0.5c0,2.8,0,5.6,0,8.4c0,0,0,0.1,0,0.1c0,0.2,0,0.2-0.2,0.2 c-0.5,0-1,0-1.5,0c-0.1,0-0.2,0-0.2-0.2c0-0.3-0.1-0.6-0.2-0.9C70.8,30.8,70.8,30.7,70.7,30.7z M70.5,27.6c0-0.4,0-0.8,0-1.3 c0-0.2,0-0.2-0.2-0.2c-0.6,0-1.3,0-1.9,0.1c-0.4,0-0.8,0.1-1.2,0.3c-0.7,0.3-1.2,0.8-1.3,1.6c0,0.2,0,0.3,0,0.5 c0,0.8,0.6,1.5,1.4,1.7c0.3,0.1,0.7,0.1,1,0c0.8-0.2,1.5-0.6,2.2-1.1c0.1-0.1,0.1-0.2,0.1-0.2C70.5,28.5,70.5,28,70.5,27.6z"/>
                                                    <path
                                                        fill="#FFFFFF" d="M51.5,19.7c0.1,0,0.1,0,0.1,0c0.8,0,1.6,0,2.4,0c0.1,0,0.2,0,0.3,0.2c1,3,1.9,6,2.7,9 c0,0.1,0.1,0.3,0.1,0.4c0.1,0,0.1-0.1,0.1-0.2c0.7-2.1,1.4-4.3,1.9-6.4c0.2-0.9,0.4-1.8,0.4-2.8c0-0.2,0-0.2,0.3-0.2 c0.7,0,1.5,0,2.2,0c0.2,0,0.2,0,0.1,0.2c-0.6,3.2-1.4,6.3-2.6,9.4c-0.3,0.8-0.7,1.7-1.1,2.5c-0.1,0.2-0.2,0.2-0.4,0.2 c-0.9,0-1.7,0-2.6,0c-0.3,0-0.3,0-0.3-0.3c-1.2-3.7-2.3-7.4-3.5-11.1C51.7,20.3,51.6,20,51.5,19.7z"/>
                                                    <path
                                                        fill="#FFFFFF" d="M33.3,34.9c0.3-0.1,0.6-0.3,0.9-0.5c0.8-0.6,1.3-1.5,1.5-2.4c0.2-0.7,0.2-1.4,0.2-2c0-2.7,0-5.4,0-8.1 c0-2.1,0-4.1,0-6.2c0-0.4,0-0.3,0.3-0.3c0.7,0,1.4,0,2.1,0c0.2,0,0.2,0,0.2,0.2c0,0.1,0,0.1,0,0.2c0,4.7,0,9.3,0,14 c0,0.9-0.1,1.8-0.3,2.7c-0.3,1.2-0.9,2.2-1.9,3c-0.5,0.4-1.1,0.7-1.7,0.9c-0.1,0-0.2,0.1-0.3-0.1C34.1,35.8,33.7,35.4,33.3,34.9z"
                                                        />
                                                    <path
                                                        fill="#FFFFFF" d="M14.3,21.2c-0.2-0.2-0.4-0.4-0.6-0.6c-1.1-1.2-2.2-2.3-3.1-3.7c-0.4-0.5-0.7-1-1-1.6 c-0.4-0.7-0.3-1.5,0-2.2c0.2-0.5,0.6-1,1-1.5c0.7-0.8,1.5-1.5,2.3-2.2c1-0.8,2-1.7,3-2.5c0.9-0.7,1.6-1.5,2.1-2.5 c0.7-1.4,1-2.9,0.7-4.4c0,0,0-0.1,0-0.1c0.2,0.1,0.2,0.2,0.3,0.4c0.2,0.4,0.3,0.8,0.4,1.2c0.2,1.5,0.1,2.9-0.6,4.2 C18.4,6.4,18,7,17.5,7.4c-1,0.9-1.9,1.9-2.9,2.8c-0.7,0.7-1.4,1.4-2,2.1c-0.3,0.4-0.6,0.8-0.8,1.3c-0.4,0.8-0.5,1.5-0.2,2.3 c0.2,0.7,0.5,1.3,0.8,2c0.5,1,1.1,1.8,1.7,2.7c0.1,0.1,0.2,0.2,0.3,0.3C14.3,21.1,14.3,21.2,14.3,21.2L14.3,21.2z"/>
                                                    <path
                                                        opacity="0.5" fill="#FFFFFF" d="M26.8,33.6c0.1,0,0.2,0.1,0.3,0.2c0.2,0.3,0.2,0.5,0,0.8c-0.2,0.3-0.5,0.4-0.8,0.6 c-0.9,0.5-1.8,0.8-2.8,1c-1.2,0.3-2.5,0.5-3.8,0.6c-1.5,0.2-3,0.2-4.5,0.3c-1.9,0.1-3.9,0.1-5.8,0c-1.4,0-2.8-0.1-4.2-0.2 c-1.2-0.1-2.4-0.2-3.6-0.5c-0.3-0.1-0.6-0.2-0.9-0.3c-0.1-0.1-0.3-0.1-0.4-0.2c-0.3-0.2-0.4-0.5-0.2-0.8c0.1-0.2,0.3-0.4,0.5-0.5 c0.4-0.3,0.8-0.5,1.3-0.6c1.1-0.4,2.2-0.6,3.4-0.7c0.2,0,0.5,0,0.7,0c0.1,0,0.2,0,0.3,0.1c-0.4,0.1-0.8,0.1-1.1,0.2 c-0.7,0.1-1.3,0.3-1.9,0.6c-0.2,0.1-0.3,0.2-0.5,0.3c-0.3,0.3-0.2,0.5,0.1,0.7c0.4,0.2,0.9,0.3,1.3,0.4c1,0.2,1.9,0.3,2.9,0.4 c1.2,0.1,2.5,0.2,3.7,0.3c1.5,0,3.1,0,4.6-0.1c0.6,0,1.1,0,1.7-0.1c1.5-0.1,2.9-0.2,4.4-0.3c1.3-0.1,2.5-0.3,3.8-0.6 c0.4-0.1,0.8-0.2,1.2-0.4c0.1-0.1,0.3-0.1,0.4-0.2c0.3-0.2,0.3-0.4,0.2-0.7C26.8,33.7,26.8,33.7,26.8,33.6L26.8,33.6z"/>
                                                    <path
                                                        fill="#FFFFFF" d="M23.1,8c0,0.1-0.1,0.1-0.2,0.2C22,8.7,21,9.3,20.2,10c-0.9,0.7-1.7,1.3-2.4,2.2c-0.3,0.3-0.5,0.7-0.7,1.1 c-0.2,0.6-0.2,1.1,0,1.7c0.1,0.3,0.3,0.6,0.5,0.9c0.4,0.6,0.8,1.1,1.1,1.7c0.1,0.3,0.2,0.6,0.3,0.9c0.2,0.6,0.1,1.1-0.2,1.6 c-0.2,0.4-0.5,0.8-0.8,1.2c-0.6,0.6-1.2,1.1-1.9,1.5c0-0.1,0.1-0.1,0.1-0.2c0.3-0.4,0.5-0.8,0.8-1.2c0.3-0.6,0.3-1.3,0-1.9 c-0.2-0.3-0.4-0.6-0.6-0.9c-0.2-0.3-0.5-0.6-0.7-1c-0.5-0.7-0.9-1.5-0.9-2.5c-0.1-0.9,0.2-1.8,0.7-2.6c0.6-0.8,1.3-1.5,2.1-2 c1.3-0.9,2.8-1.6,4.3-2.1C22.2,8.2,22.7,8,23.1,8L23.1,8z"/>
                                                    <path
                                                        opacity="0.5" fill="#FFFFFF" d="M9.1,30.4c0,0-0.1,0.1-0.1,0.1c-0.2,0.3-0.1,0.5,0.2,0.7c0.3,0.2,0.7,0.2,1.1,0.3 c1.8,0.1,3.6,0.1,5.4,0c0.9-0.1,1.8-0.2,2.7-0.4c0.1,0,0.1,0,0.2,0c0.7,0.4,1.3,0.8,2.1,1.1c-0.1,0.1-0.2,0.1-0.3,0.1 c-1.3,0.4-2.7,0.8-4.1,1c-0.5,0.1-1,0.1-1.5,0.1c-1.1,0-2.3,0-3.4-0.1c-0.9-0.1-1.8-0.3-2.6-0.6c-0.3-0.1-0.7-0.3-0.9-0.5 c-0.5-0.4-0.5-0.9,0-1.3C8.2,30.6,8.6,30.4,9.1,30.4L9.1,30.4z"/>
                                                    <path
                                                        opacity="0.5" fill="#FFFFFF" d="M8.2,26.1c0,0.1-0.1,0.2-0.2,0.2c-0.3,0.4-0.3,0.7,0.2,0.9c0.3,0.2,0.6,0.2,0.9,0.3 c0.4,0.1,0.9,0.1,1.3,0.1c1,0,2.1,0,3.1,0c1.1,0,2.2-0.1,3.3-0.2c0.9-0.1,1.8-0.2,2.7-0.4c0.1,0,0.2,0,0.3,0.1 c0.2,0.2,0.4,0.3,0.7,0.5c0.2,0.2,0.5,0.3,0.8,0.4C21.1,28,21.1,28,21,28c-1.2,0.4-2.5,0.7-3.7,0.9c-1.8,0.3-3.5,0.3-5.3,0.2 c-1.1,0-2.1-0.1-3.1-0.3c-0.5-0.1-1.1-0.2-1.6-0.4C7,28.3,6.7,28.2,6.6,28c-0.2-0.2-0.3-0.4-0.2-0.7c0.1-0.3,0.2-0.5,0.5-0.7 C7.2,26.3,7.7,26.2,8.2,26.1z"/>
                                                    <path
                                                        opacity="0.5" fill="#FFFFFF" d="M22.7,23c-0.5,0.3-1,0.6-1.5,0.9C21.1,24,21,24,20.8,24c-1.1,0.2-2.2,0.3-3.3,0.4 c-1.1,0.1-2.2,0.2-3.2,0.3c-0.9,0.1-1.9,0.1-2.8,0.1c-0.7,0-1.4,0-2.1-0.1c-0.8,0-1.5-0.1-2.3-0.1c-1.1-0.1-2.2-0.2-3.2-0.5 c-0.2-0.1-0.4-0.1-0.6-0.3c-0.2-0.2-0.2-0.3,0-0.5C3.5,23.2,3.7,23.1,4,23c0.9-0.4,1.8-0.7,2.8-1c0.9-0.2,1.8-0.4,2.7-0.5 c0.1,0,0.2,0,0.3,0c-0.2,0.1-0.5,0.1-0.7,0.2c-0.8,0.2-1.6,0.5-2.4,0.8c-0.1,0.1-0.3,0.1-0.4,0.2c-0.1,0.1-0.1,0.1-0.2,0.2 c-0.2,0.2-0.1,0.4,0.1,0.5c0.2,0.1,0.4,0.1,0.5,0.2c0.6,0.1,1.1,0.2,1.7,0.2c1.1,0.1,2.2,0.1,3.2,0.1c1.1,0,2.3,0,3.4-0.1 c1-0.1,2-0.2,3-0.3c1.1-0.1,2.2-0.2,3.3-0.4C21.8,23.1,22.3,23,22.7,23C22.7,23,22.7,23,22.7,23z"/>
                                                    <path
                                                        opacity="0.5" fill="#FFFFFF" d="M5.5,38.1c0.3,0,0.5,0,0.8,0.1c1.1,0.1,2.1,0.2,3.2,0.3c1.5,0.1,2.9,0.1,4.4,0.2 c1.4,0,2.9,0,4.3-0.1c2.2-0.1,4.3-0.4,6.5-0.9c1.2-0.3,2.4-0.7,3.4-1.3c0.3-0.2,0.6-0.4,0.8-0.6c0,0,0.1-0.1,0.1-0.1 c0,0.2-0.1,0.3-0.2,0.4c-0.3,0.4-0.6,0.7-1,0.9c-0.9,0.6-2,1-3,1.3c-1.2,0.3-2.4,0.5-3.6,0.6c-2.6,0.3-5.3,0.5-7.9,0.4 c-2.3-0.1-4.6-0.3-6.9-0.9C6.1,38.3,5.8,38.2,5.5,38.1z"/>
                                                    <path
                                                        opacity="0.5" fill="#FFFFFF" d="M23.1,28.8c0.1-0.1,0.2-0.1,0.3-0.2c1-0.6,2-1.3,2.8-2.2c0.4-0.4,0.8-0.9,1-1.5 c0.3-0.5,0.3-1.1,0.2-1.7c-0.2-0.7-0.6-1.2-1.2-1.4c-0.7-0.3-1.4-0.3-2.1-0.1c-0.1,0-0.1,0-0.2,0c0-0.1,0.1-0.1,0.2-0.2 c1-0.5,1.9-0.5,2.9-0.2c0.4,0.2,0.8,0.4,1.1,0.7c0.9,0.9,1.1,2.1,0.5,3.2c-0.4,0.7-0.9,1.3-1.6,1.7C25.9,27.8,24.6,28.4,23.1,28.8 C23.1,28.8,23.1,28.8,23.1,28.8z"/>
                                                    <polygon
                                                        opacity="0.5" fill="#FFFFFF" points="23,28.8 23,28.8 23,28.8 	"/>
                                                    <path
                                                        fill="#FFFFFF" d="M23.1,8C23.1,7.9,23.1,7.9,23.1,8C23.2,8,23.1,7.9,23.1,8C23.1,8,23.1,8,23.1,8z"/>
                                                    <polygon
                                                        fill="#FFFFFF" points="14.4,21.3 14.4,21.3 14.4,21.3 	"/>
                                                    <path
                                                        fill="#FFFFFF" d="M14.4,21.3C14.4,21.3,14.4,21.3,14.4,21.3L14.4,21.3C14.4,21.3,14.4,21.3,14.4,21.3L14.4,21.3z"/>
                                                    <path
                                                        fill="#FFFFFF" d="M14.3,21.2C14.3,21.2,14.3,21.2,14.3,21.2L14.3,21.2C14.3,21.2,14.3,21.2,14.3,21.2 C14.3,21.2,14.3,21.2,14.3,21.2z"/>
                                                    <path
                                                        opacity="0.5" fill="#FFFFFF" d="M9.1,30.4C9.1,30.3,9.1,30.3,9.1,30.4C9.1,30.3,9.1,30.3,9.1,30.4L9.1,30.4z"/>
                                                    <path
                                                        opacity="0.5" fill="#FFFFFF" d="M26.8,33.6C26.8,33.6,26.8,33.6,26.8,33.6C26.8,33.6,26.8,33.6,26.8,33.6L26.8,33.6z"/>
                                                </g>
                                            </svg>
                                        </li>
                                        <li
                                            data-inview="bottom">
                                            <svg
                                                version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 50.8 53.8">
                                                <g>
                                                    <g>
                                                        <path
                                                            fill="#FFFFFF" d="M25.3,0L0,8.9L4,42l21.3,11.7l21.4-11.9l4-33.1L25.3,0z M44.5,40.3L25.2,51l0,0v0l-19-10.5L2.8,10.8 l22.4-8v0l0,0l23,7.8L44.5,40.3z"/>
                                                    </g>
                                                    <path
                                                        fill="#FFFFFF" d="M30.6,26.8l-5.3-11l-4.7,11L30.6,26.8z M32.6,31.4l-14,0l-3.1,7.8l-5.8,0.1L25.2,4.6l16.2,34.8l-5.4,0 L32.6,31.4z M32.6,31.4"/>
                                                    <path
                                                        fill="#FFFFFF" d="M25.2,4.6l0,11.2l5.3,11.1l-5.3,0l0,4.6l7.3,0l3.4,8l5.6,0.1L25.2,4.6z M25.2,4.6"/>
                                                </g>
                                            </svg>
                                        </li>
                                        <li
                                            data-inview="bottom">
                                            <svg
                                                version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 49 48.2">
                                                <g>
                                                    <path
                                                        fill="#FFFFFF" d="M47.5,32c-1.1,3.6-3.1,6.6-5.8,9.2c-3.5,3.4-7.7,5.7-12.5,6.6c-7.3,1.3-14-0.3-20-4.8 c2.1-0.7,2.9-1.5,2.7-2.7c-0.2-1-1.2-1.7-2.2-1.7c-1.2,0.1-1.9,0.9-2.1,2.9c-1.5-1.2-2.6-2.6-3.5-4c-6.3-9.8-5.2-21.9,3-30.1 c5.7-5.7,12.7-7.9,20.7-7c4.5,0.5,8.5,2.3,12.1,5.1c0.5,0.4,0.9,0.8,1.3,1.3c0,0.4,0.2,0.7,0.6,0.7c0.3,0,0.5-0.3,0.5-0.6l0-0.1 c0.3,0,1-1.1,1,0.2l0,0c-0.4,0-0.6,0.2-0.5,0.6l0,0c-0.4,0.1-0.6,0.4-0.6,0.7c-3,3.9-7.1,6.2-11.8,7.4c-2.7,0.7-5.4,0.8-8.1,1 c-5,0.2-9.4,1.6-12.6,5.7c-3,3.9-3.2,9.4-0.5,13.1c1,1.4,2.3,2.2,4.1,1.7c1.2-0.4,2.5-0.5,3.7-0.8c4.4-1.1,8.8-2.1,12.7-4.5 c3.3-2,6.2-4.4,8.8-7.3c0.8-0.1,0.6,0.4,0.6,0.8l0,0c-0.4,0.1-0.6,0.4-0.5,0.8c-2.5,3.9-5.8,7-9.8,9.3c-3.7,2.2-7.9,3-12,4.4 c-0.1,0-0.2,0-0.3,0.2l0,0c-0.6,0-1.1,0.2-1.7,0.5c0.4,0.3,0.7,0.2,1,0.2c2.9-0.4,5.7-0.1,8.6-0.1c2.8,0.1,5.6,0.4,8.4-0.4 c0.8,0.1,1.6-0.1,2.4-0.3c4-0.8,7.5-2.5,9.8-6c1.2-1.9,2-4,2.4-6.3c0.2,0,0.3,0,0.5,0l0,0C48.3,29.1,47.3,30.5,47.5,32z"/>
                                                    <path
                                                        fill="#FFFFFF" d="M48,27.5c-0.2,0-0.3,0-0.5,0c0.1-1.4,0.2-2.8,0.3-4.2c0.1-3.7-0.6-7.4-1.4-11c-0.6-2.3-1.1-4.6-2.1-6.8 c-0.5,0.4-0.5,1-0.9,1.2c0-1.4-0.6-0.2-1-0.2c0.7-1.3,1.4-2.5,2.1-3.9c0.9,1.5,1.2,3.1,1.6,4.6c1.7,5.6,3.2,11.3,2.9,17.3 c-0.1,2.3-0.5,4.5-1.1,6.7c-0.1,0.2-0.3,0.4-0.4,0.7C47.3,30.5,48.3,29.1,48,27.5"/>
                                                    <path
                                                        fill="#FFFFFF" d="M38.5,24.4c0.6-1,1.1-2.1,2.5-3c-0.4,1.6-1,2.8-1.9,3.8C39.2,24.8,39.3,24.2,38.5,24.4z"/>
                                                </g>
                                            </svg>
                                        </li>
                                        <li
                                            data-inview="bottom">
                                            <svg
                                                version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                viewBox="0 0 50.5 36">
                                                <g>
                                                    <path
                                                        fill="#FFFFFF" d="M12.4,32.3c-0.8,0.4-1.5,1-2.2,1.6c-1,0.8-2,1.5-3.2,1.7c-3.2,0.6-6.2-1.5-6.8-4.6c-0.5-2.5,0.5-4.4,2.4-6 c1.7-1.4,3.3-2.8,5-4.1c1.9-1.6,3.8-3.2,5.7-4.8c1.4-1.2,2.8-2.3,4.2-3.5c1.9-1.6,3.9-3.2,5.8-4.8C25,6.4,26.6,5,28.2,3.7 c1.1-0.9,2.1-1.9,3.3-2.6c1.5-0.9,3.1-1.3,4.9-0.8c0.9,0.3,1.7,0.9,2.1,1.8c2.2,4.5,4.4,8.9,6.5,13.3c1.2,2.4,2.4,4.9,3.5,7.3 c-0.3-0.1-0.5-0.4-0.7-0.7c-0.9-0.9-1.9-1.7-3.2-2.2c-3.1-1.3-6.4-1.4-9.7-1c-3.9,0.6-7.6,2.1-11,4c-4.2,2.4-8,5.4-11.4,8.9 C12.6,31.9,12.4,32.1,12.4,32.3z"/>
                                                    <path
                                                        opacity="0.5" fill="#FFFFFF" d="M12.4,32.3c0-0.2,0.2-0.3,0.3-0.5c3.4-3.5,7.2-6.5,11.4-8.9c3.4-2,7-3.5,11-4 c3.3-0.5,6.5-0.3,9.7,1c1.2,0.5,2.2,1.2,3.2,2.2c0.2,0.2,0.4,0.5,0.7,0.7c0.8,1.4,1.5,2.8,1.8,4.5c0.4,2.4,0,4.8-1.3,6.8 c-1.5,2.3-3.8,2.7-6,1c-2.8-2.2-5.8-3.6-9.2-4.3c-3.2-0.7-6.4-0.8-9.7-0.6C20.1,30.3,16.2,31.1,12.4,32.3z"/>
                                                </g>
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                        
                    </section>
                    <section className="section--well theme--dimmed">
                        <div
                            className="wrapper">
                            <header
                                className="section-header en">
                                <h2 className="headline" data-inview="bottom"><img src={imageLineGroup} alt=""/>&nbsp;our process:</h2>
                            </header>
                            <header
                                className="section-header vn">
                                <h2 className="headline" data-inview="bottom"><img src={imageLineGroup} alt=""/>&nbsp;our process:</h2>
                            </header>
                            <article
                                className="well layout--outer-right" data-inview="bottom">
                                <div
                                    className="content theme--brand en">
                                    <h1 className="h2">We assist our partners during each stage of the process.</h1>
                                    <a
                                        href="#" className="button--more"> <span
                                        className="label">see how we do it</span> </a>
                                </div>
                                <div
                                    className="content theme--brand vn">
                                    <h1 className="h2">Compliance with the process is essential to completing projects as required</h1>
                                    <a
                                        href="#" className="button--more"> <span
                                        className="label">see how we do it</span> </a>
                                </div>
                                <figure
                                    className="picture" style={{ backgroundImage: 'url(' + background2 + ')' }}> <img
                                    src={ require('./img/home01.jpg?097560')} alt="" /> </figure>
                            </article>
                        </div>
                    </section>
                    <section
                        className="section--features">
                        <div
                            className="wrapper">
                            <header
                                className="section-header">
                                <h2 className="headline en">our mission:</h2>
                                <h2 className="headline vn">our mission:</h2>
                            </header>
                            <article
                                className="features slider" data-slider data-slides-per-view="4">
                                <figure
                                    className="features-item slide" data-inview="bottom">
                                    <div
                                        className="icon">
                                        <img src={icon1} alt="" />
                                    </div>
                                    <figcaption>delivering high quality code</figcaption>                             
                                </figure>
                                <figure
                                    className="features-item slide" data-inview="bottom">
                                    <div
                                        className="icon">
                                        <img src={icon2} alt="" />
                                    </div>
                                    <figcaption>team cooperation and sharing of knowledge</figcaption>
                                </figure>
                                <figure
                                    className="features-item slide" data-inview="bottom">
                                    <div
                                        className="icon">
                                        <img src={icon3} alt="" />
                                    </div>
                                    <figcaption>respecting client needs</figcaption>
                                </figure>
                                <figure
                                    className="features-item slide" data-inview="bottom">
                                    <div
                                        className="icon">
                                        <img src={icon4} alt="" />
                                    </div>
                                    <figcaption>delivering ergonomic and functional products</figcaption>
                                </figure>
                            </article>
                        </div>
                    </section>
                    <section
                        className="section--spread theme--dimmed">
                        <div
                            className="bg-helper wrapper layout--home">
                            <div
                                className="block theme--dark">
                                <div
                                    className="field" data-field="#878B91"></div>
                            </div>
                        </div>
                        <div
                            className="wrapper">
                            <header
                                className="section-header en">
                                <h2 className="headline" data-inview="bottom"><img src={imageLineGroup} alt=""/>&nbsp;our projects:</h2>
                            </header>
                            <header
                                className="section-header vn">
                                <h2 className="headline" data-inview="bottom"><img src={imageLineGroup} alt=""/>&nbsp;our projects:</h2>
                            </header>
                            <div
                                className="projects-spread layout--home">
                                <article
                                    className="projects-spread-item" style={{ backgroundImage: 'url(' + require('./img/barcode-pda.jpg') + ')' }}>
                                    <a
                                        href="#" data-inview="bottom">
                                        <h3 className="h2 en">Warehouse Management system with Barcode scanning devices</h3>
                                        <p
                                            className="scope en"><span style={{borderBottom: '1px dotted #cd1f23', paddingBottom: '10px'}}>  PDA Application & Web application</span></p>
                                        <h3 className="h2 vn">Warehouse Management system with Barcode scanning devices</h3>
                                        <p
                                            className="scope vn"><span style={{borderBottom: '1px dotted #cd1f23', paddingBottom: '10px'}}>  PDA Application & Web application</span></p>
                                    </a>
                                </article>
                                <article
                                    className="projects-spread-item" style={{ backgroundImage: 'url(' + require('./img/learning-online.jpg') + ')' }}>
                                    <a
                                        href="#" data-inview="bottom">
                                        <h3 className="h2 en">Learning community channel</h3>
                                        <p
                                            className="scope en"><span style={{borderBottom: '1px dotted #cd1f23', paddingBottom: '10px'}}> Web application</span></p>
                                            <h3 className="h2 vn">Learning community channel</h3>
                                        <p
                                            className="scope vn"><span style={{borderBottom: '1px dotted #cd1f23', paddingBottom: '10px'}}> Web application</span></p>
                                    </a>
                                </article>
                                <article
                                    className="projects-spread-item" style={{ backgroundImage: 'url(' + require('./img/cvi.png') + ')' }}>
                                    <a
                                        href="cvi.com.kh" data-inview="bottom">
                                        <h3 className="h2 en">Cambodia-Vietnam Insurance Plc website</h3>
                                        <p
                                            className="scope en"><span style={{borderBottom: '1px dotted #cd1f23', paddingBottom: '10px'}}> Website design</span></p>
                                            <h3 className="h2 vn">Cambodia-Vietnam Insurance Plc website</h3>
                                        <p
                                            className="scope vn"><span style={{borderBottom: '1px dotted #cd1f23', paddingBottom: '10px'}}> Web application</span></p>
                                    </a>
                                </article>
                            </div>
                        </div>
                    </section>
                    <section
                        className="section--features">
                        <div
                            className="wrapper">
                            <header
                                className="section-header en">
                                <h2 className="headline" data-inview="bottom"><img src={imageLineGroup} alt=""/>&nbsp;our customers:</h2>
                            </header>
                            <header
                                className="section-header vn">
                                <h2 className="headline" data-inview="bottom"><img src={imageLineGroup} alt=""/>&nbsp;our customers:</h2>
                            </header>
                            <article>
                                <ul
                                    className="logotypes">
                                    <li
                                        data-inview="bottom"> <img
                                        src={require('./img/bidv.jpg?097560')} alt="" /></li>
                                    <li
                                        data-inview="bottom"> <img
                                        src={require('./img/vnpt.jpg?097560')} alt="edyt" /></li>
                                    <li
                                        data-inview="bottom"> <img
                                        src={require('./img/kiemlam.jpg?097560')} alt="" /></li>
                                    <li
                                        data-inview="bottom"> <img
                                        src={require('./img/cnc.jpg?097560')} alt="" /></li>
                                </ul>
                            </article>
                        </div>
                    </section>
                    <section
                        className="section--testimonials" style={{ backgroundImage: 'url(' + background3 + ')' }}>
                        <div
                            className="bg-helper wrapper">
                            <div
                                className="block theme--dark">
                                <div
                                    className="field" data-field="#878B91"></div>
                            </div>
                        </div>
                        <div
                            className="wrapper">
                            <header
                                className="section-header">
                                <h2 className="headline en"  style={{color: '#fff'}}><img src={imageLineGroup} alt=""/>&nbsp;our customers about us:</h2>
                                <h2 className="headline vn"  style={{color: '#fff'}}><img src={imageLineGroup} alt=""/>&nbsp;our customers about us:</h2>
                            </header>
                            <article
                                className="testimonials slider theme--brand" data-slider>
                                <blockquote
                                    className="testimonial slide" cite="Jan Verbeek, CEO CognitionConcept">
                                    <div
                                        className="testimonial-content en"> 
                                        Our goal has always been to create unique products that help our customers solve problems. We genuinely care about our customers and measure our success on how easily a customer can put togeter a solutions that meets their vision using our products. 
                                        </div>
                                    <div
                                        className="testimonial-content vn"> 
                                        Content Info
                                        </div>

                                <div style={{textAlign: 'right', marginRight: '10px'}} className="en">
                                        <a
                                    href="about.html" className="button--more" style={{margin: '0 auto'}}> <span
                                    className="label">See about us</span> </a>
                                </div>
                                <div style={{textAlign: 'right', marginRight: '10px'}} className="vn">
                                        <a
                                    href="lien-he.html" className="button--more" style={{margin: '0 auto'}}> <span
                                    className="label">Liên hệ</span> </a>
                                </div>
                                </blockquote>
                            
                            </article>
                        </div>
                    </section>
                    <section
                        className="section--cta theme--brand group-looking">
                        <div
                            className="wrapper">
                            <article
                                className="cta" data-inview="bottom" style={{width:'70%',textAlign: 'center'}}>
                                <h2 className="en">We're looking forward to running a project with you! See our offer</h2>
                                <h2 className="vn">We're looking forward to running a project with you! See our offer</h2>
                                <a
                                    href="#" className="button--more" style={{margin: '0 auto'}}> <span
                                    className="label">read more</span> </a> 
                            </article>
                        </div>
                    </section>
                    </div>
        );
    }
}

export default Home;