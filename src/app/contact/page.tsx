'use client'
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    } = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Here you would typically send the form data to a server
      console.log("Form submitted successfully:", formData);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh] p-4">
      <div className="w-full max-w-md bg-color-primary shadow-lg text-color-primary-fg rounded-2xl p-8">
        <h1 className="font-bold text-3xl py-4 text-center">Contact Us</h1>
        {isSubmitted ? (
          <div className="text-center text-color-success text-lg">
            Thank you for your message! We will get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="px-3 py-2 rounded-md bg-color-input-focus border border-color-input-bg focus:ring-2 focus:ring-color-accent focus:outline-none text-color-fg"
              />
              {errors.name && <p className="text-color-error text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="px-3 py-2 rounded-md bg-color-input-focus border border-color-input-bg focus:ring-2 focus:ring-color-accent focus:outline-none text-color-fg"
              />
              {errors.email && <p className="text-color-error text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject" className="mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="px-3 py-2 rounded-md bg-color-input-focus border border-color-input-bg focus:ring-2 focus:ring-color-accent focus:outline-none text-color-fg"
              />
              {errors.subject && <p className="text-color-error text-sm mt-1">{errors.subject}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="px-3 py-2 rounded-md bg-color-input-focus border border-color-input-bg focus:ring-2 focus:ring-color-accent focus:outline-none text-color-fg"
              ></textarea>
              {errors.message && <p className="text-color-error text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="mt-6 w-full py-2 cursor-pointer rounded-lg bg-color-secondary-fg text-color-accent-fg font-semibold hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
