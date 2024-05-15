const TextAreaField = () => {
  return (
    <div>
      <label className="w-100 card-input-label">{label}</label>
      <input
        type={type}
        className="w-100 card-input"
        placeholder={placeholder}
        id={id}
        onChange={type === "tel" ? handleInputChange : undefined}
        value={value}
      />
    </div>
  );
};

export default TextAreaField;
