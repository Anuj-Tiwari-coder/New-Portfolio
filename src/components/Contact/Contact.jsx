import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  ContactButton,
  ContactContainer,
  ContactForm,
  ContactInput,
  ContactInputMessage,
  ContactTitle,
  Desc,
  Title,
} from "./ContactStyleComponents";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const serviceId = import.meta.env.VITE_PUBLIC_SERVICE_ID;
      const templateId = import.meta.env.VITE_PUBLIC_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_PUBLIC_PUBLIC_KEY;

      const templateParams = {
        from_name: name,
        from_email: email,
        phone_number: phoneNumber,
        message: message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Reset form fields
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");

      toast.success("Message sent successfully!", { duration: 4000 });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <ContactContainer id="contact-container">
      <Title>Contact</Title>
      <Desc>
        Feel free to reach out to me for any questions or opportunities!
      </Desc>

      <ContactForm ref={form} onSubmit={handleSubmit}>
        <ContactTitle>{`Let's Talk 🚀`}</ContactTitle>
        <ContactInput
          placeholder="Enter Your Name"
          type="text"
          name="from_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <ContactInput
          placeholder="Enter Your Email"
          type="email"
          name="from_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <ContactInput
          placeholder="Enter Your Phone Number"
          type="text"
          name="phone_number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <ContactInputMessage
          placeholder="Enter Your Message"
          rows="4"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <ContactButton
          as="button"
          type="submit"
          disabled={isSending}
          aria-busy={isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </ContactButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
