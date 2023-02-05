import React, { useEffect, useState } from 'react';

import './styles.scss';

import arrow from '../../assets/images/icon-arrow-down.svg';

function Accordion() {
  const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/static/faq.json')
      .then((response) => response.json())
      .then(setQuestions);
  }, []);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="container-accordion">
      <h1>FAQ</h1>
      {questions.map((item, i) => {
        return (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <h2 className={`${selected === i ? 'bold' : ''}`}>
                {item.question}
              </h2>
              <img
                src={arrow}
                alt="arrow"
                className={selected === i ? 'open' : ''}
              />
            </div>
            <div className={`content ${selected === i ? 'show' : ''}`}>
              {item.answear}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
