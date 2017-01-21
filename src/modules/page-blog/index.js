import React, { Component } from 'react';
import background1 from './img/blog-default.jpg';
import imageLineGroup from './img/line-group.png';

class Blog extends React.Component {
    componentWillMount() {
        document.title = "Blog | REDCODE"
    }
    render() {
        return (
            <div>
                <section
                    className="section--hero theme--dark has-shadows" style={{ backgroundImage: 'url(' + background1 + ')' }}>
                    <div
                        className="wrapper">
                        <p
                            className="headline">Blog:</p>
                        <h1>Typescript decorators</h1>
                        <a
                            href="#details" className="button--more" data-scrollto=""> <span
                                    className="label" >read more</span> </a>
                    </div>
                </section>
                <section
                    className="section--posts-list" id="details">
                    <div
                        className="wrapper">
                        <section
                            className="posts-list-content">
                            <ul
                                className="main-categories">
                                <li>
                                 <a
                                    href="#">Website</a></li>
                                <li> <a
                                    href="#">Graphics</a></li>
                                <li> <a
                                    href="#">Tech solutons</a></li>
                            </ul>
                            <div
                                className="posts-list">
                                <article
                                    className="post-link" data-inview="bottom">
                                    <a
                                        href="#" title="Grid-based layout development IV: Performance">
                                        <figure
                                            className="picture"> <img
                                            width="330" height="185" src={require('./img/Post-luisa-4-330x185.jpg?097560')} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Performance grids css" srcset="./img/Post-luisa-4-330x185.jpg?097560 330w, ./img/Post-luisa-4-300x169.jpg 300w, ./img/Post-luisa-4-768x432.jpg 768w, ./img/Post-luisa-4-1024x577.jpg 1024w" sizes="(max-width: 330px) 100vw, 330px" /> </figure>
                                        <div
                                            className="post-link-content">
                                            <h2 className="title">Grid-based layout development IV: Performance</h2>
                                            <ul
                                                className="meta">
                                                <li>24 NOVEMBER 2016</li>
                                                <li>Luis Belmonte Diaz</li>
                                            </ul>
                                        </div>
                                    </a>
                                </article>
                                <article
                                    className="post-link" data-inview="bottom">
                                    <a
                                        href="#" title="Structure of an Enterprise System in Angular 2">
                                        <figure
                                            className="picture"> <img
                                            width="330" height="185" src={require('./img/Structure-1-330x185.png?097560')} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Angular 2 structure" /> </figure>
                                        <div
                                            className="post-link-content">
                                            <h2 className="title">Structure of an Enterprise System in Angular 2</h2>
                                            <ul
                                                className="meta">
                                                <li>10 NOVEMBER 2016</li>
                                                <li>Jedrek Fulara</li>
                                            </ul>
                                        </div>
                                    </a>
                                </article>
                                <article
                                    className="post-link" data-inview="bottom">
                                    <a
                                        href="#" title="Building Complex Business Logic With Angular 2 Services">
                                        <figure
                                            className="picture"> <img
                                            width="330" height="185" src={require('./img/Services-330x185.png?097560')} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Angular 2 services" /> </figure>
                                        <div
                                            className="post-link-content">
                                            <h2 className="title">Building Complex Business Logic With Angular 2 Services</h2>
                                            <ul
                                                className="meta">
                                                <li>08 NOVEMBER 2016</li>
                                                <li>Jakub Majerz</li>
                                            </ul>
                                        </div>
                                    </a>
                                </article>
                                <article
                                    className="post-link" data-inview="bottom">
                                    <a
                                        href="#" title="Local CSS in Angular 2">
                                        <figure
                                            className="picture"> <img
                                            width="330" height="185" src={require('./img/Local-CSS-330x185.png?097560')} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="Local CSS" /> </figure>
                                        <div
                                            className="post-link-content">
                                            <h2 className="title">Local CSS in Angular 2</h2>
                                            <ul
                                                className="meta">
                                                <li>28 OCTOBER 2016</li>
                                                <li>Maciek Fulara</li>
                                            </ul>
                                        </div>
                                    </a>
                                </article>
                                <article
                                    className="post-link" data-inview="bottom">
                                    <a
                                        href="#" title="Data Flow in Angular 2 Applications">
                                        <figure
                                            className="picture"> <img
                                            width="330" height="185" src={require('./img/Data-Flow-330x185.png?097560')} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="data flow in angular 2" /> </figure>
                                        <div
                                            className="post-link-content">
                                            <h2 className="title">Data Flow in Angular 2 Applications</h2>
                                            <ul
                                                className="meta">
                                                <li>27 OCTOBER 2016</li>
                                                <li>Jedrek Fulara</li>
                                            </ul>
                                        </div>
                                    </a>
                                </article>
                                <article
                                    className="post-link" data-inview="bottom">
                                    <a
                                        href="#" title="End-to-end testing Angular 2 applications with Protractor">
                                        <figure
                                            className="picture"> <img
                                            width="330" height="185" src={require('./img/End-to-end-testing-330x185.png?097560')} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="end-to-end testing" /> </figure>
                                        <div
                                            className="post-link-content">
                                            <h2 className="title">End-to-end testing Angular 2 applications with Protractor</h2>
                                            <ul
                                                className="meta">
                                                <li>20 OCTOBER 2016</li>
                                                <li>Jakub Majerz</li>
                                            </ul>
                                        </div>
                                    </a>
                                </article>
                            </div>
                            <div
                                className="pagination" aria-label="Pagination" data-inview="bottom"> <span
                                className='page-numbers current'>1</span> <a
                                className='page-numbers' href='#'>2</a> <a
                                className="next page-numbers" href="#">Next</a></div>
                        </section>
                        <aside
                            className="sidebar">
                            <form
                                className="search-form" role="search" method="get" action="#">
                                <div
                                    className="input-group--placeholder">
                                    <label
                                        for="s">search</label> <input
                                        type="search" id="s" name="s" placeholder="search" value="" />
                                    <button
                                        type="submit" className="button">
                                        <span
                                            className="icon">
                                            <img src={require('./img/search-icon.svg')} />
                                        </span>
                                        <span
                                            className="label">search</span> 
                                    </button>
                                </div>
                            </form>
                            <h5>tags:</h5>
                            <ul
                                className="tag-cloud">
                                <li> <a
                                    href="#">component</a></li>
                                <li> <a
                                    href="#">Data flow</a></li>
                                <li> <a
                                    href="#">Observables</a></li>
                                <li> <a
                                    href="#">RxJS</a></li>
                                <li> <a
                                    href="#">Reactive Programming</a></li>
                                <li> <a
                                    href="#">Continuous Delivery</a></li>
                                <li> <a
                                    href="#">SonarQube</a></li>
                                <li> <a
                                    href="#">code quality</a></li>
                                <li> <a
                                    href="#">Gulp</a></li>
                                <li> <a
                                    href="#">building system</a></li>
                                <li> <a
                                    href="#">Static Typing</a></li>
                                <li> <a
                                    href="#">services</a></li>
                                <li> <a
                                    href="#">components</a></li>
                                <li> <a
                                    href="#">angular2</a></li>
                                <li> <a
                                    href="#">CSS</a></li>
                                <li> <a
                                    href="#">encapsulation</a></li>
                                <li> <a
                                    href="#">local CSS</a></li>
                                <li> <a
                                    href="#">Bootstrap</a></li>
                                <li> <a
                                    href="#">dependency injection</a></li>
                                <li> <a
                                    href="#">Inversion of Control</a></li>
                                <li> <a
                                    href="#">CSS Grid Layout Module</a></li>
                                <li> <a
                                    href="#">End-to-end testing</a></li>
                                <li> <a
                                    href="#">Testing</a></li>
                                <li> <a
                                    href="#">Protractor</a></li>
                                <li> <a
                                    href="#">decorator</a></li>
                                <li> <a
                                    href="#">TypeScript</a></li>
                                <li> <a
                                    href="#">tools for developers</a></li>
                                <li> <a
                                    href="#">grid</a></li>
                                <li> <a
                                    href="#">architecture</a></li>
                                <li> <a
                                    href="#">Angular 2</a></li>
                            </ul>
                            <h5>archive:</h5>
                            <ul
                                className="archives-list">
                                <li
                                    className="archives-list-item--year active">
                                    <a
                                        href="#" title="Archives for 2016">2016</a>
                                    <ul>
                                        <li
                                            className="archives-list-item--month"> <a
                                            href="#" title="Archives for  2016">June</a></li>
                                        <li
                                            className="archives-list-item--month"> <a
                                            href="#" title="Archives for  2016">September</a></li>
                                        <li
                                            className="archives-list-item--month"> <a
                                            href="#" title="Archives for  2016">October</a></li>
                                        <li
                                            className="archives-list-item--month"> <a
                                            href="#" title="Archives for  2016">November</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </aside>
                    </div>
                    <div
                        className="e-newsletter e-newsletter--popup theme--brand" style={{display:'none'}} >
                        <strong>NEWSLETTER</strong>
                        <form
                            className="form--micro" data-form="mailchimp">
                            <input
                                type="hidden" name="language" value="en"/>
                            <div
                                className="e-newsletter__input-group"> <input
                                name="email" type="email" placeholder="e-mail" className="e-newsletter__input-group-input"/> <button
                                type="submit" className="button e-newsletter__input-group-btn"> <span
                                className="label">send</span> </button></div>
                            <div
                                className="ajax-message ok"> thank you for subscribing</div>
                            <div
                                className="ajax-message warning"> you are already registered</div>
                            <div
                                className="ajax-message error"> error, please check if your address is correct</div>
                        </form>
                        <a
                            href="#0" title="" className="e-newsletter--popup-close [ js-newsletter--popup-close ]">&times;</a>
                    </div>
                </section>
                <section
                    className="section--cta theme--brand">
                    <div
                        className="wrapper">
                        <article
                            className="cta" data-inview="bottom" style={{width:'70%',textAlign: 'center'}} >
                            <h2>Get Demo's latest<br
                                /> articles straight to<br
                                /> your inbox</h2>
                            <form
                                className="form--micro" data-form="mailchimp" >
                                <input
                                    type="hidden" name="language" value="en" />
                                <div
                                    className="input-group--placeholder" style={{margin: '0 auto'}} > <label>e-mail</label> <input
                                    name="email" type="email" placeholder="e-mail" /> <button
                                    type="submit" className="button"> <span
                                    className="label">send</span> </button></div>
                                <div
                                    className="ajax-message ok"> thank you for subscribing</div>
                                <div
                                    className="ajax-message warning"> you are already registered</div>
                                <div
                                    className="ajax-message error"> error, please check if your address is correct</div>
                            </form>
                        </article>
                    </div>
                </section>
            </div>
        );
    }
}

export default Blog;