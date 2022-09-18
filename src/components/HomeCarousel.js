import { Carousel, CarouselItem } from 'reactstrap';
import { Component } from 'react';
import PropTypes from 'prop-types'
import HomeSlide1 from '../app/assests/img/home-slide-1.jfif';
import HomeSlide2 from '../app/assests/img/home-slide-2.jfif';
import HomeSlide3 from '../app/assests/img/home-slide-3.jfif';

const caption1 = <span className="carousel-text-bl stroke">
    「この地ならではの、自分たちが飲みたいビール」を目指し、<br />
    なによりこだわるホップをはじめ、酒米、大麦・小麦、蕎麦、ブルーベリーと、<br />
    楽しみながらも真剣に「農」に直接関わって造っています。
</span>;
const caption2 = <span className="carousel-text-tr stroke">
    信州を代表する酒造好適米「美山綿」を、<br />
    杜氏をはじめ蔵人自らが栽培し、<br />
    この地の寒冷な天候と良質な水を活かした、<br />
    キレのある旨口の酒を、丹念に醸しております。
</span>
const caption3 = <span className="carousel-text-br stroke">
    最高の品質を求めて、最新の仕組み設備を導入。<br />
    でも、いたずらに規模を追うのではなく、<br />
    小規模だからこそできる、非効率な「遊び」を楽しむのが、もう一つの目的。
</span>
const items = [{
    src: HomeSlide1,
    alt: 'スライド１',
    caption: caption1,
    header: ' '
},
{
    src: HomeSlide2,
    alt: 'スライド２',
    caption: caption2,
    header: ' '
},
{
    src: HomeSlide3,
    alt: 'スライド３',
    caption: caption3,
    header: ' '
}];

class HomeCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0, direction: 'right' };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    getChildContext() {
        return { direction: this.state.direction };
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex =
            this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex =
            this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item, idx) => {
            return (
                <CarouselItem
                    key={idx}
                    className={'slide' + idx}
                    onExited={this.onExited}
                    onExiting={this.onExiting}
                >
                    <img className='d-block w-100 hide' src={item.src} alt={item.alt} />
                    <div className='carousel-text'>{item.caption}</div>
                </CarouselItem>
            );
        })

        return (
            <Carousel interval='7000' next={this.next} previous={this.previous} activeIndex={activeIndex}>
                {slides}
            </Carousel>
        );
    }

}

HomeCarousel.childContextTypes = {
    direction: PropTypes.string
};

export default HomeCarousel;