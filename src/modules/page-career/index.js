import React, { Component } from 'react';
import background1 from './img/careers_main.jpg';
import imageLineGroup from './img/line-group.png';

class Career extends React.Component {
    componentWillMount() {
        document.title = "Careers | REDCODE"
    }
    render() {
        return (
            <div>
                <section
                    className="section--hero theme--dark" style={{ backgroundImage: 'url(' + background1 + ')' }}>
                    <div
                        className="wrapper">
                        <p
                            className="headline">Careers:</p>
                        <h1>Join us</h1>
                        <a
                            href="#details" className="button--more" data-scrollto> <span
                            className="label">read more</span> </a>
                    </div>
                </section>
                <section
                    className="section--careers" id="details">
                    <article
                        className="wrapper">
                        <header
                            className="section-header">
                            <h2 className="headline" data-inview="bottom">careers:</h2>
                        </header>
                        <div
                            className="section-introduction">
                            <div
                                className="introduction">
                                <p
                                    className="lead" data-inview="bottom">Demo employs talented and aspiring specialists who aim to create world-className products.</p>
                                <h1 data-inview="bottom">Pride yourself on doing a&nbsp;great job</h1>
                            </div>
                            <aside
                                className="cta theme--brand" style={{backgroundImage: 'url('+require('./img/05_Careers.jpg')+')',backgroundRepeat: 'no-repeat',background: 'cover'}} >
                                <h3>Great news!<br
                                    /> We're hiring!</h3>
                                <a
                                    href="#open-positions" className="button--more" data-scrollto> <span
                                    className="label">open positions</span> </a> 
                            </aside>
                        </div>
                        <ul
                            className="competencies">
                            <li
                                data-inview="bottom" data-eq-height="competencies">
                                <h3 className="h4" data-inview="bottom">Work on fascinating projects</h3>
                                <div
                                    className="content lead" data-inview="bottom"> Currently, we work with customers from Vietnam and the Asean area. We commit ourselves to projects that usually constitute a challenge for the team.<br
                                    /></div>
                            </li>
                            <li
                                data-inview="bottom" data-eq-height="competencies">
                                <h3 className="h4" data-inview="bottom">Boost your skills</h3>
                                <div
                                    className="content lead" data-inview="bottom"> We see learning as a lifetime process. The techworld changes so rapidly, it’s essential to be up to date with the newest and latest. <br
                                    /> <br
                                    /> We share our experience and encourage you to expand your skills and knowledge.</div>
                            </li>
                            <li
                                data-inview="bottom" data-eq-height="competencies">
                                <h3 className="h4" data-inview="bottom">Enjoy a great work environment</h3>
                                <div
                                    className="content lead" data-inview="bottom"> At Demo, we’ve created a friendly atmosphere, where everyone feels appreciated and belongs in the organization. <br
                                    /> <br
                                    /> We value transparent and open forms of communication. We know how important it is to listen to every person's ideas.</div>
                            </li>
                        </ul>
                        <div
                            className="photo-diptych layout--symmetric">
                            <figure
                                className="picture" style={{backgroundImage: 'url('+require('./img/careers_01.jpg')+')'}} data-inview="bottom"> <img
                                src={require('./img/careers_01.jpg?097560')} alt="" /> </figure>
                            <figure
                                className="picture" style={{backgroundImage: 'url('+require('./img/careers_02.jpg')+')'}} data-inview="bottom"> <img
                                src={require('./img/careers_02.jpg?097560')} alt="" /> </figure>
                        </div>
                        <div
                            className="section-cta-block">
                            <div
                                className="helper-box theme--white">
                                <div
                                    className="content" data-inview="bottom">
                                    <div
                                        className="field" data-field="#878B91"></div>
                                </div>
                            </div>
                            <aside
                                className="cta theme--brand">
                                <h3 data-inview="bottom">Think you are a good  fit for our team? Let us know</h3>
                                <a
                                    href="mailto:jobs@Demo.pl" className="button--more" data-inview="bottom"> <span
                                    className="label">jobs@redcode.vn</span> </a> 
                            </aside>
                        </div>
                        <div
                            className="argumenter">
                            <div
                                className="box theme--primary size--1-4" style={{background: 'url('+require('./img/05_Careers1.jpg')+') no-repeat cover'}} >
                                <div
                                    className="content" data-inview="bottom" >
                                    <h3>Work conditions & perks</h3>
                                </div>
                            </div>
                            <div
                                className="box theme--white size--3-4">
                                <div
                                    className="content">
                                    <ul
                                        className="enumeration">
                                        <li
                                            data-inview="bottom">
                                            <span
                                                className="icon" dangerouslySetInnerHTML={{__html:`<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> 
                                                <svg
                                                    version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 70.1 63.4" enable-background="new 0 0 70.1 63.4" xml:space="preserve">
                                                    <g>
                                                        <path
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M19.2,45.9
                                                            c-5.4-4.8-8.4-11.3-8.4-18.7c0-5.4,1.8-10.4,4.8-14.7"/>
                                                        <path
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M44.6,53.6
                                                            c-1.7,0.3-2.6,0.3-4.4,0.3c-1.4,0-2.7-0.1-4.1-0.3"/>
                                                        <path
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M22.9,5.6
                                                            c2.3-1.7,5.6-3.1,8.4-3.9c2.8-0.8,5.8-1.2,8.9-1.2c2.7,0,5.4,0.3,7.9,1C60.5,4.6,69.6,15,69.6,27.2c0,6.3-3.6,13.3-7.6,17.9"/>
                                                        <polyline
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="36,53.9
                                                            38,62.9 32.3,62.9 19.2,45.9 	"/>
                                                        <polyline
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="44.5,53.9
                                                            42.6,62.9 48.1,62.9 62,45.1 	"/>
                                                        <path
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M11.4,22H2.6
                                                            c-1.2,0-2.1,1-2.1,2.1v8.1c0,1.2,1,2.1,2.1,2.1h9.1"/>
                                                        <path
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M31.8,9.3
                                                            c2.8-0.8,5.8-1.2,8.9-1.2c2.7,0,5.4,0.3,7.9,1"/>
                                                        <path
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M15.8,12.4L8.1,3.1
                                                            c0,0,8.9-3.5,14.8,2.5"/>
                                                        <circle
                                                            fill="#EB5E2B" cx="22.4" cy="22.5" r="2.7"/>
                                                    </g>
                                                </svg>`}} >
                                                
                                            </span>
                                            <span
                                                className="description">great salary</span>
                                        </li>
                                        <li
                                            data-inview="bottom">
                                            <span
                                                className="icon" dangerouslySetInnerHTML={{__html:`<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> 
                                                <svg
                                                    version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 58.4 58.4" enable-background="new 0 0 58.4 58.4" xml:space="preserve">
                                                    <g>
                                                        <circle
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="29.2" cy="29.2" r="28.7"/>
                                                        <circle
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="29.2" cy="29.2" r="22.7"/>
                                                        <path
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M29.2,14
                                                            c0,0,0,13.3,0,12.9"/>
                                                        <line
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="29.2" y1="30.5" x2="41.2" y2="30.5"/>
                                                    </g>
                                                </svg>`}} >
                                                
                                            </span>
                                            <span
                                                className="description">flexible hours</span>
                                        </li>
                                        <li
                                            data-inview="bottom">
                                            <span
                                                className="icon" dangerouslySetInnerHTML={{__html:`<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> 
                                                <svg
                                                    version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 63.5 60.2" enable-background="new 0 0 63.5 60.2" xml:space="preserve">
                                                    <g>
                                                        <g>
                                                            <circle
                                                                fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="31.6" cy="40.1" r="19.6"/>
                                                        </g>
                                                        <polyline
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="15.2,29.4
                                                            0.5,14.5 0.5,0.5 21.8,22.7 	"/>
                                                        <polyline
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="0.5,0.5
                                                            14.4,0.5 32.8,20.5 	"/>
                                                        <polyline
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="48.1,29.6
                                                            63,14.5 63,0.5 41.6,22.7 	"/>
                                                        <polyline
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="63,0.5
                                                            49,0.5 31.8,19.3 	"/>
                                                        <polygon
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="28.3,28.3
                                                            35.9,28.3 35.9,51.8 28.3,51.8 28.3,35 22.6,35 	"/>
                                                    </g>
                                                </svg>`}} >
                                                
                                            </span>
                                            <span
                                                className="description">personal development</span>
                                        </li>
                                        <li
                                            data-inview="bottom">
                                            <span
                                                className="icon" dangerouslySetInnerHTML={{__html:`<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> 
                                                <svg
                                                    version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 71.5 61.5" enable-background="new 0 0 71.5 61.5" xml:space="preserve">
                                                    <g>
                                                        <rect
                                                            x="0.5" y="0.5" fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="70.5" height="47"/>
                                                        <rect
                                                            x="5.3" y="5" fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="60.8" height="38"/>
                                                        <rect
                                                            x="23.5" y="55.6" fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="24.9" height="5.4"/>
                                                        <rect
                                                            x="29.1" y="47.5" fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="13.8" height="8.2"/>
                                                    </g>
                                                </svg>`}} >
                                                
                                            </span>
                                            <span
                                                className="description">best equipment</span>
                                        </li>
                                        <li
                                            data-inview="bottom">
                                            <span
                                                className="icon" dangerouslySetInnerHTML={{__html:`<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> 
                                                <svg
                                                    version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 46.1 71.8" enable-background="new 0 0 46.1 71.8" xml:space="preserve">
                                                    <g>
                                                        <polyline
                                                            fill="none" stroke="#EB5E2B" stroke-miterlimit="10" points="10.6,42.8 5.2,71.3 7.9,71.3 16.2,42.8 	"/>
                                                        <polyline
                                                            fill="none" stroke="#EB5E2B" stroke-miterlimit="10" points="35.5,42.8 40.9,71.3 38.2,71.3 29.9,42.8 	"/>
                                                        <path
                                                            fill="none" stroke="#EB5E2B" stroke-miterlimit="10" d="M31.8,42.9c4.3,0,12.6,0.1,13.7-7.2c0.7-4.8-1.4-5.4-5.6-9.4
                                                            s-2.1-16.2-5.6-22.2c-1.8-3.2-6.8-3.6-11.2-3.6S13.8,1,11.8,4.1c-3.3,5.2-1.5,18.3-5.6,22.2s-6.3,4.6-5.6,9.4
                                                            c1.1,7.4,9.4,7.2,13.7,7.2S27.5,42.9,31.8,42.9z"/>
                                                        <path
                                                            fill="none" stroke="#EB5E2B" stroke-miterlimit="10" d="M42.3,33.5c-3.7,1.1-2.3,3.1-7.1,5.2c-3.1,1.3-8.1,1.1-12.1,1.1
                                                            S14,40,10.9,38.7c-4.9-2.1-3.4-4.1-7.1-5.2"/>
                                                        <line
                                                            fill="none" stroke="#EB5E2B" stroke-miterlimit="10" x1="14.8" y1="47.6" x2="35.2" y2="60.8"/>
                                                        <line
                                                            fill="none" stroke="#EB5E2B" stroke-miterlimit="10" x1="31.1" y1="47.6" x2="10.7" y2="60.8"/>
                                                    </g>
                                                </svg>`}} >
                                                
                                            </span>
                                            <span
                                                className="description">cool office space</span>
                                        </li>
                                        <li
                                            data-inview="bottom">
                                            <span
                                                className="icon" dangerouslySetInnerHTML={{__html:`<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> 
                                                <svg
                                                    version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 58.4 58.4" enable-background="new 0 0 58.4 58.4" xml:space="preserve">
                                                    <g>
                                                        <g>
                                                            <circle
                                                                fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="29.2" cy="29.2" r="28.7"/>
                                                        </g>
                                                        <g>
                                                            <path
                                                                fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M36.2,35.5v2.8
                                                                c0,3.9-3.1,7-7,7s-7-3.1-7-7v-2.8"/>
                                                        </g>
                                                        <circle
                                                            fill="#EB5E2B" cx="19.5" cy="21.3" r="2.7"/>
                                                        <circle
                                                            fill="#EB5E2B" cx="38.9" cy="21.3" r="2.7"/>
                                                    </g>
                                                </svg>`}} >
                                                
                                            </span>
                                            <span
                                                className="description">great atmosphere</span>
                                        </li>
                                        <li
                                            data-inview="bottom">
                                            <span
                                                className="icon" dangerouslySetInnerHTML={{__html:`<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> 
                                                <svg
                                                    version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 70.9 44.9" enable-background="new 0 0 70.9 44.9" xml:space="preserve">
                                                    <g>
                                                        <path
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M25.2,3.5
                                                            c0,0,13.7,3,23.9,3c10,0.1,16-3,16-3l-5.6,40.9H38.2l-5.1-27.9L25.2,3.5z"/>
                                                        <path
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M25.2,3.5
                                                            c0,0,13.7-3,23.9-3c10-0.1,16,3,16,3"/>
                                                        <polyline
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="64.2,10.9
                                                            70.4,10.9 67.3,29.6 61.6,29.6 	"/>
                                                        <path
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M27.2,32.3
                                                            c0,4.5-2.3,8.6-5.7,11c-2.2,1.5-4.8,0.4-7.6,0.4c-3.1,0-5.9,0.9-8.2-0.9c-3.1-2.4-5.1-6.2-5.1-10.5c0-4.1,1-9.2,4.7-10.1
                                                            c3.1-0.8,5.4,0.6,8.7,0.6c3.5,0,5.7-1.4,9-0.3C26.2,23.5,27.2,28.4,27.2,32.3z"/>
                                                        <path
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M13.8,20.5
                                                            c0,0,0.8-5.7-5.7-5.7"/>
                                                    </g>
                                                </svg>`}} >
                                                
                                            </span>
                                            <span
                                                className="description">snacks in the kitchen</span>
                                        </li>
                                        <li
                                            data-inview="bottom">
                                            <span
                                                className="icon" dangerouslySetInnerHTML={{__html:`<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> 
                                                <svg
                                                    version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 65.2 51.5" enable-background="new 0 0 65.2 51.5" xml:space="preserve">
                                                    <g>
                                                        <rect
                                                            x="0.5" y="0.6" fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="11.6" height="50"/>
                                                        <rect
                                                            x="16.1" y="1.8" fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="5.8" height="48.7"/>
                                                        <rect
                                                            x="38.5" y="3.5" fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="9.3" height="47.1"/>
                                                        <rect
                                                            x="52" y="7.3" transform="matrix(0.9863 -0.165 0.165 0.9863 -4.0016 9.7352)" fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="9.3" height="43.2"/>
                                                        <rect
                                                            x="26.9" y="0.6" transform="matrix(0.9979 -6.530745e-02 6.530745e-02 0.9979 -1.6091 2.0037)" fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="5.8" height="50"/>
                                                    </g>
                                                </svg>`}} >
                                                
                                            </span>
                                            <span
                                                className="description">internal library</span>
                                        </li>
                                        <li
                                            data-inview="bottom">
                                            <span
                                                className="icon" dangerouslySetInnerHTML={{__html:`<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> 
                                                <svg
                                                    version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 62.6 58.1" enable-background="new 0 0 62.6 58.1" xml:space="preserve">
                                                    <g>
                                                        <g>
                                                            <path
                                                                fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M26.1,51.3
                                                                c-2.5,3.8-6.8,6.3-11.7,6.3c-7.7,0-13.9-6.2-13.9-13.9c0-3.6,1.4-6.9,3.6-9.4"/>
                                                        </g>
                                                        <g>
                                                            <path
                                                                fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M58.6,34.5
                                                                c2.2,2.5,3.5,5.7,3.5,9.2c0,7.7-6.2,13.9-13.9,13.9c-4.9,0-9.2-2.5-11.7-6.3"/>
                                                        </g>
                                                        <line
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="26.1" y1="51.3" x2="36.5" y2="51.3"/>
                                                        <path
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M58.6,34.5l-7.1-6.8
                                                            c-1.1-1.2-2.7-1.4-4-1.4l-32.3,0c-1.3,0-3.1,0.3-3.9,1.4l-7.1,6.7"/>
                                                        <path
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M31.3,26.2l0-18.7
                                                            c0,0-0.4-7,7-7s7,7,7,7s-0.4,8,8,8s8.1-8.1,8.1-8.1"/>
                                                        <circle
                                                            fill="#EB5E2B" cx="42" cy="47" r="3.6"/>
                                                        <circle
                                                            fill="#EB5E2B" cx="20.5" cy="47.7" r="3.6"/>
                                                        <circle
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="14.2" cy="33.5" r="2"/>
                                                        <circle
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="14.2" cy="42.2" r="2"/>
                                                        <circle
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="18.6" cy="37.9" r="2"/>
                                                        <circle
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="9.8" cy="37.9" r="2"/>
                                                        <circle
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="49.3" cy="33.5" r="2"/>
                                                        <circle
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="49.3" cy="42.2" r="2"/>
                                                        <circle
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="53.7" cy="37.9" r="2"/>
                                                        <circle
                                                            fill="none" stroke="#EB5E2B" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="44.9" cy="37.9" r="2"/>
                                                    </g>
                                                </svg>`}} >
                                                
                                            </span>
                                            <span
                                                className="description">after hours retreats</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="box layout--square layout--outer-left theme--white size--1-4">
                                <div
                                    className="content" data-inview="bottom">
                                    <div
                                        className="field" data-field="#878B91"></div>
                                </div>
                            </div>
                            <div
                                className="box theme--dimmed size--3-4 layout--void">
                                <div
                                    className="content">
                                    <div
                                        className="argumenter" id="open-positions">
                                        <div
                                            className="box theme--brand size--1-3 layout--square" style={{background: 'url('+require('./img/05_Careers2.jpg')+') no-repeat cover'}} >
                                            <div
                                                className="content" data-inview="bottom">
                                                <h3>Open<br
                                                    /> positions</h3>
                                            </div>
                                        </div>
                                        <div
                                            className="box size--1-3 layout--square">
                                            <div
                                                className="content" data-inview="bottom">
                                                <h5 className="lead">Node JS & React Developer</h5>
                                                <div
                                                    className="details">
                                                    <dl>
                                                        <dt>city:</dt>
                                                        <dd>Ho Chi Minh</dd>
                                                        <dt>region:</dt>
                                                        <dd>Ho Chi Minh</dd>
                                                    </dl>
                                                    <a
                                                        href="#" className="button--block"> <span
                                                        className="label">details</span> </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="box size--1-3 layout--square">
                                            <div
                                                className="content" data-inview="bottom">
                                                <h5 className="lead">JavaScript Developer</h5>
                                                <div
                                                    className="details">
                                                    <dl>
                                                        <dt>city:</dt>
                                                        <dd>Ho Chi Minh</dd>
                                                        <dt>region:</dt>
                                                        <dd>Ho Chi Minh</dd>
                                                    </dl>
                                                    <a
                                                        href="#" className="button--block"> <span
                                                        className="label">details</span> </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <section
                    className="section--cta theme--brand">
                    <div
                        className="wrapper">
                        <article
                            className="cta" data-inview="bottom" style={{width:'70%',textAlign: 'center'}} >
                            <h2>Check what we offer</h2>
                            <a
                                href="service.html" className="button--more action-href" style={{margin: '0 auto'}} > <span
                                className="label">what we do</span> </a> 
                        </article>
                    </div>
                </section>
            </div>
        );
    }
}

export default Career;