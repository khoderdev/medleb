import React, { useState } from "react";

const CompoundInput = () => {
  const [inputValues, setInputValues] = useState({
    child1: "",
    child2: "",
    child3: "",
    child4: "",
  });

  const handleInputChange = (child, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [child]: value,
    }));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Child 1 (Text)"
          value={inputValues.child1}
          onChange={(e) => handleInputChange("child1", e.target.value)}
        />
      </div>
      <div>
        <select
          value={inputValues.child2}
          onChange={(e) => handleInputChange("child2", e.target.value)}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder="Child 3 (Text)"
          value={inputValues.child3}
          onChange={(e) => handleInputChange("child3", e.target.value)}
        />
      </div>
      <div>
        <select
          value={inputValues.child4}
          onChange={(e) => handleInputChange("child4", e.target.value)}
        >
          <option value="optionA">Option A</option>
          <option value="optionB">Option B</option>
          <option value="optionC">Option C</option>
        </select>
      </div>
    </div>
  );
};

export default CompoundInput;
