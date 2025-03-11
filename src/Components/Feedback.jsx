import React, { useState } from "react";

function Feedback() {
    const [feedbackList, setFeedbackList] = useState([]);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
    // Handle Input Change
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    // Handle Form Submission
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.name || !formData.email || !formData.message) {
        alert("All fields are required!");
        return;
      }
      setFeedbackList([...feedbackList, formData]);
      setFormData({ name: "", email: "", message: "" }); // Clear form after submission
    };
  
    return (
     <>
     <div className=" flex items-center w-full h-screen bg-green-400">
     <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Feedback</h2>
  
        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="message"
            placeholder="Your Feedback"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded h-24"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit Feedback
          </button>
        </form>
  
        {/* Display Feedback */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Recent Feedback</h3>
          {feedbackList.length === 0 ? (
            <p className="text-gray-500">No feedback yet.</p>
          ) : (
            <ul className="space-y-2">
              {feedbackList.map((feedback, index) => (
                <li key={index} className="p-3 border rounded bg-gray-50">
                  <p className="font-semibold">{feedback.name} ({feedback.email})</p>
                  <p>{feedback.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
     </div>
     </>
    );
}

export default Feedback