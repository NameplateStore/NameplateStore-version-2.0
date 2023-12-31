import React from 'react'
import { Link } from 'react-router-dom'
export default function Cta() {
  return (
    <div className="container">
                <div className="cta cta-border cta-border-image mb-5 mb-lg-7" style={{backgroundImage: 'url(assets/images/demos/demo-3/bg-1.jpg)'}}>
                    <div className="cta-border-wrapper bg-white">
                        <div className="row justify-content-center">
                            <div className="col-md-11 col-xl-11">
                                <div className="cta-content">
                                    <div className="cta-heading">
                                        <h3 className="cta-title text-right"><span className="text-primary">New Deals</span> <br/>Start Daily at 12pm e.t.</h3> 
                                    </div>
                                    {/* <!-- End .cta-heading --> */}
                                    
                                    <div className="cta-text">
                                        <p>Get <span className="text-dark font-weight-normal">FREE SHIPPING* & 5% rewards</span> on <br/>every order with Molla Theme rewards program</p>
                                    </div>
                                    {/* <!-- End .cta-text --> */}
                                    <Link to="/" className="btn btn-primary btn-round"><span>Add to Cart for $50.00/yr</span><i className="icon-long-arrow-right"></i></Link>
                                </div>
                                {/* <!-- End .cta-content --> */}
                            </div>
                            {/* <!-- End .col-xl-7 --> */}
                        </div>
                        {/* /<!-- End .row --> */}
                    </div>
                    {/* <!-- End .bg-white --> */}
                </div>
                {/* <!-- End .cta --> */}
            </div>
  )
}
