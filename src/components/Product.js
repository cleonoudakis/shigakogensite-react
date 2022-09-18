import { Card, CardBody, CardHeader, Modal, ModalHeader, ModalBody } from "reactstrap";
import { useState } from "react";

const Product = ({ product }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Card onClick={() => setOpen(true)} className='gridItem'>
                <CardHeader>
                    <img src={product.thumb} alt='' width='100%'/>
                </CardHeader>
                <CardBody className="text-start">
                    <strong>{product.name}</strong><br />
                    <strong>{product.size}</strong><br />
                    <span><small>{product.tagline}</small></span><br />
                    <span><small>{product.price}円 (税込)</small></span>
                </CardBody>
            </Card>
            <Modal isOpen={isOpen}>
                <ModalHeader toggle={() => setOpen(false)}>
                    {product.name}
                </ModalHeader>
                <ModalBody>
                    <img src={product.img} alt ={product.name} /> <br/>
                    {product.description}
                </ModalBody>
            </Modal>
        </>
    );
}

export default Product;