import React, {  useState } from "react";


const Checkbox = ({title}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isValid, setIsValid] = useState(true);
  
    

  const handleChange = () => {
    setIsChecked(!isChecked);
      setIsValid(true);
      
    };
    
 

  return (
    <div>
      <label>
        [{isChecked ? 'click' : " "}]
        { <span style={{ color: "red" }}>*</span>}
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
