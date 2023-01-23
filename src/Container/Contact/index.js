import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFacebook, BsLinkedin, BsInstagram, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";
import './style.css';
const  ContactContainer = ()=>{
    const myData = [
      
        {name:'Linkedin', link:'https://www.linkedin.com/in/harinderpal-singh-8695a4101/', text:'Follow to my linkedin.'},
        
        {name:'StackOverFlow', link:'https://stackoverflow.com/users/16213526/plantinum-warrior', text:'Check out to my stackoverflow account.'},
        {name:'Instagram', link:'https://www.instagram.com/harinder.bhular', text:'Follow me on Instagram.'},
        {name:'GitHub', link:'https://github.com/royal125',text:'Check out to my projects'},
        {name:'YouTube', link:'https://www.youtube.com/channel/UCoVSFQa3gC5oVZaKdMZvBLQ', text:'Follow to my youtube channel.'},
        {name:'Email', link:'mailto:hsbhular@gmail.com',  text:'write to me a mail'}
    ]
    return (
        <div className='contactWrap'>
        <Container>
            <Row>
                <Col>
                    <p>CONNECT WITH US</p>
                    <h1>Get in Touch</h1>
                </Col>
            </Row>
            <Row>
                <Col className='conectIcon'>
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
            </Row>
            <Row>
                <Col>
                    <ListGroup className='contactList'>
                        {
                            myData && myData.length > 0 ? myData.map((item)=>{
                                return (
                                    <ListGroup.Item key={item.name}>
                                        <span>{item.text}</span>
                                        <a href={item.link} rel="noreferrer"  target="_blank">
                                            {item.link}
                                        </a>
                                    </ListGroup.Item>
                                )
                            }) : ''
                        }
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ContactContainer;