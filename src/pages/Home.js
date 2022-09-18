import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeAccordion from "../components/HomeAccordion";
import EngiLogo from '../app/assests/img/logo-1.png'
import EngiImg from '../app/assests/img/FOC-ytHUcAI-5Ve.jfif'
import ShigaLogo from '../app/assests/img/logo-3.png'
import ShigaImg from '../app/assests/img/FYL4RLVUIAANLwy.jfif'
import { Nav, Container, Row, Col, TabContent, TabPane, Card, CardBody, CardHeader, NavItem, NavLink, Button } from 'reactstrap'
import classnames from 'classnames'
import { useState } from "react";
import HomeCarousel from "../components/HomeCarousel";
import { useDispatch } from "react-redux";
import { selectProductByType } from "./products/productsSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [currentActiveTab, setCurrentActiveTab] = useState('1');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggle = (tab) => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab);
    }
    const navigateStore = (value) => {
        const filter = {
            type: value
        }
        dispatch(selectProductByType(filter));
        navigate('/store');
    }

    return (
        <>
            <Header />
            <HomeCarousel />
            <Container fluid className="w-100 h-100" style={{backgroundColor: '#030B11'}}>
                <Container className="py-3">
                    <Row>
                        <Col>
                            <Card id='mainContent'>
                                <CardHeader>
                                    <Nav pills>
                                        <NavItem>
                                            <NavLink className={classnames({ active: currentActiveTab === '1'})} onClick={() => toggle('1')}>
                                                清酒「縁喜(えんぎ)」
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className={classnames({ active: currentActiveTab === '2'})} onClick={() => toggle('2')}>
                                                志賀高原ビール
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody>
                                    <TabContent activeTab={currentActiveTab}>
                                        <TabPane tabId='1'>
                                            <Container fluid>
                                                <Row>
                                                    <Col md='8' className="d-flex flex-column align-self-center position-relative text-start" style={{zIndex: '1'}}>
                                                        <h3>コンセプト</h3>
                                                        <p>小さくても、魅力ある田舎の酒屋を目指しています。私どもは、清酒「縁喜」を、志賀高原の麓、沓野で約200年にわたり、つくっています。決して、淡麗・辛口の酒ではありません。お飲みいただくのが一番ですが、あえていうなら端麗・旨口であると思っています。この地の寒冷な気候と良質な水を活かした、キレのある旨口の酒を、丹念に適正規模つくり、目の届く範囲で、責任をもってお届けします。</p>
                                                        <p>多くの人に飲んでいただける酒に、もちろんしたいと思います。ただ、そのために他と同じような酒にはなりたくないと思っています。自分たちが信じるうまい酒を、飲んでいただきたいと思います。均質化のすすむ地方の、万人受けする酒ではなく、個性ある田舎の、個性ある酒でありたいと考えます。小さくても、味は全国トップの水準を目指します。たんなる観光地の土産の酒ではなく、この酒を飲むために（も）ここに来たいと思っていただける酒を、不器用でも造っていきたいと思っています。</p>
                                                        <p className="text-end">
                                                            <Button className="caret-right" onClick={() => navigateStore("sake")}><strong>「縁喜」のラインナップはこちらへ</strong></Button>
                                                        </p>
                                                        <div className="w-100 h-100 position-absolute d-flex justify-content-center align-items-center" style={{zIndex: "-1"}}>
                                                            <img src={EngiLogo} alt='Engi Logo' height="273px" style={{opacity: "30%", filter: "invert()"}} />
                                                        </div>
                                                    </Col>
                                                    <Col md='4' className="d-md-flex d-none align-self-baseline">
                                                        <img src={EngiImg} alt='Engi Sake' style={{width: "100%", height: "75%", paddingTop: "2em", objectFit: "contain", overflow: "hidden"}} />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg='7' xs='12'>
                                                        <HomeAccordion />
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </TabPane>
                                        <TabPane tabId='2'>
                                            <h3>“自分たちが飲みたいビール”</h3>
                                            <Container fluid>
                                                <Row>
                                                    <Col md='4' className="d-md-flex d-none align-self-baseline">
                                                        <img src={ShigaImg} alt='Shiga Kogen Beer' style={{width: "100%", height: "75%", paddingTop: "2em", objectFit: "contain", overflow: "hidden"}} />
                                                    </Col>
                                                    <Col md='8' className="d-flex flex-column align-self-center position-relative text-start" style={{zIndex: "1"}}>
                                                        <p>農産物を、酒やビールにすることが私達の仕事です。</p>
                                                        <p>2004年より醸造を始め、2006年にホップをつくりはじめた当時、無謀にも「世界に通用する他にないビール」をつくりたいなどと思ったのですが、そのために、昭和30年代後半まで日本一のホップの産地だったこの地で、自分たちで原料づくりから関わってみたいと思い、畑つくりからはじめました。</p>
                                                        <p>最初は、軽い遊びのつもりが思わぬ大仕事に。しかし、それを面白がってくれる大勢のファンや、ブルワーのみなさんとの出会いにもたくさん恵まれ、現在では多くの定番品、限定品に自家栽培原料が使われています。また、ホップ収穫から仕込釜投入までの時間がおそらく世界最速（!?）の、自家栽培ホップ生仕込み「Harvest Brewシリーズ」は、みずみずしく柔らかい生ホップならではの味わいが独特で、毎年大好評をいただいています。</p>
                                                        <p>ホップや酒米のほかにも、麦や蕎麦、ブルーベリー、ラズベリーなども自分たちでつくることにより、原料を知ることができたのと同時に、自然とつきあう難しさや厳しさも学び、あらためて「酒づくりは風土を醸す」ということだとも実感しています。</p>
                                                        <p>これからも、小規模で非効率であっても「この地だからこそできる味」「自分たちが飲みたいビール」を、楽しみながら真剣に追求していきます。</p>
                                                        <p className="text-end">
                                                            <Button className="caret-right" onClick={() => navigateStore("beer")}><strong>「志賀高原」のラインナップはこちらへ</strong></Button>
                                                        </p>
                                                        <div className="w-100 h-100 position-absolute d-flex justify-content-center align-items-center" style={{zIndex: "-1"}}>
                                                            <img src={ShigaLogo} alt='Shiga Kogen Logo' height="450px" style={{opacity: "30%"}} />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </>
    );
};

export default Home;