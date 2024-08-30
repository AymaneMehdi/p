import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import GigCard from "../../components/gigCard/GigCard";

const Gigs: React.FC = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);

  const data = [
    {
      _id: "1",
      cover: "/img/example1.jpg",
      userId: "user123",
      desc: "Plumbing Service",
      totalStars: 5,
      starNumber: 1,
      price: 100,
    },
    {
      _id: "2",
      cover: "/img/example2.jpg",
      userId: "user456",
      desc: "Electrical Service",
      totalStars: 4,
      starNumber: 1,
      price: 200,
    },
  ];

  const reSort = (type: string) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log("Apply filters", minRef.current?.value, maxRef.current?.value, sort);
  };

  return (
    <div className="gigs bg-gray-100 p-8">
      <div className="container mx-auto">
        <span className="breadcrumbs text-gray-500">ServicesDomicile &gt; Plumbing &gt;</span>
        <h1 className="text-2xl font-bold mb-2">Find a Service</h1>
        <p className="text-gray-700 mb-4">Explore the best services provided by professionals.</p>
        <div className="menu flex justify-between items-center mt-4">
          <div className="left flex items-center space-x-2">
            <span className="font-semibold">Budget</span>
            <input
              ref={minRef}
              type="number"
              placeholder="min"
              className="p-2 border border-gray-300 rounded"
            />
            <input
              ref={maxRef}
              type="number"
              placeholder="max"
              className="p-2 border border-gray-300 rounded"
            />
            <motion.button
              onClick={apply}
              className="px-4 py-2 bg-blue-500 text-white rounded shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply
            </motion.button>
          </div>
          <div className="right flex items-center space-x-2 relative">
            <span className="sortBy font-semibold">Sort by</span>
            <span className="sortType font-semibold">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <motion.img
              src="./img/down.png"
              alt="sort"
              className="w-5 h-5 cursor-pointer"
              onClick={() => setOpen(!open)}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            />
            {open && (
              <motion.div
                className="rightMenu absolute bg-white shadow rounded p-2 space-y-2 top-full mt-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {sort !== "sales" && (
                  <span
                    onClick={() => reSort("sales")}
                    className="block cursor-pointer hover:bg-gray-100 p-1 rounded"
                  >
                    Best Selling
                  </span>
                )}
                {sort !== "createdAt" && (
                  <span
                    onClick={() => reSort("createdAt")}
                    className="block cursor-pointer hover:bg-gray-100 p-1 rounded"
                  >
                    Newest
                  </span>
                )}
                <span
                  onClick={() => reSort("popular")}
                  className="block cursor-pointer hover:bg-gray-100 p-1 rounded"
                >
                  Popular
                </span>
              </motion.div>
            )}
          </div>
        </div>
        <motion.div
          className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {data.map((gig) => (
            <motion.div
              key={gig._id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GigCard item={gig} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gigs;
