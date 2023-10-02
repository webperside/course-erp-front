import React, { useEffect, useState } from "react";


const Checkbox = ({title}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isValid, setIsValid] = useState(true);
    const [isRequired, setRequired] = useState(true);
    

  const handleChange = () => {
    setIsChecked(!isChecked);
      setIsValid(true);
      
    };
    
 

  return (
    <div>
      <label>
        [{isChecked ? 'click' : " "}]
        {isRequired && <span style={{ color: "red" }}>*</span>}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          disabled={!isValid}
        />
          </label>
          
         
    </div>
  );
};

export default Checkbox;
