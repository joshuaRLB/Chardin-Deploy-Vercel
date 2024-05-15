import { useState } from "react";
import CheckedSvg from "../../../../assets/Checked.svg";
import UncheckedSvg from "../../../../assets/Unchecked.svg";

const CardHeader = ({ subheading, header, hasCheck }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="card-header header-shadow">
      <div className="row">
        <div className="col">
          <h6 className="subheading mb-2">{subheading}</h6>
          <h1 className="heading">{header}</h1>
        </div>
        <div className="col-auto">
          {/* Adjust this na mag check pag completely filled ang fields */}

          {hasCheck ? (
            <div>
              {
                <img
                  src={isChecked ? CheckedSvg : UncheckedSvg}
                  alt="Checkbox"
                  onClick={handleCheckboxChange}
                  style={{
                    cursor: "pointer",
                    width: "1rem",
                    height: "1rem",
                  }}
                />
              }
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
