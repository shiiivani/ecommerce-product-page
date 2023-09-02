import { useEffect, useState } from 'react';
import './App.css';
import Avatar from './assets/images/image-avatar.png'
import Image1 from './assets/images/image-product-1.jpg'
import Image2 from './assets/images/image-product-2.jpg'
import Image3 from './assets/images/image-product-3.jpg'
import Image4 from './assets/images/image-product-4.jpg'
import imageThumbnail1 from './assets/images/image-product-1-thumbnail.jpg'
import imageThumbnail2 from './assets/images/image-product-2-thumbnail.jpg'
import imageThumbnail3 from './assets/images/image-product-3-thumbnail.jpg'
import imageThumbnail4 from './assets/images/image-product-4-thumbnail.jpg'
import Plus from './assets/images/icon-plus.png'
import Minus from './assets/images/icon-minus.png'
import Cart from './assets/images/icon-cart.png'
import Logo from './assets/images/logo.png'
import Delete from './assets/images/icon-delete.png'




function App() {
  const [sideBar, setSideBar] = useState(false);
  const [image1Selected, setimage1Selected] = useState(false);
  const [image2Selected, setimage2Selected] = useState(false);
  const [image3Selected, setimage3Selected] = useState(false);
  const [image4Selected, setimage4Selected] = useState(false);
  const [product1Selected, setproduct1Selected] = useState(false);
  const [product2Selected, setproduct2Selected] = useState(false);
  const [product3Selected, setproduct3Selected] = useState(false);
  const [product4Selected, setproduct4Selected] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [items, setItems] = useState(0);
  const [showItemNumbers, setShowItemNumbers] = useState(false);
  const [cartItems, setCartItems] = useState(0)
  const [showCartItems, setShowCartItems] = useState(false)
  const [showCartContainer, setShowCartContainer] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  // useEffect(() => {
  //   if (cartItems > 0) {
  //     setShowCartItems(true)
  //   }
  //   if (items == 0) {
  //     setShowCartItems(false)
  //   }
  // }, [cartItems, items])

  // useEffect(() => {
  //   let total = 0
  //   total = 125 * items
  //   setTotalPrice(total)
  // }, [items])

  function showSideBar() {
    setSideBar(!sideBar);
  }

  function viewProduct() {
    setShowProduct(!showProduct);
  }

  function addToCart() {
    if (items > 0) {
      setShowItemNumbers(true);
      setCartItems(items)
    }

    if (items == 0) {
      setShowItemNumbers(false);
    }

    if (cartItems > 0) {
          setShowCartItems(true)
        }
        if (items == 0) {
          setShowCartItems(false)
        }
    let total = 0
    total = 125 * items
    setTotalPrice(total)
  }

  function cart() {
    setShowCartContainer(!showCartContainer)
  }


  function noImageActive() {
    setimage1Selected(false);
    setimage2Selected(false);
    setimage3Selected(false);
    setimage4Selected(false);
    setproduct1Selected(false);
    setproduct2Selected(false);
    setproduct3Selected(false);
    setproduct4Selected(false);
  }

  function image1Active() {
    setimage1Selected(true);
    setimage2Selected(false);
    setimage3Selected(false);
    setimage4Selected(false);
  }

  function image2Active() {
    setimage1Selected(false);
    setimage2Selected(true);
    setimage3Selected(false);
    setimage4Selected(false);
  }

  function image3Active() {
    setimage1Selected(false);
    setimage2Selected(false);
    setimage3Selected(true);
    setimage4Selected(false);
  }

  function image4Active() {
    setimage1Selected(false);
    setimage2Selected(false);
    setimage3Selected(false);
    setimage4Selected(true);
  }


  function product1Active() {
    setproduct1Selected(true);
    setproduct2Selected(false);
    setproduct3Selected(false);
    setproduct4Selected(false);
  }

  function product2Active() {
    setproduct1Selected(false);
    setproduct2Selected(true);
    setproduct3Selected(false);
    setproduct4Selected(false);
  }

  function product3Active() {
    setproduct1Selected(false);
    setproduct2Selected(false);
    setproduct3Selected(true);
    setproduct4Selected(false);
  }

  function product4Active() {
    setproduct1Selected(false);
    setproduct2Selected(false);
    setproduct3Selected(false);
    setproduct4Selected(true);
  }

  function increment() {
    var number = items + 1;
    setItems(number)
  }

  function decrement() {
    if (items > 0) {
      var number = items - 1;
      setItems(number)
    }
  }

  function removeItem() {
    setShowCartItems(false)
    setItems(0)
    setShowItemNumbers(false);
  }


  return (
    <div className="App">
      <section className="navbars">
        <div className={sideBar ? "leftBar" : "leftBarNotActive"}>
          <div className="leftBar-categories">
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" onClick={showSideBar}><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd" /></svg>
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="transparentBg">wfwf </div>
        </div>
        <div className="hamburgerMenu">
          <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg" onClick={showSideBar}><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd" /></svg>
        </div>
        <div className="logo">
          <img src={Logo} alt="Company Logo" />
          <hr />
        </div>
        <div className="categories">
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="cart">
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" onClick={cart}><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill-rule="nonzero" /></svg>
          <p className={showItemNumbers ? "itemNumbersActive" : "itemNumbers"}>{cartItems}</p>
          <img src={Avatar} width="50px"></img>
        </div>
      </section>


      <section className="mainPage">
        <div className={showCartContainer ? "cartContainerActive" : "cartContainer"}>
          <h5>Cart</h5>
          <hr />
          <div className={!showCartItems ? "emptyCartActive" : "emptyCart"}>
            <p>Your cart is empty.</p>
          </div>
          <div className={showCartItems ? "itemAddedToCartActive" : "itemAddedToCart"}>
            <div className="itemSelected">
              <img src={Image1} alt="Product Image" className="cartItemImage" width="50px" />
              <div className="selectedItemName">
                <p>Fall Limited Edition Sneakers</p>
                <p>$125.00 X {cartItems} <span className="totalPrice">${totalPrice}.00</span></p>
              </div>
              <img className="delete" src={Delete} alt="Icon" width="15px" onClick={removeItem}/>
            </div>
            <button>Checkout</button>
          </div>
        </div>
        <div className="containers">
          <div className="productImage carousel" id="carouselExampleIndicators"  >
            <div className="mainImage carousel-inner" onClick={viewProduct}>
              <img src={Image1} className="carousel-item active" alt="First slide" width="500px;" />
              <img src={Image2} className="carousel-item" alt="Second slide" width="500px;" />
              <img src={Image3} className="carousel-item" alt="Third slide" width="500px;" />
              <img src={Image4} className="carousel-item" alt="Fourth slide" width="500px;" />
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="prev-btn"><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke-width="3" fill="none" fill-rule="evenodd" /></svg></span></a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="next-btn"><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke-width="3" fill="none" fill-rule="evenodd" /></svg></span>
              </a>
            </div>

            <div className="imageIndicator">
              <div className={image1Selected ? "thumbnailBorderActive" : "thumbnailBorder"}>
                <img src={imageThumbnail1} className={image1Selected ? "imageThumbnailActive active" : "imageThumbnail active"} width="100px;" data-target="#carouselExampleIndicators" data-slide-to="0" onClick={() => { image1Active(); setTimeout(noImageActive, 5000); }} />
              </div>
              <div className={image2Selected ? "thumbnailBorderActive" : "thumbnailBorder"}>
                <img src={imageThumbnail2} className={image2Selected ? "imageThumbnailActive" : "imageThumbnail"} width="100px;" alt="Second slide" data-target="#carouselExampleIndicators" data-slide-to="1" onClick={() => { image2Active(); setTimeout(noImageActive, 5000); }} />
              </div>
              <div className={image3Selected ? "thumbnailBorderActive" : "thumbnailBorder"}>
                <img src={imageThumbnail3} className={image3Selected ? "imageThumbnailActive" : "imageThumbnail"} width="100px;" alt="Third slide" data-target="#carouselExampleIndicators" data-slide-to="2" onClick={() => { image3Active(); setTimeout(noImageActive, 5000); }} />
              </div>
              <div className={image4Selected ? "thumbnailBorderActive" : "thumbnailBorder"}>
                <img src={imageThumbnail4} className={image4Selected ? "imageThumbnailActive" : "imageThumbnail"} width="100px;" alt="Fourth slide" data-target="#carouselExampleIndicators" data-slide-to="3" onClick={() => { image4Active(); setTimeout(noImageActive, 5000); }} />
              </div>
            </div>

          </div>
          <div className="productDetails">
            <p className="companyName"> SNEAKER COMPANY</p>
            <h1 className="productName">Fall Limited Edition <br />Sneakers</h1>
            <p className="aboutProduct">These low-profile sneakers are your perfect casual wear<br /> companion. Featuring a durable rubber outer sole, they'll<br /> withstand everything the weather can offer.</p>
            <div className="mobileViewPrice">
              <div className="productPrice">
                <h2>$125.00</h2>
                <p className="discount">50%</p>
              </div>
              <p className="oldPrice"><del>$250.00</del></p>
            </div>
            <div className="buttons">
              <div className="numberOfItems">
                <img src={Minus} alt="icon-minus" onClick={decrement} />
                <p>{items}</p>
                <img src={Plus} alt="icon-plus" onClick={increment} />
              </div>
              <button className="button" onClick={addToCart}>
                <img src={Cart} alt="icon" width="16px" />
                <span className="addToCart">Add to cart</span></button>
            </div>
          </div>
        </div>
      </section>

      <section className={showProduct ? "viewProductActive" : "viewProduct"}>
        <div className="productImage carousel" id="carouselExampleIndicators2"  >
          <div className="closeViewProduct" onClick={viewProduct}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd" /></svg>
          </div>
          <div className="mainImage carousel-inner">
            <img src={Image1} className="carousel-item active" alt="First slide" width="500px;" />
            <img src={Image2} className="carousel-item" alt="Second slide" width="500px;" />
            <img src={Image3} className="carousel-item" alt="Third slide" width="500px;" />
            <img src={Image4} className="carousel-item" alt="Fourth slide" width="500px;" />
          </div>
          <div className="imageIndicator">
            <div className={product1Selected ? "thumbnailBorderActive" : "thumbnailBorder"}>
              <img src={imageThumbnail1} className={product1Selected ? "imageThumbnailActive active" : "imageThumbnail active"} width="100px;" data-target="#carouselExampleIndicators2" data-slide-to="0" onClick={() => { product1Active(); setTimeout(noImageActive, 5000); }} />
            </div>
            <div className={product2Selected ? "thumbnailBorderActive" : "thumbnailBorder"}>
              <img src={imageThumbnail2} className={product2Selected ? "imageThumbnailActive" : "imageThumbnail"} width="100px;" alt="Second slide" data-target="#carouselExampleIndicators2" data-slide-to="1" onClick={() => { product2Active(); setTimeout(noImageActive, 5000); }} />
            </div>
            <div className={product3Selected ? "thumbnailBorderActive" : "thumbnailBorder"}>
              <img src={imageThumbnail3} className={product3Selected ? "imageThumbnailActive" : "imageThumbnail"} width="100px;" alt="Third slide" data-target="#carouselExampleIndicators2" data-slide-to="2" onClick={() => { product3Active(); setTimeout(noImageActive, 5000); }} />
            </div>
            <div className={product4Selected ? "thumbnailBorderActive" : "thumbnailBorder"}>
              <img src={imageThumbnail4} className={product4Selected ? "imageThumbnailActive" : "imageThumbnail"} width="100px;" alt="Fourth slide" data-target="#carouselExampleIndicators2" data-slide-to="3" onClick={() => { product4Active(); setTimeout(noImageActive, 5000); }} />
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
              <span className="prev-btn"><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke-width="3" fill="none" fill-rule="evenodd" /></svg></span></a>
            <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
              <span className="next-btn"><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke-width="3" fill="none" fill-rule="evenodd" /></svg></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
