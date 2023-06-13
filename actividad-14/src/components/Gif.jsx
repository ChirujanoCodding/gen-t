import React, { useEffect, useState } from "react";

export function Gif() {
  const [gif, setGif] = useState(null);
  const API_URL = "https://gen-t-api.up.railway.app/api/v1/gifs";
  const API_KEY = process.env.REACT_APP_API_TOKEN;
  useEffect(() => {
    let headersList = {
      Authorization: `Bearer ${API_KEY}`,
    };

    fetch(`${API_URL}/5`, {
      method: "GET",
      headers: headersList,
      mode: "cors",
    })
      .then((res) => {
        res.json().then((r) => setGif(r.data.url));
      })
      .catch(() => {});
  }, []);

  return gif && <img src={gif} alt={`${gif}-00`} />;
}
