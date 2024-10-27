import "./deviceManagement.css";
import SharedDeviceLayout from "../../components/sharedDeviceLayout/SharedDeviceLayout";
import { useEffect, useState } from "react";
import { getItem, handleStoreItem } from "../../helpers/storage";

const DeviceManagement = () => {
  const [isChecked1, setChecked1] = useState(() => getItem("isChecked1"));
  const [isChecked2, setChecked2] = useState(() => getItem("isChecked2"));
  const [isChecked3, setChecked3] = useState(() => getItem("isChecked3"));
  const [isChecked4, setChecked4] = useState(() => getItem("isChecked4"));

  const [inputValue, setInputValue] = useState({
    serialNumber: "",
    file: "",
  });

  const handleChange = (e) => {
    const { value, files } = e.target;
    setInputValue({
      ...inputValue,
      serialNumber: value,
      file: files && files[0],
    });
  };

  useEffect(() => handleStoreItem("isChecked1", isChecked1), [isChecked1]);
  useEffect(() => handleStoreItem("isChecked2", isChecked2), [isChecked2]);
  useEffect(() => handleStoreItem("isChecked3", isChecked3), [isChecked3]);
  useEffect(() => handleStoreItem("isChecked4", isChecked4), [isChecked4]);
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
          heading={isChecked1 ? "Device 1" : "Device 1"}
          isChecked={isChecked1}
          gps={isChecked1 ? "Primary GPS" : "Primary GPS"}
          label={"check1"}
          setChecked={setChecked1}
          handleChange={handleChange}
          file={inputValue.file}
          serialNumber={inputValue.serialNumber}
        />
      </section>
      <hr />
      <section className="section">
        <SharedDeviceLayout
          heading={isChecked2 ? "Device 2" : "Device 1"}
          gps={isChecked2 ? "Secondary GPS" : "Primary GPS"}
          isChecked={isChecked2}
          label={"check2"}
          setChecked={setChecked2}
          handleChange={handleChange}
          file={inputValue.file}
          serialNumber={inputValue.serialNumber}
        />
      </section>
      <hr />

      <section className="section">
        <SharedDeviceLayout
          heading={isChecked3 ? "Device 2" : "Device 3"}
          isChecked={isChecked3}
          gps={isChecked3 ? "Secondary GPS" : "Drive Mate Go"}
          label={"check3"}
          setChecked={setChecked3}
          handleChange={handleChange}
          file={inputValue.file}
          serialNumber={inputValue.serialNumber}
        />
      </section>
      <hr />
      <section className="section">
        <SharedDeviceLayout
          heading={isChecked4 ? "Device 4" : "Device 4"}
          gps={isChecked4 ? "LockBook" : "LockBook"}
          isChecked={isChecked4}
          label={"check4"}
          setChecked={setChecked4}
          handleChange={handleChange}
          file={inputValue.file}
          serialNumber={inputValue.serialNumber}
        />
      </section>
    </div>
  );
};

export default DeviceManagement;
