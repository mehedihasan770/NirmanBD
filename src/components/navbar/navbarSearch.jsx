"use client"

const SearchComponent = () => {
  return (
    <div className="relative">
      <div className="flex items-center">
        <div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "auto", opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center"
        >
          <form className="flex items-center bg-white/50 rounded-3xl backdrop-blur-3xl px-4 py-2 shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-500 mr-2"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="outline-none w-40 bg-transparent"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;