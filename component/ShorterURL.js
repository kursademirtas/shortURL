import { useRef, useState } from "react";
import styles from "./ShorterURL.module.css";

const ShorterURL = ({ shortedUrl }) => {
  const shortUrlRef = useRef(null);
  const [success, setSuccess] = useState(false);

  function copyToClipboard() {
    shortUrlRef.current.select();
    document.execCommand("copy");
    setSuccess(true);
  }
  if (success) {
    setInterval(function () {
      setSuccess(false);
    }, 3000);
  }
  return (
    <div className={styles.container}>
      {success && (
        <div className={styles.success}>Copied to clipboard succesfully🎉</div>
      )}
	  
      <input
        className={styles.shortUrl}
        type="text"
        ref={shortUrlRef}
        readOnly
        value={shortedUrl}
      />
      <button className={styles.btn_copy} onClick={copyToClipboard}>
        Copy
      </button>
    </div>
  );
};

export default ShorterURL;
