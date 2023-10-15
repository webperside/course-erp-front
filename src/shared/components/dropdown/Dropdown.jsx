import React, { useState, useEffect, useRef } from "react";

const mockData = ["Branch 1", "Branch 2", "Branch 3"];

export default function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="flex justify-center pb-4">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="w-56 p-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded flex items-center justify-between"
          aria-haspopup="listbox"
          aria-expanded={isDropdownOpen}
        >
          <span>{selectedItem || "Select branch"}</span>
          <svg
            className={`w-4 h-4 transition-transform transform ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isDropdownOpen && (
          <div className="w-56 absolute  bg-white border border-gray-100 rounded shadow-md">
            <ul>
              {mockData.map((item, index) => (
                <li
                  key={index}
                  onClick={() => selectItem(item)}
                  className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
