import React from "react";

const Searchbar = () => {
  return (
    <div className="py-6 flex flex-row justify-items-center">
      <input
        id="searchBox"
        type="text"
        placeholder="Search Twitter"
        className="px-10 py-3 rounded-3xl bg-gray-900"
      />
    </div>
  );
};

export default Searchbar;
