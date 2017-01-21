import React, { Component } from 'react';
import background1 from './img/team_main.jpg';
import imageLineGroup from './img/line-group.png';

class About extends React.Component {
    componentWillMount() {
        document.title = "About Us | REDCODE"
    }
    render() {
        return (
            <div>
                <section
                    className="section--hero theme--dark" style={{ backgroundImage: 'url(' + background1 + ')' }}>
                    <div
                        className="wrapper">
                        <p
                            className="headline"><img src={imageLineGroup} alt=""/>&nbsp;About us:</p>
                        <h1>Our team</h1>
                        <a
                            href="#details" className="button--more" data-scrollto> <span
                            className="label">read more</span> </a>
                    </div>
                </section>
                <section
                    className="section--founders" id="details">
                    <article
                        className="wrapper">
                        <header
                            className="section-header">
                            <h2 className="headline"><img src={imageLineGroup} alt=""/>&nbsp;founders:</h2>
                        </header>
                        <div
                            className="founders" data-founders>
                            <figure
                                className="founders-item" data-founders-item>
                                <img
                                    src={require('./img/color_MG_0252-kopia2.jpg?097560')} alt="" /> 
                                <figcaption
                                    className="founders-item-description">
                                    <span
                                        className="name">REDCODE VALUES</span> <span
                                        className="subtitle">update...</span> 
                                    <span
                                        className="description">
                                        <div
                                            className="wysiwyg-content">
                                            <p><span
                                                style={{fontWeight: 400}} >update</span></p>
                                           
                                        </div>
                                    </span>
                                </figcaption>
                            </figure>
                            <figure
                                className="founders-item" data-founders-item>
                                <img
                                    src={require('./img/portrait-kasia_korekcjakolorow.png?097560')} alt="" /> 
                                <figcaption
                                    className="founders-item-description">
                                    <span
                                        className="name">VISION</span> <span
                                        className="subtitle">update</span> 
                                    <span
                                        className="description">
                                        <div
                                            className="wysiwyg-content">
                                            <p><span
                                                style={{fontWeight: 400}} >update...</span></p>
                                          
                                        </div>
                                    </span>
                                </figcaption>
                            </figure>
                            <figure
                                className="founders-item" data-founders-item>
                                <img
                                    src={require('./img/portrait-jedrek-IMG_8018a_korekcjakolorow.png?097560')} alt="" /> 
                                <figcaption
                                    className="founders-item-description">
                                    <span
                                        className="name">MISSION</span> <span
                                        className="subtitle">update</span> 
                                    <span
                                        className="description">
                                        <div
                                            className="wysiwyg-content">
                                            <p><span
                                                style={{fontWeight: '400'}} >update</span></p>
                                           
                                        </div>
                                    </span>
                                </figcaption>
                            </figure>
                        </div>
                    </article>
                </section>
                <section
                    className="section--team">
                    <article
                        className="wrapper">
                        <header
                            className="section-header">
                            <p
                                className="headline" data-inview="bottom">meet the team:</p>
                            <h1 data-inview="bottom">Complete team – wide range of competences</h1>
                        </header>
                        <ul
                            className="competencies">
                            <li
                                data-inview="bottom" data-eq-height="competencies">
                                <h3 className="h4">Technical expertise</h3>
                                <div
                                    className="content lead"> Thanks to the many years of experience, we are expert in using programming tools, we also  contribute to their development. Our scientific research is focused on the theoretical aspects of technologies we work with. We are particularly strong in JVM-related languages and technologies.</div>
                            </li>
                            <li
                                data-inview="bottom" data-eq-height="competencies">
                                <h3 className="h4">Quality</h3>
                                <div
                                    className="content lead"> We attach great importance to the quality of our work. In everything we do, we follow the industry's best practices and standards of today.</div>
                            </li>
                            <li
                                data-inview="bottom" data-eq-height="competencies">
                                <h3 className="h4">Academic Background</h3>
                                <div
                                    className="content lead"> Demo team members have PhD and MSc degrees in Computer Science from the best Polish universities. We have participated in international research projects and grants, gathering invaluable experience that allows us to understand complex problems and processes.</div>
                            </li>
                        </ul>
                        <div
                            className="argumenter">
                            <div
                                className="box layout--square theme--gray">
                                <div
                                    className="content" data-inview="bottom">
                                    <h3>Demo consists of 17 specialists</h3>
                                </div>
                            </div>
                            <div
                                className="box layout--square theme--brand">
                                <div
                                    className="content" data-inview="bottom">
                                    <h3>Our team members’ successful work and development is key to us</h3>
                                </div>
                            </div>
                            <div
                                className="box theme--primary size--1-4">
                                <div
                                    className="content" data-inview="bottom">
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
                                            <div> <span
                                            className="value">2</span><span
                                            className="title">people know</span> <span
                                            className="description">Website design</span></div></li>
                                        <li
                                            data-inview="bottom">
                                            <div><span
                                            className="value">2</span> <span
                                            className="title">people know</span> <span
                                            className="description">Graphic design</span></div></li>
                                        <li
                                            data-inview="bottom">
                                            <div><span
                                            className="value">3</span> <span
                                            className="title">people know</span> <span
                                            className="description">Website coding</span></div></li>
                                        <li
                                            data-inview="bottom">
                                            <div><span
                                            className="value">2</span> <span
                                            className="title">people know</span> <span
                                            className="description">Testing</span></div></li>
                                        <li
                                            data-inview="bottom">
                                            <div><span
                                            className="value">2</span> <span
                                            className="title">people know</span> <span
                                            className="description">Android & ios</span></div></li>
                                        <li
                                            data-inview="bottom">
                                            <div><span
                                            className="value">4</span> <span
                                            className="title">people know</span> <span
                                            className="description">Backend codeing</span></div></li>
                                        <li
                                            data-inview="bottom">
                                            <div><span
                                            className="value">3</span> <span
                                            className="title">people know</span> <span
                                            className="description">Data analytics</span></div></li>
                                        <li
                                            data-inview="bottom">
                                            <div><span
                                            className="value">2</span> <span
                                            className="title">people know</span> <span
                                            className="description">Server admin</span></div></li>
                                        <li
                                            data-inview="bottom">
                                            <div><span
                                            className="value">3</span> <span
                                            className="title">people know</span> <span
                                            className="description">Project solution & managerment</span></div></li>
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
                                className="box layout--square theme--gray size--1-4">
                                <div
                                    className="content" data-inview="bottom">
                                    <h3>We have many years of experience</h3>
                                </div>
                            </div>
                            <div
                                className="box layout--square theme--brand">
                                <div
                                    className="content" data-inview="bottom">
                                    <h3>Read about our research work on our work</h3>
                                    <a
                                        href="our-work.html" className="button--more action-href"> <span
                                        className="label">Our work</span> </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="photo-diptych">
                            <figure
                                className="picture" style={{backgroundImage: 'url('+require('./img/about01.jpg')+')'}} data-inview="bottom"> <img
                                src={require('./img/about01.jpg?097560')} alt="" /> </figure>
                            <figure
                                className="picture" style={{backgroundImage: 'url('+require('./img/about02.jpg')+')'}} data-inview="bottom"> <img
                                src={require('./img/about02.jpg?097560')} alt="" /> </figure>
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

export default About;