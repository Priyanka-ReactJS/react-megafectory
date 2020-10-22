import React from 'react';
import { Link } from 'react-router-dom'
import Paypal from './Paypal';

function CartTotal({ value, history }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 mi-sm-5 ml-auto col-small text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>
                                clear cart</button>
                        </Link>
                        <h5>
                            <span className="text-title">
                                subtotal :
             </span>
                            <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                tax :
             </span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">
                                totel :
             </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                        <Paypal total = {cartTotal} clearCart={clearCart} history = {history}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartTotal;