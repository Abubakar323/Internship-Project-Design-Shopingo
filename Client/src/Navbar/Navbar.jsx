import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faCartShopping, faUser, faMoon, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import img from '../../src/image/logo.webp'
import Dropdown from 'react-bootstrap/Dropdown';


function Header() {

    return (
        <Navbar  sticky="top"  expand="lg" style={{backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}> 
            <Container>
                <Navbar.Brand href="#home"><img src={img} style={{ height: "20px" }} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="  ms-1 mt-1 text-dark fw-bold " to="/" style={{ padding: "24px 5px", textDecoration: "none" }}>HOME </NavLink>
                        {/* <NavDropdown title="CATAGORIES" className='border ms-1 mt-1 fw-bold text-dark' style={{ padding: "15px 5px" }} id="basic-nav-dropdown">

                            <NavDropdown.Item href="#action/3.1" ><NavLink to=""style={{backgroundColor:"black",padding:"10px 30px", margin:"5px",textDecoration:"none",color:"white"}}>SHOES</NavLink></NavDropdown.Item><br />
                            <NavDropdown.Item href="#action/3.2">
                                <NavLink to="" style={{backgroundColor:"black",padding:"10px 30px", margin:"5px",textDecoration:"none",color:"white"}}>JACKETS</NavLink><br /><br />
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                <NavLink to="" style={{backgroundColor:"black",padding:"10px 30px", margin:"5px",textDecoration:"none",color:"white"}}>FORMAL SHIRT</NavLink><br /><br />
                            </NavDropdown.Item> <NavDropdown.Item href="#action/3.2">
                                <NavLink to=""style={{backgroundColor:"black",padding:"10px 30px", margin:"5px",textDecoration:"none",color:"white"}}>BELTS</NavLink><br /><br />
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"><NavLink to=""style={{backgroundColor:"black",padding:"10px 30px", margin:"5px",textDecoration:"none",color:"white"}}>JEANS</NavLink></NavDropdown.Item>

                        </NavDropdown> */}


                        <Dropdown style={{ padding: "24px 5px" }}>
                            <Dropdown.Toggle className='text-dark' style={{ backgroundColor: "white", border: "0px", textDecoration: "none", fontWeight: "bold" }} id="dropdown-basic">
                            CATAGORIES
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{backgroundColor:"white",padding:"10px 10px",borderRadius:"0px",border:"0px"}}>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }} href="#/action-1"><NavLink style={{ color: "white", textDecoration: "none" }}>SHOES</NavLink></Dropdown.Item>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }} href="#/action-2" ><NavLink style={{ color: "white", textDecoration: "none" }}>JEANS</NavLink></Dropdown.Item>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }} href="#/action-3" ><NavLink style={{ color: "white", textDecoration: "none" }}>BELTS</NavLink></Dropdown.Item>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }} href="#/action-3" ><NavLink style={{ color: "white", textDecoration: "none" }}>FORMAL SHIRT</NavLink></Dropdown.Item>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }} href="#/action-3" ><NavLink style={{ color: "white", textDecoration: "none" }}>JACKETS</NavLink></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {/* <NavDropdown className=' border ms-1 mt-1 fw-bold' style={{ padding: "15px 5px" }} title="SHOP" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}

                        <Dropdown style={{ padding: "24px 5px" }}>
                            <Dropdown.Toggle className='text-dark' style={{ backgroundColor: "transparent", border: "0px", textDecoration: "none", fontWeight: "bold" }} id="dropdown-basic">
                                SHOP
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{backgroundColor:"white",padding:"10px 10px",borderRadius:"0px",border:"0px"}}>
                            <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }} ><NavLink to="/shotcart" style={{ color: "white", textDecoration: "none" }}>SHOPPING CART</NavLink></Dropdown.Item>
                            <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }} ><NavLink to="/wishlist" style={{ color: "white", textDecoration: "none" }}>WISHLIST</NavLink></Dropdown.Item>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }} ><NavLink to="/paymentMethod" style={{ color: "white", textDecoration: "none" }}>PAYMENT METHOD</NavLink></Dropdown.Item>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }} ><NavLink to="/productDetail" style={{ color: "white", textDecoration: "none" }}>PRODUCT DETAIL</NavLink></Dropdown.Item>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }}  ><NavLink to="/billingDetail" style={{ color: "white", textDecoration: "none" }}>BILLING DETAIL</NavLink></Dropdown.Item>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }}  ><NavLink to="/shopgrid" style={{ color: "white", textDecoration: "none" }}>SHOP GRID</NavLink></Dropdown.Item>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }} ><NavLink style={{ color: "white", textDecoration: "none" }}>ADDRESS</NavLink></Dropdown.Item>
                            </Dropdown.Menu >
                        </Dropdown>
                        <NavLink className="mt-1  ms-1  " style={{ padding: "24px 5px", textDecoration: "none", color: "black" }} to="/about"><b>ABOUT</b></NavLink>
                        <NavLink className=" mt-1  ms-1 " style={{ padding: "24px 5px", textDecoration: "none", color: "black" }} to="/contact"><b>CONTACT</b></NavLink>
                        <NavLink className=" mt-1  ms-1 " style={{ padding: "24px 5px", textDecoration: "none", color: "black" }} to="/product"><b>Product</b></NavLink>



                        <Dropdown style={{ padding: "24px 5px" }}>
                            <Dropdown.Toggle className='text-dark' style={{ backgroundColor: "transparent", border: "0px", textDecoration: "none", fontWeight: "bold" }} id="dropdown-basic">
                                ACCOUNT
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{backgroundColor:"white",padding:"10px 10px",borderRadius:"0px",border:"0px"}}>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }} ><NavLink to="/dashboard" style={{ color: "white", textDecoration: "none" }}>DASHBOARD</NavLink></Dropdown.Item>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }}  ><NavLink style={{ color: "white", textDecoration: "none" }}>MY ORDER</NavLink></Dropdown.Item>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }}  ><NavLink to="/profileDetail" style={{ color: "white", textDecoration: "none" }}>MY PROFILE</NavLink></Dropdown.Item>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }}  ><NavLink to="/editProfile" style={{ color: "white", textDecoration: "none" }}>ADIT PROFILE</NavLink></Dropdown.Item>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }}  ><NavLink to="/saveAddress" style={{ color: "white", textDecoration: "none" }}>ADDRESS</NavLink></Dropdown.Item><hr />
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }}  ><NavLink to="/login" style={{ color: "white", textDecoration: "none" }}>LOGIN</NavLink></Dropdown.Item>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }}  ><NavLink to="/registration" style={{ color: "white", textDecoration: "none" }}>SIGN UP</NavLink></Dropdown.Item>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }}  ><NavLink to="/forgotpassword" style={{ color: "white", textDecoration: "none" }}>FORGOT PASSWORD</NavLink></Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>



                        {/* <NavDropdown title="ACCOUNT" style={{ padding: "15px 5px" }} className='ms-1 border mt-1 fw-bold ' id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                        {/* <NavDropdown title="BLOG" style={{ padding: "15px 5px" }} className=' border ms-1 mt-1 text-white fw-bold' id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}

                        <Dropdown style={{ padding: "24px 5px" }}>
                            <Dropdown.Toggle className='text-dark' style={{ backgroundColor: "transparent", border: "0px", textDecoration: "none", fontWeight: "bold" }} id="dropdown-basic">
                                BLOG
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{backgroundColor:"white",padding:"10px 10px",borderRadius:"0px",border:"0px"}}>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }} ><NavLink to="/blogread" style={{ color: "white", textDecoration: "none" }}>BLOG READ</NavLink></Dropdown.Item>
                                <Dropdown.Item style={{ backgroundColor: "black", marginBottom: "5px" }}  ><NavLink to="/BlogPost" style={{ color: "white", textDecoration: "none" }}>BLOG POST</NavLink></Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>
                    </Nav>

                    <Form inline>
                        <Row>
           
                            <Col xs="auto">

                                <NavLink to="" style={{textDecoration:"none"}} > <FontAwesomeIcon icon={faMoon} style={{ fontSize: "25px", color: "black" }} /></NavLink>
                                <NavLink to="" style={{textDecoration:"none"}}className="ms-2"> <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: "25px", color: "black" }} /></NavLink>
                                <NavLink to="/cart" style={{textDecoration:"none"}} className="ms-2"> <FontAwesomeIcon style={{ fontSize: "25px", color: "black" }} icon={faCartShopping} /></NavLink>
                                <NavLink to="/wishlist" style={{textDecoration:"none"}} className="ms-2"> <FontAwesomeIcon style={{ fontSize: "25px", color: "black" }} icon={faHeart} /></NavLink>
                                <NavLink to="/profileDetail" style={{textDecoration:"none"}} className="ms-2"> <FontAwesomeIcon icon={faUser} style={{ fontSize: "25px", color: "black" }} /></NavLink>


                            </Col>
                        </Row>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
