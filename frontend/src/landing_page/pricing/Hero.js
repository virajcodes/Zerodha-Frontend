import React from "react";

function Hero() {
    return (
        <div className="container ">
            <div className="text-center row p-3 mt-5 border-bottom " style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <h1>
                    Pricing
                </h1>
                <h3 className="text-muted fs-5">
                    Free equity investments and flat 20 traday and F&O trades
                </h3>
            </div>
            <div className="row text-center border-bottom">
                <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg" />
                    <h3>Free equity delivery</h3>
                    <p className="text-small text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹
                        0 brokerage.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/intradayTrades.svg" />
                    <h3>Free equity delivery</h3>
                    <p className="text-small text-muted">Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
                        intraday trades across equity, currency, and commodity trades.</p>
                </div>
                <div className="col-4 p-5">
                    <img src="media/images/pricingEquity.svg" />
                    <h3>Free equity delivery</h3>
                    <p className="text-small text-muted">All direct mutual fund investments are absolutely free — ₹ 0
                        commissions & DP charges.</p>
                </div>
            </div>


        </div>
    );
}

export default Hero;
