import { useState, useEffect } from "react";
import styles from "./Form.module.css";
import ShorterURL from "./ShorterURL";
import TinyURL from 'tinyurl';
import useCheckCountry from '../pages/api/useCheckCountry'


export const Form = () => {
  const [url, setUrl] = useState("");
  const [shortedUrl, setShortedUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const country = useCheckCountry();

  console.log(country)


  function handleSubmit(e) {
    e.preventDefault();
	setLoading(true)
    shortURL(url);
    setUrl("");
  }

  function shortURL(longUrl) {
	TinyURL.shorten(longUrl).then(function(res) {
		setShortedUrl(res)
		setLoading(false)
	}, function(err) {
		console.log(err)
	})
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <input
          value={url}
          className={styles.input}
          type="text"
          placeholder="Type or Paste Your Link"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          className={styles.btn}
        >
            {
			  loading ? 'Loading...' : 'Shorten'
		  }
        </button>
      </div>
	 {shortedUrl && !loading && <ShorterURL shortedUrl={shortedUrl}/>}
    </div>
  );
};
