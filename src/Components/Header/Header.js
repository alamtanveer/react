import React from 'react';
import './Header.css';
import blazeclan_logo from '../../assets/blazeclan_logo.svg';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactBootstrap, {Button, Nav, Navbar, Form,FormControl} from 'react-bootstrap'

class Header extends React.Component {
    render() {
        return (
            // <>
            //     <Navbar bg="dark" variant="dark">
            //         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            //         <Nav className="mr-auto">
            //             <Nav.Link href="#home">Home</Nav.Link>
            //             <Nav.Link href="#features">Features</Nav.Link>
            //             <Nav.Link href="#pricing">Pricing</Nav.Link>
            //         </Nav>
            //         <Form inline>
            //             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            //             <Button variant="outline-info">Search</Button>
            //         </Form>
            //     </Navbar>
            // </>

              <header>
                <nav className="navbar fixed-top pt-x Navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-7 col-1">

                            </div>
                            <div className="col-lg-2 col-md-3 col-7 topbar-selector dropdown">

                            </div>
                            <div className="col-lg-2 col-md-2 col-6 logo-head">
                                <a href="https:/www.blazeclan.com" className="logo-header">
                                    <img alt="ima not available" src={blazeclan_logo}/>
                                </a>
                            </div>
                            <div className="col-lg-8">
                                <nav>
                                    <ul>
                                        <li><Link to="/solution">Solutions</Link>
                                            <ul>
                                                <li>Services</li>
                                                <li>Products and Framkeworks</li>
                                            </ul>
                                        </li>
                                        <li><Link to="/resource">Resources</Link>
                                        
                                        </li>
                                        <li><Link to="/company">Company</Link></li>
                                        <li><Link to="/careers">Careers</Link></li>
                                    </ul>
                                </nav>    
                            </div>

                        </div>
                    </div>
                </nav>  
            </header>

        );
    }
}
export default Header;
