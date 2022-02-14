import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import fondo from '../assets/fondo.jpg';

const Container = styled.div`
    background: url(${fondo}) no-repeat;
    height: 100vh;
    width: 100%;
    padding-top: 5%;
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr;

`;

const Cards = styled.div`
    width: 180px;
    height: 160px;
    margin: 22px;
    margin-left: 5%;
    margin-top: 70%;
    padding: 5px;
    background: #417048;
    color: #fff;
    border-radius: 12px;
    font-size: 20px;
    font-family:'century gothic';
    text-align: center;
`;

const Name = styled.h4`

`;

const Id = styled.span`

`;

const Sold = styled.span`

`;

const Stock = styled.span`

`;

const MenuButton = styled.button`
    background: #fff;
    color: #417048;
    border: none;
    border-radius: 8px;
    padding: 5px;
`;

const MenuL = styled(Link)`      //Estilo link
    text-decoration:none;
`;

export default function Registration() {
  const products = useSelector(state => state.shoppingReducer.products);
    return (
        <Container>
            <MenuL to="/">
                <MenuButton> Volver</MenuButton>
            </MenuL>
            {products.map((product) =>
                <Cards key={product.id}>
                    <Id>{product.id}</Id>
                    <Name>{product.name}</Name>
                    <Stock>Cantidad: {product.stock}</Stock><br></br>
                    <Sold>Vendidos: {product.sold}</Sold>
                </Cards>
            )}
        </Container>
    )
}