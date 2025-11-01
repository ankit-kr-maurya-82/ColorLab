import React from "react";
import "./styles/Price.css";

const Price = () => {
  return (
    <div className="pricing-page">
      <h1 className="pricing-title">Our Plans</h1>
      <p className="pricing-subtitle">Choose the plan that fits your needs</p>

      <div className="pricing-container">
        {/* Basic Plan */}
        <div className="price-card">
          <h2>Basic</h2>
          <p className="price">Rs. 259<span>/mo</span></p>
          <ul>
            <li>✔ 30 Credits</li>
            <li>✔ Free Ads Support</li>
            <li>✔ 10 More Shades</li>
            <li>✔ Basic Support</li>
          </ul>
          <button>Choose Basic</button>
        </div>

        {/* Pro Plan */}
        <div className="price-card featured">
          <h2>Pro</h2>
          <p className="price">Rs. 869<span>/mo</span></p>
          <ul>
            <li>✔ 50 Credits</li>
            <li>✔ Free Ads Support</li>
            <li>✔ 100 More Shades</li>
          </ul>
          <button>Choose Pro</button>
        </div>

        {/* Premium Plan
        <div className="price-card">
          <h2>Premium</h2>
          <p className="price">$29<span>/mo</span></p>
          <ul>
            <li>✔ All Pro Features</li>
            <li>✔ Team Access</li>
            <li>✔ 24/7 Support</li>
          </ul>
          <button>Choose Premium</button>
        </div> */}
      </div>
    </div>
  );
};

export default Price;
