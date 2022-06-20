import React, { FC, useState } from "react";
import "./dropdown.css";

type DropdownProps = {
  options: Array<string>;
  selectedOptions: string;
  setSelectedOptions: (selectedOption: string) => void;
  label: string;
};

const Dropdown: FC<DropdownProps> = (props) => {
  const { options, selectedOptions, setSelectedOptions, label } = props;
  const [isOptionsVisible, setIsOptionVisible] = useState<boolean>(false);

  const handleSelect = (option: string) => {
    setSelectedOptions(option);
    setIsOptionVisible(false);
  };

  return (
    <div className="dropdown">
      <div className="heading">Dropdown | By Venkat</div>
      {label && <div className="dropdown-label">{label}</div>}
      <div
        className="dropdown-component"
        onClick={() => {
          setIsOptionVisible(!isOptionsVisible);
        }}
      >
        <div className="slected-options-wrapper">{selectedOptions}</div>
        {isOptionsVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-up"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#5c6dff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="6 15 12 9 18 15" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-down"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#5c6dff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
        {isOptionsVisible && (
          <div className="dropdown-options">
            {options.length > 0 &&
              options.map((option, index) => {
                return (
                  <div
                    className="dropdown-option"
                    onClick={() => handleSelect(option)}
                    key={index}
                  >
                    {option}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
