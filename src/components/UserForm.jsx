import { useState, useEffect } from "react";
import Select from "react-select";
import { FaArrowRight } from "react-icons/fa";
import "../styles/UserForm.css";

const UserForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: null,
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    message: "",
    isError: false,
    isSubmitting: false,
  });

  const [errors, setErrors] = useState({});

  const subjects = [
    { value: "", label: "Select a subject" },
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Support" },
    { value: "feedback", label: "Feedback" },
    { value: "collaboration", label: "Collaboration" },
    { value: "other", label: "Other" },
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address.";
    if (!formData.subject || !formData.subject.value)
      newErrors.subject = "Subject is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubjectChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      subject: selectedOption,
    }));
    setErrors((prev) => ({ ...prev, subject: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFormStatus({ message: "", isError: true, isSubmitting: false });
      return;
    }
    setFormStatus({ message: "", isError: false, isSubmitting: true });
    setTimeout(() => {
      setFormStatus({
        message: "Message sent successfully🤌!",
        isError: false,
        isSubmitting: false,
      });
      setFormData({ name: "", email: "", subject: null, message: "" });
      setErrors({});
    }, 1500);
  };

  return (
    <section id="userform" className="contact-section">
      <div className="userForm-head">
        <h2 className="main_heading">Need help? Get in Touch</h2>
        <p className="para_header">
          Got a project, idea, or just want to say hi? Let’s talk.
        </p>
      </div>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {formStatus.message && (
            <div
              className={`form-message ${
                formStatus.isError ? "error" : "success"
              }`}
            >
              {formStatus.message}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            {errors.name && <span className="form-message error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            {errors.email && <span className="form-message error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <Select
              id="subject"
              name="subject"
              options={subjects}
              value={formData.subject}
              onChange={handleSubjectChange}
              classNamePrefix="custom-select"
              autoComplete="off"
            />
            {errors.subject && <span className="form-message error">{errors.subject}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message (optional)</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              autoComplete="off"
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={formStatus.isSubmitting}
          >
            {formStatus.isSubmitting ? "Sending..." : "Send Message"}
            <div className="btn-icon_arrow">
              <FaArrowRight />
            </div>
          </button>
        </form>

        <div className="contact-info">
          <div className="info-item">
            <div className="info-content">
              <span>LET'S BUILD SOMETHING TOGETHER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserForm;
