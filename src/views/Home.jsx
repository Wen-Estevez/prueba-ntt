import styled from "styled-components";
import { Link } from 'react-router-dom';
import fondo from '../assets/fondo.jpg';

const Container = styled.div`
    background: url(${fondo}) no-repeat;
    height: 100vh;
    width: 100%;
`;
const MenuButton1 = styled.button`
    width: 180px;
    height: 120px;
    margin: 22px;
    margin-left: 5%;
    margin-top:18%;
    border: 1px solid #2A5230;
    color: #2A5230;
    border-radius: 12px;
    font-size: 20px;
    font-family:'century gothic';
    
    &:hover{
        transform: scale(1.1);
        background-color: #2A5230;
        color: #fff;
    }
`;

const MenuButton2 = styled.button`
    width: 180px;
    height: 120px;
    margin: 22px;
    border-radius: 12px;
    border: 1px solid #2A5230;
    color: #2A5230;
    font-size: 20px;
    font-family:'century gothic';
    
    &:hover{
        transform: scale(1.1);
        background-color: #2A5230;
        color: #fff;
    }
`;
const MenuButton3 = styled.button`
    width: 180px;
    height: 120px;
    margin: 22px;
    border-radius: 12px;
    border: 1px solid #2A5230;
    color: #2A5230;
    font-size: 20px;
    font-family:'century gothic';

    &:hover{
        transform: scale(1.1);
        background-color: #2A5230;
        color: #fff;
    }
`;
const MenuL = styled(Link)`      //Estilo link
    text-decoration:none;
`;

export default function Home() {

        
    return (
        <Container>
            <MenuL to="/shopping">
                <MenuButton1>Comprar</MenuButton1>
            </MenuL>
            <MenuL to="/registration">
                <MenuButton2>Registro</MenuButton2>
            </MenuL>
            <MenuL to="/inventory">
                <MenuButton3>Inventario</MenuButton3>
            </MenuL>
        </Container>
    )
}