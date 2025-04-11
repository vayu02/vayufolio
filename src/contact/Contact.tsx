import React, { useState } from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { FaRegPaperPlane } from "react-icons/fa";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [notif, setNotif] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formatDate = moment(startDate.toISOString()).format("MMM Do YYYY");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("date", formatDate);
    formData.append("message", message);
    formData.append("phone", phone);

    // Ensure name and email are provided
    if (name && email) {
      fetch("https://sheetdb.io/api/v1/n2z4ywv2pl7zh", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result, "Post Success");
          setName("");
          setEmail("");
          setMessage("");
          setPhone("");
          setNotif("Thank you for your response");
          setTimeout(() => {
            setNotif("");
          }, 3000);
        })
        .catch((error) => {
          console.log("error", error);
          setName("");
          setEmail("");
          setMessage("");
          setPhone("");
          setNotif(String(error));
        });
    }
  };

  return (
    <section className="bg-[#111111] min-h-screen flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-transparent via-blue-950 to-transparent shadow-md rounded-lg text-gray-300 rounded-lg shadow-lg overflow-hidden max-w-4xl w-full flex flex-col lg:flex-row">
        {/* Left Section: Contact Details */}
        <div className="bg-gray-900 lg:w-1/3 p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Let's get in touch
          </h3>
          <p className="text-white mb-6">We're open for any suggestion</p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FiMapPin size={24} className="text-white" />
              <div>
                <p className="text-sm">
                  <span className="font-bold">Address:</span>
                  <br />
                  5/5 Ashok Nagar <br /> Kamble Chawl, Next to Datta Mandir{" "}
                  <br />
                  Bhandup (East), Mumbai-400042
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FiPhone size={20} className="text-white" />
              <div>
                <p className="text-sm">
                  <span className="font-bold">Phone:</span>{" "}
                  <a className="text-white underline">+91 9892896924</a>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaRegPaperPlane size={20} className="text-white" />
              <div>
                <p className="text-sm">
                  <span className="font-bold">Email:</span>{" "}
                  <a
                    href="mailto:ashish241.shejwal@gmail.com"
                    className="text-white underline"
                  >
                    ashish241.shejwal@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section: Contact Form */}
        <div className="lg:w-2/3 p-8">
          <h3 className="text-2xl font-bold text-white uppercase text-center lg:text-left mb-6 tracking-wider">
            Get in touch
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:space-x-4">
                <div className="flex flex-col w-full mb-4 lg:mb-0">
                  <label
                    htmlFor="name"
                    className="text-sm text-[#FFFFFF66] mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    autoComplete="off"
                    required
                    className="bg-transparent border-b border-gray-500 text-white placeholder:text-sm placeholder:font-semibold h-12 outline-none"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="email"
                    className="text-sm text-[#FFFFFF66] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    placeholder="johndoe@mail.com"
                    autoComplete="off"
                    required
                    className="bg-transparent border-b border-gray-500 text-white placeholder:text-sm placeholder:font-semibold h-12 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:space-x-4">
                {/* Phone Number */}
                <div className="flex flex-col w-full mb-4 lg:mb-0">
                  <label
                    htmlFor="phone"
                    className="text-sm text-[#FFFFFF66] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    id="phone"
                    name="phone"
                    placeholder=""
                    autoComplete="off"
                    required
                    className="bg-transparent border-b border-gray-500 text-white placeholder:text-sm placeholder:font-semibold h-12 outline-none"
                  />
                </div>

                {/* Date */}
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="date"
                    className="text-sm text-[#FFFFFF66] mb-2"
                  >
                    Date
                  </label>
                  <ReactDatePicker
                    selected={startDate}
                    onChange={(date: Date | null) => date && setStartDate(date)}
                    placeholderText="Select Date"
                    className="bg-transparent border-b border-gray-500 text-white placeholder:text-sm placeholder:font-semibold h-12 outline-none w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-sm text-[#FFFFFF66] mb-2"
                >
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                  id="message"
                  placeholder="Would like to Enquire for a website / mobile app"
                  cols={30}
                  rows={4}
                  className="bg-transparent border-b border-gray-500 text-white placeholder:text-sm placeholder:font-semibold outline-none"
                  required
                />
              </div>
              <div className="flex justify-center lg:justify-start">
                <input
                  type="submit"
                  value="Send Message"
                  className="px-6 py-2 bg-blue-500 text-black font-semibold rounded-xl cursor-pointer hover:bg-blue-600 transition-colors"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      {notif && (
        <div className="fixed top-4 right-4">
          <div className="bg-green-400 text-black font-semibold text-sm p-2 rounded">
            {notif}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
