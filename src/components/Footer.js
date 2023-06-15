import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>
    <footer className="footer">
    <div className="footer-middle">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-3">
                    <div className="widget widget-about">
                        <img src="assets/images/demos/demo-3/logo-footer.png" className="footer-logo" alt="Footer Logo" width="105" height="25"/>
                        <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. </p>

                        <div className="widget-call">
                            <i className="icon-phone"></i>
                            Got Question? Call us 24/7
                            <Link to="tel:#">+0123 456 789</Link>         
                        </div>{/* <!-- End .widget-call --> */}
                    </div>{/* <!-- End .widget about-widget --> */}
                </div>{/* <!-- End .col-sm-6 col-lg-3 --> */}

                <div className="col-sm-6 col-lg-3">
                    <div className="widget">
                        <h4 className="widget-title">Useful Links</h4>{/* <!-- End .widget-title --> */}

                        <ul className="widget-list">
                            <li><Link to="about.html">About Molla</Link></li>
                            <li><Link to="/">Our Services</Link></li>
                            <li><Link to="/">How to shop on Molla</Link></li>
                            <li><Link to="faq.html">FAQ</Link></li>
                            <li><Link to="contact.html">Contact us</Link></li>
                        </ul>{/* <!-- End .widget-list --> */}
                    </div>{/* <!-- End .widget --> */}
                </div>{/* <!-- End .col-sm-6 col-lg-3 --> */}

                <div className="col-sm-6 col-lg-3">
                    <div className="widget">
                        <h4 className="widget-title">Customer Service</h4>{/* <!-- End .widget-title --> */}

                        <ul className="widget-list">
                            <li><Link to="/">Payment Methods</Link></li>
                            <li><Link to="/">Money-back guarantee!</Link></li>
                            <li><Link to="/">Returns</Link></li>
                            <li><Link to="/">Shipping</Link></li>
                            <li><Link to="/">Terms and conditions</Link></li>
                            <li><Link to="/">Privacy Policy</Link></li>
                        </ul>{/* <!-- End .widget-list --> */}
                    </div>{/* <!-- End .widget --> */}
                </div>{/* <!-- End .col-sm-6 col-lg-3 --> */}

                <div className="col-sm-6 col-lg-3">
                    <div className="widget">
                        <h4 className="widget-title">My Account</h4>{/* <!-- End .widget-title --> */}

                        <ul className="widget-list">
                            <li><Link to="/">Sign In</Link></li>
                            <li><Link to="cart.html">View Cart</Link></li>
                            <li><Link to="/">My Wishlist</Link></li>
                            <li><Link to="/">Track My Order</Link></li>
                            <li><Link to="/">Help</Link></li>
                        </ul>{/* <!-- End .widget-list --> */}
                    </div>{/* <!-- End .widget --> */}
                </div>{/* <!-- End .col-sm-6 col-lg-3 --> */}
            </div>{/* <!-- End .row --> */}
        </div>{/* <!-- End .container --> */}
    </div>{/* <!-- End .footer-middle --> */}

    <div className="footer-bottom">
        <div className="container">
            <p className="footer-copyright">Copyright © 2019 Molla Store. All Rights Reserved.</p>{/* <!-- End .footer-copyright --> */}
            <figure className="footer-payments">
                <img src="assets/images/payments.png" alt="Payment methods" width="272" height="20"/>
            </figure>{/* <!-- End .footer-payments --> */}
        </div>{/* <!-- End .container --> */}
    </div>{/* <!-- End .footer-bottom --> */}
</footer>
{/* {/* <!-- End .footer --> */} 
</>
  )
}
