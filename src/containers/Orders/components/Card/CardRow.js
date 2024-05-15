import React from 'react';
import InputField from './InputField';

const CardRow = ({ inputFields }) => {
  return (
    <div className="row card-row">
      {inputFields.map((field, index) => (
        <div key={index} className={`col-lg-${field.width || 4}`}>
          <InputField label={field.label} type={field.type} placeholder={field.placeholder} />
        </div>
      ))}
    </div>
  );
};

export default CardRow;
