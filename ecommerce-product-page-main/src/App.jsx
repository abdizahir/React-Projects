import { useState } from 'react';
import '../src/main';
import Menu from './Menu';
import Header from './Header';
import ProductCard from './ProductCard';
import ProductDescription from './ProductDescription';
import ProductPrice from './ProductPrice';
import Cart from './Cart';
import EmmptyCart from './EmptyCart';
import ImgOverlay from './imgOverlay';

function App() {
  const [overLay, setOverlay] = useState(false);
  const [imgOverlay, setImgOverlay] = useState(false);
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const [emptyCart, setEmptyCart] = useState(false);
  const [count, setCount] = useState(0);

  function handleClick() {
    setOverlay(true);
    setMenu(true);
  }
  function handleImgOverlay() {
    setImgOverlay(true);
  }
  function handleCloseImg() {
    setImgOverlay(false);
  }
  function handleClose() {
    setOverlay(false);
    setMenu(false);
  }
  function handleCart() {
    setCart(true)
    setEmptyCart(false)
  }
  function handleEmptyCart() {
    setEmptyCart(true);
  }
  function handleAddCount() {
    setCount(count + 1)
  }
  function handleSubCount() {
    if(count > 0) {
      setCount(count - 1)
    }
    console.log(count);
  }

  return (
    <div className='mb-10 sm:px-10 relative sm:mx-25'>
      {menu ? <Menu overlay={overLay} onClose={handleClose}  /> : null}
      <Cart intial={125} carts={cart} count={count} />
      <ImgOverlay overLay={imgOverlay} onClose={handleCloseImg} />
      <EmmptyCart count={count} emptyCarts={emptyCart} />
      <Header carts={cart} count={count} onClick={handleClick} onCartClick={handleEmptyCart} />  
      <ProductCard count={count} onClick={handleClick} onCartClick={handleEmptyCart} carts={cart} cart={emptyCart} onAddCart={handleCart} onAddCount={handleAddCount} onSubCount={handleSubCount} onOverlay={handleImgOverlay}/>
    </div>
  )
}

export default App
