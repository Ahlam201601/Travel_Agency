"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, Mail, MapPin, Send, AlertCircle, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    date: "",
    travelers: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    let newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email format";

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";

    if (!form.destination.trim())
      newErrors.destination = "Destination is required";

    if (!form.date) newErrors.date = "Travel date is required";

    if (!form.travelers) newErrors.travelers = "Number of travelers is required";
    else if (form.travelers < 1)
      newErrors.travelers = "Must be at least 1 traveler";

    if (!form.message.trim())
      newErrors.message = "Message is required";


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setSuccess("Message sent successfully ✔");

    setTimeout(() => {
      router.push("/");
    }, 5000);
  };

  return (
    <main>

      {/* HERO */}
      <section className="relative w-full h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <video
          src="https://v1.pinimg.com/videos/iht/expMp4/73/f6/7b/73f67b181fcb42004eef7b45a765125e_720w.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl font-bold">
            Contact <span className="text-cyan-400">Us</span>
          </h1>
          <p className="text-lg mt-2">Let's plan your next dream trip</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

            <div className="space-y-6">

              <div className="flex gap-4">
                <Phone className="text-cyan-600" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-cyan-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">info@luxtrip.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-cyan-600" />
                <div>
                  <p className="font-semibold">Office</p>
                  <p className="text-gray-600">New York, USA</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-2 bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            {success && (
              <div className="mb-5 p-4 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
                <CheckCircle2 />
                {success} — redirecting in 5s...
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <input
                    name="firstName"
                    placeholder="First Name *"
                    className="w-full border rounded-lg px-4 py-3"
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-sm flex items-center mt-1">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    name="lastName"
                    placeholder="Last Name *"
                    className="w-full border rounded-lg px-4 py-3"
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <p className="text-red-600 text-sm flex items-center mt-1">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <input
                    name="email"
                    type="text"
                    placeholder="Email *"
                    className="w-full border rounded-lg px-4 py-3"
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm flex items-center mt-1">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    name="phone"
                    placeholder="Phone Number *"
                    className="w-full border rounded-lg px-4 py-3"
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-sm flex items-center mt-1">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <input
                  name="destination"
                  placeholder="Desired Destination *"
                  className="w-full border rounded-lg px-4 py-3"
                  onChange={handleChange}
                />
                {errors.destination && (
                  <p className="text-red-600 text-sm flex items-center mt-1">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.destination}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <input
                    name="date"
                    type="date"
                    className="w-full border rounded-lg px-4 py-3"
                    onChange={handleChange}
                  />
                  {errors.date && (
                    <p className="text-red-600 text-sm flex items-center mt-1">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    name="travelers"
                    type="number"
                    min="1"
                    placeholder="Number of Travelers *"
                    className="w-full border rounded-lg px-4 py-3"
                    onChange={handleChange}
                  />
                  {errors.travelers && (
                    <p className="text-red-600 text-sm flex items-center mt-1">
                      <AlertCircle size={14} className="mr-1" />
                      {errors.travelers}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message *"
                  className="w-full border rounded-lg px-4 py-3"
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="text-red-600 text-sm flex items-center mt-1">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-full flex items-center justify-center gap-2 font-semibold"
              >
                <Send size={18} /> Send Message
              </button>

            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
