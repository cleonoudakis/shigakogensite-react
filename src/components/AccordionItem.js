import { CardHeader, CardBody, Collapse, Card } from 'reactstrap';
import { useState } from 'react';

const AccordionItem = ({ item }) => {
    const {title, image, text, key} = item;
    const [toggleQuestion, setToggleQuestion] = useState(false);
    return (
        <Card className='accordion-item' key={key} style={{backgroundColor: 'transparent'}}>
            <CardHeader onClick={() => setToggleQuestion(!toggleQuestion)} className={toggleQuestion ? 'show accordion-button' : 'accordion-button'}>
                {title}
            </CardHeader>
            <Collapse isOpen={toggleQuestion}>
                <CardBody>
                    <img src={image} alt="" className='mb-3 w-100' />
                    <p className='text-start'>{text}</p>
                </CardBody>
            </Collapse>
        </Card>
    );
}

export default AccordionItem;