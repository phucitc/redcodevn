import React, { Component } from 'react';
import icon1 from './img/icon1.svg';
import icon2 from './img/icon2.svg';
import icon3 from './img/icon3.svg';
import icon4 from './img/icon4.svg';
import icon5 from './img/icon5.svg';
//import ImageChartDesktop from './img/ChartDesktop.svg';
//import imageChartDesktop2 from './img/ChartDesktop2.svg';
import imageChartTablet from './img/ChartTablet.svg';
import imageChartTablet2 from './img/ChartTablet2.svg';
//import imageChartMobile from './img/ChartMobile.svg';
//import imageChartMobile2 from './img/ChartMobile2.svg';
import imageGetSupport from './img/GetSupport.svg';
import background1 from './img/services_main.jpg';
import background2 from './img/home01.jpg';
import background3 from './img/home02.jpg';
import backgroundHeader from './img/bg-header.jpg';
import imageLineGroup from './img/line-group.png';

class Service extends React.Component {
    componentWillMount() {
        document.title = "Service | REDCODE"
    }
    render() {
        return (
            <div>
                <section
                    className="section--hero theme--dark" style={{backgroundImage: 'url('+ background1 +')', backgroundPosition: 'bottom center'}} >
                    <div
                        className="wrapper">
                        <p
                            className="headline"><img src={imageLineGroup} alt=""/>&nbsp;Services:</p>
                        <h1>Custom solutions to strictly match your needs</h1>
                        <a
                            href="#details" className="button--more" data-scrollto> <span
                            className="label">read more</span> </a>
                    </div>
                </section>
                <section
                    className="section--cta theme--brand" id="details" style={{background: 'transparent', color: '#363535'}} >
                    <div
                        className="wrapper">
                        <article
                            className="cta" data-inview="bottom" style={{padding: 0}} >
                            <div style={{margin:'15px',background: '#ed1f24 url('+backgroundHeader+') no-repeat', padding:'35px 35px 20px',color:'#fff'}} >
                            <header
                                className="cta-header">
                                <span
                                    className="icon">
                                    <img src={icon5} alt="" />
                                </span>
                                <h2 className="custom-title">You need a helping hand with your project?</h2>
                            </header>
                            <a
                                href="contact.html" className="button--more action-href"> <span
                                className="label label1">get support</span> </a>
                            </div>    
                        </article>
                        <article
                            className="cta" data-inview="bottom" style={{padding: 0}} >
                            <div style={{margin:'15px',background: '#ed1f24 url('+backgroundHeader+') no-repeat',padding:'35px 35px 20px',color:'#fff'}} >
                            <header
                                className="cta-header">
                                <span
                                    className="icon">
                                    <img src={imageGetSupport} alt="" />
                                </span>
                                <h2 className="custom-title">Got an idea of a new application?</h2>
                            </header>
                            <a
                                href="contact.html" className="button--more action-href"> <span
                                className="label label1">we'll make it happen</span> </a> 
                                </div>
                        </article>
                    </div>
                </section>
                <section
                    className="section--services">
                    <article
                        className="wrapper">
                        <div
                            className="section-introduction">
                            <div
                                className="introduction">
                                <p
                                    className="lead" data-inview="bottom">We work in close cooperation with you at each stage of our work. This allows us to build solutions which are maximally suited to your needs and the specific character of the sector.</p>
                                <h1 data-inview="bottom">We develop software to help you boost your business!</h1>
                            </div>
                            <div
                                className="helper-box theme--white">
                                <div
                                    className="content">
                                    <div
                                        className="field" data-field="#878B91"></div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <section
                    className="section has-chart">
                    <article
                        className="wrapper">
                        <header
                            className="section--header" data-inview="bottom">
                            <h2 className="headline--large"><img src={imageLineGroup} alt=""/>&nbsp;what we do:</h2>
                        </header>
                        <figure
                            className="chart--services-a">
                            <div
                                className="chart-desktop" dangerouslySetInnerHTML={{ __html: `<svg
                                    id="Warstwa_1" data-name="Warstwa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1327.86 664.31">
                                    <defs>
                                        <style>
                                            .cls-1, .cls-2 {
                                            fill: none;
                                            stroke: #ed1f24;
                                            stroke-miterlimit: 10;
                                            }
                                            .cls-2 {
                                            stroke-width: 0.75px;
                                            stroke-dasharray: 12;
                                            }
                                            .cls-3-mask {
                                            stroke-width: 5px; stroke: #fff; fill: none; stroke-miterlimit: 10;
                                            }
                                        </style>
                                        <mask
                                            id="chart01-dashed01-mask">
                                            <path
                                                id="chart01-dashed01-mask-path" class="cls-3-mask" d="M4481.52,2085.44C4481.52,2294.5,4312,2464,4103,2464s-378.52-169.47-378.52-378.52c0-157.42-127.61-285-285-285s-285,127.61-285,285" />
                                        </mask>
                                    </defs>
                                    <circle
                                        id="chart01-circle02" class="cls-1" cx="285.52" cy="285.33" r="94.97"/>
                                    <circle
                                        id="chart01-circle01" class="cls-1" cx="95.58" cy="285.33" r="94.97"/>
                                    <circle
                                        id="chart01-circle03" class="cls-1" cx="475.46" cy="285.33" r="94.97"/>
                                    <circle
                                        id="chart01-circle04" class="cls-1" cx="646.09" cy="286.61" r="75.66"/>
                                    <circle
                                        id="chart01-circle05" class="cls-1" cx="797.44" cy="286.61" r="75.66"/>
                                    <circle
                                        id="chart01-circle06" class="cls-1" cx="948.75" cy="286.61" r="75.66"/>
                                    <circle
                                        id="chart01-circle07" class="cls-1" cx="1100.07" cy="286.61" r="75.66"/>
                                    <circle
                                        id="chart01-circle08" class="cls-1" cx="1251.42" cy="286.61" r="75.66"/>
                                    <path
                                        id="chart01-curve" class="cls-2" mask="url(#chart01-dashed01-mask)" d="M4481.52,2085.44C4481.52,2294.5,4312,2464,4103,2464s-378.52-169.47-378.52-378.52c0-157.42-127.61-285-285-285s-285,127.61-285,285" transform="translate(-3154.03 -1800.04)"/>
                                </svg>` }} >
                                
                            </div>
                            <div
                                className="chart-tablet" dangerouslySetInnerHTML={{ __html: imageChartTablet }} >
                                
                            </div>
                            <div
                                className="chart-mobile" dangerouslySetInnerHTML= {{ __html: `<svg
                                    id="1d8f7fad-5dd0-4617-a2a4-f93c38bbcf9d" data-name="Warstwa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 291.84 754.37">
                                    <defs>
                                        <style>
                                            .d7c816c8-72e2-4e2e-87be-a2ef919257eb {
                                            fill: none;
                                            stroke: #ed1f24;
                                            stroke-miterlimit: 10;
                                            }
                                        </style>
                                    </defs>
                                    <title>services-chart-a-mobile</title>
                                    <circle
                                        class="d7c816c8-72e2-4e2e-87be-a2ef919257eb" cx="75.02" cy="411.66" r="72.09"/>
                                    <circle
                                        class="d7c816c8-72e2-4e2e-87be-a2ef919257eb" cx="219.25" cy="411.66" r="72.09"/>
                                    <circle
                                        class="d7c816c8-72e2-4e2e-87be-a2ef919257eb" cx="75.02" cy="556.79" r="72.09"/>
                                    <circle
                                        class="d7c816c8-72e2-4e2e-87be-a2ef919257eb" cx="219.2" cy="556.79" r="72.09"/>
                                    <circle
                                        class="d7c816c8-72e2-4e2e-87be-a2ef919257eb" cx="147.52" cy="681.77" r="72.09"/>
                                    <circle
                                        class="d7c816c8-72e2-4e2e-87be-a2ef919257eb" cx="72.5" cy="196.84" r="72"/>
                                    <circle
                                        class="d7c816c8-72e2-4e2e-87be-a2ef919257eb" cx="145.67" cy="72.5" r="72"/>
                                    <circle
                                        class="d7c816c8-72e2-4e2e-87be-a2ef919257eb" cx="218.84" cy="196.84" r="72"/>
                                </svg>` }} >
                                
                            </div>
                            <h3 className="h6 chart-label--01" id="chart01-label01">our services</h3>
                            <ul
                                className="chart-list--01" id="chart01-list01">
                                <li> <span
                                    className="title">web application</span> <span
                                    className="description">We create  bespoke web applications for your business which are 100% compliant with your requirements. Most of our frontend development is based on technologies like AngularJS, ExtJS and Bootstrap which integrate with backend systems using REST APIs.</span></li>
                                <li> <span
                                    className="title">Mobile application</span> <span
                                    className="description">Demo engineers have over 5 years of experience in developing complex and reliable backend systems for various businesses. Security and scalability are among our top priorities. Our experience and in-depth theoretical knowledge allow us to understand and solve complex algorithmic problems. In our projects, we use a wide range of technologies like Java (Spring Framework, Java EE), Scala or Python, always choosing the most appropriate tool for the job.</span></li>
                                <li> <span
                                    className="title">Backend systems</span> <span
                                    className="description">Our engineers have many years of experience in developing complex and reliable backend systems for various businesses. Security and scalability are among our top priorities. Our experience and in-depth theoretical knowledge allow us to understand and solve complex algorithmic problems. In our projects, we use a wide range of technologies like .Net, Node JS, React... always choosing the most appropriate tool for the job.</span></li>
                            </ul>
                            <h3 className="h6 chart-label--02" id="chart01-label02">areas of expertise</h3>
                            <ul
                                className="chart-list--02" id="chart01-list02">
                                <li> <span
                                    className="title">Internet marketing</span></li>
                                <li> <span
                                    className="title">Real-time data monitoring</span></li>
                                <li> <span
                                    className="title">Multi-platform software</span></li>
                                <li> <span
                                    className="title">Enterprise application integration</span></li>
                                <li> <span
                                    className="title">Solutions for startups</span></li>
                            </ul>
                        </figure>
                        <div
                            className="tiles">
                            <div
                                className="helper-box theme--white">
                                <div
                                    className="content">
                                    <div
                                        className="field" data-field="#878B91"></div>
                                </div>
                            </div>
                            <figure
                                className="picture" style={{backgroundImage: 'url('+ require('./img/services02.jpg')+')'}} data-inview="bottom"> <img
                                src={require('./img/services02.jpg?097560')} alt="" /> </figure>
                            <figure
                                className="picture" style={{backgroundImage: 'url('+ require('./img/services01.jpg')+')'}} data-inview="bottom"> <img
                                src={require('./img/services01.jpg?097560')} alt="" /> </figure>
                            <div
                                className="text-box lead" data-inview="bottom"> Thanks to the many years of work on software projects in various areas, we have built up invaluable technical competences, which we use and develop further in the course of working on new assignments.</div>
                        </div>
                    </article>
                </section>
                <section
                    className="section has-chart">
                    <article
                        className="wrapper">
                        <header
                            className="section--header" data-inview="bottom">
                            <h2 className="headline--large"><img src={imageLineGroup} alt=""/>&nbsp;our technologies:</h2>
                        </header>
                        <figure
                            className="chart--services-b">
                            <div
                                className="chart-desktop" dangerouslySetInnerHTML={{ __html: `<svg
                                    id="Warstwa_1" data-name="Warstwa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1329.04 332.92">
                                    <defs>
                                        <style>
                                            .cls-1 {
                                            fill: none;
                                            stroke: #ed1f24;
                                            stroke-miterlimit: 10;
                                            }
                                        </style>
                                    </defs>
                                    <title>services-chart-b-desktop</title>
                                    <path
                                        id="chart-02-line" class="cls-1" d="M3154.12,3707.61a166,166,0,0,0,331.92,0c0-91.66,74.49-166,166.15-166a166,166,0,0,1,166,166c0,91.66,74.49,166,166.15,166a166,166,0,0,0,166-166,166,166,0,0,1,331.92,0" transform="translate(-3153.62 -3541.15)"/>
                                </svg>` }} >
                                
                            </div>
                            <div
                                className="chart-tablet">
                                <img src={imageChartTablet2} />
                            </div>
                            <div
                                className="chart-mobile" dangerouslySetInnerHTML={{ __html: `<svg
                                    id="35a156a5-3329-457b-9867-771d2afb08b0" data-name="Warstwa 1" xmlns="http://www.w3.org/2000/svg" width="215.16" height="857.89" viewBox="0 0 215.16 857.89">
                                    <defs>
                                        <style>
                                            .afa51777-d5e0-469c-b339-4bc2bbbdd286 {
                                            fill: none;
                                            stroke: #ed1f24;
                                            stroke-miterlimit: 10;
                                            }
                                        </style>
                                    </defs>
                                    <title>services-chart-b-mobile</title>
                                    <path
                                        class="afa51777-d5e0-469c-b339-4bc2bbbdd286" d="M2123.35,74.55a107.08,107.08,0,0,1,0,214.16,107.14,107.14,0,0,0,0,214.28,107.14,107.14,0,0,1,0,214.28,107.08,107.08,0,0,0,0,214.16" transform="translate(-2015.77 -74.05)"/>
                                </svg>` }} >
                                
                            </div>
                            <div
                                className="chart-content">
                                <div
                                    className="chart-content-part">
                                    <h3 className="h6 chart-label">languages</h3>
                                    <div
                                        className="chart-description"> Java<br
                                        /> Ajax<br
                                        /> Javascript<br
                                        /> Typescript<br
                                        /> Jquery <br
                                        /> .Net MVC
                                        </div>
                                </div>
                                <div
                                    className="chart-content-part">
                                    <h3 className="h6 chart-label">databases</h3>
                                    <div
                                        className="chart-description"> SQL Databases<br
                                        /> (MySQL, Oracle, SQL Server, PostrgreSQL)<br
                                        /> </div>
                                </div>
                                <div
                                    className="chart-content-part">
                                    <h3 className="h6 chart-label">frameworks</h3>
                                    <div
                                        className="chart-description"> Spring<br
                                        /> AngularJS 1&2<br
                                        /> Akka</div>
                                </div>
                                <div
                                    className="chart-content-part">
                                    <h3 className="h6 chart-label">deployment</h3>
                                    <div
                                        className="chart-description"> Jenkins<br
                                        /> Sonar<br
                                        /> Docker</div>
                                </div>
                            </div>
                        </figure>
                    </article>
                </section>
                <section
                    className="section--cta theme--brand">
                    <div
                        className="wrapper">
                        <article
                            className="cta" data-inview="bottom" style={{width:'70%',textAlign: 'center'}} >
                            <h2>See how we work</h2>
                            <a
                                href="process.html" className="button--more action-href" style={{margin: '0 auto'}} > <span
                                className="label">our process</span> </a> 
                        </article>
                    </div>
                </section>   
            </div>
        );
    }
}

export default Service;