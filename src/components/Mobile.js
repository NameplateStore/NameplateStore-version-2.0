import React from 'react'
import { Link } from 'react-router-dom'

export default function Mobile() {
  return (
    <>
    {/* <!-- Mobile Menu --> */}
    <div className="mobile-menu-overlay"></div>{/* <!-- End .mobil-menu-overlay --> */}

    <div className="mobile-menu-container">
        <div className="mobile-menu-wrapper">
            <span className="mobile-menu-close"><i className="icon-close"></i></span>
            
            <form action="/" method="get" className="mobile-search">
                <label htmlFor="mobile-search" className="sr-only">Search</label>
                <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required/>
                <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
            </form>

            <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
                <li className="nav-item">
                    <Link className="nav-link active" id="mobile-menu-link" data-toggle="tab" to="#mobile-menu-tab" role="tab" aria-controls="mobile-menu-tab" aria-selected="true">Menu</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" id="mobile-cats-link" data-toggle="tab" to="#mobile-cats-tab" role="tab" aria-controls="mobile-cats-tab" aria-selected="false">Categories</Link>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="mobile-menu-tab" role="tabpanel" aria-labelledby="mobile-menu-link">
                    <nav className="mobile-nav">
                        <ul className="mobile-menu">
                            <li className="active">
                                <Link to="index.html">Home</Link>

                                <ul>
                                    <li><Link to="index-1.html">01 - furniture store</Link></li>
                                    <li><Link to="index-2.html">02 - furniture store</Link></li>
                                    <li><Link to="index-3.html">03 - electronic store</Link></li>
                                    <li><Link to="index-4.html">04 - electronic store</Link></li>
                                    <li><Link to="index-5.html">05 - fashion store</Link></li>
                                    <li><Link to="index-6.html">06 - fashion store</Link></li>
                                    <li><Link to="index-7.html">07 - fashion store</Link></li>
                                    <li><Link to="index-8.html">08 - fashion store</Link></li>
                                    <li><Link to="index-9.html">09 - fashion store</Link></li>
                                    <li><Link to="index-10.html">10 - shoes store</Link></li>
                                    <li><Link to="index-11.html">11 - furniture simple store</Link></li>
                                    <li><Link to="index-12.html">12 - fashion simple store</Link></li>
                                    <li><Link to="index-13.html">13 - market</Link></li>
                                    <li><Link to="index-14.html">14 - market fullwidth</Link></li>
                                    <li><Link to="index-15.html">15 - lookbook 1</Link></li>
                                    <li><Link to="index-16.html">16 - lookbook 2</Link></li>
                                    <li><Link to="index-17.html">17 - fashion store</Link></li>
                                    <li><Link to="index-18.html">18 - fashion store (with sidebar)</Link></li>
                                    <li><Link to="index-19.html">19 - games store</Link></li>
                                    <li><Link to="index-20.html">20 - book store</Link></li>
                                    <li><Link to="index-21.html">21 - sport store</Link></li>
                                    <li><Link to="index-22.html">22 - tools store</Link></li>
                                    <li><Link to="index-23.html">23 - fashion left navigation store</Link></li>
                                    <li><Link to="index-24.html">24 - extreme sport store</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="category.html">Shop</Link>
                                <ul>
                                    <li><Link to="category-list.html">Shop List</Link></li>
                                    <li><Link to="category-2cols.html">Shop Grid 2 Columns</Link></li>
                                    <li><Link to="category.html">Shop Grid 3 Columns</Link></li>
                                    <li><Link to="category-4cols.html">Shop Grid 4 Columns</Link></li>
                                    <li><Link to="category-boxed.html"><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></Link></li>
                                    <li><Link to="category-fullwidth.html">Shop Fullwidth No Sidebar</Link></li>
                                    <li><Link to="product-category-boxed.html">Product Category Boxed</Link></li>
                                    <li><Link to="product-category-fullwidth.html"><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></Link></li>
                                    <li><Link to="cart.html">Cart</Link></li>
                                    <li><Link to="checkout.html">Checkout</Link></li>
                                    <li><Link to="wishlist.html">Wishlist</Link></li>
                                    <li><Link to="/">Lookbook</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="product.html" className="sf-with-ul">Product</Link>
                                <ul>
                                    <li><Link to="product.html">Default</Link></li>
                                    <li><Link to="product-centered.html">Centered</Link></li>
                                    <li><Link to="product-extended.html"><span>Extended Info<span className="tip tip-new">New</span></span></Link></li>
                                    <li><Link to="product-gallery.html">Gallery</Link></li>
                                    <li><Link to="product-sticky.html">Sticky Info</Link></li>
                                    <li><Link to="product-sidebar.html">Boxed With Sidebar</Link></li>
                                    <li><Link to="product-fullwidth.html">Full Width</Link></li>
                                    <li><Link to="product-masonry.html">Masonry Sticky Info</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/">Pages</Link>
                                <ul>
                                    <li>
                                        <Link to="about.html">About</Link>

                                        <ul>
                                            <li><Link to="about.html">About 01</Link></li>
                                            <li><Link to="about-2.html">About 02</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="contact.html">Contact</Link>

                                        <ul>
                                            <li><Link to="contact.html">Contact 01</Link></li>
                                            <li><Link to="contact-2.html">Contact 02</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="login.html">Login</Link></li>
                                    <li><Link to="faq.html">FAQs</Link></li>
                                    <li><Link to="404.html">Error 404</Link></li>
                                    <li><Link to="coming-soon.html">Coming Soon</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="blog.html">Blog</Link>

                                <ul>
                                    <li><Link to="blog.html">Classic</Link></li>
                                    <li><Link to="blog-listing.html">Listing</Link></li>
                                    <li>
                                        <Link to="/">Grid</Link>
                                        <ul>
                                            <li><Link to="blog-grid-2cols.html">Grid 2 columns</Link></li>
                                            <li><Link to="blog-grid-3cols.html">Grid 3 columns</Link></li>
                                            <li><Link to="blog-grid-4cols.html">Grid 4 columns</Link></li>
                                            <li><Link to="blog-grid-sidebar.html">Grid sidebar</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/">Masonry</Link>
                                        <ul>
                                            <li><Link to="blog-masonry-2cols.html">Masonry 2 columns</Link></li>
                                            <li><Link to="blog-masonry-3cols.html">Masonry 3 columns</Link></li>
                                            <li><Link to="blog-masonry-4cols.html">Masonry 4 columns</Link></li>
                                            <li><Link to="blog-masonry-sidebar.html">Masonry sidebar</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/">Mask</Link>
                                        <ul>
                                            <li><Link to="blog-mask-grid.html">Blog mask grid</Link></li>
                                            <li><Link to="blog-mask-masonry.html">Blog mask masonry</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="/">Single Post</Link>
                                        <ul>
                                            <li><Link to="single.html">Default with sidebar</Link></li>
                                            <li><Link to="single-fullwidth.html">Fullwidth no sidebar</Link></li>
                                            <li><Link to="single-fullwidth-sidebar.html">Fullwidth with sidebar</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="elements-list.html">Elements</Link>
                                <ul>
                                    <li><Link to="elements-products.html">Products</Link></li>
                                    <li><Link to="elements-typography.html">Typography</Link></li>
                                    <li><Link to="elements-titles.html">Titles</Link></li>
                                    <li><Link to="elements-banners.html">Banners</Link></li>
                                    <li><Link to="elements-product-category.html">Product Category</Link></li>
                                    <li><Link to="elements-video-banners.html">Video Banners</Link></li>
                                    <li><Link to="elements-buttons.html">Buttons</Link></li>
                                    <li><Link to="elements-accordions.html">Accordions</Link></li>
                                    <li><Link to="elements-tabs.html">Tabs</Link></li>
                                    <li><Link to="elements-testimonials.html">Testimonials</Link></li>
                                    <li><Link to="elements-blog-posts.html">Blog Posts</Link></li>
                                    <li><Link to="elements-portfolio.html">Portfolio</Link></li>
                                    <li><Link to="elements-cta.html">Call to Action</Link></li>
                                    <li><Link to="elements-icon-boxes.html">Icon Boxes</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>{/* <!-- End .mobile-nav --> */}
                </div>{/* <!-- .End .tab-pane --> */}
                <div className="tab-pane fade" id="mobile-cats-tab" role="tabpanel" aria-labelledby="mobile-cats-link">
                    <nav className="mobile-cats-nav">
                        <ul className="mobile-cats-menu">
                            <li><Link className="mobile-cats-lead" to="/">Daily offers</Link></li>
                            <li><Link className="mobile-cats-lead" to="/">Gift Ideas</Link></li>
                            <li><Link to="/">Beds</Link></li>
                            <li><Link to="/">Lighting</Link></li>
                            <li><Link to="/">Sofas & Sleeper sofas</Link></li>
                            <li><Link to="/">Storage</Link></li>
                            <li><Link to="/">Armchairs & Chaises</Link></li>
                            <li><Link to="/">Decoration </Link></li>
                            <li><Link to="/">Kitchen Cabinets</Link></li>
                            <li><Link to="/">Coffee & Tables</Link></li>
                            <li><Link to="/">Outdoor Furniture </Link></li>
                        </ul>{/* <!-- End .mobile-cats-menu --> */}
                    </nav>{/* <!-- End .mobile-cats-nav --> */}
                </div>{/* <!-- .End .tab-pane --> */}
            </div>{/* <!-- End .tab-content --> */}

            <div className="social-icons">
                <Link to="/" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></Link>
                <Link to="/" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></Link>
                <Link to="/" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></Link>
                <Link to="/" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></Link>
            </div>{/* <!-- End .social-icons --> */}
        </div>{/* <!-- End .mobile-menu-wrapper --> */}
    </div>
    {/* {/* <!-- End .mobile-menu-container --> */}
    </>
  )
}
