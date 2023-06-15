import React from 'react'

export default function Featured() {
  return (
    <>
    <div className="container featured">
                <ul className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="products-featured-link" data-toggle="tab" href="#products-featured-tab" role="tab" aria-controls="products-featured-tab" aria-selected="true">Featured</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="products-sale-link" data-toggle="tab" href="#products-sale-tab" role="tab" aria-controls="products-sale-tab" aria-selected="false">On Sale</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="products-top-link" data-toggle="tab" href="#products-top-tab" role="tab" aria-controls="products-top-tab" aria-selected="false">Top Rated</a>
                    </li>
                </ul>

                <div className="tab-content tab-content-carousel">
                    <div className="tab-pane p-0 fade show active" id="products-featured-tab" role="tabpanel" aria-labelledby="products-featured-link">
                        <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                            data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "600": {
                                        "items":2
                                    },
                                    "992": {
                                        "items":3
                                    },
                                    "1200": {
                                        "items":4
                                    }
                                }
                            }'>
                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-1.jpg" alt="Product " className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    </div>{/* <!-- End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <a href="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>{/* <!-- End .product-action --> */}
                                </figure>{/* <!-- End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="/">Cameras & Camcorders</a>
                                    </div>{/* <!-- End .product-cat --> */}
                                    <h3 className="product-title"><a href="product.html">GoPro - HERO7 Black HD Waterproof Action</a></h3>{/* <!-- End .product-title --> */}
                                    <div className="product-price">
                                        $349.99
                                    </div>{/* <!-- End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                        </div>{/* <!-- End .ratings --> */}
                                        <span className="ratings-text">( 2 Reviews )</span>
                                    </div>{/* <!-- End .rating-container --> */}
                                </div>{/* <!-- End .product-body --> */}
                            </div>{/* <!-- End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-new">New</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-2.jpg" alt="Product " className="product-image"/>
                                        <img src="assets/images/demos/demo-3/products/product-2-2.jpg" alt="Product " className="product-image-hover"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    </div>{/* <!-- End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <a href="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>{/* <!-- End .product-action --> */}
                                </figure>{/* <!-- End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="/">Smartwatches</a>
                                    </div>{/* <!-- End .product-cat --> */}
                                    <h3 className="product-title"><a href="product.html">Apple - Apple Watch Series 3 with White Sport Band</a></h3>{/* <!-- End .product-title --> */}
                                    <div className="product-price">
                                        $214.99
                                    </div>{/* <!-- End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '0%;'}}></div>{/* <!-- End .ratings-val --> */}
                                        </div>{/* <!-- End .ratings --> */}
                                        <span className="ratings-text">( 0 Reviews )</span>
                                    </div>{/* <!-- End .rating-container --> */}

                                    <div className="product-nav product-nav-dots">
                                        <a href="/" className="active" style={{background: '#e2e2e2'}}><span className="sr-only">Color name</span></a>
                                        <a href="/" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                                        <a href="/" style={{background: "#f2bc9e"}}><span className="sr-only">Color name</span></a>
                                    </div>{/* <!-- End .product-nav --> */}
                                </div>{/* <!-- End .product-body --> */}
                            </div>{/* <!-- End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-3.jpg" alt="Product " className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    </div>{/* <!-- End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <a href="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>{/* <!-- End .product-action --> */}
                                </figure>{/* <!-- End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="/">Laptops</a>
                                    </div>{/* <!-- End .product-cat --> */}
                                    <h3 className="product-title"><a href="product.html">Lenovo - 330-15IKBR 15.6"</a></h3>{/* <!-- End .product-title --> */}
                                    <div className="product-price">
                                        <span className="out-price">$339.99</span>
                                        <span className="out-text">Out of Stock</span>
                                    </div>{/* <!-- End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                        </div>{/* <!-- End .ratings --> */}
                                        <span className="ratings-text">( 3 Reviews )</span>
                                    </div>{/* <!-- End .rating-container --> */}
                                </div>{/* <!-- End .product-body --> */}
                            </div>{/* <!-- End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-4.jpg" alt="Product " className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    </div>{/* <!-- End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <a href="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>{/* <!-- End .product-action --> */}
                                </figure>{/* <!-- End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="/">Digital Cameras</a>
                                    </div>{/* <!-- End .product-cat --> */}
                                    <h3 className="product-title"><a href="product.html">Sony - Alpha a5100 Mirrorless Camera</a></h3>{/* <!-- End .product-title --> */}
                                    <div className="product-price">
                                        $499.99
                                    </div>{/* <!-- End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '70%'}}></div>{/* <!-- End .ratings-val --> */}
                                        </div>{/* <!-- End .ratings --> */}
                                        <span className="ratings-text">( 11 Reviews )</span>
                                    </div>{/* <!-- End .rating-container --> */}
                                </div>{/* <!-- End .product-body --> */}
                            </div>{/* <!-- End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-1.jpg" alt="Product " className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    </div>{/* <!-- End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <a href="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>{/* <!-- End .product-action --> */}
                                </figure>{/* <!-- End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="/">Cameras & Camcorders</a>
                                    </div>{/* <!-- End .product-cat --> */}
                                    <h3 className="product-title"><a href="product.html">GoPro - HERO7 Black HD Waterproof Action</a></h3>{/* <!-- End .product-title --> */}
                                    <div className="product-price">
                                        $349.99
                                    </div>{/* <!-- End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                        </div>{/* <!-- End .ratings --> */}
                                        <span className="ratings-text">( 2 Reviews )</span>
                                    </div>{/* <!-- End .rating-container --> */}
                                </div>{/* <!-- End .product-body --> */}
                            </div>{/* <!-- End .product --> */}
                        </div>{/* <!-- End .owl-carousel --> */}
                    </div>{/* <!-- .End .tab-pane --> */}
                    <div className="tab-pane p-0 fade" id="products-sale-tab" role="tabpanel" aria-labelledby="products-sale-link">
                        <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                            data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "600": {
                                        "items":2
                                    },
                                    "992": {
                                        "items":3
                                    },
                                    "1200": {
                                        "items":4
                                    }
                                }
                            }'>
                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-4.jpg" alt="Product " className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    </div>{/* <!-- End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <a href="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>{/* <!-- End .product-action --> */}
                                </figure>{/* <!-- End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="/">Digital Cameras</a>
                                    </div>{/* <!-- End .product-cat --> */}
                                    <h3 className="product-title"><a href="product.html">Sony - Alpha a5100 Mirrorless Camera</a></h3>{/* <!-- End .product-title --> */}
                                    <div className="product-price">
                                        $499.99
                                    </div>{/* <!-- End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '70%'}}></div>{/* <!-- End .ratings-val --> */}
                                        </div>{/* <!-- End .ratings --> */}
                                        <span className="ratings-text">( 11 Reviews )</span>
                                    </div>{/* <!-- End .rating-container --> */}
                                </div>{/* <!-- End .product-body --> */}
                            </div>{/* <!-- End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-1.jpg" alt="Product " className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    </div>{/* <!-- End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <a href="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>{/* <!-- End .product-action --> */}
                                </figure>{/* <!-- End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="/">Cameras & Camcorders</a>
                                    </div>{/* <!-- End .product-cat --> */}
                                    <h3 className="product-title"><a href="product.html">GoPro - HERO7 Black HD Waterproof Action</a></h3>{/* <!-- End .product-title --> */}
                                    <div className="product-price">
                                        $349.99
                                    </div>{/* <!-- End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                        </div>{/* <!-- End .ratings --> */}
                                        <span className="ratings-text">( 2 Reviews )</span>
                                    </div>{/* <!-- End .rating-container --> */}
                                </div>{/* <!-- End .product-body --> */}
                            </div>{/* <!-- End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-3.jpg" alt="Product " className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    </div>{/* <!-- End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <a href="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>{/* <!-- End .product-action --> */}
                                </figure>{/* <!-- End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="/">Laptops</a>
                                    </div>{/* <!-- End .product-cat --> */}
                                    <h3 className="product-title"><a href="product.html">Lenovo - 330-15IKBR 15.6"</a></h3>{/* <!-- End .product-title --> */}
                                    <div className="product-price">
                                        <span className="out-price">$339.99</span>
                                        <span className="out-text">Out of Stock</span>
                                    </div>{/* <!-- End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                        </div>{/* <!-- End .ratings --> */}
                                        <span className="ratings-text">( 3 Reviews )</span>
                                    </div>{/* <!-- End .rating-container --> */}
                                </div>{/* <!-- End .product-body --> */}
                            </div>{/* <!-- End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-new">New</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-2.jpg" alt="Product " className="product-image"/>
                                        <img src="assets/images/demos/demo-3/products/product-2-2.jpg" alt="Product " className="product-image-hover"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    </div>{/* <!-- End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <a href="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>{/* <!-- End .product-action --> */}
                                </figure>{/* <!-- End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="/">Smartwatches</a>
                                    </div>{/* <!-- End .product-cat --> */}
                                    <h3 className="product-title"><a href="product.html">Apple - Apple Watch Series 3 with White Sport Band</a></h3>{/* <!-- End .product-title --> */}
                                    <div className="product-price">
                                        $214.99
                                    </div>{/* <!-- End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '0%'}}></div>{/* <!-- End .ratings-val --> */}
                                        </div>{/* <!-- End .ratings --> */}
                                        <span className="ratings-text">( 0 Reviews )</span>
                                    </div>{/* <!-- End .rating-container --> */}

                                    <div className="product-nav product-nav-dots">
                                        <a href="/" className="active" style={{background: '#e2e2e2'}}><span className="sr-only">Color name</span></a>
                                        <a href="/" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                                        <a href="/" style={{background: '#f2bc9e'}}><span className="sr-only">Color name</span></a>
                                    </div>{/* <!-- End .product-nav --> */}
                                </div>{/* <!-- End .product-body --> */}
                            </div>{/* <!-- End .product --> */}
                        </div>{/* <!-- End .owl-carousel --> */}
                    </div>{/* <!-- .End .tab-pane --> */}
                    <div className="tab-pane p-0 fade" id="products-top-tab" role="tabpanel" aria-labelledby="products-top-link">
                        <div className="owl-carousel owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                            data-owl-options='{
                                "nav": true, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "600": {
                                        "items":2
                                    },
                                    "992": {
                                        "items":3
                                    },
                                    "1200": {
                                        "items":4
                                    }
                                }
                            }'>
                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-3.jpg" alt="Product " className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    </div>{/* <!-- End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <a href="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>{/* <!-- End .product-action --> */}
                                </figure>{/* <!-- End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="/">Laptops</a>
                                    </div>{/* <!-- End .product-cat --> */}
                                    <h3 className="product-title"><a href="product.html">Lenovo - 330-15IKBR 15.6"</a></h3>{/* <!-- End .product-title --> */}
                                    <div className="product-price">
                                        <span className="out-price">$339.99</span>
                                        <span className="out-text">Out of Stock</span>
                                    </div>{/* <!-- End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                        </div>{/* <!-- End .ratings --> */}
                                        <span className="ratings-text">( 3 Reviews )</span>
                                    </div>{/* <!-- End .rating-container --> */}
                                </div>{/* <!-- End .product-body --> */}
                            </div>{/* <!-- End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-1.jpg" alt="Product " className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    </div>{/* <!-- End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <a href="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>{/* <!-- End .product-action --> */}
                                </figure>{/* <!-- End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="/">Cameras & Camcorders</a>
                                    </div>{/* <!-- End .product-cat --> */}
                                    <h3 className="product-title"><a href="product.html">GoPro - HERO7 Black HD Waterproof Action</a></h3>{/* <!-- End .product-title --> */}
                                    <div className="product-price">
                                        $349.99
                                    </div>{/* <!-- End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                        </div>{/* <!-- End .ratings --> */}
                                        <span className="ratings-text">( 2 Reviews )</span>
                                    </div>{/* <!-- End .rating-container --> */}
                                </div>{/* <!-- End .product-body --> */}
                            </div>{/* <!-- End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-4.jpg" alt="Product " className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    </div>{/* <!-- End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <a href="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>{/* <!-- End .product-action --> */}
                                </figure>{/* <!-- End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="/">Digital Cameras</a>
                                    </div>{/* <!-- End .product-cat --> */}
                                    <h3 className="product-title"><a href="product.html">Sony - Alpha a5100 Mirrorless Camera</a></h3>{/* <!-- End .product-title --> */}
                                    <div className="product-price">
                                        $499.99
                                    </div>{/* <!-- End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '70%'}}></div>{/* <!-- End .ratings-val --> */}
                                        </div>{/* <!-- End .ratings --> */}
                                        <span className="ratings-text">( 11 Reviews )</span>
                                    </div>{/* <!-- End .rating-container --> */}
                                </div>{/* <!-- End .product-body --> */}
                            </div>{/* <!-- End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <span className="product-label label-circle label-new">New</span>
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-2.jpg" alt="Product " className="product-image"/>
                                        <img src="assets/images/demos/demo-3/products/product-2-2.jpg" alt="Product " className="product-image-hover"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    </div>{/* <!-- End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <a href="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>{/* <!-- End .product-action --> */}
                                </figure>{/* <!-- End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="/">Smartwatches</a>
                                    </div>{/* <!-- End .product-cat --> */}
                                    <h3 className="product-title"><a href="product.html">Apple - Apple Watch Series 3 with White Sport Band</a></h3>{/* <!-- End .product-title --> */}
                                    <div className="product-price">
                                        $214.99
                                    </div>{/* <!-- End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '0%'}}></div>{/* <!-- End .ratings-val --> */}
                                        </div>{/* <!-- End .ratings --> */}
                                        <span className="ratings-text">( 0 Reviews )</span>
                                    </div>{/* <!-- End .rating-container --> */}

                                    <div className="product-nav product-nav-dots">
                                        <a href="/" className="active" style={{background: '#e2e2e2'}}><span className="sr-only">Color name</span></a>
                                        <a href="/" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                                        <a href="/" style={{background: '#f2bc9e'}}><span className="sr-only">Color name</span></a>
                                    </div>{/* <!-- End .product-nav --> */}
                                </div>{/* <!-- End .product-body --> */}
                            </div>{/* <!-- End .product --> */}

                            <div className="product product-2">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img src="assets/images/demos/demo-3/products/product-1.jpg" alt="Product " className="product-image"/>
                                    </a>

                                    <div className="product-action-vertical">
                                        <a href="/" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                    </div>{/* <!-- End .product-action --> */}

                                    <div className="product-action product-action-dark">
                                        <a href="/" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                        <a href="popup/quickView.html" className="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                    </div>{/* <!-- End .product-action --> */}
                                </figure>{/* <!-- End .product-media --> */}

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="/">Cameras & Camcorders</a>
                                    </div>{/* <!-- End .product-cat --> */}
                                    <h3 className="product-title"><a href="product.html">GoPro - HERO7 Black HD Waterproof Action</a></h3>{/* <!-- End .product-title --> */}
                                    <div className="product-price">
                                        $349.99
                                    </div>{/* <!-- End .product-price --> */}
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={{width: '60%'}}></div>{/* <!-- End .ratings-val --> */}
                                        </div>{/* <!-- End .ratings --> */}
                                        <span className="ratings-text">( 2 Reviews )</span>
                                    </div>{/* <!-- End .rating-container --> */}
                                </div>{/* <!-- End .product-body --> */}
                            </div>{/* <!-- End .product --> */}
                        </div>{/* <!-- End .owl-carousel --> */}
                    </div>{/* <!-- .End .tab-pane --> */}
                </div>
                {/* {/* <!-- End .tab-content --> */} 
            </div>
                <div class="mb-7 mb-lg-11"></div>
                </>
            
  )
}
