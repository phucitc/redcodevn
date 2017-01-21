import React, { Component } from 'react';

class OurWork extends React.Component {
    componentWillMount() {
        document.title = "Our work | REDCODE"
    }
    render() {
        return (
            <div>
                <section
                    className="section--hero theme--dark" style={{backgroundImage: 'url('+require('./img/works_main.jpg')+')'}} >
                    <div
                        className="wrapper" style={{color: '#383838'}} >
                        <p
                            className="headline">Our work:</p>
                        <h1 style={{color: '#e42024'}} >Look at some projects we delivered</h1>
                        <a
                            href="#details" className="button--more button--more1" data-scrollto> <span
                            className="label label1">read more</span> </a>
                    </div>
                </section>
                <section
                    className="section--spread theme--white" id="details">
                    <div
                        className="bg-helper wrapper layout--works">
                        <div
                            className="block">
                            <div
                                className="content">
                                <div
                                    className="field" data-field="#878B91"></div>
                            </div>
                        </div>
                        <div
                            className="block">
                            <div
                                className="content">
                                <div
                                    className="field" data-field="#878B91"></div>
                            </div>
                        </div>
                        <div
                            className="block">
                            <div
                                className="content">
                                <div
                                    className="field" data-field="#878B91"></div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="wrapper">
                        <div
                            className="projects-spread layout--works">
                            <article
                                className="projects-spread-item" style={{backgroundImage: 'url('+require('./img/barcode-pda.jpg')+')'}} >
                                <a
                                    href="#" data-inview="bottom">
                                    <h3 className="h2">Warehouse Management system with Barcode scanning devices</h3>
                                    <p
                                        className="scope"> PDA Application & Web application</p>
                                </a>
                            </article>
                            <article
                                className="projects-spread-item" style={{backgroundImage: 'url('+require('./img/learning-online.jpg')+')'}}>
                                <a
                                    href="#" data-inview="bottom">
                                    <h3 className="h2">Learning community channel</h3>
                                    <p
                                        className="scope"> Web application</p>
                                </a>
                            </article>
                            <article
                                className="projects-spread-item" style={{backgroundImage: 'url('+require('./img/cvi.png')+')'}}>
                                <a
                                    href="#" data-inview="bottom">
                                    <h3 className="h2">Cambodia-Vietnam Insurance Plc website</h3>
                                    <p
                                        className="scope"> Website design</p>
                                </a>
                            </article>
                        </div>
                    </div>
                </section>
                <section
                    className="section--cta theme--brand">
                    <div
                        className="wrapper">
                        <article
                            className="cta" data-inview="bottom" style={{width:'70%',textAlign: 'center'}} >
                            <h2>Leave IT to us!</h2>
                            <a
                                href="contact.html" className="button--more action-href" style={{margin: '0 auto'}} > <span
                                className="label">contact us</span> </a> 
                        </article>
                    </div>
                </section>
            </div>
        );
    }
}

export default OurWork;