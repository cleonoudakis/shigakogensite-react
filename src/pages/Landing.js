import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();
    const refresh = () => {
        navigate(0);
    }

    const createCookie = () => {
        document.cookie = 'verified=true; SameSite=none; Secure';
        refresh();
    }

    return (
        <>
            <header className='jumbotron jumbotron-fluid position-absolute h-100 w-100'>
                <Container fluid className='d-flex flex-column text-white text-center min-vh-100'>
                    <Row>
                        <Col className='border-right'>
                            &nbsp;
                        </Col>
                        <Col className='border-left'>
                            &nbsp;
                        </Col>
                    </Row>
                    <Row className='fadeIn'>
                        <Col className='mt-4 text-uppercase stroke en'>
                            <small style={{ fontSize: '0.5rem', letterSpacing: '0.75rem' }}>Since<br />1805</small>
                        </Col>
                    </Row>
                    <Row className='mt-3 fadeIn'>
                        <Col className='text-nowrap'>
                            <h3 className='jah stroke-bold'>釀造元</h3>
                        </Col>
                    </Row>
                    <Row className='fadeIn'>
                        <Col>
                            <div className='d-flex justify-content-center mt-4'>
                                <h1 className='vertical-text jah stroke-bold'><span className='font-size-lg'>玉村本店</span></h1>
                            </div>
                        </Col>
                    </Row>
                    <Row className='fadeIn mt-2'>
                        <Col>
                            <span className='stroke'>あなたは20歳以上ですか?</span>
                        </Col>
                    </Row>
                    <Row className='mt-3 mb-5 fadeIn'>
                        <Col xs='12' sm='6' className='d-flex justify-content-sm-end justify-content-center'>
                            <Link to='/' onClick={createCookie} className='btn btn-outline-light text-nowrap stroke-transparent' style={{ minWidth: '75px' }}>はい</Link>
                        </Col>
                        <Col xs='12' sm='6' className='d-flex justify-content-sm-start justify-content-center'>
                            <a href='https://google.co.jp/' className='btn btn-outline-light text-nowrap stroke-transparent' style={{ minWidth: '75px' }}>いいえ</a>
                        </Col>
                    </Row>
                    <Row style={{ flexGrow: '1' }}>
                        <Col className='border-right'>
                            &nbsp;
                        </Col>
                        <Col className='border-left'>
                            &nbsp;
                        </Col>
                    </Row>
                </Container>
            </header>
            <Container fluid>
                <Row>
                    <Col xs='12' md='6' className='bg-left min-vh-100'>
                        &nbsp;
                    </Col>
                    <Col md='6' className='d-none d-md-block bg-right min-vh-100'>
                        &nbsp;
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Landing;