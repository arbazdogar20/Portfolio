import React from "react";
import { useFormStatus } from "react-dom";
import styles from "./Contact.module.css";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`btn btn-primary ${styles.submitBtn} ${
        pending ? styles.submitting : ""
      }`}
    >
      {pending ? (
        <>
          <span className={styles.spinner}></span>
          Sending...
        </>
      ) : (
        <>
          Send Message
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22,2 15,22 11,13 2,9 22,2" />
          </svg>
        </>
      )}
    </button>
  );
};

export default SubmitButton;
