import React from 'react';

const Feedbacks = () => {
  const reviews = [
    {
      title: 'Anime Film',
      date: 'February 15, 2025',
      content: `"I love how easy it is to order from Liberty Library! The website is well-organized, and the recommendations are spot on. I've discovered some amazing books here, and the prices are great! Will definitely be back for more!"`
    },
    {
      title: 'Novel Book',
      date: 'January 22, 2025',
      content: `"Liberty Library has been my go-to bookshop for months! Their collection is diverse, and I always find the books I’m looking for. The delivery is fast, and the quality of the books is excellent. I highly recommend it to all book lovers!"`
    }
  ];

  return (
    <div className="p-6 ">
      <div className=" text-center">
        <br />
        <p className="text-sm font-bold text-[#000]">Feedbacks</p>
        <br />
        <h1 className="text-2xl font-bold text-[#102249]">Our Customers' Reviews.</h1>
        <br />
        <h3 className=" text-[#667085]">
        We're happy that more and more book lovers choose Liberty Library for their reading needs.
        </h3>
        <br />
      </div>
      <div className="flex justify-center gap-8 ">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-[#102249] w-[600px] h-auto">
            <h3 className="text-xl font-bold text-[#102249] text-center">{review.title}</h3>
            
            <p className="text-gray-700">{review.content}</p><br />
            <br />
            <p className="text-gray-500 text-sm mb-4 text-center">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;