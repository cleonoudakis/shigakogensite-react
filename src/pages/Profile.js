import { Container, Row, Col } from 'reactstrap'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Visa from '../app/assests/img/UI/visa.png'
import Amex from '../app/assests/img/UI/amex.png'
import Diners from '../app/assests/img/UI/diners.png'
import JCB from '../app/assests/img/UI/jcb.png'
import MasterCard from '../app/assests/img/UI/mastercard.png'
import Paypay from '../app/assests/img/UI/paypay.png'
import ScrollToBtn from '../components/ScrollToBtn';

const Profile = () => {
    return (
        <>
            <Header />
            <ScrollToBtn />
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col xs='12' lg='8'>
                        <Container className='mt-5 row-content infoContent text-start'>
                            <Row>
                                <Col>
                                    <h3>特定商取引法に基づく表記</h3>
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>販売業者</strong>
                                </Col>
                                <Col>株式会社 玉村本店</Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>運営統括責任者名</strong>
                                </Col>
                                <Col>佐藤 栄吾 ・ 轟 浩一</Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>郵便番号</strong>
                                </Col>
                                <Col>381-0401</Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>住所</strong>
                                </Col>
                                <Col>
                                    <a href='https://www.google.co.jp/maps/search/?api=1&query=長野県下高井郡山ノ内町大字平穏1163' target='_blank' rel='noreferrer'>
                                        長野県下高井郡山ノ内町大字平穏1163
                                    </a>
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>商品代金以外の料金の説明</strong>
                                </Col>
                                <Col>
                                    <p>
                                        販売価格とは別に配送料をお預かりいたします。代引き手数料（330円）、振込手数料はお客様ご負担にてお願い致します。
                                    </p>
                                    <p>
                                        1件あたりのお届け送料：本州・四国・九州は1,200円 、北海道は1,600円 、沖縄は1,800円です。
                                        ※全てのビールと発泡酒・生酒等の商品はクール便で発送されますが、クール代を別途ご請求することはございません。
                                    </p>
                                    <p>
                                        ラッピング（+100円）について： 梱包箱・化粧箱の全体を、包装紙にて包む状態です。 （ビール330ml24本箱、グラス等の一部商品は承れません） のし紙をご希望の場合は「内のし」になります
                                    </p>
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>申込有効期限</strong>
                                </Col>
                                <Col>
                                    ご注文後7日以内といたします。ご注文後7日間ご入金がない場合は、ご購入の意思がないものとし、注文を自動的にキャンセルとさせていただきます。（郵便振替の郵便局窓口でお手続きされるお客様のみ4日以内にお振替をお願いいたします。）<br />
                                    また、品切れの場合、メールにてご連絡いたします。 ご注文いただいた商品の完売、または事情により発送がが困難な場合は、キャンセルとさせていただく場合がございます。
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>不良品</strong>
                                </Col>
                                <Col>
                                    商品がお手元に到着しましたら、商品の確認をしてください。商品の性質上、お客様の都合による返品はお受けいたしかねますのでご了承ください。弊社では製品に万全を期していますが、万一不備がございましたら、ご連絡の上ご返送ください。すみやかに送料とお取替え商品をお送りいたします。<br />
                                    （ビール・発泡酒の成分が沈殿する事がありますが、品質には問題ございません。）
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>販売数量</strong>
                                </Col>
                                <Col>
                                    各商品ページにてご確認ください。特に限定品は在庫本数が変動いたします。売り切れの際はご容赦下さいませ。
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>引渡し時期</strong>
                                </Col>
                                <Col>
                                    ご入金確認後、3日前後で商品を発送できる様に努めます。<br />
                                    但し、限定品発売時など、ご注文が集中した場合には、お届けが遅れる場合がありますのでご了承ください。<br />
                                    ご注文後、ご注文確認メールが届かない場合は、入力ミスなどによりご注文されていないものとなりますので、ご注意お願いいたします。<br />
                                    配送業社は基本的に【ゆうパック】を使用します。（場合によっては佐川急便でお届けいたします。業者のご指定はできません。）<br />
                                    ご注文日から2週間以上先のお届け日指定（限定品などのお取り置き）は承れません。<br />
                                    運送中の商品破損による再発送、天候や道路事情など、不慮の事態による遅配は何卒ご容赦下さいませ。
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>お支払い方法</strong>
                                </Col>
                                <Col>
                                    お支払いは以下の中よりお選び頂けます。
                                    <ul>
                                        <li>クレジットカード決済</li>
                                        <li>PayPay</li>
                                        <li>代金引換</li>
                                        <li>銀行振込</li>
                                        <li>郵便振替（ゆうちょダイレクト）</li>
                                    </ul>
                                    お支払い方法ごとの諸注意はこちらからご確認ください。
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>お支払い期限</strong>
                                </Col>
                                <Col>
                                    郵便振替、銀行振込ともにご注文後5日以内にお振込下さい。 （郵便振替を郵便局の窓口でお手続きされるお客様は、ご入金確認にお時間を要しますので、お早めにお願いいたします。）
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>返品期限</strong>
                                </Col>
                                <Col>
                                    商品到着後７日以内とさせていただきます。　商品お受け取りから７日以内にご連絡ください。ご相談のうえ、返金または、交換いたします。　こちらの過失については、送料は当店で負担いたしますので、送料着払いにてお送りください。　商品の性質上、お客様の都合による返品はお受けいたしかねますのでご了承ください。　栓を開けた後の返品・交換はお受けしておりませんのでご了承ください。
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>返品送料</strong>
                                </Col>
                                <Col>
                                    不良品に該当する場合は当方で負担いたします。
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>サービス名</strong>
                                </Col>
                                <Col>
                                    株式会社玉村本店
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>電話番号</strong>
                                </Col>
                                <Col>
                                    <a href='tel:0120-880685'>0120-880685</a>
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>公開メールアドレス</strong>
                                </Col>
                                <Col>
                                    <a href='mailto:info@tamamura-honten.co.jp'>info@tamamura-honten.co.jp</a>
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>ホームページアドレス</strong>
                                </Col>
                                <Col>
                                    <a href='http://www.tamamura-honten.co.jp'>http://www.tamamura-honten.co.jp</a>
                                </Col>
                            </Row>
                        </Container>
                        <Container id='shipping' className='mt-5 row-content infoContent text-start'>
                            <Row>
                                <Col>
                                    <h3>配送・送料について</h3>
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>郵便局もしくは佐川急便</strong>
                                </Col>
                                <Col>
                                    <strong>配送会社：</strong><br />
                                    原則的に郵便局の「ゆうパック」、または佐川急便でのお届けとなります。<br />
                                    配送会社のご指定はできません。
                                    <p>
                                        ご注文内容によって、「ネコポス便」でのお届けとなります。
                                    </p>
                                    <p>
                                        <strong>送料：</strong><br />
                                        本州・四国・九州：1200円<br />
                                        北海道：1600円<br />
                                        沖縄：1800円<br />
                                        ※ビール・生酒等の要冷蔵品はクール便でお届けいたしますが、クール代を別途ご請求することはございません。<br />
                                        ※一部離島で決済画面の送料金額と実際の配送料金が異なる場合がございます。その際は別メールでご連絡いたします。<br />
                                        ※ネコポス便は全国一律275円です。
                                    </p>
                                    <p>
                                        <strong>指定日配達・時間帯指定：</strong><br />
                                        ※着日指定は、ご注文日より６日後以降にて承ります。<br />
                                        (着日指定をされない場合は、代金決済確認後、ご注文日より<br />
                                        6日後以降でなくても、準備が出来しだい発送いたします。）<br />
                                        ※以下の時間帯指定が可能です。<br />
                                        ①午前中 ②12時～14時 ③14時～16時 ④16時～18時 ⑤18時～21時<br />
                                        ※お届け日に関して等、特記事項がございましたら、「備考欄」にてお申し付けください。但し、ご注文日から2週間以上先のお届け日指定（限定品などのお取り置き）は承れません。<br />
                                        ※日時指定をいただいても、道路状況、天候等の諸事情で到着が遅れる場合がございます。ご了承くださいませ。<br />
                                        ※送り状番号の連絡が必要の場合は「備考欄」にその旨をご記載くださいませ。商品発送のご連絡メールにてご案内させていただきます。
                                    </p>
                                    <p>
                                        <strong>その他（お願い）：</strong><br />
                                        ※すぐに配送可能な商品を別々にご注文いただいた場合、ひとつにまとめて発送する場合がございます。<br />
                                        ※特別な事情がある場合は、お断りなく他の運送会社にて発送する場合がございます。<br />
                                        ※注文者様ご自身宛で、ご自宅以外への発送をご指定いただきました場合、納品書は発送商品に同梱させていただきます。
                                    </p>
                                    <p>
                                        <strong>330mlビール単 品（ギフト対応品）を組み合わせて、【ご贈答】にお使いいただく際の、ご注文本数について。</strong><br />
                                        既製のセット商品ではなく、それぞれの単品を組み合わせてご贈答にお使い頂く場合、無料梱包箱の入り数、6本・12本・24本以外の合計本数ですと、それぞれの箱に対して端数となり、隙間スペースができてしまいます。ご留意下さいませ。
                                    </p>
                                    <p>
                                        お手数ではございますが、ご対応のほどお願い申し上げます。
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                        <Container id='method' className='mt-5 row-content infoContent text-start'>
                            <Row>
                                <Col>
                                    <h3>支払い方法について</h3>
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>クレジットカード決済</strong>
                                </Col>
                                <Col>
                                    <p><img src={Visa} alt='Visa' height='32px' /> <img src={Diners} alt='Diners' height='32px' /> <img src={MasterCard} alt='MasterCard' height='32px' /> <img src={JCB} alt='JCB' height='32px' /> <img src={Amex} alt='American Express' height='32px' /></p>
                                    <p>原則、弊社から商品を発送した当日にクレジットカードの課金をさせていただきます。</p>
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>PayPay</strong>
                                </Col>
                                <Col>
                                    <p><img src={Paypay} alt='PayPay' height='16px' /></p>
                                    <p>
                                        原則、弊社から商品を発送した当日にPayPayからの課金をさせていただきます。<br />
                                        ※QRコードの有効期限を過ぎてしまいますと、支払いができません。<br />
                                        ※万が一支払いができず、再度ご注文頂きました場合は、備考欄またはお問い合わせフォームからお知らせください。
                                    </p>
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>代金引換</strong>
                                </Col>
                                <Col>
                                    <p>
                                        商品をお届けいたします配達局員へ、商品代金をお支払い下さい。
                                    </p>
                                    <p>
                                        ※別途<strong>代引き手数料330円</strong>がご負担となります。<br />
                                        ※お支払い総額（税込）が30万円以上の場合、代金引換にて発送出来ません。恐れ入りますが他のお支払方法をお選び下さい。<br />
                                        ※グッズのみの発送で「ネコポス」ご利用の際は、代引きでの手配はいたしかねます。
                                    </p>
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>銀行振込</strong>
                                </Col>
                                <Col>
                                    <p>
                                        お振り込み先は受注メールに記載させていただきます。
                                    </p>
                                    <p>
                                        ※振込手数料はお客様のご負担となります。<br />
                                        ※お振込名義は注文されたお客様名と同名義でお願いいたします。<br />
                                        ※ご注文日より5日以内にお振込をお願いいたします。<br />
                                        ※お振込のご入金確認後、商品を発送いたします。<br />
                                        ※銀行の振込先はPayPay銀行のみです。八十二銀行などの弊社口座へのお振り込みはご容赦ください。
                                    </p>
                                </Col>
                            </Row>
                            <Row className='py-3'>
                                <Col>
                                    <strong>郵便振替（ゆうちょダイレクト）</strong>
                                </Col>
                                <Col>
                                    <p>
                                        お振り込み先は受注メールに記載させていただきます。
                                    </p>
                                    <p>
                                        ゆうちょダイレクトをご利用のお客様：<br />
                                        ※振替に手数料がかかることがあります。その際はお客様のご負担となります。<br />
                                        ※ご注文日より5日以内に振替の手続きをお願いいたします。<br />
                                        ※振替のご入金確認後、商品を発送いたします。
                                    </p>
                                    <p>
                                        <strong>郵便局の窓口で</strong>お手続きされるお客様：<br />
                                        ※振替お手続きをいただいてから、ご入金確認がとれるまでお時間を要しますので、弊社からの受注メールご確認後、なるべくお早め（4日以内）のお手続きをお願い致します。<br />
                                        ※振替のご入金確認後、商品を発送いたします。
                                    </p>
                                    <p>
                                        <strong>お急ぎのご希望のお届け日がある場合は、クレジットカードや代引などの決済方法にてご注文いただきますと、スムーズなお届けが可能です。</strong>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Profile;