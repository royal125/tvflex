import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import {  BsLinkedin, BsStackOverflow,  BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow us :- </h3>
                            <ul className='socialIconsList'>
                                
                                <li>
                                    <a rel="noreferrer" href="https://www.linkedin.com/in/harinderpal-singh-8695a4101/" target="_blank">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                
                                <li>
                                    <a rel="noreferrer" href="https://stackoverflow.com/users/16213526/plantinum-warrior" target="_blank">
                                        <BsStackOverflow />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://www.instagram.com/harinder.bhular">
                                        <BsInstagram />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://github.com/royal125" target="_blank">
                                        <BsGithub />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://www.youtube.com/channel/UCoVSFQa3gC5oVZaKdMZvBLQ" target="_blank">
                                        <BsYoutube />
                                    </a>
                                </li> 
                            </ul>
                            
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>© Copyright 2023-2024 <br></br><a>Designed by</a> <a href="https://www.youtube.com/c/AzadMalikRohit" target="_blank" rel="noreferrer"><b>HARINDERPAL SINGH</b></a>.</small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;