import { useState } from "react";

function ProductForm(props) {
  //intially value is empty string
  //bcse when the component will be rendered for the first time in the web page
  //the input field should be empty.
  let [pName, updateName] = useState('');
  let [pPrice, updatePrice] = useState('');
  let [pDescription, updateDescription] = useState('');
  let [pAvailabilty, updateAvailability] = useState('');
  let [pImageUrl, updateImageUrl] = useState('');

  // let[userInput,updateUserInput]=useState({
  //     pName:'',
  //     pPrice:'',
  //     pDescription:'',
  //     pAvailabilty:'',
  //     pImageUrl:''
  // });

  function nameInputHandler(event) {
    // console.log("some text entered");
    // console.log(event.target.value);
    updateName(event.target.value);
    // updateUserInput({
    //     ...userInput,
    //     pName:event.target.value});
    // updateUserInput((prevState)=>{
    //    return{ ...prevState,
    //     pName:event.target.value}
    // });
  }
  function priceInputHandler(event) {
    // console.log("some text entered");
    updatePrice(event.target.value);
    // updateUserInput({
    //     ...userInput,
    //     pPrice:event.target.value});
  }
  function descriptionInputHandler(event) {
    // console.log("some text entered");
    updateDescription(event.target.value);
    // updateUserInput({
    //     ...userInput,
    //     pDescription:event.target.value});
  }
  function availabilityInputHandler(event) {
    // console.log("some text entered");
    updateAvailability(event.target.checked);
    // updateUserInput({
    //     ...userInput,
    //     pAvailabilty:event.target.value});
  }
  function imageInputHandler(event) {
    // console.log("some text entered");
    updateImageUrl(event.target.value);
    // updateUserInput({
    //     ...userInput,
    //     pImageUrl:event.target.value});
  }

  function createProductEventHandler(event) {
    event.preventDefault();
    let product = {
      // pID: 1,
      pName: pName,
      desc: pDescription,
      isAvailable: Boolean(pAvailabilty),
      image: pImageUrl,
      price: Number(pPrice),
    };

    updateName(''),
    updatePrice(''),
    updateDescription(''),
    //empty string will be type cast to boolean value false
    updateAvailability(''), //or updateAvailability(false)
    updateImageUrl('')

    //console.log(product);
    props.createProduct(product);
  }
  return (
    <form className="row g-3" onSubmit={createProductEventHandler}>
      <div className="col-md-6">
        <label for="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Product Name"
          value={pName}
          onChange={nameInputHandler}
        />
      </div>
      <div className="col-md-6">
        <label for="price">Product Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          placeholder="Product Price"
          value={pPrice}
          onChange={priceInputHandler}
        />
      </div>

      <div className="form-group">
        <label for="description">Product Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Product Description"
          value={pDescription}
          onChange={descriptionInputHandler}
        />
      </div>

      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="isAvailable"
          checked={pAvailabilty}
          onChange={availabilityInputHandler}
        />
        <label class="form-check-label" for="isAvailable">
          Is product available in stock?
        </label>
      </div>

      <div className="form-group">
        <label for="select-image">Select product image</label>
        <input
          type="file"
          className="form-control"
          id="select-image"
          value={pImageUrl}
          onChange={imageInputHandler}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
    </form>
  );
}

export default ProductForm;
