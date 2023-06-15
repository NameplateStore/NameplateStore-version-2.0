import React from 'react'

export default function Iconbox() {
  return (
    <div className="icon-boxes-container mt-2 mb-2 bg-transparent">
    <div className="container">
        <div className="row">
            <div className="col-sm-6 col-lg-3">
                <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                        <i className="icon-rocket"></i>
                    </span>
                    <div className="icon-box-content">
                        <h3 className="icon-box-title">Free Shipping</h3>{/* <!-- End .icon-box-title --> */}
                        <p>Orders $50 or more</p>
                    </div>{/* <!-- End .icon-box-content --> */}
                </div>{/* <!-- End .icon-box --> */}
            </div>{/* <!-- End .col-sm-6 col-lg-3 --> */}

            <div className="col-sm-6 col-lg-3">
                <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                        <i className="icon-rotate-left"></i>
                    </span>

                    <div className="icon-box-content">
                        <h3 className="icon-box-title">Free Returns</h3>{/* <!-- End .icon-box-title --> */}
                        <p>Within 30 days</p>
                    </div>{/* <!-- End .icon-box-content --> */}
                </div>{/* <!-- End .icon-box --> */}
            </div>{/* <!-- End .col-sm-6 col-lg-3 --> */}

            <div className="col-sm-6 col-lg-3">
                <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                        <i className="icon-info-circle"></i>
                    </span>

                    <div className="icon-box-content">
                        <h3 className="icon-box-title">Get 20% Off 1 Item</h3>{/* <!-- End .icon-box-title --> */}
                        <p>when you sign up</p>
                    </div>{/* <!-- End .icon-box-content --> */}
                </div>{/* <!-- End .icon-box --> */}
            </div>{/* <!-- End .col-sm-6 col-lg-3 --> */}

            <div className="col-sm-6 col-lg-3">
                <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                        <i className="icon-life-ring"></i>
                    </span>

                    <div className="icon-box-content">
                        <h3 className="icon-box-title">We Support</h3>{/* <!-- End .icon-box-title --> */}
                        <p>24/7 amazing services</p>
                    </div>{/* <!-- End .icon-box-content --> */}
                </div>{/* <!-- End .icon-box --> */}
            </div>{/* <!-- End .col-sm-6 col-lg-3 --> */}
        </div>{/* <!-- End .row --> */}
    </div>
    {/* {/* <!-- End .container --> */} 
</div>
// {/* <!-- End .icon-boxes-container --> */}
  )
}
