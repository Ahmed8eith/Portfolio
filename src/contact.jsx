import React, { useState } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import phone from './assets/phone.png';
import whatsapp from './assets/whatsapp.png';
import gmail from './assets/gmail.png';
import map from './assets/location.png';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Email validation API
      const response = await axios.get(
        `https://emailvalidation.abstractapi.com/v1/?api_key=18370e9814e948c7a879abaf9607f979&email=${email}`
      );

      // Destructure the response data
      const { is_valid_format, is_smtp_valid, is_disposable_email } = response.data;

      // Check for validity
      if (!is_valid_format.value) {
        toast.error("Invalid email format. Please enter a valid email.");
        setLoading(false);
        return;
      }

      if (!is_smtp_valid.value) {
        toast.error("This email address cannot receive emails.");
        setLoading(false);
        return;
      }

      if (is_disposable_email.value) {
        toast.error("Disposable email addresses are not allowed.");
        setLoading(false);
        return;
      }

      // Email validation passed, send email
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'ahmed8eith@gmail.com',
      };

      await emailjs.send(
        'service_dei5ufb',
        'template_afu7son',
        templateParams,
        'H7o_776Prvdw9lG4a'
      );

      toast.success('Message sent!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      toast.error('Failed to send the message or validate the email. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative px-4 md:px-8 lg:px-16">
      {/* Contact Info Section */}
      <div className="mt-16 mb-8 flex flex-col space-y-8">
        {/* Contact Me Heading */}
        <h1 id="contacts" className="text-3xl md:text-4xl font-bold text-center">
          Contact Me
        </h1>

        {/* Contact Details in Dynamic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone */}
          <div className="p-4 border border-gray-300 bg-rose-50 rounded-md shadow-md flex items-center">
            <img src={phone} alt="phone" className="w-8 h-8 mr-4" />
            <p className="text-gray-600 text-lg font-medium">+201553189364</p>
          </div>

          {/* WhatsApp */}
          <div className="p-4 border border-gray-300 bg-rose-50 rounded-md shadow-md flex items-center">
            <img src={whatsapp} alt="whatsapp" className="w-8 h-8 mr-4" />
            <p className="text-gray-600 text-lg font-medium">+201030240751</p>
          </div>

          {/* Gmail */}
          <div className="p-4 border border-gray-300 bg-rose-50 rounded-md shadow-md flex items-center">
            <img src={gmail} alt="gmail" className="w-8 h-8 mr-4" />
            <p className="text-gray-600 text-lg font-medium">ahmed8eith@gmail.com</p>
          </div>

          {/* Location */}
          <div className="p-4 border border-gray-300 bg-rose-50 rounded-md shadow-md flex items-center">
            <img src={map} alt="location" className="w-8 h-8 mr-4" />
            <p className="text-gray-600 text-lg font-medium">Cairo, Egypt</p>
          </div>
        </div>

        {/* Gmail Message Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Or send me a message on Gmail Directly
        </h1>
      </div>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            className="w-full bg-rose-50 p-3 text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="w-full bg-rose-50 p-3 text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write down your Text"
            required
            className="w-full bg-rose-50 h-36 p-3 text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="btn btn-outline btn-primary w-full"
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
