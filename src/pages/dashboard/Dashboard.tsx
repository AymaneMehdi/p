import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Chart from 'chart.js/auto';

export const Dashboard: React.FC = () => {
  // Create refs for canvas elements and chart instances
  const profileRef = useRef<HTMLCanvasElement>(null);
  const gigsRef = useRef<HTMLCanvasElement>(null);
  const earningsRef = useRef<HTMLCanvasElement>(null);

  // Chart instances to track existing charts
  const profileChart = useRef<Chart | null>(null);
  const gigsChart = useRef<Chart | null>(null);
  const earningsChart = useRef<Chart | null>(null);

  useEffect(() => {
    if (profileRef.current) {
      if (profileChart.current) {
        profileChart.current.destroy();
      }

      profileChart.current = new Chart(profileRef.current, {
        type: 'bar',
        data: {
          labels: ['Profile Overview'],
          datasets: [
            {
              label: 'Data',
              data: [1], // Example data
              backgroundColor: 'rgb(255, 237, 213)', // Single color for bar chart
              barThickness: 150, // Adjust bar thickness here
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              stacked: true,
              ticks: {
                display: false,
              },
            },
            y: {
              stacked: true,
            },
          },
        },
      });
    }

    if (gigsRef.current) {
      if (gigsChart.current) {
        gigsChart.current.destroy();
      }

      gigsChart.current = new Chart(gigsRef.current, {
        type: 'bar',
        data: {
          labels: ['Total Gigs', 'Active Gigs', 'Pending Gigs'],
          datasets: [
            {
              label: 'Gigs',
              data: [10, 7, 3], // Example data
              backgroundColor: ['rgb(255, 237, 213)', 'rgb(55, 65, 81)', 'rgb(21, 128, 61)'], // Gradient colors
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }

    if (earningsRef.current) {
      if (earningsChart.current) {
        earningsChart.current.destroy();
      }

      earningsChart.current = new Chart(earningsRef.current, {
        type: 'pie', // Changed to 'pie' for a circular chart
        data: {
          labels: ['Total Earnings', 'Pending Clearance', 'Available for Withdrawal'],
          datasets: [
            {
              label: 'Earnings',
              data: [5000, 1200, 3800], // Example data
              backgroundColor: ['rgb(255, 237, 213)', 'rgb(55, 65, 81)', 'rgb(21, 128, 61)'], // Pie chart colors
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, []);

  return (
    <motion.div
      className="dashboard bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white p-4 pl-10 pr-10 pt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto">
        <motion.h1
          className="text-3xl font-extrabold text-[#62929E] mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dashboard
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg border border-gray-300 w-full"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <h2 className="text-xl font-semibold mb-3 text-[#62929E]">Profile Overview</h2>
            <div className="relative h-64 md:h-80"> {/* Adjusted height for responsiveness */}
              <canvas ref={profileRef}></canvas>
            </div>
          </motion.div>
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg border border-gray-300 w-full"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <h2 className="text-xl font-semibold mb-3 text-[#62929E]">Your Gigs</h2>
            <div className="relative h-64 md:h-80"> {/* Adjusted height for responsiveness */}
              <canvas ref={gigsRef}></canvas>
            </div>
          </motion.div>
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg border border-gray-300 w-full col-span-1 md:col-span-2"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <h2 className="text-xl font-semibold mb-3 text-[#62929E]">Earnings</h2>
            <div className="relative h-64 md:h-80"> {/* Adjusted height for responsiveness */}
              <canvas ref={earningsRef}></canvas>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
