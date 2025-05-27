import React from "react";

import PropsCardComponents from "../Card";

const AnimeComponents = () => {
  return (
    <div>
      <div className=" text-center">
        
       
        <br />
        <h1 className="text-2xl font-bold text-[#102249]">Anime Films</h1>
        <br />
        <h3 className=" text-[#667085]">
          Recommended Anime films – Escape into magical worlds filled with
          wonder and adventure!
        </h3>
        <br />
      </div>
      <div className="flex  justify-center gap-5">
        <PropsCardComponents
          imageSrc="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-yxY3olrjZH4k.png"
          title="Solo Leveling."
          director="Ore dake Level Up na Ken"
          genre="Anime film"
        />
        <PropsCardComponents
          imageSrc="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx184694-EmVoCuV4uAGv.png"
          title=" ReAwakening"
          director="Hayao Miyazaki"
          genre="Anime film"
        />
        <PropsCardComponents
          imageSrc="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105398-b673Vt5ZSuz3.jpg"
          title="Na Honjaman Level Up"
          director="Na Honjaman Level Up"
          genre="Anime film"
        />
        <PropsCardComponents
          imageSrc="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx176496-xCNtU4llsUpu.png"
          title="Solo Leveling."
          director=" Season 2 - Arise from the Shadow"
          genre="Anime film"
        />
      </div>
      {/* <div className="flex  justify-center gap-5">
        <PropsCardComponents
          imageSrc="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx177506-in4J0GNzjOZL.jpg"
          title="Izure Saikyou no Renkinjutsushi?"
          director="Hunters"
          genre="Anime film"
        />
        <PropsCardComponents
          imageSrc="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx176158-BtvSRyMHhPM0.jpg"
          title="S-Rank Monster no Behemoth Dakedo "
          director="Nobody asked to be a cat!"
          genre="Anime film"
        />
        <PropsCardComponents
          imageSrc="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx176063-p4iH4VETPHjC.jpg"
          title="Botsuraku Yotei no Kizoku dakedo"
          director="Botsuraku Yotei no Kizoku dakedo"
          genre="Anime film"
        />
        <PropsCardComponents
          imageSrc="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145740-yblQOQLAKk6M.jpg"
          title="Grisaia: Phantom Trigger THE ANIMATION"
          director="Phantom Trigger THE ANIMATION"
          genre="Anime film"
        />
      </div>
      <div className="flex  justify-center gap-5">
        <PropsCardComponents
          imageSrc="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx178100-GF4dKSrkdByJ.jpg"
          title="Hazure Skill Kinomi Master"
          director="Skill no Mi (Tabetara Shinu)"
          genre="Anime film"
        />
        <PropsCardComponents
          imageSrc="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx162722-5c5w3yHaPOdf.jpg"
          title="Mahoutsukai Precure! "
          director="Mahoutsukai Precure!! MIRAI DAYS"
          genre="Anime film"
        />
        <PropsCardComponents
          imageSrc="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx179878-9rF40FPWqpgY.jpg"
          title="Kowareta SEKAI to Utaenai MIKU"
          director="Kowareta SEKAI to Utaenai MIKU"
          genre="Anime film"
        />
        <PropsCardComponents
          imageSrc="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx167742-fFAj38cj7Wxo.png"
          title="UniteUp!: Uni:Birth"
          director="The second season of UniteUp!"
          genre="Anime film"
        />
      </div> */}
    </div>
  );
};

export default AnimeComponents;
