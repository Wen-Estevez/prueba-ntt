import { useSelector,useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import { sellProduct } from "../stateManagement/actions/shoppingActions";

const Container = styled.div`

`;

const Cards = styled.div`

`;

const Name = styled.h4`

`;

const Description = styled.span`

`;

const Price = styled.span`

`;

const Stock = styled.span`

`;

const BuyButton = styled.button`

`;

const MenuButton = styled.button`

`;

const MenuL = styled(Link)`      //Estilo link
    text-decoration:none;
`;

export default function Shopping() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.shoppingReducer.products);
    
    function handleButton(id) {
    dispatch(sellProduct(id))
    };
    console.log(products)
    return (
        <Container>
            <MenuL to="/">
                <MenuButton>Volver</MenuButton>
            </MenuL>
            {products.map((product) =>
                <Cards key={product.id}>
                    <Name>{product.name}</Name>
                    <Description>{product.description}</Description>
                    <Price>{product.price}</Price>
                    <Stock>{product.stock}</Stock>
                    <BuyButton onClick={()=>handleButton(product.id)}>Comprar</BuyButton>
                </Cards>
            )}
        </Container>
    )
}