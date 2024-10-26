import "./deviceManagement.css";
import SharedDeviceLayout from "../../components/sharedDeviceLayout/SharedDeviceLayout";
import { useState } from "react";
import "../../components/toggleSwitch/toggleSwitch.css";

const DeviceManagement = () => {
  const [inputValue, setInputValue] = useState({
    isChecked: false,
    serialNumber: "",
    file: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    setInputValue({
      ...inputValue,
      isChecked: !target.checked,
      serialNumber: target.value,
      file: target.file[0],
    });
  };

  const ToggleSwitch = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <div className="toggle-container">
        <label className="switch" htmlFor="switch">
          <input
            hidden
            id="switch"
            type="checkbox"
            checked={inputValue.isChecked}
            onChange={handleChange}
          />
          <span className="slider" />
        </label>
      </div>
    );
  };

  return (
    <div>
      <div className="select-add-button select-container">
        <select name="" id="">
          <option value="">Device</option>
        </select>
      </div>
      <section className="section">
        <h2 className="heading">Device management</h2>
        <h4 className="subheading subheading2">
          Add details of the device, if any already installed on your car. If
          none, continue to next step.
        </h4>
      </section>
      <hr />
      <section className="section">
        <SharedDeviceLayout
          heading={"Device 1"}
          handleChange={handleChange}
          type={"file" || "text"}
          inputValue={inputValue}
          toggleIcon={<ToggleSwitch />}
        />
      </section>
      <hr />
      <section className="section">
        <SharedDeviceLayout
          heading={"Device 2"}
          handleChange={handleChange}
          type={"file" || "text"}
          inputValue={inputValue}
          toggleIcon={<ToggleSwitch />}
        />
      </section>
      <hr />

      <section className="section">
        <SharedDeviceLayout
          heading={"Device 3"}
          handleChange={handleChange}
          type={"file" || "text"}
          inputValue={inputValue}
          toggleIcon={<ToggleSwitch />}
        />
      </section>
      <hr />
      <section className="section">
        <SharedDeviceLayout
          heading={"Device 4"}
          handleChange={handleChange}
          type={"file" || "text"}
          inputValue={inputValue}
          toggleIcon={<ToggleSwitch />}
        />
      </section>
    </div>
  );
};

export default DeviceManagement;
