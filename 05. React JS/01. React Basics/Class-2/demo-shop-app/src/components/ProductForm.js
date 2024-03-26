import React, {useState} from "react";
import './ProductForm.css'

function ProductForm(props){

    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');


    function titleChangeHandler(event){
        setTitle(event.target.value)
        // console.log(event.target.value)
    }

    function dateChangeHandler(event){
        setDate(event.target.value)
        // console.log(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault();

        const productData = {
            title: newTitle,
            date: newDate
        };

        console.log('i am in form')

        // console.log(productData);
        props.onSaveProduct(productData);

        setTitle('');
        setDate('');
    }


    return(
        <div className="form-container">
        <form onSubmit={submitHandler}>
            <div className="form-label">
                <label>Title</label>
                <input type='text' value={newTitle} onChange={titleChangeHandler} ></input>
            </div>

            <div className="form-label">
                <label>Date</label>
                <input type='date' value={newDate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-31' ></input>
            </div>

            <div className="form-label">
                <button type='submit' >Add Product</button>
            </div>
        </form>
        </div>
    );
}

export default ProductForm;