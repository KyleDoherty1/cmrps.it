import React, { useEffect, useState }from "react";
import { useParams, Redirect } from "react-router-dom";
import Loading from './loading.gif';

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
    } else if (response.status === 404) {
      console.log('lost')
      window.location.href = '/lost';
    } else {
      const result = await response.json();
      this.error = result.message;
    }
  };

  useEffect(() => {
    callAPI();
  });

  return (
    <div>
          <img src={Loading} className='loading'/>
    </div>


)

};

export default RedirectUser;
