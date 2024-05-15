import CardHeader from "./CardHeader";
import InputField from "./InputField";
import Table from "./Table";

const Card = ({
  header,
  subheading,
  rowStyle,
  rows,
  columnStyle,
  cardStyle,
  onChange
}) => {
  const handleFieldChange = (fieldName, value, index) => {
    console.log(fieldName+" = "+value);
    if (onChange) {
      onChange(fieldName, value, index);
    }
  };
   const handleButtonClick = (buttonOnClick, e) => {
    e.preventDefault();
    if (buttonOnClick) {
      buttonOnClick();
    }
  };

  return (
    <div className={`row ${rowStyle}`}>
      <div className={`col ${columnStyle}`}>
        <div class={`card text-white ${cardStyle}`}>
          <CardHeader header={header} subheading={subheading} />
          <div className="card-body">
            {rows.map((row, index) => (
              <div
                className={`row card-row d-flex align-items-end justify-content-center ${
                  row.bordered ? "border-bottom" : ""
                }`}
                key={index}
              >
                {row.fields.map((field, idx) => (
                  <div className={`col-lg-${field.width}`} key={idx}>
                    {field.fieldType === "input" ? (
                      <InputField
                        label={field.label}
                        type={field.type}
                        placeholder={field.placeholder}
                        onChange={(value) =>
                          handleFieldChange(field.label, value, field.index)
                        }
                      />
                    ) : field.fieldType === "table" ? (
                      <Table
                        data={field.tableData}
                        columns={field.tableColumns}
                        total={field.total}
                        balance={field.balance}
                        deposit={field.deposit}
                      />
                    ) : field.fieldType === "button" ? (
                      <button className="btn btn-green w-100 mt-4 mb-2">
                        <h1 className="text-title-sb">{field.text}</h1>
                      </button>
                    ) : field.fieldType === "buttonOrder" ? (
                       <button
                        className="btn btn-green w-100 mt-4 mb-2"
                        onClick={(e) => handleButtonClick(field.onClick, e)}
                      >
                        <h1 className="text-title-sb">{field.text}</h1>
                      </button>
                    ) : field.fieldType === "select" ? (
                      <div className="mb-2">
                        <label htmlFor="select" className="card-input-label">{field.label}</label>
                        <select
                          className="form-select card-select"
                          name="select"
                          id="select"
                          onChange={(e) =>
                            handleFieldChange(field.label, e.target.value)
                          }
                        >
                          <option value="">Select one</option>
                          {field.options.map((option, index) => (
                            <option key={index} value={option.label}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
