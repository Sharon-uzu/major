import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: "What is Webflow and why is it the best website builder?",
    answer: "Webflow is a powerful visual development platform that allows designers to build fully responsive websites without writing a single line of code. It combines the flexibility of code with the simplicity of a visual editor, empowering creators to bring their ideas to life faster and more efficiently than ever before."
  },
  {
    question: "What is Webflow and why is it the best website builder?",
    answer: "Webflow is a powerful visual development platform that allows designers to build fully responsive websites without writing a single line of code. It combines the flexibility of code with the simplicity of a visual editor, empowering creators to bring their ideas to life faster and more efficiently than ever before."
  },
  {
    question: "What is Webflow and why is it the best website builder?",
    answer: "Webflow is a powerful visual development platform that allows designers to build fully responsive websites without writing a single line of code. It combines the flexibility of code with the simplicity of a visual editor, empowering creators to bring their ideas to life faster and more efficiently than ever before."
  },
  {
    question: "What is Webflow and why is it the best website builder?",
    answer: "Webflow is a powerful visual development platform that allows designers to build fully responsive websites without writing a single line of code. It combines the flexibility of code with the simplicity of a visual editor, empowering creators to bring their ideas to life faster and more efficiently than ever before."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
        >
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{item.question}</span>
            <div className={`faq-icon ${activeIndex === index ? 'rotated' : ''}`}>
              <FaChevronDown />
            </div>
          </div>
          <div className="faq-answer" style={{ maxHeight: activeIndex === index ? '200px' : '0' }}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
