import React,{useState} from 'react';
import Products from './Products'

function ProductList(props){
    //console.log(props.newProduct)
    

// let[newProductList,updateProductList]=useState(products);
// updateProductList([props.newProduct, ...products]);

    // if(props.newProductList.length===0) return <h2>No products available</h2>

    return  props.newProductList.length===0 ? <h2>No products available</h2>:
   
    (<ul className="list-group shadow">
        {
            props.newProductList.map((product)=>{
                return <Products 
                    key={product?.pID}
                    id={product?.pID}
                    name={product?.pName}
                    description={product?.desc}
                    isAvailable={product?.isAvailable}
                    imageUrl={product?.image}
                    price={product?.price}>
                </Products>
             })
        }
		{/* <Products 
        id={products[0].pID}
        name={products[0].pName}
        description={products[0].desc}
        isAvailable={products[0].isAvailable}
        imageUrl={products[0].image}
        price={products[0].price}>
      </Products>
    <Products 
        id={products[1].pID}
        name={products[1].pName}
        description={products[1].desc}
        isAvailable={products[1].isAvailable}
        imageUrl={products[1].image}
        price={products[1].price}>
    </Products>
    <Products 
        id={products[2].pID}
        name={products[2].pName}
        description={products[2].desc}
        isAvailable={products[2].isAvailable}
        imageUrl={products[2].image}
        price={products[2].price}>
    </Products>
    <Products 
        id={products[3].pID}
        name={products[3].pName}
        description={products[3].desc}
        isAvailable={products[3].isAvailable}
        imageUrl={products[3].image}
        price={products[3].price}>
    </Products>
    <Products 
        id={products[4].pID}
        name={products[4].pName}
        description={products[4].desc}
        isAvailable={products[4].isAvailable}
        imageUrl={products[4].image}
        price={products[4].price}>
    </Products> */}
    </ul>
);

}

export default ProductList;