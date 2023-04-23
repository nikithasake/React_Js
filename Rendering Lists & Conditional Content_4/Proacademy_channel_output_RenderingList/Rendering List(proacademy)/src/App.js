import './app.css'

import React, { useState } from 'react';
import ProductList from './ProductList/ProductList';
import CreateProduct from './CreateProduct/CreateProduct';
import FilterProduct from './FilterProduct.js/FilterProduct';

let products = [
    {
        pID: 1, 
        pName: 'Fresh Milk', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: 'images/fresh-milk.png',
        price: 12
    },
    {
        pID: 2, 
        pName: 'Cottage Cheese', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "images/cottage-cheese.png",
        price: 10
    },
    {
        pID: 3, 
        pName: 'Brocoli', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: "images/brocoli.png",
        price: 15
    },
    {
        pID: 4, 
        pName: 'oranges', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: true,
        image: "images/oranges.png",
        price: 20
    },
    {
        pID: 5, 
        pName: 'Olive oil', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "images/olive-oil.png",
        price: 14
    },
    {
        pID: 6, 
        pName: 'carrot', 
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.',
        isAvailable: false,
        image: "images/olive-oil.png",
        price: 14
    }
  ]
function App(){

	let[newProductList,updateProductList]=useState(products);
	let[filterTextvalue,updateFilterText]=useState('all');

    let filteredProductList=newProductList.filter((product)=>{
        if(filterTextvalue === 'available'){
            return product.isAvailable===true;
        }else if(filterTextvalue==='unavailable'){
            return product.isAvailable===false;
        }else{
            return product;
        }
    })
    function createProduct(product){
        //console.log(product)
		//updateProduct(product);
		product.pID=newProductList.length+1;
		updateProductList([product,...newProductList])
    }

    function onFilteredValueSelected(filterValue){
        //console.log(filterValue);
        updateFilterText(filterValue);
    }
	return <div className="row">
		<div className="col-lg-8 mx-auto">
			<CreateProduct createProduct={createProduct}></CreateProduct>
            <FilterProduct filterValueSelected={onFilteredValueSelected}></FilterProduct>
			<ProductList newProductList={filteredProductList}></ProductList>
	</div>
	</div>
	
	
}

export default App;

