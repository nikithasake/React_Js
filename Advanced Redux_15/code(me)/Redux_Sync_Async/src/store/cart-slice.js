import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
        changed:false,
    },
    reducers:{
        replaceCart(state,action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
          },
        addItemToCart(state,action){
            const newItem=action.payload;
            console.log("new Item:"+newItem);
            const existingItem=state.items.find(item=>item.id === newItem.id);
            console.log("existingItem:"+existingItem);
            state.totalQuantity++;
            state.changed=true;
            console.log(state.totalQuantity);
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.title
                });
            }else{
                existingItem.quantity++;
                console.log("existingItem.quantity"+existingItem.quantity);
                existingItem.totalPrice=existingItem.totalPrice+newItem.price;
                console.log("existingItem.totalPrice"+existingItem.totalPrice);
            }
        },
        removeItemCFromCart(state,action){
            const id=action.payload;
            const existingItem=state.items.find(item=>item.id === id);
            console.log("existingItem in remove"+existingItem)
            state.totalQuantity--;
            state.changed=true;
            if(existingItem.quantity === 1){
                state.items= state.items.filter(item=>item.id !== id);
                console.log("qua 1"+state.items)
            }else{
                existingItem.quantity--;
                 existingItem.totalPrice=existingItem.totalPrice-existingItem.price;
            }
        }
    }
});

// export const sendCartData=(cart)=>{
//     return async(dispatch)=>{
//     dispatch(
//       uiActions.showNotification({
//       status:'pending',
//       title:'sending...',
//       message:'sending cart data!',
//     })
//    );

//    const sendRequest=async()=>{
//     const response=await fetch(
//         'https://redux-4288d-default-rtdb.firebaseio.com/cart.json',
//         {
//           method:'PUT',
//           body:JSON.stringify(cart),
//         }
//         );
//         if(!response.ok){
//           throw new Error('sending cart data failed');
//         }
//     };
//    try{
//     await sendRequest();   
//     dispatch(
//         uiActions.showNotification({
//         status:'success',
//         title:'Success..',
//         message:'sending cart data successfully!',
//       })
//       );
//    }
//    catch(error){
//     dispatch(uiActions.showNotification({
//         status:'error',
//         title:'Error!',
//         message:'sending cart data failed!',
//       })
//       );
//    }
//    };
// };
export const cartActions=cartSlice.actions;
export default cartSlice;