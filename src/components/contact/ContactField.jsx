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

          text-[0.78rem]
          font-black
          uppercase

          tracking-[0.22em]

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