import emailjs from "@emailjs/browser";

export const sendEmail = async (data) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};