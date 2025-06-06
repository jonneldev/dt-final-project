import React, { CSSProperties, useState } from "react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  
  const inputStyle: CSSProperties = {
    width: "384px",
    height: "56px",
    borderRadius: "16px",
    backgroundColor: "#1E1F22",
    fontSize: "14px",
    fontWeight: "400",
    paddingLeft: "1em",
    border: "none",
    color: "#FFFFFF"
  }

  return (
    <div
    className="componentContainer"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginTop: "3rem"
    }}>
      <h1 style={{
        fontSize: "44px",
        lineHeight: "52px",
        letterSpacing: "0%",
        fontWeight: "700",
        width: "792px",
        height: "104px",

      }}>Showcase your digital performances with us!</h1>
      <p style={{
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "100%",
        margin: "1em"
      }}>Get in touch with us below.</p>
      <form 
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1em 1.5em",
          alignItems: "center",
          justifyContent: "center",
          margin: "1em"
        }}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name (first & last)"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Contact email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />
        <button 
          type="submit"
          style={{
            width: "180px",
            height: "48px",
            borderRadius: "100px",
            background: "linear-gradient(90deg, #C22026 0%, #C400CB 100%)",     
            color: "#FCFCFC",     
            border: "none",
            gridColumn: "span 2", 
            justifySelf: "center",
            marginTop: "1em"
          }}
        >Get in touch</button>
      </form>
    </div>
  );
};

export default ContactForm;