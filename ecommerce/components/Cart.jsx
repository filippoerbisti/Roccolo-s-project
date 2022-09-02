import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping, AiOutlineClose } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import useTranslation from 'next-translate/useTranslation';
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';

const Cart = () => {
  const { t } = useTranslation('common');

  const clientIdPaypal = process.env.NEXT_PUBLIC_CLIENT_ID_PAYPAL;

  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();

  const handleCheckoutStripe = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return ;

    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  // This values are the props in the UI
  const amount = totalPrice;
  const currency = "EUR";
  const style = {"layout":"vertical"};

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);

    return (
      <>
        { (showSpinner && isPending) && <div className="spinner" /> }
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined} 
          //fundingSource={paypalFunding} -> to display determinated bottons (we would use paypal.FUNDING.PAYPAL && paypal.FUNDING.CARD)
          // | paypal.FUNDING.PAYPAL = button PayPal
          // | paypal.FUNDING.CARD = button Credit or debit cards
          createOrder={(data, actions) => {
            return actions.order
                .create({
                  purchase_units: [
                    {
                      amount: {
                        currency_code: currency,
                        value: amount,
                      }
                    },
                  ],
                })
                .then((orderId) => {
                  // Your code here after create the order
                  return orderId;
              });
            }}
            onApprove={function (data, actions) {
                return actions.order.capture().then(function (details) {
                  const shipping = details.purchase_units[0].shipping;
                  createOrder({
                      customer: shipping.name.full_name,
                      address: shipping.address.address_line_1,
                      total: totalPrice,
                      method: 1
                  })
            });
          }}
        />
      </>
    );
  }

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button 
          type='button' 
          className='xCart' 
          onClick={() => setShowCart(false)}
        >
          <AiOutlineClose />
        </button>
        <button 
          type='button' 
          className='cart-heading' 
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className='heading'>{t('yourCart')}</span>
          <span className='cart-num-items'>({totalQuantities} {totalQuantities === 1 ? `${t('item')}` : `${t('items')}`})</span>
        </button>

        {/* This part doesn't appear, in our case we don't show cart if product in its is 0 */}
        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} />
            <h3>{t('shopBagEmpty')}</h3>
            <Link href={"/wine"}>
              <button
                type='button'
                onClick={() => setShowCart(false)}
                className='btn'
              >
                {t('contShopping')}
              </button>
            </Link>
          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((item) => (
            <div className='product' key={item._id}>
              <img src={urlFor(item?.image[0])} className='cart-product-image' />
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>{item.name}</h5>
                  <h4>{item.price} €</h4>
                </div>
                <div className='flex bottom'>
                  <div className='quantity-desc'>
                    <span className='minus' onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                      <AiOutlineMinus />
                    </span>
                    <span className='num'>
                      {item.quantity}
                    </span>
                    <span className='plus' onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                      <AiOutlinePlus />
                    </span>
                  </div>
                  <button
                    type='button'
                    className='remove-item'
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>{t('total')}: {totalPrice} €</h3>
            </div>
            <div className='btn-container-cart'>
              <button 
                type='button' 
                className='btn-stripe'
                onClick={handleCheckoutStripe}
              >
                {t('payWith')} Stripe
              </button>

              <div className='btn-paypal'>
                <PayPalScriptProvider 
                  options={{ 
                    "client-id": clientIdPaypal,
                    components: "buttons",
                    currency: "USD"
                  }}
                >
                  {/* <PayPalButtons className="paypal" style={{ layout: "horizontal" }} /> */}
                  <ButtonWrapper 
                    currency={currency}
                    showSpinner={false}
                  />
                </PayPalScriptProvider>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart