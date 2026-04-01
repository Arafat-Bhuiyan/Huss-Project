import { useState } from "react";
import { useHelpSupportMutation } from "../../redux/api/authApi";
import { toast } from "react-toastify";
import clock from "../../assets/img/icons/clock.png";
import location from "../../assets/img/icons/location.png";
import phone from "../../assets/img/icons/phone.png";
import mail from "../../assets/img/icons/mail.png";

export const ContactSec = () => {
  const [helpSupport, { isLoading }] = useHelpSupportMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await helpSupport(formData).unwrap();
      toast.success(
        response?.message || "Support request submitted successfully.",
      );
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error?.data?.message || "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div
      id="contact"
      className=" flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12"
      style={{
        backgroundColor: '#f3f4f6',
        backgroundImage: `
          radial-gradient(at 50% 10%, rgba(213, 181, 110, 0.1) 0px, transparent 40%),
          radial-gradient(at 0% 90%, rgba(213, 181, 110, 0.08) 0px, transparent 40%),
          linear-gradient(115deg, transparent 40%, rgba(213, 181, 110, 0.03) 44%, rgba(213, 181, 110, 0.08) 48%, rgba(213, 181, 110, 0.12) 50%, rgba(213, 181, 110, 0.08) 52%, rgba(213, 181, 110, 0.03) 56%, transparent 60%)
        `
      }}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions about our products or services? Fill out the form and
            our team will get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-yellow-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-yellow-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-yellow-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Enter message..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-yellow-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`text-white font-semibold px-6 py-2 rounded-md transition ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow-400 hover:bg-yellow-500"
              }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right: Business Hours & Contact Info */}
        <div className="bg-white p-6 rounded-md shadow-sm">
          {/* Business Hours */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
            <p className="flex items-center text-yellow-600 mb-2 gap-4">
              <img src={clock} alt="" />
              Open today from{" "}
              <span className="font-medium ml-1">09:00 am to 05:00 pm</span>
            </p>
            <ul className="text-gray-700 space-y-1">
              <li className="flex justify-between">
                <span>Monday - Friday</span> <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span> <span>10:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span> <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-start gap-4">
                <img src={location} className="mt-1" alt="" />{" "}
                <span>
                  PO Box 69
                  <br />
                  Chester Hill 2162
                  <br />
                  Sydney NSW
                </span>
              </li>
              <li className="flex items-center gap-4">
                <img src={phone} alt="" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4">
                <img src={mail} alt="" className="mt-1.5" />
                <span>support@1ezybuy.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
