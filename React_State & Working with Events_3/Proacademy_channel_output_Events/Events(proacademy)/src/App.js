import './app.css'

import React, { useState } from 'react';
import ProductList from './components/ProductList/ProductList';
import CreateProduct from './CreateProduct/CreateProduct';


function App(){

	let[newProduct,updateProduct]=useState(null);
	 
    function createProduct(product){
        //console.log(product)
		updateProduct(product);
    }
	return <div>
		<CreateProduct createProduct={createProduct}></CreateProduct>
		<ProductList newProduct={newProduct}></ProductList>
	</div>
	
	
}

export default App;

