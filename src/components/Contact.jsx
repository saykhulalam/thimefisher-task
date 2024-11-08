import React, { useState } from "react";

const Contact = () => {
  // State for form fields and errors
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error for the field being typed in
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Form validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted successfully:", formData);
      // Handle successful form submission here
    }
  };

  return (
    <div className="w-full max-w-[687px] mx-auto xl:mx-0 pb-[120px]">
      <h2 className="text-[32px] md:text-[40px] lg:text-[48px] text-white font-semibold mt-[50px] md:mt-[80px] mb-[32px]">
        Contact
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {/* First name */}
          <div>
            <h5 className="text-[20px] text-white tracking-[1px]">
              First name*
            </h5>
            <input
              name="firstName"
              className="text-white w-full h-[48px] bg-black border-[1px] border-[#F89222] rounded-[10px] pl-5 mt-[8px]"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-2">{errors.firstName}</p>
            )}
          </div>

          {/* Last name */}
          <div>
            <h5 className="text-[20px] text-white tracking-[1px]">
              Last name*
            </h5>
            <input
              name="lastName"
              className="text-white w-full h-[48px] bg-black border-[1px] border-[#F89222] rounded-[10px] pl-5 mt-[8px]"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-2">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[32px]">
          {/* Email */}
          <div>
            <h5 className="text-[20px] text-white tracking-[1px]">Email*</h5>
            <input
              name="email"
              className="text-white w-full h-[48px] bg-black border-[1px] border-[#F89222] rounded-[10px] pl-5 mt-[8px]"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <h5 className="text-[20px] text-white tracking-[1px]">Phone*</h5>
            <input
              name="phone"
              className="text-white w-full h-[48px] bg-black border-[1px] border-[#F89222] rounded-[10px] pl-5 mt-[8px]"
              type="number"
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="mt-[32px]">
          <h5 className="text-[20px] text-white tracking-[1px]">Message*</h5>
          <textarea
            name="message"
            className="text-white w-full h-[124px] bg-black border-[1px] border-[#F89222] rounded-[10px] pl-5 mt-[8px]"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-2">{errors.message}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="text-[20px] text-white w-full h-[48px] bg-[#F89222] rounded-[10px] mt-[32px] hover:bg-transparent hover:border-[1px] hover:border-[#F89222] duration-200"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
