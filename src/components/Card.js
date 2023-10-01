import React from 'react';
import '../style/Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'


const Card = ({ title, content, link }) => {
  return (
    <div className="card">
      <img src={link} alt="" srcset="" />
      <br />
      <h2>{title}</h2>
      <br />
      <p>{content}</p>
      <br />
      <a href="http://google.com">read more<FontAwesomeIcon icon={faArrowRight} /></a>
    </div>
  );
};

export default Card;