import React, { useState } from 'react';
import { db } from '../Firebase'; // Import Firestore instance
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Slider, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

const Input = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    activityLevel: 'Moderately active',
    sleepHours: 7,
    hydration: 2.5,
    wellnessGoal: 'Weight loss',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCollection = collection(db, 'users'); // Reference to Firestore collection
      await addDoc(userCollection, formData);
      alert('Data saved successfully!');
      navigate('/dashboard'); // Navigate to the dashboard or another page
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-32"> {/* pt-32 added */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Enter Your Details
        </h2>

        {/* Full Name Input */}
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Age Input */}
        <div className="input-group">
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Weight Input */}
        <div className="input-group">
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Weight (kg)"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Height Input */}
        <div className="input-group">
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="Height (cm)"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Activity Level Dropdown */}
        <FormControl fullWidth>
          <InputLabel id="activity-level-label">Activity Level</InputLabel>
          <Select
            labelId="activity-level-label"
            id="activityLevel"
            value={formData.activityLevel}
            name="activityLevel"
            onChange={handleChange}
            className="mb-4"
          >
            <MenuItem value="Sedentary">Sedentary</MenuItem>
            <MenuItem value="Lightly active">Lightly active</MenuItem>
            <MenuItem value="Moderately active">Moderately active</MenuItem>
            <MenuItem value="Very active">Very active</MenuItem>
            <MenuItem value="Super active">Super active</MenuItem>
          </Select>
        </FormControl>

        {/* Sleep Hours Slider */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600">Average Sleep Hours</label>
          <Slider
            value={formData.sleepHours}
            onChange={(e, newValue) => setFormData((prev) => ({ ...prev, sleepHours: newValue }))}
            min={4}
            max={12}
            step={0.5}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${value} hours`}
          />
        </div>

        {/* Hydration Slider */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600">Water Intake (liters)</label>
          <Slider
            value={formData.hydration}
            onChange={(e, newValue) => setFormData((prev) => ({ ...prev, hydration: newValue }))}
            min={1}
            max={5}
            step={0.1}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${value} L`}
          />
        </div>

        {/* Wellness Goal Dropdown */}
        <FormControl fullWidth>
          <InputLabel id="wellness-goal-label">Wellness Goal</InputLabel>
          <Select
            labelId="wellness-goal-label"
            id="wellnessGoal"
            value={formData.wellnessGoal}
            name="wellnessGoal"
            onChange={handleChange}
            className="mb-4"
          >
            <MenuItem value="Weight loss">Weight loss</MenuItem>
            <MenuItem value="Weight gain">Weight gain</MenuItem>
            <MenuItem value="Muscle building">Muscle building</MenuItem>
            <MenuItem value="Improve stamina">Improve stamina</MenuItem>
          </Select>
        </FormControl>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Input;
