import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../assets/img/logo.png';

class PageHeader extends Component {
  render() {
    return (
      <header
                className="header">
                <div
                    className="wrapper">
                    <Link
                        to="/" className="logo" title="Demo">
                       <img src={logo} alt="" />
                    </Link>
                    <div
                        className="buttons-container"> <button
                        className="burger"> <span
                        className="label">Menu</span> </button></div>
                    <nav
                        className="nav--main en">
                        <div
                            className="menu-container">
                            <ul
                                id="menu-menu" className="menu">
                                <li
                                    id="menu-item-23" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23 not-current"><Link
                                    to="/" activeClassName="current-page-item">Home</Link></li> 
                                <li
                                    id="menu-item-24" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24 not-current"><Link
                                    to="/service" activeClassName="current-page-item">Services</Link></li>
                                <li
                                    id="menu-item-25" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25 not-current"><Link
                                    to="/process" activeClassName="current-page-item">Process</Link></li>
                                <li
                                    id="menu-item-26" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26 not-current"><Link
                                    to="/our-work" activeClassName="current-page-item">Our work</Link></li>
                                <li
                                    id="menu-item-27" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27 not-current"><Link
                                    to="/about" activeClassName="current-page-item">About us</Link></li>
                                <li
                                    id="menu-item-28" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28 not-current"><Link
                                    to="/careers" activeClassName="current-page-item">Careers</Link></li>
                                <li
                                    id="menu-item-29" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29 not-current"><Link
                                    to="/blog" activeClassName="current-page-item">Blog</Link></li>
                                <li
                                    id="menu-item-30" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-30 not-current"><Link
                                    to="/contact" activeClassName="current-page-item">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <nav
                        className="nav--main vn">
                        <div
                            className="menu-container">
                            <ul
                                id="menu-menu" className="menu ">
                                <li
                                    id="menu-item-23" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23 not-current"><Link
                                    to="/" activeClassName="current-page-item">Trang chủ</Link></li>                                
                                <li
                                    id="menu-item-24" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24 not-current"><Link
                                    to="/service" activeClassName="current-page-item">Dịch vụ</Link></li>
                                <li
                                    id="menu-item-25" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25 not-current"><Link
                                    to="/process" activeClassName="current-page-item">Quy trình</Link></li>
                                <li
                                    id="menu-item-26" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26 not-current"><Link
                                    to="/our-work" activeClassName="current-page-item">Chúng tôi</Link></li>
                                <li
                                    id="menu-item-27" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27 not-current"><Link
                                    to="/about" activeClassName="current-page-item">Giới thiệu</Link></li>
                                <li
                                    id="menu-item-28" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28 not-current"><Link
                                    to="/careers" activeClassName="current-page-item">Tuyển dụng</Link></li>
                                <li
                                    id="menu-item-29" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29 not-current"><Link
                                    to="/blog" activeClassName="current-page-item">Blog</Link></li>
                                <li
                                    id="menu-item-30" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-30 not-current"><Link
                                    to="/contact" activeClassName="current-page-item">Liên hệ</Link></li>
                                <li
                                    id="menu-item-31" className="language menu-item-type-post_type menu-item-object-page menu-item-31 not-current" data-language='en'><Link
                                    to="#" activeClassName="current-page-item">English</Link></li>
                            </ul>
                                                        
                        </div>
                    </nav>
                </div>
            </header>
    );
  }
}

export default PageHeader;
