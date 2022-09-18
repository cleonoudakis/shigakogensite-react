import Header from "../components/Header";
import Footer from "../components/Footer";
import { Nav, Container, Row, Col, TabContent, TabPane, NavItem, NavLink } from 'reactstrap'
import { Link } from "react-router-dom";
import classnames from 'classnames'
import { useSelector, useDispatch } from "react-redux";
import { setActiveTab, getCurrentTab } from "./tabSlice";
import TamamuraImg from '../app/assests/img/FH-hn5WaAAYLsD0.jfif';
import EngiImg from '../app/assests/img/EkxH--mVMAUa9Fd.jfif';
import FarmhouseImg from '../app/assests/img/E3RfKDWVoAYlpSI.jfif'
import TeppaImg from '../app/assests/img/FIDUmA2aUAAefzp.jfif'

const Locations = () => {
    const currentTab = useSelector(getCurrentTab);
    const dispatch = useDispatch();
    const toggle = (tab) => {
        if (currentTab !== tab) dispatch(setActiveTab(tab));
    }

    const next = () => {
        const nextTab = parseInt(currentTab) + 1;
        if (nextTab > 4) dispatch(setActiveTab('1'));
        else dispatch(setActiveTab('' + nextTab));
    }

    const prev = () => {
        const nextTab = parseInt(currentTab) - 1;
        if (nextTab < 1) dispatch(setActiveTab('4'));
        else dispatch(setActiveTab('' + nextTab));
    }

    return (
        <>
            <Header />
            <Container fluid style={{ backgroundColor: '#030B11' }}>
                <Row>
                    <Col xs='2' className="ps-4 pe-0 d-lg-block d-none" style={{ borderRight: '1px solid #FFF', minWidth: '170px' }}>
                        <Nav id='aboutMenu' pills className="flex-column sticky-top text-nowrap text-end" style={{ top: '74px' }}>
                            <NavItem>
                                <NavLink className={classnames({ active: currentTab === '1' })} onClick={() => toggle('1')}>玉村本店</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: currentTab === '2' })} onClick={() => toggle('2')}>ギャラリー玉村本店</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: currentTab === '3' })} onClick={() => toggle('3')}>THE FARMHOUSE</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: currentTab === '4' })} onClick={() => toggle('4')}>TEPPA ROOM  志賀高原</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col xs='1' className="d-lg-none d-flex order-first justify-content-center align-items-center vh-100 sticky-top" style={{ marginTop: '-74px', paddingTop: '74px' }}>
                        <Link to='' onClick={prev} className="slide-nav-button" id="prev">🢐</Link>
                    </Col>
                    <Col xs='1' className="d-lg-none d-flex order-last justify-content-center align-items-center vh-100 sticky-top" style={{ marginTop: '-74px', paddingTop: '74px' }}>
                        <Link to='' onClick={next} className="slide-nav-button" id="next">🢒</Link>
                    </Col>
                    <Col>
                        <TabContent activeTab={currentTab}>
                            <TabPane tabId='1'>
                                <Container fluid>
                                    <Row className="justify-content-center">
                                        <Col xs='12' lg='10'>
                                            <Container fluid className="row-content infoContent text-start">
                                                <Row className="mb-3">
                                                    <Col xs='12' lg='6'>
                                                        <Container fluid style={{ fontSize: '0.75rem', color: '#FFF' }}>
                                                            <Row className="py-3">
                                                                <Col xs='5'>
                                                                    <strong>社　名</strong>
                                                                </Col>
                                                                <Col>
                                                                    株式会社　玉村本店
                                                                </Col>
                                                            </Row>
                                                            <Row className="py-3">
                                                                <Col xs='5'>
                                                                    <strong>業務内容</strong>
                                                                </Col>
                                                                <Col>
                                                                    清酒、ビール（発泡酒）製造 ・ 酒類小売販売 ・ 酒類卸販売
                                                                </Col>
                                                            </Row>
                                                            <Row className="py-3">
                                                                <Col xs='5'>
                                                                    <strong>創　業</strong>
                                                                </Col>
                                                                <Col>
                                                                    文化ニ年・1805年
                                                                </Col>
                                                            </Row>
                                                            <Row className="py-3">
                                                                <Col xs='5'>
                                                                    <strong>代表取締役社長</strong>
                                                                </Col>
                                                                <Col>
                                                                    佐藤 栄吾
                                                                </Col>
                                                            </Row>
                                                            <Row className="py-3">
                                                                <Col xs='5'>
                                                                    <strong>所在地</strong>
                                                                </Col>
                                                                <Col>
                                                                    <a href="https://www.google.co.jp/maps/search/?api=1&query=長野県下高井郡山ノ内町大字平穏1163" target="_blank" rel='noreferrer' style={{ color: "#FFF" }}>〒381-0401　長野県下高井郡山ノ内町大字平穏1163</a>
                                                                </Col>
                                                            </Row>
                                                            <Row className="py-3">
                                                                <Col xs='5'>
                                                                    <strong>Tel.</strong>
                                                                </Col>
                                                                <Col>
                                                                    <a href="tel:0269-33-2155" style={{ color: "#FFF" }}>0269-33-2155</a><br />
                                                                    <small>※オンラインストアのお問い合わせはご遠慮ください。お問い合わせは、<Link to="/inquiry" style={{ color: '#FFF' }}>お問い合わせフォーム</Link>よりお願いします。</small>
                                                                </Col>
                                                            </Row>
                                                            <Row className="py-3">
                                                                <Col xs='5'>
                                                                    <strong>Fax.</strong>
                                                                </Col>
                                                                <Col>
                                                                    <a href="tel:0269-33-3136" style={{ color: "#FFF" }}>0269-33-3136</a>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </Col>
                                                    <Col lg='6' xs='12' className="mb-3">
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25583.846516929956!2d138.419246!3d36.723022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x348587185dc18e!2sTamamura%20Honten!5e0!3m2!1sen!2sjp!4v1659378949569!5m2!1sen!2sjp" width="100%" height="100%" style={{ border: "0" }} allowFullScreen="" loading="lazy" title="1" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="text-white text-start">
                                                        <div className="d-md-flex d-none justify-content-center">
                                                            <img className="pb-3" src={TamamuraImg} alt='Tamamura Honten' width="75%" />
                                                        </div>
                                                        <p>清酒『縁喜（えんぎ）』の酒蔵は、北信州は志賀高原の麓にございます。初代喜惣治が、この地に創業したのが文化ニ年（1805年）、屋号の玉村は、初代が酒造りの修行をした上州玉村（現在の群馬県佐波郡玉村町）にちなんだものです。山紫水明なこの地の清冽な水、清澄な空気、寒冷な気温の中で醸し出された酒は、約2１0年余の長きに亘り、多くの方々に愛され、育てていただいてまいりました。</p>
                                                        <p>今でこそ、スキーヤーのメッカとして全国に有名な志賀高原も、その昔は松代藩に属した未開の地であり、御用係として奥山林の調査を命ぜられた佐久間象山が、「星の井（当時の銘柄名）」の酒九樽を、氏神様（天川神社）に献上して無事を祈った程でした。その後、旧草津街道として旅人の往来も増え湯治場（湯田中・渋温泉郷）のお酒としても親しまれて参りました。<br />
                                                            明治40年には、明治天皇御用品として宮内省お買い上げを賜り、その後大正天皇御大典を機に、銘柄を「星の井」から当主喜惣治の名にちなんで「縁喜」に改めました。また、当家では、新嘗祭の献上米を大正14年に御共進した実績があり、現在はその水田で収穫された美山錦が酒造りに使用されています。</p>
                                                        <p>また、2004年からは『志賀高原ビール』『山伏』の醸造を始め、ホップなどの原料づくりからも関わっています。小規模で非効率であっても「この地だからこそできる味」「自分たちが飲みたいビール」を、楽しみながら真剣に追求しています。</p>
                                                        <p>これからも、均質化のすすむ地方の、万人受けする酒ではなく、個性ある田舎の、個性ある酒を、丹念に適正規模つくり、目の届く範囲で、責任をもってお届けしたいと思います。小さくても、味は全国トップの水準を目指し、この酒を飲むためにもここに来たいと思っていただける酒をつくることによって、地域の魅力向上に貢献して参りたいと思います。</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>
                                </Container>
                            </TabPane>
                            <TabPane tabId='2'>
                                <Container fluid>
                                    <Row className="justify-content-center">
                                        <Col xs='12' lg='10'>
                                            <Container fluid className="row-content infoContent text-start">
                                                <Row className="mb-3">
                                                    <Col xs='12' lg='6'>
                                                        <Container fluid style={{ fontSize: '0.75rem', color: '#FFF' }}>
                                                            <Row className="py-3">
                                                                <Col>
                                                                    <h6>『酒蔵美術館 ギャラリー玉村本店』</h6>
                                                                </Col>
                                                            </Row>
                                                            <Row className="py-3">
                                                                <Col xs='5'>
                                                                    <strong>所 在 地</strong>
                                                                </Col>
                                                                <Col>
                                                                    <a href="https://www.google.co.jp/maps/search/?api=1&query=〒381-0401　長野県下高井郡山ノ内町大字平穏1163" target="_blank" rel='noreferrer' style={{ color: "#FFF" }}>〒381-0401　長野県下高井郡山ノ内町大字平穏1163</a><br /><small>長電バス：沓野停留所から徒歩約１分</small>
                                                                </Col>
                                                            </Row>
                                                            <Row className="py-3">
                                                                <Col xs='5'>
                                                                    <strong>Tel.</strong>
                                                                </Col>
                                                                <Col>
                                                                    <a href="tel:0269-33-2155" style={{ color: "#FFF" }}>0269-33-2155</a>
                                                                </Col>
                                                            </Row>
                                                            <Row className="py-3">
                                                                <Col>
                                                                    ※団体様に対応できるお手洗い等の設備がございません。<br />
                                                                    誠に恐縮ですが、大型バス・観光バス等でのご来店はお断りする場合がございます。
                                                                </Col>
                                                            </Row>
                                                            <Row className="pt-3" style={{ border: 'none' }}>
                                                                <Col>
                                                                    <strong>営 業 時 間</strong>
                                                                </Col>
                                                            </Row>
                                                            <Row className="pt-3" style={{ border: 'none' }}>
                                                                <Col xs='5'>
                                                                    <p><strong>月曜 &ndash; 土曜日</strong></p>
                                                                    <p><strong>日曜日</strong></p>
                                                                </Col>
                                                                <Col>
                                                                    <p> 9:00 &ndash; 17:30</p>
                                                                    <p>定休日</p>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col className="pb-1">
                                                                    <strong className="text-danger">＊予告なく営業時間などが変更になる場合がございます。</strong>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </Col>
                                                    <Col lg='6' xs='12' className="mb-3">
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.5851148400984!2d138.43200819999998!3d36.7325242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601df48244ebb897%3A0xb2f02882369557f9!2s1163%20Hirao%2C%20Yamanochi%2C%20Shimotakai%20District%2C%20Nagano%20381-0401%2C%20Japan!5e0!3m2!1sen!2sus!4v1659409998549!5m2!1sen!2sus" width="100%" height="100%" style={{ border: "0" }} allowFullScreen="" loading="lazy" title="2" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="text-white text-start">
                                                        <div className="d-md-flex d-none justify-content-center">
                                                            <img className="pb-3" src={EngiImg} alt='Engi Sake' width="75%" />
                                                        </div>
                                                        <p><strong>日本画を中心としたアート・ギャラリー。<br />
                                                            清酒 縁喜、志賀高原ビール、山伏、<br />
                                                            そしてグラスやグッズの販売も行っております。</strong></p>
                                                        <p className="text-danger ps-5">＊2020年4月22日より、ウイルス感染拡大を受け、清酒の試飲は行っておりません。<br />
                                                            また、樽生ビールの有料試飲は１種類のみ、お持ち帰りカップにて提供しております。<br />
                                                            ご理解いただけますと幸いです。</p>
                                                        <p>約150年前に建築された酒蔵の一部を改良し、アート・ギャラリーとして、日本画を中心とした玉村本店当主佐藤家代々のコレクションを展示しています。この地は、戦前から風光明媚なこともあり横山大観等が画室を構えたり、白州次郎・正子といった人々が保養に訪れたりした場所でした。展示している作品のほとんどは、伊藤深水、福田平八郎、山口華楊、上村松篁など、酒が縁で当地を訪れた作家のものです。</p>
                                                        <p>これからも、この静かで、ささやかなギャラリーが、様々な方の交流の場になっていけばうれしいく、酒を通じて地域の文化に貢献できたらと思っています。<br />
                                                            ぜひ、お立ち寄りください。</p>
                                                        <p>会長　佐藤 喜惣治（七代）</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>
                                </Container>
                            </TabPane>
                            <TabPane tabId='3'>
                                <Container fluid>
                                    <Row className="justify-content-center">
                                        <Col xs='12' lg='10'>
                                            <Container fluid className="row-content infoContent text-start">
                                                <Row className="mb-3">
                                                    <Col xs='12' lg='6'>
                                                        <Container fluid style={{ fontSize: '0.75rem', color: '#FFF' }}>
                                                            <Row className="py-3">
                                                                <Col>
                                                                    <h6>『THE FARMHOUSE by TAMAMURA HONTEN』</h6>
                                                                </Col>
                                                            </Row>
                                                            <Row className="py-3">
                                                                <Col xs="5">
                                                                    <strong>所 在 地</strong>
                                                                </Col>
                                                                <Col>
                                                                    <a href="https://www.google.co.jp/maps/search/?api=1&query=〒381- 0401 長野県下高井郡山ノ内町平穏1403-2" target="_blank" rel='noreferrer' style={{ color: "#FFF" }}>〒381- 0401 長野県下高井郡山ノ内町平穏1403-2 (旧志賀山文庫）</a><br /><small>長電バス：スノーモンキーパーク停留所から徒歩約5分</small>
                                                                </Col>
                                                            </Row>
                                                            <Row className="py-3">
                                                                <Col xs="5">
                                                                    <strong>Tel.</strong>
                                                                </Col>
                                                                <Col>
                                                                    <a href="tel:0269-38-1630" style={{ color: "#FFF" }}>0269-38-1630</a>
                                                                </Col>
                                                            </Row>
                                                            <Row className="py-3" style={{ border: 'none' }}>
                                                                <Col>
                                                                    <strong>営業スケジュール</strong>
                                                                </Col>
                                                            </Row>
                                                            <Row style={{ border: 'none' }}>
                                                                <Col xs='5'>
                                                                    <p><strong>月曜</strong></p>
                                                                    <p><strong>火曜</strong></p>
                                                                    <p><strong>水曜 &ndash; 日曜</strong></p>
                                                                </Col>
                                                                <Col>
                                                                    <p>定休日</p>
                                                                    <p>12:00 &ndash; 15:30(15:00 LO) <small>※ランチ営業のみ</small></p>
                                                                    <p>12:00 &ndash; 15:30(15:00 LO)<br />17:00 &ndash; 21:00(20:00 LO)</p>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col className="pb-1">
                                                                    <strong>※月曜日が祝日の場合、翌日火曜日が店休となります。</strong><br />
                                                                    <strong className="text-danger">※予告なく営業時間などが変更になる場合がございます。</strong>
                                                                </Col>
                                                            </Row>
                                                            <Row className="py-3">
                                                                <Col xs="5">
                                                                    <strong>ウェブサイト</strong>
                                                                </Col>
                                                                <Col>
                                                                    <a href="https://www.facebook.com/farmshiga" target="_blank" rel='noreferrer' style={{ color: "#FFF" }}>Facebook / THE FARMHOUSE</a>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </Col>
                                                    <Col lg='6' xs='12' className="mb-3">
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.7126601883074!2d138.4417724!3d36.7294616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601df481d75ec31f%3A0xbbdf0c8b55b18096!2sThe%20Farmhouse!5e0!3m2!1sen!2sus!4v1659380817814!5m2!1sen!2sus" width="100%" height="100%" style={{ border: "0" }} allowFullScreen="" loading="lazy" title="3" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="text-white">
                                                        <div className="d-md-flex d-none justify-content-center">
                                                            <img className="pb-3" src={FarmhouseImg} alt='Farmhouse' width="75%" />
                                                        </div>
                                                        <p><strong>新たな「ご縁」を「喜ぶ」場所に。<br />
                                                            蔵元からも程近い上林温泉に、玉村本店直営のバー&レストランです。</strong></p>
                                                        <p><strong>志賀高原ビールが樽生で最大13種類、<br />
                                                            時にはレア物ビールと出会えることも！ <br />
                                                            ビールや清酒縁喜はもちろん、食にも、コーヒーにもこだわった、<br />
                                                            美味しいものとの出会いが満載です。</strong></p>
                                                        <p>THE FARMHOUSE のある上林（かんばやし）温泉は、スノーモンキーで有名な地獄谷野猿公園の入り口にも程近く、玉村本店から車で数分、歩いても15-20分程です。</p>
                                                        <p>建物は、あの渋沢栄一の孫、信雄氏が昭和13年に東京の目黒に建てた洋風建築を移築したもので、広い庭の木々や草花に囲まれた緑豊かな空間は、ちょっとしたリゾートに来たような心地よさがある場所です。秋になると見事な紅葉に彩られ、栗の木をふんだんにつかった洋館に差し込む光は柔らかく、ゆったりした気持ちにさせてくれます。</p>
                                                        <p>ビアバーですがしっかりと食事もして頂けます。地元の食材を生かし、和、洋がミックスされた、ビールによく合うメニューを揃えています。カフェとしてもご利用頂けるように、週替わりのランチメニューや、本格的なエスプレッソマシンを導入しコーヒーにもこだわっています。</p>
                                                        <p>おみやげに、ご自宅用に、志賀高原ビールや山伏のボトル販売もいたしております。<br />
                                                            お子様連れでも安心なファミリールームあり。</p>
                                                        <p>ご宴会・貸切のご予約やご相談など、お気軽にどうぞ！</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>
                                </Container>
                            </TabPane>
                            <TabPane tabId='4'>
                                <Container fluid>
                                    <Row className="justify-content-center">
                                        <Col xs='12' lg='10'>
                                            <Container fluid className="row-content infoContent text-start">
                                                <Row className="mb-3">
                                                    <Col xs='12' lg='6'>
                                                        <Container fluid style={{ fontSize: '0.75rem', color: '#FFF' }}>
                                                            <Row className="py-3">
                                                                <Col>
                                                                    <h6>『TEPPA ROOM 志賀高原』</h6>
                                                                </Col>
                                                            </Row>
                                                            <Row className="py-3">
                                                                <Col xs="5">
                                                                    <strong>所 在 地</strong>
                                                                </Col>
                                                                <Col>
                                                                    <a href="https://www.google.co.jp/maps/search/?api=1&query=〒381-0401 長野県下高井郡山ノ内町志賀高原一の瀬 シャレ―志賀１Ｆ" target="_blank" rel='noreferrer' style={{ color: "#FFF" }}>〒381-0401 長野県下高井郡山ノ内町志賀高原一の瀬 シャレ―志賀１Ｆ</a><br /><small>長電バス：一の瀬スキー場停留所から徒歩約1分</small>
                                                                </Col>
                                                            </Row>
                                                            <Row className="py-3">
                                                                <Col xs="5">
                                                                    <strong>Tel.</strong>
                                                                </Col>
                                                                <Col>
                                                                    <a href="tel:090-1737-2155" style={{ color: "#FFF" }}>090-1737-2155</a>
                                                                </Col>
                                                            </Row>
                                                            <Row className="py-3" style={{ border: 'none' }}>
                                                                <Col>
                                                                    <strong>営業スケジュール</strong>
                                                                </Col>
                                                            </Row>
                                                            <Row style={{ border: 'none' }}>
                                                                <Col xs="5">
                                                                    <p><strong>月曜</strong></p>
                                                                    <p><strong>火曜 &ndash; 金曜 </strong></p>
                                                                    <p><strong>土曜・日曜</strong></p>
                                                                </Col>
                                                                <Col>
                                                                    <p>定休日</p>
                                                                    <p>16:00 &ndash; 21:00</p>
                                                                    <p>11:30 &ndash; 15:00<br />17:00 &ndash; 21:00</p>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col className="pb-1">
                                                                    <strong>※月曜日が祝日の場合、翌日火曜日が店休となります。</strong><br />
                                                                    <strong className="text-danger">※予告なく営業時間などが変更になる場合がございます。</strong>
                                                                </Col>
                                                            </Row>
                                                            <Row className="py-3">
                                                                <Col xs='5'>
                                                                    <strong>ウェブサイト</strong>
                                                                </Col>
                                                                <Col>
                                                                    <a href="https://www.facebook.com/teppashiga/" target="_blank" rel='noreferrer' style={{ color: "#FFF" }}>Facebook / Teppa Room志賀高原</a>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </Col>
                                                    <Col lg='6' xs='12' className="mb-3">
                                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12790.816970272721!2d138.49467053638296!3d36.729663729408685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601df0261f87407d%3A0x8fe9ebbcd6eb41b3!2sChalet%20Shiga!5e0!3m2!1sen!2sus!4v1659411633198!5m2!1sen!2sus" width="100%" height="100%" style={{ border: "0" }} allowFullScreen="" loading="lazy" title="4" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="text-white">
                                                        <div className="d-md-flex d-none justify-content-center">
                                                            <img className="pb-3" src={TeppaImg} alt='Farmhouse' width="75%" />
                                                        </div>
                                                        <p><strong className="text-danger">※2021-2022シーズンは終了致しました。今シーズンもありがとうございました！</strong></p>
                                                        <p><strong>冬季限定！<br />
                                                            志賀高原一の瀬スキーエリアの「ホテルシャレー志賀1階」で、<br />
                                                            工場直送の新鮮な志賀高原ビールの樽生8種類と <br />
                                                            ボトルビールがお楽しみいただけます。</strong></p>
                                                        <p>玉村本店直営ビアパブならではの、樽生ビールの贅沢なラインナップ。<br />
                                                            ビールがすすむフードメニューに、TRUNK COFFEEやデザートも多数充実！</p>
                                                        <p>冬季限定オープン。</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>
                                </Container>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Locations;