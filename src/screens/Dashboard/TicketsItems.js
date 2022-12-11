import React from "react";
import { Link } from "react-router-dom";

const TickesItems = () => {
  return (
    <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6">
      



      <div>
        <h1 className="text-3xl font-bold text-white">Add a new ticket</h1>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-200">
                    Issue
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="text-gray-200" for="priority">
                    Priority
                  </label>
                    <select 
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option value="">Select a priority</option>
                      <option value="low">Low</option>
                      <option value="medium">medium</option>
                      <option value="high">High</option>
                    </select>
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="text-gray-200" for="status">
                    Status
                  </label>
                    <select 
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option value="">Select a status</option>
                      <option value="resolved">Resolved</option>
                      <option value="hold">On hold</option>
                      <option value="handled">Handled</option>
                    </select>
                </div>
              </div>


              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-200"
                  >
                    Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TickesItems;
