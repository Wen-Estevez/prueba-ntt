import { useEffect,useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import fondo from '../assets/fondo.jpg';

import { getInventory } from "../services/getInfo";

const Container = styled.div`    
    background: url(${fondo}) no-repeat;
    height: 89vh;
    width: 100%;
    padding-top: 5%;
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr 1fr;
`;
const ContTittle = styled.div`
    grid-column: 1 / 1;
`;
const ContValue = styled.div`
    grid-column: 2 / 2;
`;
const Value = styled.h5`
    margin:0px;
    font-size: 20px;
    color: #417048;
`;

const Title = styled.h2`
    margin:0px;
    font-size: 20px;
    margin-left: 25%;
    color: #25492a;
`;

const MenuButton = styled.button`
    background: #fff;
    color: #25492a;
    border: none;
    border-radius: 8px;
    padding: 5px;
`;

const MenuL = styled(Link)`      //Estilo link
    text-decoration:none;
`;

export default function Inventory() {
    let i = 0;
    const [inventory, setInventory] = useState({});
    const [properties, setProperties] = useState([]);
    const [values, setValues] = useState([]);
      
    function orderInventory() {                     //Ordena los datos del inventario y los guarda en dos estados
        let props = [];
        let vals = [];
        for (const property in inventory) {
            props.push(property);
            vals.push(inventory[property]);
        }
        setProperties(props);
        setValues(vals);
    };
    
    useEffect(() => {                                 //Cuando se monta el componente trae la informacion del back
        async function fetch() {
            setInventory(await getInventory())
        }
        fetch();
    }, []);
    
    useEffect(() => orderInventory(),               // eslint-disable-next-line react-hooks/exhaustive-deps
        [inventory]                                 //Cuando el inventario llega del back, lo ordena
    );
    
    return (
        <Container>
            <MenuL to="/">
                <MenuButton>Volver</MenuButton>
            </MenuL>
            <ContTittle>
                {properties?.map((property) =>  <Title key={i++}>{property}</Title> )}
            </ContTittle>
            <ContValue>
                {values?.map((value) => <Value key={i++}>{value}</Value>)}
            </ContValue>
        </Container>
    )
}