import shopReducer, { initialState } from "./shopReducer";
import { createContext, useContext, useReducer } from "react";

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
    const [state, dispatch] = useReducer(shopReducer, initialState);

    const addToCart = (product) => {
        const updatedProducts = state.products.concat(product);

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedProducts,
            },
        });
    };
const removeFromCart = (product) =>{
    const updatedProduct = state.products.filtre(p => p.id !== 
        product.id);

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedProduct
            }
        })
}


    const values = {
        products: state.products,
        total: state.total,
        addToCart,
        removeFromCart,
    };

    return (
        <ShopContext.Provider value={values}>
            {children}
        </ShopContext.Provider>
    );
};

const useShop = () => {
    const context = useContext(ShopContext);
    if (context === undefined) {
        throw new Error("useShop must be used within a ShopProvider");
    }
    return context;
};

export default useShop;
