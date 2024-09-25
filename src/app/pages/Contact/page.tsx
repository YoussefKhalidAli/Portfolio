"use client";

// Imported Styles
import styles from "./contact.module.css";

// Imported Utils
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import mixpanel from "mixpanel-browser";

// Imported Component
import MessageComponent from "@/app/Components/UI/Message/message";

export default function Contact() {
  useEffect(() => {
    mixpanel.track("Contact initiated", {});
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const emailParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      // Send email
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        emailParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setFormData({ name: "", email: "", message: "" });
      setIsSuccess(true);
    } catch (error) {
      setErrorMessage("Failed to send the message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Set timer to delete message
    let timer: NodeJS.Timeout;
    if (isSuccess || errorMessage) {
      timer = setTimeout(() => {
        setIsSuccess(false);
        setErrorMessage("");
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isSuccess, errorMessage]);

  return (
    <div className={styles.contactContainer}>
      <h1>Contact Me</h1>
      <p>
        Email: <a href="mailto:yossofwd@gmail.com">yossofwd@gmail.com</a>
      </p>
      <p>
        Phone: <a href="tel:+201011168434">+201011168434</a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/youssof-khaled-861257232"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youssef Ali
        </a>
      </p>

      <h2>Can&#39;t wait? Connect Now!</h2>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className={`${isSubmitting && styles.loading}`}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>

      {isSuccess && (
        <MessageComponent
          message="Your message was sent successfully. I will get back to you soon!"
          type="Success"
        ></MessageComponent>
      )}

      {errorMessage && (
        <MessageComponent
          message={errorMessage}
          type="Error"
        ></MessageComponent>
      )}
    </div>
  );
}
