import React from "react";

export default function Header() {
  return (
    <header className="header header-3 header-intro-clearance">
      <div className="header-top ">
        <div className="container">
          <div className="header-left">
            <a href="tel:#">
              <i className="icon-phone"></i>Call: +0123 456 789
            </a>
          </div>{" "}
          {/* <!-- End .header-left --> */}
          <div className="header-right">
            <ul className="top-menu">
              <li>
                <a href="/">Links</a>
                <ul>
                  <li>
                    <a href="#signin-modal" data-toggle="modal">
                      Sign in / Sign up
                    </a>
                  </li>
                </ul>
              </li>
            </ul>{" "}
            {/* <!-- End .top-menu --> */}
          </div>{" "}
          {/* <!-- End .header-right --> */}
        </div>{" "}
        {/* <!-- End .container --> */}
      </div>{" "}
      {/* <!-- End .header-top --> */}
      <div className="header-middle">
        <div className="container">
          <div className="header-left">
            <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars"></i>
            </button>

            <a href="index.html" className="logo">
              <img
                src="assets/images/demos/demo-2/logo.pn"
                alt="NS Logo"
                width="105"
                height="25"
              />
            </a>
          </div>
          {/* <!-- End .header-left --> */}
          <div className="header-center">
                        <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                            <a href= "/" className="search-toggle" role="button"><i className="icon-search"></i></a>
                            <form action= "/" method="get">
                                <div className="header-search-wrapper search-wrapper-wide">
                                    <label for="q" className="sr-only">Search</label>
                                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                    <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="dropdown compare-dropdown">
                            <a href= "/" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Compare Products" aria-label="Compare Products">
                                <div className="icon">
                                    <i className="icon-random"></i>
                                </div>
                                <p>Compare</p>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right">
                                <ul className="compare-products">
                                    <li className="compare-product">
                                        <a href= "/" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                        <h4 className="compare-product-title"><a href="product.html">Blue Night Dress</a></h4>
                                    </li>
                                    <li className="compare-product">
                                        <a href= "/" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                        <h4 className="compare-product-title"><a href="product.html">White Long Skirt</a></h4>
                                    </li>
                                </ul>

                                <div className="compare-actions">
                                    <a href= "/" className="action-link">Clear All</a>
                                    <a href= "/" className="btn btn-outline-primary-2"><span>Compare</span><i className="icon-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div> 

                        <div className="wishlist">
                            <a href="wishlist.html" title="Wishlist">
                                <div className="icon">
                                    <i className="icon-heart-o"></i>
                                    <span className="wishlist-count badge">3</span>
                                </div>
                                <p>Wishlist</p>
                            </a>
                        </div> 

                        <div className="dropdown cart-dropdown">
                            <a href= "/" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <div className="icon">
                                    <i className="icon-shopping-cart"></i>
                                    <span className="cart-count">2</span>
                                </div>
                                <p>Cart</p>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-cart-products">
                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="product.html">Beige knitted elastic runner shoes</a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x $84.00
                                            </span>
                                        </div> 

                                        <figure className="product-image-container">
                                            <a href="product.html" className="product-image">
                                                <img src="assets/images/products/cart/product-1.jpg" alt="product"/>
                                            </a>
                                        </figure>
                                        <a href= "/" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                    </div>

                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="product.html">Blue utility pinafore denim dress</a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>
                                                x $76.00
                                            </span>
                                        </div> 

                                        <figure className="product-image-container">
                                            <a href="product.html" className="product-image">
                                                <img src="assets/images/products/cart/product-2.jpg" alt="product"/>
                                            </a>
                                        </figure>
                                        <a href= "/" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                    </div>
                                </div>

                                <div className="dropdown-cart-total">
                                    <span>Total</span>

                                    <span className="cart-total-price">$160.00</span>
                                </div>

                                <div className="dropdown-cart-action">
                                    <a href="cart.html" className="btn btn-primary">View Cart</a>
                                    <a href="checkout.html" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
          {/* <!-- End .header-right --> */}
        </div>{" "}
        {/* <!-- End .container --> */}
      </div>{" "}
      {/* <!-- End .header-middle --> */}
      <div className="header-bottom sticky-header">
        <div className="container">
          <div className="header-left">
            <div className="dropdown category-dropdown">
              <a
                href="/"
                className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
                title="Browse Categories"
              >
                Browse Categories
              </a>
              <div className="dropdown-menu">
                <nav className="side-nav">
                  <ul className="menu-vertical sf-arrows">
                    <li className="item-lead">
                      <a href="/">Daily offers</a>
                    </li>
                    <li className="item-lead">
                      <a href="/">Gift Ideas</a>
                    </li>
                    <li>
                      <a href="/">NameplateCat-1</a>
                    </li>
                    <li>
                      <a href="/">NameplateCat-1</a>
                    </li>
                    <li>
                      <a href="/">NameplateCat-1</a>
                    </li>
                    <li>
                      <a href="/">NameplateCat-1</a>
                    </li>
                    <li>
                      <a href="/">NameplateCat-1</a>
                    </li>
                    <li>
                      <a href="/">NameplateCat-1 </a>
                    </li>
                    <li>
                      <a href="/">NameplateCat-1</a>
                    </li>
                    <li>
                      <a href="/">NameplateCat-1</a>
                    </li>
                    <li>
                      <a href="/">NameplateCat-1</a>
                    </li>
                  </ul>{" "}
                  {/* <!-- End .menu-vertical --> */}
                </nav>{" "}
                {/* <!-- End .side-nav --> */}
              </div>{" "}
              {/* <!-- End .dropdown-menu --> */}
            </div>{" "}
            {/* <!-- End .category-dropdown --> */}
          </div>{" "}
          {/* <!-- End .header-left --> */}
          <div className="header-center">
            <nav className="main-nav">
              <ul className="menu sf-arrows">
                <li className="megamenu-container active">
                  <a href="index.html" className="">
                    Home
                  </a>
                </li>
                <li>
                  <a href="category.html" className="">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="product.html" className="sf-with-ul">
                    Product
                  </a>
                  <div className="megamenu megamenu-sm">
                    <div className="row no-gutters">
                      <div className="col-md-6">
                        <div className="menu-col">
                          <div className="menu-title">Product Details</div>{" "}
                          {/* <!-- End .menu-title --> */}
                          <ul>
                            <li>
                              <a href="product.html">Product-1</a>
                            </li>
                            <li>
                              <a href="product-centered.html">Product-1</a>
                            </li>
                            <li>
                              <a href="product-extended.html">
                                <span>
                                  Product-1
                                  <span className="tip tip-new">New</span>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="product-gallery.html">Product-1</a>
                            </li>
                            <li>
                              <a href="product-sticky.html">Product-1</a>
                            </li>
                            <li>
                              <a href="product-sidebar.html">Product-1</a>
                            </li>
                            <li>
                              <a href="product-fullwidth.html">Product-1</a>
                            </li>
                            <li>
                              <a href="product-masonry.html">Product-1</a>
                            </li>
                          </ul>
                        </div>{" "}
                        {/* <!-- End .menu-col --> */}
                      </div>{" "}
                      {/* <!-- End .col-md-6 --> */}
                      <div className="col-md-6">
                        <div className="banner banner-overlay">
                          <a href="category.html">
                            <img
                              src="assets/images/menu/banner-2.jpg"
                              alt="Banner"
                            />
                            <div className="banner-content banner-content-bottom">
                              <div className="banner-title text-white">
                                New Trends
                                <br />
                                <span>
                                  <strong>spring 2019</strong>
                                </span>
                              </div>{" "}
                              {/* <!-- End .banner-title --> */}
                            </div>{" "}
                            {/* <!-- End .banner-content --> */}
                          </a>
                        </div>{" "}
                        {/* <!-- End .banner --> */}
                      </div>{" "}
                      {/* <!-- End .col-md-6 --> */}
                    </div>{" "}
                    {/* <!-- End .row --> */}
                  </div>{" "}
                  {/* <!-- End .megamenu megamenu-sm --> */}
                </li>
                <li>
                  <a href="about.html" className="">
                    About
                  </a>
                </li>
                <li>
                  <a href="contact-2.html">Contact 02</a>
                </li>

                <li>
                  <a href="blog.html" className="sf-with-ul">
                    Blog
                  </a>
                </li>
              </ul>
              {/* <!-- End .menu --> */}
            </nav>
            {/* <!-- End .main-nav --> */}
          </div>
          {/*  {/* <!-- End .header-center --> */}
          <div className="header-right">
            <i className="la la-lightbulb-o"></i>
            <p>
              Clearance<span className="highlight">&nbsp;Up to 30% Off</span>
            </p>
          </div>
        </div>
        {/* <!-- End .container --> */}
      </div>
      {/* <!-- End .header-bottom --> */}
    </header>
  );
}
