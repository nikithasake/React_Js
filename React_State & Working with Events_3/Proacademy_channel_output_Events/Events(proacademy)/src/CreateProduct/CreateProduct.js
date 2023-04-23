import ProductForm from "./ProductForm";

function CreateProduct(props){
    
    function onCreateProduct(product){
        //console.log(product)
        props.createProduct(product);
    }
    return (
        <div className="row">
            <div className="col-lg-8 mx-auto" style={{backgroundColor:'white',padding:'10px 20px',marginBottom:20}}>
                
                    <ProductForm createProduct={onCreateProduct}></ProductForm>
               
            </div>
        </div>
    )
}

export default CreateProduct;