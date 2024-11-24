import React from "react";
import styles from "./Button.module.css";

export default function Button() {
  return <div>
  <button className={styles.feedbackButton} type="submit">
    Give Feedback
  </button>
</div>;
}