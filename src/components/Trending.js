import React from 'react'
import { Link } from 'react-router-dom'
export default function Trending() {
  return (
    <>
    <div className="container trending">
    <div className="heading heading-flex mb-3">
        <div className="heading-left">
            <h2 className="title">Trending Products</h2>
            {/* {/* <!-- End .title --> */}
        </div>{/* <!-- End .heading-left --> */}

       <div className="heading-right">
            <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                <li className="nav-item">
                    <Link className="nav-link active" id="trending-all-link" data-toggle="tab" to="#trending-all-tab" role="tab" aria-controls="trending-all-tab" aria-selected="true">All</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" id="trending-tv-link" data-toggle="tab" to="#trending-tv-tab" role="tab" aria-controls="trending-tv-tab" aria-selected="false">TV</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" id="trending-computers-link" data-toggle="tab" to="#trending-computers-tab" role="tab" aria-controls="trending-computers-tab" aria-selected="false">Computers</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" id="trending-phones-link" data-toggle="tab" to="#trending-phones-tab" role="tab" aria-controls="trending-phones-tab" aria-selected="false">Tablets & Cell Phones</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" id="trending-watches-link" data-toggle="tab" to="#trending-watches-tab" role="tab" aria-controls="trending-watches-tab" aria-selected="false">Smartwatches</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" id="trending-acc-link" data-toggle="tab" to="#trending-acc-tab" role="tab" aria-controls="trending-acc-tab" aria-selected="false">Accessories</Link>
                </li>
            </ul>
       </div>{/* <!-- End .heading-right --> */}
    </div>{/* <!-- End .heading --> */}

    <div className="row">
        <div className="col-xl-5col d-none d-xl-block">
            <div className="banner">
                <Link to="/">
                    <img src="assets/images/demos/demo-3/banners/banner-4.jpg" alt="banner"/>
                </Link>
            </div>{/* <!-- End .banner --> */}
        </div>{/* <!-- End .col-xl-5col --> */}

        <div className="col-xl-4-5col">
            <div className="tab-content tab-content-carousel just-action-icons-sm">
                <div className="tab-pane p-0 fade show active" id="trending-all-tab" role="tabpanel" aria-labelledby="trending-all-link">
                    <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                        data-owl-options='{
                            "nav": true, 
                            "dots": false,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":2
                                },
                                "480": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                }
                            }
                        }'>
                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-7.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Headphones</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Bose - SoundSport  wireless headphones</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $199.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '100%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 4 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}

                                <div className="product-nav product-nav-dots">
                                    <Link to="/" style={{background: '#69b4ff'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" style={{background: '#ff887f'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></Link>
                                </div>{/* <!-- End .product-nav --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-8.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Video Games</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Microsoft - Refurbish Xbox One S 500GB</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $279.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 6 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-new">New</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-9.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Smartwatches</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Apple Watch Series 4 Gold Aluminum Case</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $499.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '80%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 4 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}

                                <div className="product-nav product-nav-dots">
                                    <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></Link>
                                </div>{/* <!-- End .product-nav --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <span className="product-label label-circle label-sale">Sale</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-10.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">TV & Home Theater</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Sony - Class LED 2160p Smart 4K Ultra HD</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    <span className="new-price">$1,699.99</span>
                                    <span className="old-price">Was $1,999.99</span>
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '80%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 10 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-15.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">TV & Home Theater</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Samsung - 55" Class  LED 2160p Smart</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $899.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 5 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-11.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Laptops</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">MacBook Pro 13" Display, i5</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $1,199.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '100%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 4 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}
                    </div>{/* <!-- End .owl-carousel --> */}
                </div>{/* <!-- .End .tab-pane --> */}
                <div className="tab-pane p-0 fade" id="trending-tv-tab" role="tabpanel" aria-labelledby="trending-tv-link">
                    <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                        data-owl-options='{
                            "nav": true, 
                            "dots": false,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":2
                                },
                                "480": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                }
                            }
                        }'>
                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-new">New</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-13.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Tablets</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $899.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '80%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 4 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}

                                <div className="product-nav product-nav-dots">
                                    <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></Link>
                                </div>{/* <!-- End .product-nav --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-12.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Audio</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Bose - SoundLink Bluetooth Speaker</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $79.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 6 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <span className="product-label label-circle label-sale">Sale</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-14.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Cell Phone</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Google - Pixel 3 XL  128GB</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    <span className="new-price">$35.41</span>
                                    <span className="old-price">Was $41.67</span>
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '100%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 10 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}

                                <div className="product-nav product-nav-dots">
                                    <Link to="/" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" style={{background: '#333333'}}><span className="sr-only">Color name</span></Link>
                                </div>{/* <!-- End .product-nav --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-15.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">TV & Home Theater</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Samsung - 55" Class  LED 2160p Smart</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $899.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 5 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-11.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Laptops</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">MacBook Pro 13" Display, i5</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $1,199.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '100%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 4 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}
                    </div>{/* <!-- End .owl-carousel --> */}
                </div>{/* <!-- .End .tab-pane --> */}
                <div className="tab-pane p-0 fade" id="trending-computers-tab" role="tabpanel" aria-labelledby="trending-computers-link">
                    <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                        data-owl-options='{
                            "nav": true, 
                            "dots": false,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":2
                                },
                                "480": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                }
                            }
                        }'>
                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-15.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">TV & Home Theater</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Samsung - 55" Class  LED 2160p Smart</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $899.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 5 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-11.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Laptops</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">MacBook Pro 13" Display, i5</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $1,199.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '100%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 4 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-new">New</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-13.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Tablets</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $899.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '80%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 4 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}

                                <div className="product-nav product-nav-dots">
                                    <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></Link>
                                </div>{/* <!-- End .product-nav --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-12.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Audio</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Bose - SoundLink Bluetooth Speaker</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $79.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 6 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <span className="product-label label-circle label-sale">Sale</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-14.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Cell Phone</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Google - Pixel 3 XL  128GB</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    <span className="new-price">$35.41</span>
                                    <span className="old-price">Was $41.67</span>
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '100%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 10 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}

                                <div className="product-nav product-nav-dots">
                                    <Link to="/" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" style={{background: '#333333'}}><span className="sr-only">Color name</span></Link>
                                </div>{/* <!-- End .product-nav --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}
                    </div>{/* <!-- End .owl-carousel --> */}
                </div>{/* <!-- .End .tab-pane --> */}
                <div className="tab-pane p-0 fade" id="trending-phones-tab" role="tabpanel" aria-labelledby="trending-phones-link">
                    <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                        data-owl-options='{
                            "nav": true, 
                            "dots": false,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":2
                                },
                                "480": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                }
                            }
                        }'>
                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-11.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Laptops</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">MacBook Pro 13" Display, i5</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $1,199.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '100%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 4 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-12.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Audio</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Bose - SoundLink Bluetooth Speaker</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $79.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 6 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-new">New</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-13.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Tablets</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $899.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '80%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 4 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}

                                <div className="product-nav product-nav-dots">
                                    <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></Link>
                                </div>{/* <!-- End .product-nav --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-15.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">TV & Home Theater</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Samsung - 55" Class  LED 2160p Smart</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $899.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 5 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-11.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Laptops</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">MacBook Pro 13" Display, i5</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $1,199.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '100%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 4 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <span className="product-label label-circle label-sale">Sale</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-14.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title=" "><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Cell Phone</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Google - Pixel 3 XL  128GB</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    <span className="new-price">$35.41</span>
                                    <span className="old-price">Was $41.67</span>
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '100%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 10 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}

                                <div className="product-nav product-nav-dots">
                                    <Link to="/" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" style={{background: '#333333'}}><span className="sr-only">Color name</span></Link>
                                </div>{/* <!-- End .product-nav --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}
                    </div>{/* <!-- End .owl-carousel --> */}
                </div>{/* <!-- .End .tab-pane --> */}
                <div className="tab-pane p-0 fade" id="trending-watches-tab" role="tabpanel" aria-labelledby="trending-watches-link">
                    <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                        data-owl-options='{
                            "nav": true, 
                            "dots": false,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":2
                                },
                                "480": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                }
                            }
                        }'>
                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <span className="product-label label-circle label-sale">Sale</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-14.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Cell Phone</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Google - Pixel 3 XL  128GB</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    <span className="new-price">$35.41</span>
                                    <span className="old-price">Was $41.67</span>
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '100%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 10 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}

                                <div className="product-nav product-nav-dots">
                                    <Link to="/" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" style={{background: '#333333'}}><span className="sr-only">Color name</span></Link>
                                </div>{/* <!-- End .product-nav --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-11.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Laptops</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">MacBook Pro 13" Display, i5</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $1,199.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '100%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 4 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-12.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Audio</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Bose - SoundLink Bluetooth Speaker</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $79.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 6 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-new">New</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-13.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Tablets</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $899.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '80%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 4 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}

                                <div className="product-nav product-nav-dots">
                                    <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></Link>
                                </div>{/* <!-- End .product-nav --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}
                    </div>{/* <!-- End .owl-carousel --> */}
                </div>{/* <!-- .End .tab-pane --> */}
                <div className="tab-pane p-0 fade" id="trending-acc-tab" role="tabpanel" aria-labelledby="trending-acc-link">
                    <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                        data-owl-options='{
                            "nav": true, 
                            "dots": false,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":2
                                },
                                "480": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                }
                            }
                        }'>
                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-11.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Laptops</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">MacBook Pro 13" Display, i5</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $1,199.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '100%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 4 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-15.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">TV & Home Theater</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Samsung - 55" Class  LED 2160p Smart</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $899.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 5 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-top">Top</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-11.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Laptops</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">MacBook Pro 13" Display, i5</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $1,199.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '100%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 4 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-12.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Audio</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Bose - SoundLink Bluetooth Speaker</Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $79.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 6 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}

                        <div className="product product-2">
                            <figure className="product-media">
                                <span className="product-label label-circle label-new">New</span>
                                <Link to="product.html">
                                    <img src="assets/images/demos/demo-3/products/product-13.jpg" alt="Product" className="product-image"/>
                                </Link>

                                <div className="product-action-vertical">
                                    <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                </div>{/* <!-- End .product-action --> */}

                                <div className="product-action product-action-dark">
                                    <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                    <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                </div>{/* <!-- End .product-action --> */}
                            </figure>{/* <!-- End .product-media --> */}

                            <div className="product-body">
                                <div className="product-cat">
                                    <Link to="/">Tablets</Link>
                                </div>{/* <!-- End .product-cat --> */}
                                <h3 className="product-title"><Link to="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </Link></h3>{/* <!-- End .product-title --> */}
                                <div className="product-price">
                                    $899.99
                                </div>{/* <!-- End .product-price --> */}
                                <div className="ratings-container">
                                    <div className="ratings">
                                        <div className="ratings-val" style={{width: '80%'}}></div>{/* <!-- End .ratings-val --> */}
                                    </div>{/* <!-- End .ratings --> */}
                                    <span className="ratings-text">( 4 Reviews )</span>
                                </div>{/* <!-- End .rating-container --> */}

                                <div className="product-nav product-nav-dots">
                                    <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    <Link to="/" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></Link>
                                </div>{/* <!-- End .product-nav --> */}
                            </div>{/* <!-- End .product-body --> */}
                        </div>{/* <!-- End .product --> */}
                    </div>{/* <!-- End .owl-carousel --> */}
                </div>{/* <!-- .End .tab-pane --> */}
            </div>{/* <!-- End .tab-content --> */}
        </div>{/* <!-- End .col-xl-4-5col --> */}
    </div>{/* <!-- End .row --> */}
</div>{/* <!-- End .container --> */}

<div className="container">
    <hr className="mt-5 mb-6"/>
</div>
{/* <!-- End .container --> */}
</>
  )
}
