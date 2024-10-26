import "./sharedDevice.css";

const SharedDeviceLayout = ({
  heading,
  handleChange,
  inputValue,
  toggleIcon,
}) => {
  return (
    <div>
      <h4 className="subheading">{heading}</h4>
      <div className="device-wrapper">
        <div className="device-row">
          <div className="device-type">
            <label>Device Type</label>
            <span className="">Primary GPS </span>
          </div>
          <div className="toggle-wrapper">
            <div className="toggle-btn-container">
              <span>Bringing your own device?</span>
              {toggleIcon}
            </div>
            <p>
              Toggle this on if you're bringing your own device. Leave it off if
              Drive mate is to provide the device
            </p>
          </div>
        </div>

        <div className="device-row">
          <div className="device-type">
            <label>Serial Number</label>
            <input
              className="device-input"
              type="text"
              value={inputValue.serialNumber}
              name=""
              id=""
              onChange={handleChange}
              placeholder="Enter the serial number of the device"
            />
          </div>
          <div className="upload-container">
            <label htmlFor="upload">Upload an image of the device</label>
            <div className="upload-zone">
              <input
                hidden
                value={inputValue.file}
                type="file"
                name=""
                id="upload"
                onChange={handleChange}
                placeholder="Click to upload"
              />
              <label htmlFor="upload">Click to upload</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedDeviceLayout;
