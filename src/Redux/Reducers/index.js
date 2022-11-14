const initialState = {
    products: [],
    cart:[]
};

const rootReducer = (state = initialState, action)=>
{
    switch(action.type)
    {
        case "GET_ALL_PRODUCTS": 
        return {...state, products:action.payload};

        case "ADD_TO_CART": 
        // const newState = {...state}
        // newState.cart.push(action.payload);
        // return newState;
        return {...state, cart:[...state.cart,action.payload]};

        case "REMOVE_FROM_CART":
        const newState1 = {...state}
        newState1.cart.splice(action.payload,1);
        return newState1;
        // return {...state, cart:state.cart.filter((item,index)=>index!==action.payload)};

        case "ADD_NEW_PRODUCT":
        // const newState2 = {...state}
        // newState2.products.push(action.payload);
        // return newState2;
        return {...state, products:[...state.products,action.payload]};

        default : return state;
    }
}
export default rootReducer;