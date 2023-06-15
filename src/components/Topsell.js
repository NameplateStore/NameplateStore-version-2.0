import React from 'react'
import { Link } from 'react-router-dom'
export default function Topsell() {
  return (
    <>
    <div className="container top">
                <div className="heading heading-flex mb-3">
                    <div className="heading-left">
                        <h2 className="title">Top Selling Products</h2>{/* <!--  End .title --> */}
                    </div>{/* <!--  End .heading-left --> */}

                   <div className="heading-right">
                        <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                            <li className="nav-item">
                                <Link className="nav-link active" id="top-all-link" data-toggle="tab" to="#top-all-tab" role="tab" aria-controls="top-all-tab" aria-selected="true">All</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="top-tv-link" data-toggle="tab" to="#top-tv-tab" role="tab" aria-controls="top-tv-tab" aria-selected="false">TV</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="top-computers-link" data-toggle="tab" to="#top-computers-tab" role="tab" aria-controls="top-computers-tab" aria-selected="false">Computers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="top-phones-link" data-toggle="tab" to="#top-phones-tab" role="tab" aria-controls="top-phones-tab" aria-selected="false">Tablets & Cell Phones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="top-watches-link" data-toggle="tab" to="#top-watches-tab" role="tab" aria-controls="top-watches-tab" aria-selected="false">Smartwatches</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="top-acc-link" data-toggle="tab" to="#top-acc-tab" role="tab" aria-controls="top-acc-tab" aria-selected="false">Accessories</Link>
                            </li>
                        </ul>
                   </div>{/* <!--  End .heading-right --> */}
                </div>{/* <!--  End .heading --> */}

                <div className="tab-content tab-content-carousel just-action-icons-sm">
                    <div className="tab-pane p-0 fade show active" id="top-all-tab" role="tabpanel" aria-labelledby="top-all-link">
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
                                    },
                                    "1200": {
                                        "items":5
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
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Laptops</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">MacBook Pro 13" Display, i5</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $1,199.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '100%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-12.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Audio</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Bose - SoundLink Bluetooth Speaker</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $79.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 6 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-new">New</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-13.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Tablets</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $899.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '80%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}

                                    <div className="product-nav product-nav-dots">
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    </div>{/* <!--  End .product-nav --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <span className="product-label label-circle label-sale">Sale</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-14.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Cell Phone</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Google - Pixel 3 XL  128GB</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        <span className="new-price">$35.41</span>
                                        <span className="old-price">Was $41.67</span>
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '100%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 10 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}

                                    <div className="product-nav product-nav-dots">
                                        <Link to="/" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    </div>{/* <!--  End .product-nav --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-15.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">TV & Home Theater</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Samsung - 55" Class  LED 2160p Smart</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $899.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 5 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-11.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Laptops</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">MacBook Pro 13" Display, i5</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $1,199.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '100%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}
                        </div>{/* <!--  End .owl-carousel --> */}
                    </div>{/* <!--  .End .tab-pane --> */}
                    <div className="tab-pane p-0 fade" id="top-tv-tab" role="tabpanel" aria-labelledby="top-tv-link">
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
                                    },
                                    "1200": {
                                        "items":5
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
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Tablets</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $899.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '80%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}

                                    <div className="product-nav product-nav-dots">
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    </div>{/* <!--  End .product-nav --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-12.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Audio</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Bose - SoundLink Bluetooth Speaker</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $79.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 6 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <span className="product-label label-circle label-sale">Sale</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-14.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Cell Phone</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Google - Pixel 3 XL  128GB</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        <span className="new-price">$35.41</span>
                                        <span className="old-price">Was $41.67</span>
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '100%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 10 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}

                                    <div className="product-nav product-nav-dots">
                                        <Link to="/" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    </div>{/* <!--  End .product-nav --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-15.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">TV & Home Theater</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Samsung - 55" Class  LED 2160p Smart</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $899.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 5 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-11.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Laptops</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">MacBook Pro 13" Display, i5</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $1,199.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '100%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}
                        </div>{/* <!--  End .owl-carousel --> */}
                    </div>{/* <!--  .End .tab-pane --> */}
                    <div className="tab-pane p-0 fade" id="top-computers-tab" role="tabpanel" aria-labelledby="top-computers-link">
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
                                    },
                                    "1200": {
                                        "items":5
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
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">TV & Home Theater</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Samsung - 55" Class  LED 2160p Smart</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $899.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 5 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-11.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Laptops</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">MacBook Pro 13" Display, i5</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $1,199.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '100%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-new">New</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-13.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Tablets</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $899.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '80%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}

                                    <div className="product-nav product-nav-dots">
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    </div>{/* <!--  End .product-nav --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-12.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Audio</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Bose - SoundLink Bluetooth Speaker</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $79.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 6 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <span className="product-label label-circle label-sale">Sale</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-14.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Cell Phone</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Google - Pixel 3 XL  128GB</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        <span className="new-price">$35.41</span>
                                        <span className="old-price">Was $41.67</span>
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '100%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 10 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}

                                    <div className="product-nav product-nav-dots">
                                        <Link to="/" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    </div>{/* <!--  End .product-nav --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}
                        </div>{/* <!--  End .owl-carousel --> */}
                    </div>{/* <!--  .End .tab-pane --> */}
                    <div className="tab-pane p-0 fade" id="top-phones-tab" role="tabpanel" aria-labelledby="top-phones-link">
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
                                    },
                                    "1200": {
                                        "items":5
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
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Laptops</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">MacBook Pro 13" Display, i5</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $1,199.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '100%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-12.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Audio</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Bose - SoundLink Bluetooth Speaker</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $79.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 6 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-new">New</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-13.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Tablets</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $899.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '80%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}

                                    <div className="product-nav product-nav-dots">
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    </div>{/* <!--  End .product-nav --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-15.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">TV & Home Theater</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Samsung - 55" Class  LED 2160p Smart</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $899.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 5 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-11.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Laptops</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">MacBook Pro 13" Display, i5</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $1,199.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '100%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <span className="product-label label-circle label-sale">Sale</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-14.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Cell Phone</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Google - Pixel 3 XL  128GB</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        <span className="new-price">$35.41</span>
                                        <span className="old-price">Was $41.67</span>
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '100%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 10 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}

                                    <div className="product-nav product-nav-dots">
                                        <Link to="/" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    </div>{/* <!--  End .product-nav --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}
                        </div>{/* <!--  End .owl-carousel --> */}
                    </div>{/* <!--  .End .tab-pane --> */}
                    <div className="tab-pane p-0 fade" id="top-watches-tab" role="tabpanel" aria-labelledby="top-watches-link">
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
                                    },
                                    "1200": {
                                        "items":5
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
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Cell Phone</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Google - Pixel 3 XL  128GB</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        <span className="new-price">$35.41</span>
                                        <span className="old-price">Was $41.67</span>
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '100%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 10 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}

                                    <div className="product-nav product-nav-dots">
                                        <Link to="/" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    </div>{/* <!--  End .product-nav --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-11.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Laptops</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">MacBook Pro 13" Display, i5</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $1,199.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '100%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-12.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Audio</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Bose - SoundLink Bluetooth Speaker</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $79.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 6 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-new">New</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-13.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Tablets</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $899.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '80%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}

                                    <div className="product-nav product-nav-dots">
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    </div>{/* <!--  End .product-nav --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}
                        </div>{/* <!--  End .owl-carousel --> */}
                    </div>{/* <!--  .End .tab-pane --> */}
                    <div className="tab-pane p-0 fade" id="top-acc-tab" role="tabpanel" aria-labelledby="top-acc-link">
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
                                    },
                                    "1200": {
                                        "items":5
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
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Laptops</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">MacBook Pro 13" Display, i5</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $1,199.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '100%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-15.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">TV & Home Theater</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Samsung - 55" Class  LED 2160p Smart</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $899.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 5 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-top">Top</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-11.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Laptops</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">MacBook Pro 13" Display, i5</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $1,199.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '100%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-12.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Audio</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Bose - SoundLink Bluetooth Speaker</Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $79.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 6 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-new">New</span>
                                    <Link to="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-13.jpg" alt="Product" className="product-image"/>
                                    </Link>

                                    <div className="product-action-vertical">
                                        <Link to="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></Link>
                                    </div>{/* <!--  End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <Link to="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></Link>
                                        <Link to="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></Link>
                                    </div>{/* <!--  End .product-action --> */}
                                </figure>{/* <!--  End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link to="/">Tablets</Link>
                                    </div>{/* <!--  End .product-cat --> */}
                                    <h3 className="product-title"><Link to="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </Link></h3>{/* <!--  End .product-title --> */}
                                    <div className="product-price">
                                        $899.99
                                    </div>{/* <!--  End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '80%'}}></div>{/* <!--  End .ratings-val --> */}
                                        </div>{/* <!--  End .ratings --> */}
                                        <span className="ratings-text">( 4 Reviews )</span>
                                    </div>{/* <!--  End .rating-container --> */}

                                    <div className="product-nav product-nav-dots">
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                        <Link to="/" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></Link>
                                    </div>{/* <!--  End .product-nav --> */}
                                </div>{/* <!--  End .product-body --> */}
                            </div>{/* <!--  End .product --> */}
                        </div>{/* <!--  End .owl-carousel --> */}
                    </div>{/* <!--  .End .tab-pane --> */}
                </div>{/* <!--  End .tab-content --> */}
            </div>{/* <!--  End .container --> */}

            <div className="container">
                <hr className="mt-5 mb-0"/>
            </div>
            {/* {/* <!--  End .container --> */}
    </>
  )
}
