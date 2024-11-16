import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase"; // Ensure this points to your Firebase configuration

const Insights = () => {
  const [users, setUsers] = useState([]);
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data from Firebase
        const userCollection = collection(db, "users");
        const userSnapshot = await getDocs(userCollection);
        const userList = userSnapshot.docs.map((doc) => doc.data());
        setUsers(userList);

        // Generate insights by calling the backend
        await generateInsights(userList);
      } catch (error) {
        console.error("Error fetching data or generating insights:", error);
      } finally {
        setLoading(false);
      }
    };

    const generateInsights = async (userList) => {
      try {
        const response = await fetch("http://localhost:5000/api/generate-insights", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ users: userList }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch insights");
        }

        const data = await response.json();
        setInsights(data.insights);
      } catch (error) {
        console.error("Error fetching insights from server:", error);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-gray-600">Loading insights...</p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100 rounded-lg shadow-md mt-8 mx-auto max-w-5xl">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Wellness Insights
      </h2>
      {insights.length > 0 ? (
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-lg border border-gray-200"
            >
              <p className="text-gray-700 text-lg">{insight}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-lg text-gray-700 text-center leading-relaxed">
          No insights available at the moment.
        </div>
      )}
    </div>
  );
};

export default Insights;
