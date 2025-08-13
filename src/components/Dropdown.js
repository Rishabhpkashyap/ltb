import React from 'react';

const Dropdown = ({ label, value, onChange, options, placeholder }) => {
  return (
    <div className="mb-3">
      <label className="premium-label block mb-1 text-[10px]">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="premium-dropdown w-full text-white rounded-lg px-3 py-2 focus:outline-none appearance-none cursor-pointer font-medium text-sm bg-opacity-60"
        >
          <option value="" className="bg-premium-card">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option} className="bg-premium-card py-1">
              {option}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
          <svg className="w-4 h-4 text-platinum/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;