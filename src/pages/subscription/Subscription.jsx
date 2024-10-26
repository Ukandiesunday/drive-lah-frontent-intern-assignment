import { useState } from "react";
import "./subscription.css";

const Subscription = () => {
  const [activePlan, setActivePlan] = useState("");

  const handleActiveClick = (active) => {
    setActivePlan(active);
  };
  const cardItems = [
    {
      id: 1,
      head: "Just matches",
      desc1: "bring your own GPS",
      desc2: "Mileage reporting to be done by you",
      desc3: "In-person key handover to guests",
      price: "free",
      icons: ["/location.svg", "/e.svg", "/lock.svg"],
    },
    {
      id: 2,
      head: "Good matches",
      desc1: "primary GPS included",
      desc2: "automated mileage calculations",
      desc3: "In-person key handover to guests",
      price: 10,
      icons: ["/location.svg", "/e.svg", "/lock.svg"],
    },
    {
      id: 3,
      head: "Best matches",
      desc1: "keyless access technology",
      desc2: "Automated mileage calculations",
      desc3: "Remote handover to guests",
      price: 30,
      icons: ["/location.svg", "/e.svg", "/lock.svg"],
    },
  ];

  return (
    <div className="subscription">
      <section className="section">
        <h2 className="heading">Subscription Plan</h2>
        <h4 className="subheading">
          Select the ideal subscription plan for your listing
        </h4>
      </section>
      <hr />
      <section className="section">
        <h4 className="plan-subheading">select your plan</h4>
        <div className="select-plan-cards-container">
          {cardItems.map((item, index) => (
            <ul
              onClick={() => handleActiveClick(item.id)}
              key={index}
              className={`plan-cards ${
                item.id === activePlan ? "active-plan" : ""
              }`}
            >
              <li className="plan-heading">{item.head}</li>
              <li className="plan-items">
                <img src={item.icons[0]} alt="" />
                {item.desc1}
              </li>
              <li className="plan-items">
                <img src={item.icons[1]} alt="" />
                {item.desc2}
              </li>
              <li className="plan-items">
                <img src={item.icons[2]} alt="" />
                {item.desc3}
              </li>
              {item.price === "free" ? (
                <li className="plan-price plan-items">Free</li>
              ) : (
                <li className="plan-price plan-items">
                  ${item.price}
                  <span className="month">/month</span>
                </li>
              )}
            </ul>
          ))}
        </div>
      </section>
      <hr />
      <section className="section">
        <h4 className="plan-subheading">
          Select add-ons for your subscription
        </h4>
        <div className="select-btn-container">
          <button className="select-add-button">
            BYO Secondary GPS $5/month <span className="circle"></span>
          </button>
          <button className="select-add-button">
            BYO Secondary GPS $5/month <span className="circle"></span>
          </button>
        </div>
      </section>
      <hr />

      <section className="section">
        <h4 className="plan-subheading">
          Select add-ons for your subscription
        </h4>
        <button className="select-add-button add-card-wrapper">
          <span className="card-photo-container">
            <img className="card-photo" src="/card.png" alt="card picture" />
            12345678 12345678
          </span>
          <span>
            <span className="card-year">MM/YY</span>
            <span>CVC</span>
          </span>
        </button>
        <p className="desc">
          You will not be charged right now.Subscription will only start once
          your listing is published and live.
        </p>
      </section>
      <hr />
      <article className="article">
        <p>
          Learn more about the plans here-{" "}
          <a href="">what is the right plan for me?</a>
        </p>
        <p>
          You will be able to switch between plans easily later as well. Speak
          to our host success team if you need any clarification.
        </p>
      </article>
    </div>
  );
};

export default Subscription;
