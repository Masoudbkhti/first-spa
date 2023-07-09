import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import contactimg from "../assets/images/contact.jpg";

export const Contact = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // متغیر نمایش پیام موفقیت

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      // ارسال فرم
      console.log(values);
      setShowSuccessMessage(true); // تنظیم متغیر نمایش پیام موفقیت
      resetForm(); // پاکسازی اطلاعات فرم
      setTimeout(() => {
        setShowSuccessMessage(false); // مخفی کردن پیام موفقیت
      }, 3000); // مدت زمان نمایش پیام موفقیت (3 ثانیه)
    },
  });

  return (
    <div class="grid grid-cols-2">
      <img src={contactimg} class="w-screen" alt="Contact"></img>
      <div class="py-20 px-36 flex flex-col justify-center items-center gap-10">
        <h2 class="text-5xl font-bold">Contact Us</h2>

        <form class="flex flex-col gap-3 w-full" onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name..."
            class="placeholder:text-black font-semibold border-b border-gray-500 py-2 focus:outline-none"
            {...formik.getFieldProps("name")}
          ></input>
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter Email..."
            class="placeholder:text-black font-semibold border-b border-gray-500 py-2 focus:outline-none"
            {...formik.getFieldProps("email")}
          ></input>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Enter Message..."
            class="placeholder:text-black font-semibold border-b border-gray-500 py-2 focus:outline-none"
            {...formik.getFieldProps("message")}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500">{formik.errors.message}</div>
          ) : null}

          <button
            className="bg-violet-700 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded mt-10 w-1/3"
            type="submit"
          >
            Send Message
          </button>
          {showSuccessMessage && (
            <div className="text-green-500 mb-4">
              Your message has been successfully sent.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
