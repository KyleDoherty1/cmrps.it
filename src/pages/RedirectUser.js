import React, { useEffect, useState }from "react";
import { useParams,Redirect } from "react-router-dom";

const RedirectUser = () => {
  const { slug } = useParams();

  const callAPI = async () => {
    const response = await fetch(process.env.REACT_APP_BACKEND_GET_URL + slug, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    });
    if (response.ok) {
      const result = await response.json();
      window.location.href = result.url;
    } else if (response.status === 400) {
    } else {
      const result = await response.json();
      this.error = result.message;
    }
  };

  useEffect(() => {
    callAPI();
  });

  return (
    <h1>Redirecting</h1>
  )

};

export default RedirectUser;
