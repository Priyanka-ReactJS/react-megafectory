import React , {Component} from 'react'
import Titel from '../Title'
import CartColumun from './CartColumun';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context'
import CartList from './CartList'
import CartTotal from './CartTotal'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value=>{
                        const {cart} = value;
                        if(cart.length>0){
                            return(
                                <>
                                <Titel name="your" title="cart" />
                                <CartColumun/>
                                <CartList value={value}/>
                                <CartTotal value={value}/>
                                </>
                            );
                        }
                        else {
                            return <EmptyCart/>
                        }
                    }}
                </ProductConsumer>
                
                
            </section>
        )
    }
}