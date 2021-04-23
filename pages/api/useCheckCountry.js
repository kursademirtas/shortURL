import { useState, useEffect } from "react";
import axios from "axios";
import europeanCountries from '../../lib/europeanCountries';

function useCheckCountry() {

  const [userCountry, setUserCountry] = useState("");
  const isEuropean = 

  useEffect(() => {
    axios
      .get(
        "https://geolocation-db.com/json/f9902210-97f0-11eb-a459-b997d30983f1"
      )
      .then(function (response) {
        setUserCountry(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return userCountry;
}

export default useCheckCountry;
