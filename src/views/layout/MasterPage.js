import React, { Component } from 'react';
//import '../../assets/css/main.min.css' //?ver=1479817473
import PageHeader from '../../components/PageHeader';
import PageFooter from '../../components/PageFooter';

class MasterPage extends Component {
    render() {
        return (
            <div className="MasterPage">
                <div className="preloader">
                    <div className="logo">
                        <img src={require('../../assets/img/logo.png')} alt=""/>
                    </div>
                </div>
                <div className="lines-helper">
                    <div className="wrapper">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="overall" data-body-class="home page page-id-5 page-template-default" id="top">
                    <PageHeader />
                    <main className="main-content ajax-wrapper">
                        {this.props.children}
                    </main>
                    <PageFooter />
                </div>
            </div>
        );
    }
}

export default MasterPage;