import React, {useState, useEffect} from 'react';

const InputField = ({ label, type, placeholder, id, value, onChange, required, orderProcess }) => {
  const getCurrentDate = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    return currentDate;
  };


  
  const [req, setReq] = useState(<span className={`w-100 card-input-label`} style={{color: "gray", fontSize:"9px"}}>Required</span>);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    const onlyNumbers = inputValue.replace(/[^0-9]/g, '');
    let formattedValue = onlyNumbers.substring(0, 11);

    if (type === 'number') {
      const inputValue = event.target.value;
      const onlyNumbers = inputValue.replace(/[^0-9.]/g, '');
      event.target.value = onlyNumbers;
    }
    if (formattedValue.length > 3) {
      formattedValue = formattedValue.replace(/^(\d{4})/, '$1-'); // Hyphen after the 4th digit
    }
    if (formattedValue.length > 8) {
      formattedValue = formattedValue.replace(/(\d{4})-(\d{3})/, '$1-$2-'); // Hyphen after the 7th digit
    }
    if (type === 'tel') {
      const inputValue = event.target.value;
      const onlyNumbers = inputValue.replace(/[^0-9.]/g, '');
      event.target.value = onlyNumbers;

    }

    if (onChange) {
      onChange(event.target.value);
    }
    setReq(inputValue ? null : <span className={`w-100 card-input-label}`} style={{color: "gray",fontSize:"9px"}}>Required</span>);

  };

  
  return (
    <div>
      <label className={`w-100 card-input-label`}>
        {label} {req}
      </label>
      {orderProcess ? 
      <input
        type={type}
        className="w-100 card-input mb-2"
        defaultValue={orderProcess}  
        id={id}
        onChange={handleInputChange}
        value={orderProcess}
        />
      :
      <>
      {type === "date" ? <input
        type={type}
        className="w-100 card-input mb-2"
        defaultValue={placeholder}  
        id={id}
        onChange={handleInputChange}
        value={placeholder}
      /> :
      <input
        type={type}
        className="w-100 card-input mb-2"
        placeholder={placeholder}  
        id={id}
        onChange={handleInputChange}
        value={value}
      />}
      </>
      }
    </div>
  );
};

export default InputField;
