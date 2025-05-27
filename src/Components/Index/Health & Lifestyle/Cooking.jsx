import React, { useRef, useState } from 'react';
import PropsCardComponents from "../Card"; // Ensure this path is correct

const Fitness = ({ showAll, setShowAll }) => {
  const fitnessItems = [
    {
      imageSrc: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-yxY3olrjZH4k.png",
      title: "Solo Leveling.",
      director: "Ore dake Level Up na Ken",
      genre: "Anime film",
    },
    {
      imageSrc: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx184694-EmVoCuV4uAGv.png",
      title: "ReAwakening",
      director: "Hayao Miyazaki",
      genre: "Anime film",
    },
    {
      imageSrc: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105398-b673Vt5ZSuz3.jpg",
      title: "Na Honjaman Level Up",
      director: "Na Honjaman Level Up",
      genre: "Anime film",
    },
    {
      imageSrc: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx176496-xCNtU4llsUpu.png",
      title: "Solo Leveling.",
      director: "Season 2 - Arise from the Shadow",
      genre: "Anime film",
    },
    {
      imageSrc: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx177506-in4J0GNzjOZL.jpg",
      title: "Izure Saikyou no Renkinjutsushi?",
      director: "Hunters",
      genre: "Anime film",
    },
    {
      imageSrc: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx176158-BtvSRyMHhPM0.jpg",
      title: "S-Rank Monster no Behemoth Dakedo",
      director: "Nobody asked to be a cat!",
      genre: "Anime film",
    },
    {
      imageSrc: "https://templates.mediamodifier.com/5dbede7058b770100da65690/running-and-fitness-book-cover-template.jpg",
      title: "Botsuraku Yotei no Kizoku dakedo",
      director: "Botsuraku Yotei no Kizoku dakedo",
      genre: "Anime film",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwow9BJewkxoq-Lp9sOraRdJOB1yCoFFYSA&s",
      title: "Grisaia: Phantom Trigger THE ANIMATION",
      director: "Phantom Trigger THE ANIMATION",
      genre: "Anime film",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwow9BJewkxoq-Lp9sOraRdJOB1yCoFFYSA&s",
      title: "Grisaia: Phantom Trigger THE ANIMATION",
      director: "Phantom Trigger THE ANIMATION",
      genre: "Anime film",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwow9BJewkxoq-Lp9sOraRdJOB1yCoFFYSA&s",
      title: "Grisaia: Phantom Trigger THE ANIMATION",
      director: "Phantom Trigger THE ANIMATION",
      genre: "Anime film",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwow9BJewkxoq-Lp9sOraRdJOB1yCoFFYSA&s",
      title: "Grisaia: Phantom Trigger THE ANIMATION",
      director: "Phantom Trigger THE ANIMATION",
      genre: "Anime film",
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwow9BJewkxoq-Lp9sOraRdJOB1yCoFFYSA&s",
      title: "Grisaia: Phantom Trigger THE ANIMATION",
      director: "Phantom Trigger THE ANIMATION",
      genre: "Anime film",
    },
  ];

  const displayedItems = showAll ? fitnessItems : fitnessItems.slice(0, 8); // Show all or first 8 items for 2 rows

  return (
    <div className='mt-0'>
    <div className='flex justify-between'>
      <div className="mb-4 text-start">
        <h1 className="text-2xl font-bold">Fitness & Well-being</h1>
        <p>Explore our collection of fitness-related anime and films.</p>
      </div>

      <div className="text-center mt-4">
        <button
          onClick={() => setShowAll(!showAll)} // Toggle the showAll state
          className="border border-black py-2 px-4 rounded hover:bg-gray-500 hover:text-white transition"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
      </div>
     
      <div className="grid grid-cols-4 gap-5">
        {displayedItems.map((item, index) => (
          <PropsCardComponents
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            director={item.director}
            genre={item.genre}
          />
        ))}
      </div>
      
    </div>
  );
};

const BookCategories = () => {
  const fitnessRef = useRef(null);
  const cookingRef = useRef(null);
  const [showAll, setShowAll] = useState(false); // State to manage visibility of all cards

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
     

      {/* Content Sections */}
      <div ref={fitnessRef} className="mb-8">
        <Fitness showAll={showAll} setShowAll={setShowAll} />
      </div>

      
    </div>
  );
};

export default BookCategories;