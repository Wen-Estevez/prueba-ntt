import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Container = styled.div`

`;

const Cards = styled.div`

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

`;

const MenuL = styled(Link)`      //Estilo link
    text-decoration:none;
`;

export default function Registration() {
  const products = useSelector(state => state.shoppingReducer.products);
    return (
        <Container>
            <MenuL to="/">
                <MenuButton>Volver</MenuButton>
            </MenuL>
            {products.map((product) =>
                <Cards key={product.id}>
                    <Id>{product.id}</Id>
                    <Name>{product.name}</Name>
                    <Stock>{product.stock}</Stock>
                    <Sold>{product.sold}</Sold>
                </Cards>
            )}
        </Container>
    )
}