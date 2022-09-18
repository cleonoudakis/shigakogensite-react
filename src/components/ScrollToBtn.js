import { Button } from 'reactstrap';
import { useState } from 'react';

const ScrollToBtn = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 20) setVisible(true);
        else if (scrolled <= 20) setVisible(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button id='scrollTo' className='btn-lg btn-dark' onClick={scrollToTop} style={{display: visible ? 'block' : 'none'}}>
            <i className='fa fa-angle-double-up' />
        </Button>
    );
};

export default ScrollToBtn;