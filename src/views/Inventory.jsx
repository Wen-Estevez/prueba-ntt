import { useEffect,useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import { getInventory } from "../services/getInfo";

const Container = styled.div`

`;

const Value = styled.h5`

`;

const Title = styled.h2`

`;

const MenuButton = styled.button`

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
            {properties?.map((property) =>  <Title key={i++}>{property}</Title> )}
            {values?.map((value) => <Value key={i++}>{value}</Value>)}
            
        </Container>
    )
}