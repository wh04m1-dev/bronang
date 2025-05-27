import React from "react";

import Book from "../../Img/Index/Hero/aboutBook.png";
import about from "../../Img/Index/Hero/about.png"
import about_1 from "../../Img/Index/Hero/about-1.png"
import about_2 from "../../Img/Index/Hero/about-2.png"
import about_3 from "../../Img/Index/Hero/about-3.png"
import AllCardMember from "../../Components/Index/Member/All";


const AboutUs = () => {
  return (
    <div>
      <header>
        <section
          
        >
          

          <div className="relative mt-0 pt-0 pb-0 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            
              <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                  <div>
                    <div className="max-w-lg md:max-w-none ">
                      <h1 className="text-2xl font-semibold  sm:text-3xl">
                        About Liberty Library
                      </h1>

                      <p className="mt-4 text-black pr-3.5">
                        Liberty Library is a unique platform dedicated to making
                        knowledge and literature accessible to everyone. By
                        offering a vast collection of free books across various
                        genres, we aim to inspire a love for reading and
                        lifelong learning. Whether you're seeking to expand your
                        knowledge, find entertainment, or fuel your curiosity,
                        Liberty Library is here to support you on your journey.
                      </p>
                    </div>
                  </div>

                  <div className="pl-64">
                    <img src={Book} className="rounded  transform hover:scale-105 transition-transform duration-300  " alt="" />
                  </div>
                </div>
              </div>
            
          </div>
        </section>
      </header>

      <main>
      
      <header className=" text-center">
        <br />
        <p className="text-sm font-bold text-[#444444]">About us</p>
        <br />
        <h1 className="text-2xl font-bold text-[#102249]">Mission & Vision</h1>
        <br />
        <h3 className="text-xl text-[#667085]">
        For Liberty Library, here are suggestions for the mission and vision statements:
        </h3>
        <br />
      </header>
      <body>
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      

      <div>
        <img
          src={about}
          className="rounded"
          alt=""
        />
      </div>

      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Mission
          </h2>

          <p className="mt-4 text-[#667085]">
          "At Liberty Library, our mission is to democratize access to literature and knowledge by offering free books to everyone, everywhere. We are dedicated to fostering an inclusive community of readers, providing a diverse range of titles that empower, educate, and entertain."
          </p>
          <h2 className="text-2xl font-semibold mt-4 text-gray-900 sm:text-3xl">
          Vision
          </h2>

          <p className="mt-4 text-[#667085]">
          "Our vision is to become the leading online bookshop where knowledge knows no boundaries. We aspire to build a world where everyone, regardless of background or circumstance, can freely access the resources they need to grow, learn, and thrive."
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      

     

      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Give Life to Reading
          </h2>

          <p className="mt-4 text-[#667085]">
          Reading opens doors to endless worlds, knowledge, and possibilities. Each page turned breathes life into stories, ideas, and wisdom that enrich our lives. Dive into a book and let it take you on a journey beyond boundaries, where imagination and understanding thrive.
          </p>
          
        </div>
      </div>
      <div>
        <img
          src={about_1}
          className="rounded"
          alt=""
        />
      </div>
    </div>
  </div>
</section>
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
    <div>
        <img
          src={about_2}
          className="rounded"
          alt=""
        />
      </div>

     

      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Seed of Knowledge
          </h2>

          <p className="mt-4 text-[#667085]">
          Plant the seed of knowledge and watch it grow! With every book, we cultivate curiosity, wisdom, and understanding. Books nurture minds, helping ideas take root and flourish. They bridge the past and future, connecting us to insights that shape our journey.
          </p>
          <p className="mt-4 text-[#667085]">
          Dive into learning, explore new thoughts, and let knowledge blossom. Each page turned enriches, transforming information into wisdom and expanding horizons. Embrace reading and let it be the seed that grows within, shaping a world of endless discovery.
          </p>
          
        </div>
      </div>
     
    </div>
  </div>
</section>
<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      

     

      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Best for Bookworms
          </h2>

          <p className="mt-4 text-[#667085]">
          For true bookworms, each book is a new adventure waiting to unfold. The joy of reading lies in every page turned, every new world explored, and every bit of knowledge gained. Dive into a book and let it be your guide through endless realmsBest for Bookworms of imagination and insight.
          </p>
          
        </div>
      </div>
      <div>
        <img
          src={about_3}
          className="rounded"
          alt=""
        />
      </div>
    </div>
  </div>
</section>
<header className=" text-center">
        <br />
        <p className="text-sm font-bold text-[#444444]">Our Advisor</p>
        <br />
        <h1 className="text-2xl font-bold text-[#102249]">Advisor</h1>
        <br />
        <h3 className="text-lg/tight  text-gray-900">
        Advisor of Liberty Library, is committed to supporting our mission to provide free access to books and knowledge for everyone.
        </h3>
        <br />
      </header>
      
<div className="flex items-center justify-center gap-4  ">
  <img
    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt=""
    className="size-20 rounded-lg object-cover  transform hover:scale-105 transition-transform duration-300 "
  />

  <div >
    <h3 className="text-lg/tight font-medium text-gray-900 ">Ms. Sambocheyear</h3>

    <p className="mt-0.5 text-gray-700">
    Mrs. Soy Sambocheyear is a lecturer and researcher in Department of IT Engineering at Royal University of Phnom Penh since 2017. <br /> She received her MA in Computer Engineering from Daejeon University at South Korea in 2014. Her research interest include MIS and Software testing. <br />
    "At Liberty Library, our mission is to make literature and knowledge accessible to everyone, everywhere, by offering free books. <br /> We are committed to creating an inclusive community of readers and providing a diverse selection of titles that inspire, educate, and entertain."
    </p>
  </div>
</div>

<header className=" text-center">
        <br />
        <p className="text-sm font-bold text-[#444444]">Founder</p>
        <br />
        <h1 className="text-2xl font-bold text-[#102249]">Liberty Reads Founder</h1>
        <br />
        <h3 className="text-xl text-[#667085]">
        These are founder of Liberty Library.
        </h3>
        <br />
      </header>
      </body>
      <footer>
     <AllCardMember />
     

      </footer>
      </main>
    </div>
  );
};

export default AboutUs;
