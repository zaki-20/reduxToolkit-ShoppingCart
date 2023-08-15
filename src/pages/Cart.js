import React from 'react'

const Cart = () => {
    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {/* {products.map((product) => ( */}
                <div className="cartCard">
                    <img src={"product.image"} alt="" />
                    <h5>{"product.title"}</h5>
                    <h5>{"product.price"}</h5>
                    <button
                        className="btn"
                    // onClick={() => handleRemove(product.id)}
                    >
                        Remove
                    </button>
                </div>
                {/* ))} */}
            </div>
        </div>
    )
}

export default Cart