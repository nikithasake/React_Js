import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial=true;

function App() {
  const dispatch=useDispatch();
  const showCart=useSelector(state=>state.ui.cartIsVisible);
  const cart=useSelector(state=>state.cart);
  
   const notification=useSelector(state=>state.ui.notification);

   useEffect(()=>{
    dispatch(fetchCartData());
   },[dispatch]);
  //post-->new data will not be added and it will override the existing data.
  //override the existing data with the incoming data.
  useEffect(()=>{
    if(isInitial){
      isInitial=false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart));
    }
  },[cart,dispatch]);
    // const sendCartData=async()=>{
    //   dispatch(uiActions.showNotification({
    //     status:'pending',
    //     title:'sending...',
    //     message:'sending cart data!',
    //   })
    //   );
    // const response=await fetch(
    // 'https://redux-4288d-default-rtdb.firebaseio.com/cart.json',
    // {
    //   method:'PUT',
    //   body:JSON.stringify(cart),
    // }
    // );
    // if(!response.ok){
    //   throw new Error('sending cart data failed');
    // }

    // const responseData=await response.json();

    // dispatch(uiActions.showNotification({
    //   status:'success',
    //   title:'Success..',
    //   message:'sending cart data successfully!',
    // })
    // );
  // };

  // if(isInitial){
  //   isInitial=false;
  //   return;
  // }
  //   sendCartData().catch(error=>{
      // dispatch(uiActions.showNotification({
      //   status:'error',
      //   title:'Error!',
      //   message:'sending cart data failed!',
      // })
      // );
    // });

  return (
    <Fragment>
      {notification && <Notification status={notification.status}
       title={notification.title} 
       message={notification.message}
       />}
    <Layout>
      {showCart&& <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;

