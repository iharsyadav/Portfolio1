import { useState } from "react";
import ContactField from "./ContactField";
import { sendEmail } from "../../lib/email";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await sendEmail(formData);

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        clay
        relative
        overflow-hidden
        p-8
      "
    >
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/10
          to-transparent
          pointer-events-none
        "
      />

      <div className="relative z-10 space-y-6">
        <ContactField label="Your name" id="name">
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="
              clay-input
              h-[58px]
              w-full
              px-5
              text-[15px]
            "
          />
        </ContactField>

        <ContactField label="Email" id="email">
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="
              clay-input
              h-[58px]
              w-full
              px-5
              text-[15px]
            "
          />
        </ContactField>

        <ContactField
          label="What's on your mind?"
          id="message"
        >
          <textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your idea..."
            required
            className="
              clay-input
              w-full
              resize-none
              px-5
              py-4
              text-[15px]
              leading-[1.7]
            "
          />
        </ContactField>

        <button
          type="submit"
          disabled={loading}
          className="
            clay-pink
            h-[58px]
            rounded-full
            px-8
            text-[15px]
            font-black
            text-[#1d1230]
            transition-all
            duration-300
            hover:-translate-y-1
            disabled:opacity-60
          "
        >
          {loading ? "Sending..." : "Send Message →"}
        </button>

        {status === "success" && (
          <p className="text-green-400 text-sm">
            Message sent successfully 🚀
          </p>
        )}

        {status === "error" && (
          <p className="text-red-400 text-sm">
            Failed to send message. Please try again.
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;