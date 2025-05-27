import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'; // Importing icons
import book2 from '../../Img/Index/Hero/Book2.png'; // Update this path to your image

const FAQ = () => {
  const questions = [
    {
      question: 'How can I place an order?',
      answer: 'To place an order, simply browse our collection, add items to your cart, and proceed to checkout.',
    },
    {
      question: 'Do you have a physical store?',
      answer: 'Currently, we operate online only, but we offer a wide range of titles available for delivery.',
    },
    {
      question: 'Do you offer worldwide shipping?',
      answer: 'Yes, we ship to various countries around the world! Check our shipping policy for more details.',
    },
    {
      question: 'Can I return or exchange a book?',
      answer: 'We accept returns and exchanges within 14 days of purchase if the book is in its original condition. Digital books and special orders are non-refundable.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-between p-10 bg-white">
      <div className="flex-grow">
      <div className=" text-start">
        <br />
        <p className="text-sm font-bold text-[#102249]">Questions</p>
        <br />
        <h1 className="text-2xl font-bold text-[#102249]">Still Have Questions?</h1>
        <br />
        <h3 className=" text-[#667085]">
        We're happy that more and more book lovers choose Liberty Library for their reading needs.
        </h3>
        <br />
      </div>
        <ul className="space-y-2">
          {questions.map((item, index) => (
            <li key={index} className="bg-white p-4 border-b border-b-gray-300 flex justify-between items-center cursor-pointer w-[700px]" onClick={() => toggleAnswer(index)}>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{item.question}</h3>
                {openIndex === index && (
                  <p className="text-gray-700 mt-2">{item.answer}</p>
                )}
              </div>
              <span className="ml-2">
                {openIndex === index ? <HiChevronUp className="text-xl" /> : <HiChevronDown className="text-xl" />}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:block mr-40">
        <img src={book2} alt="Book" className="w-96" />
      </div>
    </div>
  );
};

export default FAQ;