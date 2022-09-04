import Layout from "../shared/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="mt-4 flex space-x-4">
        <div className="w-1/3 space-y-3 rounded-md border border-gray-200 bg-white py-2 px-4 shadow">
          <h2 className="text-sm">Application Status</h2>
          <div className="flex justify-between">
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full border-2 border-gray-400 bg-white px-2 py-1">
                10
              </div>
              <p className="text-sm">All</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full border-2 border-transparent bg-green-600 px-2 py-1 text-white">
                10
              </div>
              <p className="text-sm">Available</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full border-2 border-transparent bg-red-600 px-2 py-1 text-white">
                10
              </div>
              <p className="text-sm">Critical</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 space-y-3 rounded-md border border-gray-200 bg-white py-2 px-4 shadow">
          <h2 className="text-sm">Servers</h2>
          <div className="flex justify-between">
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full border-2 border-gray-400 bg-white px-2 py-1">
                10
              </div>
              <p className="text-sm">All</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full border-2 border-transparent bg-green-600 px-2 py-1 text-white">
                10
              </div>
              <p className="text-sm">Available</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="rounded-full border-2 border-transparent bg-yellow-600 px-2 py-1 text-white">
                10
              </div>
              <p className="text-sm">Critical</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 space-y-3 rounded-md border border-gray-200 bg-white py-2 px-4 shadow">
          <h2 className="text-sm">Health check Count</h2>
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <div className="rounded-full border-2 border-transparent bg-white px-2 text-3xl font-semibold text-gray-600">
                60
              </div>
              <p className="text-sm">counts</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 rounded-md bg-white py-4 px-8">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex w-10 items-center rounded-tl-md rounded-bl-md bg-gray-200 pl-3">
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="input"
              id="default-search"
              className="block w-full rounded-lg border border-gray-200 bg-gray-50 p-1 pl-12 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Search"
            />
          </div>
          <div>
            <select
              name=""
              id=""
              className="w-40 rounded-lg border border-gray-200 p-1 text-gray-500"
            >
              <option value="">All application</option>
            </select>
          </div>
          <div>
            <select
              name=""
              id=""
              className="w-40 rounded-lg border border-gray-200 p-1 text-gray-500"
            >
              <option value="">All servers</option>
            </select>
          </div>
          <div>
            <select
              name=""
              id=""
              className="w-44 rounded-lg border border-gray-200 p-1 text-gray-500"
            >
              <option value="">Health check status</option>
            </select>
          </div>
        </div>

        <div>
          <div className="relative mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500">
              <thead className="bg-gray-200 text-xs uppercase text-gray-700">
                <tr>
                  <th scope="col" className="whitespace-nowrap py-3 px-6">
                    s / n
                  </th>
                  <th scope="col" className="py-3 px-6">
                    application
                  </th>
                  <th scope="col" className="whitespace-nowrap py-3 px-6">
                    servers mapped
                  </th>
                  <th scope="col" className="whitespace-nowrap py-3 px-10">
                    last scan date
                  </th>
                  <th scope="col" className="py-3 px-6">
                    status
                  </th>
                  <th scope="col" className="py-3 px-6">
                    action
                  </th>
                  <th scope="col" className="py-3 px-6"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-white text-sm text-gray-700">
                  <td  className="whitespace-nowrap py-4 px-6">
                    1
                  </td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      <p>Apllication name goes here</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1 text-cyan-500">
                      <span className="">3</span>
                      <p>servers</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 uppercase">11/12/20 3:57:29 pm</td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <div className="flex items-center justify-center space-x-1 text-center">
                      <div className="h-5 w-5 rounded-full bg-green-500 text-white">
                        &#10003;
                      </div>
                      <p>Healthy</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <button className="rounded-md bg-cyan-300 px-4 py-1 font-medium text-cyan-800">
                      View Result
                    </button>
                  </td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b bg-white text-sm text-gray-700">
                  <td  className="whitespace-nowrap py-4 px-6">
                    2
                  </td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      <p>Apllication name goes here</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1 text-cyan-500">
                      <span className="">3</span>
                      <p>servers</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 uppercase">11/12/20 3:57:29 pm</td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <div className="flex items-center justify-center space-x-1 text-center">
                      <div className="h-5 w-5 rounded-full bg-green-500 text-white">
                        &#10003;
                      </div>
                      <p>Healthy</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <button className="rounded-md bg-cyan-300 px-4 py-1 font-medium text-cyan-800">
                      View Result
                    </button>
                  </td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b bg-white text-sm text-gray-700">
                  <td  className="whitespace-nowrap py-4 px-6">
                    3
                  </td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      <p>Apllication name goes here</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1 text-cyan-500">
                      <span className="">3</span>
                      <p>servers</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 uppercase">11/12/20 3:57:29 pm</td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <div className="flex items-center justify-center space-x-1 text-center">
                      <div className="h-5 w-5 rounded-full bg-green-500 text-white">
                        &#10003;
                      </div>
                      <p>Healthy</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <button className="rounded-md bg-cyan-300 px-4 py-1 font-medium text-cyan-800">
                      View Result
                    </button>
                  </td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b bg-white text-sm text-gray-700">
                  <td  className="whitespace-nowrap py-4 px-6">
                    4
                  </td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      <p>Apllication name goes here</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1 text-cyan-500">
                      <span className="">3</span>
                      <p>servers</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 uppercase">11/12/20 3:57:29 pm</td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <div className="flex items-center justify-center space-x-1 text-center">
                      <div className="h-5 w-5 rounded-full bg-green-500 text-white">
                        &#10003;
                      </div>
                      <p>Healthy</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <button className="rounded-md bg-cyan-300 px-4 py-1 font-medium text-cyan-800">
                      View Result
                    </button>
                  </td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b bg-white text-sm text-gray-700">
                  <td  className="whitespace-nowrap py-4 px-6">
                    5
                  </td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-red-500"></span>
                      <p>Apllication name goes here</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1 text-cyan-500">
                      <span className="">3</span>
                      <p>servers</p>
                    </div>
                  </td>
                  <td className="py-4 px-6 uppercase">11/12/20 3:57:29 pm</td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <div className="flex items-center justify-center space-x-1 text-center">
                      <div className="h-5 w-5 rounded-full bg-green-500 text-white">
                        &#10003;
                      </div>
                      <p>Healthy</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <button className="rounded-md bg-cyan-300 px-4 py-1 font-medium text-cyan-800">
                      View Result
                    </button>
                  </td>
                  <td className="whitespace-nowrap py-4 px-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-center mt-4 space-x-1">
            <div>previous</div>
            <div className="flex">
              <div className="bg-cyan-300 rounded-full h-5 w-5 flex justify-center items-center text-sm">
                1
              </div>
              <div className="h-5 w-5 flex justify-center items-center text-sm">
                2
              </div>
              <div className="h-5 w-5 flex justify-center items-center text-sm">
                3
              </div>
              <div className="h-5 w-5 flex justify-center items-center text-sm">
                ...
              </div>
              <div className="h-5 w-5 flex justify-center items-center text-sm">
                100
              </div>
            </div>
            <div>next</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
