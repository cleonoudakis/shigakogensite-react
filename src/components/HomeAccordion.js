import Accordion1 from '../app/assests/img/engi-kodawari-img-01.jpg'
import Accordion2 from '../app/assests/img/engi-kodawari-img-02.jpg'
import Accordion3 from '../app/assests/img/engi-kodawari-img-03.jpg'
import AccordionItem from './AccordionItem'

const HomeAccordion = () => {
    const items = [
        {
            title: '長野の酒米100%、自家栽培米　美山錦',
            image: Accordion1,
            text: '仕込みも終わり、夏が近づくと、冷涼な気候を生かし、酒造好適米「美山錦」を蔵人自らが、作付けし育てます。標高が高く、日照時間も長い土地柄は、この米との相性もいいようで、秋には良質の酒米が収穫されます。原材料からすべてを一貫生産できるのは、なににも勝る贅沢だと思っております。手塩にかけて育てた米を使っての仕込みには、杜氏をはじめ蔵人一同、一層熱が入ります。現状は、まだ一部の商品にしか使用できていませんが、今後も徐々に自家生産の割合を増やしていきたいと考えています。'
        },
        {
            title: '志賀高原深層の湧水',
            image: Accordion2,
            text: '仕込み水は、志賀高原の雪解け水が長い歳月を経て、約5万年前の噴火でできた溶岩層深く浸透したものです。猿が入る温泉として有名な「地獄谷温泉」の少し上、御岳の修験者の場でもあった、仏岩という場所に湧き出た所が源泉です。ミネラルの含有の低い軟水のおいしさは、「縁喜」の味を決定づける重要な要因となっています。'
        },
        {
            title: '長期低温発酵',
            image: Accordion3,
            text: '弊社では、仕込み開始からもろみをしぼるまでの期間を、普通酒でも30日程度、大吟醸に至っては45日間程度と、非常に長くとっています。生産性という面では、非効率的ですが、厳寒の冬、低温で長期間醗酵させることによって、「縁喜」ならではの味わいが醸しだされます。'
        }];

    return (
        <>
            <h2 className='text-start'>こだわり</h2>
            <div id="engiAccordion" className="text-start text-white">
                {items.map((item, idx) => {
                    return (
                        <AccordionItem item={item} key={idx} />
                    );
                })}
            </div>
        </>
    )
}

export default HomeAccordion;