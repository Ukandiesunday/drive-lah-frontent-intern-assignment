import "./subscription.css";

const Subscription = () => {
  const cardItems = [
    {
      head: "Just matches",
      desc1: "bring your own GPS",
      desc2: "Mileage reporting to be done by you",
      desc3: "In-person key handover to guests",
      status: "free",
      icons: [],
    },
  ];

  return (
    <div>
      <div className="subscription-header">
        <img src="/location.svg" alt="" />
        <h2>Subscription</h2>
        <h4>Select the ideal subscription plan for your listing</h4>
      </div>
      <hr />
      <div className="select-plan">
        <h4>select your plan</h4>
        <div className="select-plan-cards-container"></div>
      </div>
    </div>
  );
};

export default Subscription;
