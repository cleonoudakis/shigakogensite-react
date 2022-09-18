import { Container, Row, Col, Label, Button } from 'reactstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateInquiryForm } from '../utils/validateInquiryFrom';

const Inquiry = () => {
    const handleSubmit = (values) => {
        const inquiry = {
            name: values.inqName,
            email: values.inqEmail,
            title: values.inqTitle,
            store: values.inqStoreName,
            address: values.inqAddress,
            product: values.inqProduct,
            sns: values.inqSNS,
            comment: values.inqContent
        };
        console.log(inquiry);
    }

    return (
        <>
            <Header />
            <Container className='my-5 row-content infoContent text-start'>
                <Row className='justify-content-center'>
                    <Col xs='12' lg='6'>
                        <h3>お問い合わせ</h3>
                        <div className='bg-secondary bg-opacity-25 my-3 p-3 rounded'>
                            <p>お問い合わせなど、こちらのフォームよりお気軽にお尋ねください。</p>
                            <p>【業務店様 へ】</p>
                            <p>弊社とお取引をご希望される酒販店様・飲食店様の、ご相談、見積りのご依頼を受け付けております。</p>
                            <p>見積書がお入り用の際は、「お問い合わせタイトル」の欄に【見積請求】とご記載の上、貴店の情報などをご記載していただき、お申し付け下さい。</p>
                            <p>なお、弊社製品は【要冷蔵ビール】のため、樽生ビールのお取り扱いには、空冷式・樽令式ビールサーバーのご準備が、ボトル製品につきましては、冷蔵での保管・陳列が必須条件でございます。</p>
                            何卒宜しくお願い申し上げます。
                        </div>
                        <Formik
                            initialValues={{
                                inqName: undefined,
                                inqEmail: undefined,
                                inqTitle: undefined,
                                inqStoreName: undefined,
                                inqAddress: undefined,
                                inqProduct: undefined,
                                inqSNS: undefined,
                                inqContent: undefined
                            }}
                            onSubmit={handleSubmit}
                            validate={validateInquiryForm}
                        >
                            <Form>
                                <div>
                                    <Row className='align-items-end py-3' style={{ borderBottom: '1px solid #DDD' }}>
                                        <Col xs='4' className='text-end'><Label htmlFor='inqName'>お名前 （必須）</Label></Col>
                                        <Col xs='8'>
                                            <Field name='inqName' className='form-control' />
                                        </Col>
                                        <ErrorMessage name='inqName'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                    </Row>
                                </div>
                                <div>
                                    <Row className='align-items-end py-3' style={{ borderBottom: '1px solid #DDD' }}>
                                        <Col xs='4' className='text-end'><Label htmlFor='inqEmail'>メールアドレス （必須）</Label></Col>
                                        <Col xs='8'>
                                            <Field name='inqEmail' className='form-control' />
                                        </Col>
                                        <ErrorMessage name='inqEmail'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                    </Row>
                                </div>
                                <div>
                                    <Row className='align-items-end py-3' style={{ borderBottom: '1px solid #DDD' }}>
                                        <Col xs='4' className='text-end'><Label htmlFor='inqTitle'>お問い合わせタイトル （必須）</Label></Col>
                                        <Col xs='8'>
                                            <Field name='inqTitle' className='form-control' />
                                        </Col>
                                        <ErrorMessage name='inqTitle'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                    </Row>
                                </div>
                                <div>
                                    <Row className='align-items-end py-3' style={{ borderBottom: '1px solid #DDD' }}>
                                        <Col xs='4' className='text-end'><Label htmlFor='inqStoreName'>貴店名</Label></Col>
                                        <Col xs='8'>
                                            <Field name='inqStoreName' className='form-control' />
                                        </Col>
                                        <ErrorMessage name='inqStoreName'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                    </Row>
                                </div>
                                <div>
                                    <Row className='align-items-end py-3' style={{ borderBottom: '1px solid #DDD' }}>
                                        <Col xs='4' className='text-end'><Label htmlFor='inqAddress'>住所</Label></Col>
                                        <Col xs='8'>
                                            <Field name='inqAddress' className='form-control' />
                                        </Col>
                                        <ErrorMessage name='inqAddress'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                    </Row>
                                </div>
                                <div>
                                    <Row className='align-items-end py-3' style={{ borderBottom: '1px solid #DDD' }}>
                                        <Col xs='4' className='text-end'><Label htmlFor='inqProduct'>お取扱希望商品（樽・ボトル）および 酒販小売免許の有・無</Label></Col>
                                        <Col xs='8'>
                                            <Field name='inqProduct' className='form-control' />
                                        </Col>
                                        <ErrorMessage name='inqProduct'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                    </Row>
                                </div>
                                <div>
                                    <Row className='align-items-end py-3' style={{ borderBottom: '1px solid #DDD' }}>
                                        <Col xs='4' className='text-end'><Label htmlFor='inqSNS'>ホームページ、SNSサイトなど</Label></Col>
                                        <Col xs='8'>
                                            <Field name='inqSNS' className='form-control' />
                                        </Col>
                                        <ErrorMessage name='inqSNS'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                    </Row>
                                </div>
                                <div>
                                    <Row className='py-3' style={{ borderBottom: '1px solid #DDD' }}>
                                        <Col xs='4' className='text-end py-2'><Label htmlFor='inqContent'>お問い合わせ内容 （必須）</Label></Col>
                                        <Col xs='8'>
                                            <Field name='inqContent' as='textarea' rows='10' className='form-control' />
                                        </Col>
                                        <ErrorMessage name='inqContent'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                        </ErrorMessage>
                                    </Row>
                                </div>
                                <div className='text-center'>
                                    <Button className='btn-lg' type='submit' value='送　信' color='primary'>送　信</Button>
                                </div>
                            </Form>
                        </Formik>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Inquiry;