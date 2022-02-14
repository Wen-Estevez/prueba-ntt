export const SELL_PRODUCT = 'SELL_PRODUCT';

//Acciones para los productos

export function sellProduct(payload) {
    return { type: SELL_PRODUCT,payload:payload};
  }