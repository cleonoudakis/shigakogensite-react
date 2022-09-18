import { Navbar, Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import FooterStop from '../app/assests/img/footer-stop.png'

const Footer = () => {
    return (
        <Navbar dark sticky='bottom'>
            <Container className='w-100 pt-3' fluid>
                <Row>
                    <Col lg='5' className='d-lg-flex d-none text-nowrap align-items-center ps-5' style={{color: '#BBB'}}>
                        <img src={FooterStop} height='59px' alt='20 Stop' style={{position: 'relative', top: '-0.5em', filter: 'invert()'}} />
                        <p className='ps-3 text-start' style={{fontSize: '0.9rem'}}>
                            飲酒は20歳を過ぎてから。飲酒運転は法律で禁止されています。<br />
                            妊娠中や授乳期の飲酒は、胎児、乳児に悪影響を与えるおそれがあります。<br />
                            お酒は何よりも適量です。のんだ後はリサイクル。
                        </p>
                    </Col>
                    <Col lg='5' md='1' className='offset-md-2 text-nowrap text-end pr-2'>
                        <ul id='footer-menu'>
                            <li>
                                <HashLink to='/profile#method'>お支払い方法について</HashLink>
                            </li>
                            <li>
                                <HashLink to='/profile#shipping'>配送方法・送料について</HashLink>
                            </li>
                            <li>
                                <NavLink to='/profile'>特定商取引法に基づく表記</NavLink>
                            </li>
                            <li>
                                <NavLink to='/privacy'>プライバシーポリシー</NavLink>
                            </li>
                            <li>
                                <NavLink to='/inquiry'>お問い合わせ</NavLink>
                            </li>
                            <li>
                                <a href='https://www.facebook.com/farmshiga' target='_blank' rel='noreferrer'><i className='fa fa-facebook' /></a>&emsp;
                                <a href='https://twitter.com/drunksnowmonkey' target='_blank' rel='noreferrer'><i className='fa fa-twitter' /></a>&emsp;
                                <a href='https://www.instagram.com/egobrewer' target='_blank' rel='noreferrer'><i className='fa fa-instagram' /></a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
};

export default Footer;