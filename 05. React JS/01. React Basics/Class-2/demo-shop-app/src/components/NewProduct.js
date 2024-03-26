import React from "react";
import './NewProduct.css';
import ProductForm from "./ProductForm";

function NewProduct(props){

    function saveProductData(product){
        console.log('I am in NewProduct.js')
        console.log(product);

        //call the props function from parent
        props.rushik(product);
    }


    return(
        <div className="new-product">
            <ProductForm onSaveProduct = {saveProductData}/>
        </div>
    );
}

export default  NewProduct;