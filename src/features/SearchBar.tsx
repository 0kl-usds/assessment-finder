import React from "react";

function SearchBar(props: {
  searchTerm: string;
  onUpdate: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { searchTerm, onUpdate } = props;
  return (
    <div className="m-3 py-6 pt-0">
      <input
        type="text"
        placeholder="Competencies, TKs, or key terms"
        className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        value={searchTerm}
        onChange={(e) => {
          e.preventDefault();
          onUpdate(e.target.value);
        }}
      />
    </div>
  );
}

export { SearchBar };
