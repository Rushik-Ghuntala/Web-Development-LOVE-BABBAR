import React, {useState} from 'react';
import './ProductItem.css';
import ProductDate from './ProductDate';
import Card from './Card';

const ProductItem = (props) =>{

    const [title, setTitle] = useState(props.title);

    // let title = props.title;

    function clickHandler(){
        setTitle('Popcorn')
        console.log('Button Clicked!!')
    }


    return(
        <div  className="product-item">
            
            <Card className='product-item-card'>
                    <ProductDate date={props.date}></ProductDate>
                    <div className='item-title'>
                        <h2>{title}</h2>
                    </div>
                    <button onClick={clickHandler}>Add to Cart</button>
            </Card>
            
        </div>
    );
}

export default ProductItem;