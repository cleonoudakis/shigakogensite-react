import { Container, Row, Col, Label, Collapse } from "reactstrap";
import { selectAllProducts, selectCurrentProducts, selectProductByStyle } from "../pages/products/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategoryState, updateTabState } from "../pages/products/categorySlice";

export const StoreFilterMenu = () => {
    const products = useSelector(selectAllProducts);
    const categories = useSelector(getAllCategoryState);
    const currentProducts = useSelector(selectCurrentProducts);
    const dispatch = useDispatch();
    const uniqueStyle = [...new Set(products.map((product) => product.style))];
    const uniqueType = [...new Set(products.map((product) => product.type))];

    const runFilter = (value) => {
        const filter = {
            style: value
        }
        dispatch(selectProductByStyle(filter));
    }

    const categoryToggle = (value) => {
        const categoryState = {
            index: parseInt(value),
            open: !categories[parseInt(value)]
        }
        dispatch(updateTabState(categoryState));
    }

    return (
        <Container fluid className='text-start' style={{marginRight: '-10px', borderRadius: '5px', border: '2px solid black', top: '122px'}}>
            <Row className="pt-3">
                <Col>
                    <span style={{cursor: 'pointer'}} onClick={() => categoryToggle(0)}>
                        <h6>Category</h6>
                    </span>
                    <Collapse isOpen={categories[0]}>
                        {uniqueType.map((item, idx) => {
                            return (
                                item && (
                                    <div key={idx}>
                                        <input type='checkbox' checked />
                                        <Label style={{paddingLeft: '10px', fontSize: '0.75rem'}}>{item}</Label>
                                    </div>
                                )
                            )
                        })}
                    </Collapse>
                </Col>
            </Row>
            <Row className="pt-3">
                <Col>
                    <span style={{cursor: 'pointer'}} onClick={() => categoryToggle(1)}>
                        <h6>Styles</h6>
                    </span>
                    <Collapse isOpen={categories[1]}>
                        {uniqueStyle.map((item, idx) => {
                            console.log(item);
                            return (
                                item && (
                                    <div key={idx}>
                                        <input type='checkbox' checked onChange={() => runFilter(item)}/>
                                        <Label style={{paddingLeft: '10px', fontSize: '0.75rem'}}>{item}</Label>
                                    </div>
                                )
                            )
                        })}
                    </Collapse>
                </Col>
            </Row>
        </Container>
    );
}

export default StoreFilterMenu;