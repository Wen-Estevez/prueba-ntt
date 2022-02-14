import {SELL_PRODUCT}from '../actions/shoppingActions';

//Reducer para los productos

const INITIAL_STATE = {             //Inicializa los productos
    products:[
        {
            id: 1,
            name: "Computador",
            description: "Portatil Asus Corei7 ",
            price:"$2.000.000",
            stock: 20,
            sold:0, 
        },
        {
            id: 2,
            name: "Mouse",
            description: "Mouse inalambrico asus",
            price:"$100.000",
            stock: 20,
            sold:0, 
        },
        {
            id: 3,
            name: "Teclado",
            description: "Teclado inalambrico asus",
            price:"$200.000",
            stock: 20,
            sold:0, 
        },
        {
            id: 4,
            name: "Audifonos",
            description: "Audifonos diadema logitech",
            price:"$80.000",
            stock: 20,
            sold:0, 
        },
        {
            id: 5,
            name: "Impresora",
            description: "Impresora laser epson",
            price:"$400.000",
            stock: 20,
            sold:0, 
        }
    ]     
}

const shoppingReducer = (state = INITIAL_STATE, { type, payload }) => {
    function searchProduct() {
        const copy = [...state.products]; 
        for (let i = 0; i<copy.length; i++) {
            if (payload === copy[i].id) {
                copy[i].stock = copy[i].stock - 1;
                copy[i].sold = copy[i].sold + 1;
            }
        }
        return copy
    }  
    
    switch  (type){
        case SELL_PRODUCT:                      //Vende un producto
            const products= searchProduct()
            return {
                ...state,
                products:products                
            }
        default: return state;
    }
}

export default shoppingReducer;