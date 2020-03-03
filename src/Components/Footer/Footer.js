import React from 'react';
import blazeclan_logo from '../../assets/blazeclan_logo.svg';
import './Footer.css'

class Footer extends React.Component {
    render(){
        return (
            <footer>
                <nav className="navbar fixed-bottom pt-x Navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-6 logo-head">
                                <a href="https:/www.blazeclan.com" className="logo-header">
                                    <img alt="Not Found" src={blazeclan_logo}/>
                                </a>
                            </div>
                            <div className="col-lg-8 copyright">
                               <span>@ Copyright : Blazeclan.com</span>
                            </div>

                        </div>
                    </div>
                </nav>  
            </footer>
        );
    }
}
export default Footer;
