import Button from "./Button";
import React, { useState } from "react";


function ProductDetails(props) {
  console.log("ProductDetails component executed");
  let badgeClass = "badge-margin-left-240 badge "; //theser two css classes are common whether the product is available or not.
  badgeClass += props.isAvailable ? "bg-success" : "bg-danger ";

  // let productCount = 0;
  let [productCount,updateCount]=useState(0);
function displayFormattedProductCount() {
  return productCount > 0 ? productCount : <h1>Zero</h1>;
}

  let incrementProductCount=function(){
    // productCount++;
    // console.log(productCount)
    updateCount(++productCount)
  }

  let decrementProductCount=function(){
    // productCount--;
    // console.log(productCount)
    updateCount(--productCount)
  }
  return (
    <div className="d-flex align-items-center justify-content-start mt-1">
      <h6 className="font-weight-bold my-2" style={{ marginRight: 30 }}>{props.price}</h6>
      {/* <button className="btn btn-primary">-</button> */}
      <Button eventHandler={decrementProductCount}>-</Button>
      <span style={{ padding: "8px 14px", fontSize: 13 }}>
        {displayFormattedProductCount()}
      </span>
      {/* <button className="btn btn-primary">+</button> */}
      <Button eventHandler={incrementProductCount}>+</Button>
      {/* <span className="badge bg-danger">{isAvailable}</span> */}
      <span className={badgeClass}>
        {props.isAvailable ? "Available " : "Unavilable"}
      </span>
      {/* {props.children} */}
    </div>
  );

  // return React.createElement('div',{className:'d-flex align-items-center justify-content-start mt-1'},
  // React.createElement('h6',{className:'font-weight-bold my-2',style:{marginRight: 30 }},"$" +props.price),
  // //Since Button is custom element so we need not to write it in single quotes & we importing the Button in this component already
  // React.createElement(Button,{},"-"),
  // React.createElement('span',{style:{padding:'8px 14px','font-size':13}},displayFormattedProductCount()),
  // React.createElement(Button,{},"+"),
  // React.createElement('span',{className:badgeClass},props.isAvailable ? 'Available' : 'Unavailable')
  // )
}

export default ProductDetails;
