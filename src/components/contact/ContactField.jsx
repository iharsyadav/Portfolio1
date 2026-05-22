// src/components/contact/ContactField.jsx

const ContactField = ({
  label,
  id,
  children,
}) => {
  return (
    <label
      htmlFor={id}
      className="block"
    >
      <span
        className="
          mb-3
          block

          text-[11px]

          font-black
          uppercase

          tracking-[0.24em]

          text-black/45
        "
      >
        {label}
      </span>

      {children}
    </label>
  );
};

export default ContactField;