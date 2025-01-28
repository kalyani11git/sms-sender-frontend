import React, { useState } from 'react';
import axios from 'axios';

const SendMessage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSendMessage = async () => {
    if (!mobileNumber || !message) {
      setResponse('Please fill in both fields.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/send-message', {
        mobileNumber,
        message,
      });

      if (res.status === 200) {
        setResponse('Message sent successfully!');
      } else {
        setResponse('Failed to send the message.');
      }
    } catch (error) {
      setResponse(`Error: ${error.response?.data || error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="p-6 bg-white shadow-md rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Send SMS</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
           Enter Mobile Number (E.+91 Format)
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="+918080004856"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
           Enter Message
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your message here..."
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button
          onClick={handleSendMessage}
          className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Send Message
        </button>

        {response && (
          <p className="mt-4 text-center text-sm text-gray-600">{response}</p>
        )}
      </div>
    </div>
  );
};

export default SendMessage;
