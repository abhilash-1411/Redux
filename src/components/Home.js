import React from 'react'

function Home(props) {
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://mobile.1und1.de/_catalog/images/8fcf4e3e57d5d32372c42c2871ebf26a-iphone-14-blue-pure-couple.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                       <b>I-Phone</b> 
                        <br/>
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>

                        <button className='remove-cart-btn'
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home