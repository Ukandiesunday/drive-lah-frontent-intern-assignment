import { useEffect, useState } from "react";
import "./subscription.css";
import { getItem, handleStoreItem } from "../../helpers/storage";

const Subscription = () => {
  const [activeItem, setActiveItem] = useState(
    () => getItem("activePlan") || null
  );

  useEffect(() => {
    if (activeItem !== null) {
      handleStoreItem("activePlan", activeItem);
    }
  }, [activeItem]);

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };

  const cardItems = [
    {
      id: 1,
      head: "Just matches",
      desc1: "bring your own GPS",
      desc2: "Mileage reporting to be done by you",
      desc3: "In-person key handover to guests",
      price: "free",
    },
    {
      id: 2,
      head: "Good matches",
      desc1: "primary GPS included",
      desc2: "automated mileage calculations",
      desc3: "In-person key handover to guests",
      price: 10,
    },
    {
      id: 3,
      head: "Best matches",
      desc1: "keyless access technology",
      desc2: "Automated mileage calculations",
      desc3: "Remote handover to guests",
      price: 30,
    },
  ];

  return (
    <div className="subscription">
      <div className="select-add-button select-container">
        <select name="" id="">
          <option value="">Subscription</option>
        </select>
      </div>
      <section className="section">
        <h2 className="heading">Subscription Plan</h2>
        <h4 className="subheading subheading2">
          Select the ideal subscription plan for your listing
        </h4>
      </section>
      <hr />
      <section className="section">
        <h4 className="plan-subheading">select your plan</h4>
        <div className="select-plan-cards-container">
          {cardItems.map((item, index) => (
            <ul
              onClick={() => handleItemClick(item.id)}
              key={index}
              className={`plan-cards ${
                item.id === activeItem ? "active-plan" : ""
              }`}
            >
              <li className="plan-heading">{item.head}</li>
              <li className="plan-items">
                <img src={"/location.svg"} className="sub-icons" alt="" />
                {item.desc1}
              </li>
              <li className="plan-items">
                <img src={"/e.svg"} className="sub-icons" alt="" />
                {item.desc2}
              </li>
              <li className="plan-items">
                <img src={"/lock.svg"} className="sub-icons" alt="" />
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
          {activeItem === 1 && (
            <button className="select-add-button">
              BYO Secondary GPS $5/month <span className="circle"></span>
            </button>
          )}
          {activeItem === 2 && (
            <button className="select-add-button">
              BYO Secondary GPS $10/month <span className="circle"></span>
            </button>
          )}
          {activeItem === 3 && (
            <button className="select-add-button coming-soon">
              Between trip insurance <span className="circle"></span>
            </button>
          )}
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
