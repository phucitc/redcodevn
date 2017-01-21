import React, { Component } from 'react';
import background1 from './img/services_main.jpg';
import imageLineGroup from './img/line-group.png';

class Process extends React.Component {
    componentWillMount() {
        document.title = "Process | REDCODE"
    }
    render() {
        return (
            <div>
                <section
                    className="section--hero theme--dark" style={{backgroundImage: 'url('+ background1 +')', backgroundPosition: 'bottom center'}}>
                    <div
                        className="wrapper">
                        <h1>Agile approach</h1>
                        <a
                            href="#details" className="button--more" data-scrollto> <span
                            className="label">read more</span> </a>
                    </div>
                </section>
                <section
                    className="section theme--brand" id="details">
                    <article
                        className="wrapper">
                        <header
                            className="section--header">
                            <h2 className="headline--large"><img src={imageLineGroup} alt=""/>&nbsp;our process:</h2>
                        </header>
                        <figure
                            className="chart--process-a">
                            <div
                                className="chart-desktop" dangerouslySetInnerHTML={{ __html: `<svg
                                    id="Warstwa_1" data-name="Warstwa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1339.47 478.99">
                                    <defs>
                                        <style>
                                            .cls-1 {
                                            fill: #fff;
                                            }
                                            .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7 {
                                            fill: none;
                                            stroke: #fff;
                                            stroke-miterlimit: 10;
                                            }
                                            .cls-2, .cls-3, .cls-5, .cls-6, .cls-7 {
                                            stroke-width: 0.75px;
                                            }
                                            .cls-3 {
                                            stroke-dasharray: 11.89 11.89;
                                            }
                                            .cls-3-mask {
                                            stroke-width: 5px; stroke: #fff; fill: none; stroke-miterlimit: 10;
                                            }
                                            .cls-5 {
                                            stroke-dasharray: 12;
                                            }
                                            .cls-6 {
                                            stroke-dasharray: 12.15 12.15;
                                            }
                                            .cls-7 {
                                            stroke-dasharray: 11.86 11.86;
                                            }
                                        </style>
                                        <mask
                                            id="chart03-dashed01-mask">
                                            <path
                                                id="chart03-dashed01-mask-path" class="cls-3-mask" d="M-153.24,418a106,106,0,0,1-104.52,88.19A106,106,0,0,1-363.1,412.15" />
                                        </mask>
                                        <mask
                                            id="chart03-dashed02-mask">
                                            <path
                                                id="chart03-dashed02-mask-path" class="cls-3-mask" d="M-150.26,382.42A106,106,0,0,1-45.74,294.22,106,106,0,0,1,59.6,388.31" />
                                        </mask>
                                        <mask
                                            id="chart03-dashed03-mask">
                                            <path
                                                id="chart03-dashed03-mask-path" class="cls-3-mask" d="M270.79,418a106,106,0,0,1-209.86-5.89" />
                                        </mask>
                                        <mask
                                            id="chart03-dashed04-mask">
                                            <path
                                                id="chart03-dashed04-mask-path" class="cls-3-mask" d="M273,383.77c9.27-123.89,112.73-221.53,239-221.53,128.32,0,233.08,100.84,239.37,227.6" />
                                        </mask>
                                        <mask
                                            id="chart03-dashed05-mask">
                                            <path
                                                id="chart03-dashed05-mask-path" class="cls-3-mask" d="M961.64,418.87A105.76,105.76,0,0,1,752.31,413" />
                                        </mask>
                                        <mask
                                            id="chart03-dash04-mask">
                                            <path
                                                id="chart03-dash04-mask-path" class="cls-3-mask" d="M751.52,401.09a79.87,79.87,0,0,1-159.75,0,79.87,79.87,0,0,1-159.75,0,79.87,79.87,0,0,1-159.75,0" />
                                        </mask>
                                    </defs>
                                    <title>process-chart-a-desktop</title>
                                    <g
                                        transform="translate(6.37 239.22)">
                                        <circle
                                            id="chart03-dot01" class="cls-1" cx="0" cy="0" r="6.37"/>
                                    </g>
                                    <g
                                        transform="translate(217.85 239.22)">
                                        <circle
                                            id="chart03-dot02" class="cls-1" cx="0" cy="0" r="6.37"/>
                                    </g>
                                    <g
                                        transform="translate(430.4 239.22)">
                                        <circle
                                            id="chart03-dot03" class="cls-1" cx="0" cy="0" r="6.37"/>
                                    </g>
                                    <g
                                        transform="translate(642.35 239.22)">
                                        <circle
                                            id="chart03-dot04" class="cls-1" cx="0" cy="0" r="6.37"/>
                                    </g>
                                    <g
                                        transform="translate(802 239.22)">
                                        <circle
                                            id="chart03-dot05" class="cls-1" cx="0" cy="0" r="6.37"/>
                                    </g>
                                    <g
                                        transform="translate(962.12 239.22)">
                                        <circle
                                            id="chart03-dot06" class="cls-1" cx="0" cy="0" r="6.37"/>
                                    </g>
                                    <g
                                        transform="translate(1122.03 239.22)">
                                        <circle
                                            id="chart03-dot07" class="cls-1" cx="0" cy="0" r="6.37"/>
                                    </g>
                                    <g
                                        transform="translate(1333.1 239.22)">
                                        <circle
                                            id="chart03-dot08" class="cls-1" cx="0" cy="0" r="6.37"/>
                                    </g>
                                    <path
                                        id="chart03-dashed01" class="cls-3" mask="url(#chart03-dashed01-mask)" d="M-153.24,418a106,106,0,0,1-104.52,88.19A106,106,0,0,1-363.1,412.15" transform="translate(370.13 -161.87)"/>
                                    <path
                                        id="chart03-dashed02" class="cls-3" mask="url(#chart03-dashed02-mask)" d="M-150.26,382.42A106,106,0,0,1-45.74,294.22,106,106,0,0,1,59.6,388.31" transform="translate(370.13 -161.87)"/>
                                    <path
                                        id="chart03-dashed03" class="cls-3" mask="url(#chart03-dashed03-mask)" d="M270.79,418a106,106,0,0,1-209.86-5.89" transform="translate(370.13 -161.87)"/>
                                    <path
                                        id="chart03-curve02" class="cls-4" d="M751.53,401.09a79.87,79.87,0,0,0-159.75,0,79.87,79.87,0,0,0-159.75,0,79.87,79.87,0,0,0-159.75,0" transform="translate(370.13 -161.87)"/>
                                    <path
                                        id="chart03-dash04" class="cls-5" mask="url(#chart03-dash04-mask)" d="M751.52,401.09a79.87,79.87,0,0,1-159.75,0,79.87,79.87,0,0,1-159.75,0,79.87,79.87,0,0,1-159.75,0" transform="translate(370.13 -161.87)"/>
                                    <path
                                        id="chart03-dashed04" class="cls-6" mask="url(#chart03-dashed04-mask)" d="M273,383.77c9.27-123.89,112.73-221.53,239-221.53,128.32,0,233.08,100.84,239.37,227.6" transform="translate(370.13 -161.87)"/>
                                    <path
                                        id="chart03-dashed05" class="cls-7" mask="url(#chart03-dashed05-mask)" d="M961.64,418.87A105.76,105.76,0,0,1,752.31,413" transform="translate(370.13 -161.87)"/>
                                    <path
                                        id="chart03-curve01" class="cls-4" d="M963.13,400.23a105.74,105.74,0,0,0-211.49,0c0,132.62-107.51,240.13-240.13,240.13S271.39,532.85,271.39,400.23a106,106,0,0,0-212,0,106,106,0,0,1-106,106,106,106,0,0,1-106-106,106,106,0,0,0-106-106,106,106,0,0,0-106,106" transform="translate(370.13 -161.87)"/>
                                </svg>` }} >
                                
                            </div>
                            <div
                                className="chart-tablet">
                                <img src={require('./img/chart-tablet.svg')} />
                            </div>
                            <div
                                className="chart-mobile">
                                <img src={require('./img/chart-mobile.svg')} />
                            </div>
                            <ul
                                className="chart-list--01" id="chart03-list01">
                                <li> <span
                                    className="title">specification</span> <span
                                    className="description">First meeting. You present us with your vision for the product and we gather the main requirements.</span></li>
                                <li> <span
                                    className="title">planning</span> <span
                                    className="description">Top level plan. We decide on milestones and priorities.</span></li>
                                <li> <span
                                    className="title">solution architecture</span> <span
                                    className="description">We create the main architecture based on functional and non-functional requirements.</span></li>
                            </ul>
                            <h3 className="h6 chart-label--02" id="chart03-label02">development<br
                                /> cycle</h3>
                            <ul
                                className="chart-list--02" id="chart03-list02">
                                <li> <span
                                    className="title">detail user stories</span> <span
                                    className="description">Together we define user stories for the given iteration.</span></li>
                                <li> <span
                                    className="title">development</span> <span
                                    className="description">Design, development, code review and testing of each user story.</span></li>
                                <li> <span
                                    className="title">demo</span> <span
                                    className="description">Finished stories are deployed to the demo server for you to give us feedback.</span></li>
                            </ul>
                            <ul
                                className="chart-list--03" id="chart03-list03">
                                <li> <span
                                    className="title">production deployment & support</span> <span
                                    className="description">Production support and monitoring.</span></li>
                            </ul>
                        </figure>
                    </article>
                </section>
                <section
                    className="section--process">
                    <article
                        className="wrapper">
                        <div
                            className="section-introduction">
                            <div
                                className="introduction">
                                <p
                                    className="lead" data-inview="bottom">We can help you at all stages of the project, starting from defining the requirements up to the final deployment and support.</p>
                                <h1 data-inview="bottom">We always adjust our process to suit your specific needs</h1>
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
                        <div
                            className="tiles">
                            <div
                                className="text-box lead" data-inview="bottom">
                                <div
                                    className="wysiwyg-content">
                                    <p>Agile methodology (Scrum or Kanban) with short development cycles guarantees constant collaboration with our clients. We frequently collect feedback and adjust to changing requirements.</p>
                                </div>
                            </div>
                            <figure
                                className="picture" style={{backgroundImage: 'url('+require('./img/process01.jpg')+')'}} data-inview="bottom"> <img
                                src={require('./img/process01.jpg?097560')} alt="" /> </figure>
                            <figure
                                className="picture" style={{backgroundImage: 'url('+require('./img/SB_MG_0113_3.jpg')+')'}} data-inview="bottom"> <img
                                src={require('./img/SB_MG_0113_3.jpg?097560')} alt="" /> </figure>
                            <div
                                className="text-box lead" data-inview="bottom">
                                <div
                                    className="wysiwyg-content">
                                    <p>Using the Continuous Delivery approach gives our clients constant access to the most recent version of the software.</p>
                                    <p>Flexible work model:</p>
                                    <ul>
                                        <li>remote from our office</li>
                                        <li>on-site project meetings</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <section
                    className="section--feature" style={{backgroundImage: 'url('+require('./img/MG_0413-kopia.jpg')+')'}}>
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
                        <article
                            className="features theme--brand">
                            <div
                                className="feature">
                                <div
                                    className="feature-content"> Bespoke approach and transparent procedures allows demo to adapt easily to new requirements at every stage of the process.</div>
                            </div>
                        </article>
                    </div>
                </section>
                <section
                    className="section--cta theme--brand">
                    <div
                        className="wrapper">
                        <article
                            className="cta" data-inview="bottom" style={{width:'70%',textAlign: 'center'}} >
                            <h2>Come explore</h2>
                            <a
                                href="our-work.html" className="button--more action-href" style={{margin: '0 auto'}} > <span
                                className="label">our work</span> </a> 
                        </article>
                    </div>
                </section>
            </div>
        );
    }
}

export default Process;