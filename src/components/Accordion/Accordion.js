import React, { useEffect, useState } from 'react';

import './styles.scss';

import arrow from '../../assets/images/icon-arrow-down.svg';

function Accordion() {
  // const [questions, setQuestions] = useState([]);
  const [selected, setSelected] = useState(false);

  // useEffect(() => {
  //   fetch('http://localhost:3000/static/faq.json')
  //     .then((response) => response.json())
  //     .then(setQuestions);
  // }, []);

  const questions = [
    {
      question: 'How many team members can I invite?',
      answear:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dignissimos aut, suscipit molestias culpa placeat vero aspernatur praesentium iure eos totam labore quas error sapiente doloribus illum, vitae voluptatum dolore!',
    },
    {
      question: 'What is the maximum file upload size?',
      answear:
        'No more than 2GB. All files in your account must fit your allotted storage space.',
    },
    {
      question: 'How do I reset my password?',
      answear:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dignissimos aut, suscipit molestias culpa placeat vero aspernatur praesentium iure eos totam labore quas error sapiente doloribus illum, vitae voluptatum dolore!',
    },
    {
      question: 'Can I cancel my subscription?',
      answear:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dignissimos aut, suscipit molestias culpa placeat vero aspernatur praesentium iure eos totam labore quas error sapiente doloribus illum, vitae voluptatum dolore!',
    },
    {
      question: 'Do you provide additional support?',
      answear:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dignissimos aut, suscipit molestias culpa placeat vero aspernatur praesentium iure eos totam labore quas error sapiente doloribus illum, vitae voluptatum dolore!',
    },
  ];

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
