import { useSelector,useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import fondo from '../assets/fondo.jpg';

import { sellProduct } from "../stateManagement/actions/shoppingActions";

const Container = styled.div`
    background: url(${fondo}) no-repeat;
    height: 100vh;
    width: 100%;
    padding-top: 12%;
`;

const Cards = styled.div`
    width: 180px;
    height: 200px;
    margin: 22px;
    margin-left: 5%;
    border: 1px solid #2A5230;
    color: #2A5230;
    border-radius: 12px;
    font-size: 20px;
    font-family:'century gothic';
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
                    <Name>{product.name}</Name><br></br>
                    <Description>{product.description}</Description><br></br>
                    <Price>Precio: {product.price}</Price><br></br>
                    <Stock>Cantidad: {product.stock}</Stock>
                    <BuyButton onClick={()=>handleButton(product.id)}>Comprar</BuyButton>
                </Cards>
            )}
        </Container>
    )
}