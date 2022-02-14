import styled from "styled-components";
import { Link } from 'react-router-dom';

const MenuButton = styled.button`

`;

const MenuL = styled(Link)`      //Estilo link
    text-decoration:none;
`;

export default function Home() {

        
    return (
        <>
            <MenuL to="/shopping">
                <MenuButton>Comprar</MenuButton>
            </MenuL>
            <MenuL to="/registration">
                <MenuButton>Registro</MenuButton>
            </MenuL>
            <MenuL to="/inventory">
                <MenuButton>Inventario</MenuButton>
            </MenuL>
        </>
    )
}