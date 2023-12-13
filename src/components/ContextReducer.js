import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();


const reducer = (state,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,{id:action.id,name:action.name, 
                qty:action.qty,size: action.size, 
                Price: action.Price, img: action.img }]
         
        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index, 1)
            return newArr; 

        case "UPDATE":
            let arr = [...state]
            arr.find((jersey, index)=>{
                if(jersey.id === action.id){
                    console.log(jersey.qty, parseInt(action.qty), action.Price + jersey.Price)
                    arr[index] = {...jersey, qty: parseInt(action.qty) + jersey.qty, Price: action.Price + jersey.Price}

                }
                return arr
            })

            case "DROP":
                let empArray = []
                return empArray
        
        default:
            console.log("Error in reducer");
    }

}

export const CartProvider = ({children})=>{

    const[state,dispatch] = useReducer(reducer,[])
    return(
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>

    )
}


export const useCart = ()=> useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext)
