import React, { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UrlContext } from '../context/UrlContext';

function Redirect() {
  const { code } = useParams();
  const navigate = useNavigate();
  const { getUrlAndRegisterClick } = useContext(UrlContext);

  useEffect(() => {
    const url = getUrlAndRegisterClick(code);
    if (url) {
      window.location.href = url.longUrl;
    } else {
      navigate('/');
    }
  }, [code, navigate, getUrlAndRegisterClick]);

  return <p>Redirecting...</p>;
}

export default Redirect;