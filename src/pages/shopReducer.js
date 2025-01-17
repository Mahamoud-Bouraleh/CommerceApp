export const initialState ={
    product: [],
    total: 0,
}

const shopReducer = (state , action) =>{
    const {type , payload} = action;
    switch (type){
        case "ADD_TO_CART":
            return {
                ...state,
                products: payload.products,
            };
            case "REMOVE_FROM_CART":
                return {
                    ...state,
                products: payload.products,
                }
            default:
                throw new Error("unkonwn reducer");
    }
};

export default shopReducer;