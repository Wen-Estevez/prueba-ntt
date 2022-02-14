import axios from "axios";

export async function getInventory() {
    try {
        const inventory = await axios.get(`https://petstore.swagger.io/v2/store/inventory`);
        return inventory.data
    }
    
    catch (error) {
        console.log(error)
    }
}