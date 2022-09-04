import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-300">
      <div className="bg-blue-900 py-3 px-6">
        <div className="text-white">Smarcheck</div>
      </div>
      <div className="flex justify-between bg-white px-6">
        <div className="flex space-x-4">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "border-b-4 border-cyan-300 py-2 flex items-center space-x-2"
                : "flex items-center space-x-2"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <span>Home</span>
          </NavLink>
          <NavLink
            to={"/servers"}
            className={({ isActive }) =>
              isActive
                ? "border-b-4 border-cyan-300 py-2 flex items-center space-x-2"
                : "flex items-center space-x-2"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
              />
            </svg>

            <a href="/">Servers</a>
          </NavLink>
          <NavLink
            to={"/applications"}
            className={({ isActive }) =>
              isActive
                ? "border-b-4 border-cyan-300 py-2 flex items-center space-x-2"
                : "flex items-center space-x-2"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>

            <a href="/">Applications</a>
          </NavLink>
        </div>

        <button className="rounded-md bg-cyan-300 px-4 py-1 my-2 font-medium text-cyan-800">
          Check health status
        </button>
      </div>

      <div className="px-6">{children}</div>
    </div>
  );
};

export default Layout;
