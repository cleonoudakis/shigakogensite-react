import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import StoreFilterMenu from "../components/StoreFilterMenu";
import { selectAllProducts, selectCurrentProducts } from "./products/productsSlice";

export const Store = () => {
    let products = useSelector(selectCurrentProducts);
    const allProducts = useSelector(selectAllProducts);
    if (!products.length) products = allProducts;

    return (
        <>
            <Header />
            <Container fluid className="my-5">
                <Row>
                    <Col xs='0' md='2' className="d-none d-md-block">
                        <StoreFilterMenu />
                    </Col>
                    <Col xs='12' md='10'>
                        <Container fluid>
                            <Row>
                                <Col className="grid">
                                    {products.map((product) => {
                                        return (
                                            <Product key={product.id} product={product} />
                                        )
                                    })}
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Store;