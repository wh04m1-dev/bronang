import React from "react";
import PropsCardComponents from "../Card";

const LegendComponents = () => {
  return (
    <div>
      <div className=" text-center">
        <br />
        <p className="text-sm font-bold text-[#000]">Khmer legends</p>
        <br />
        <h1 className="text-2xl font-bold text-[#102249]">
         Khmer legends
        </h1>
        <br />
        <h3 className=" text-[#667085]">
          Recommended Khmer legends – Escape into magical worlds filled with
          wonder and adventure!
        </h3>
        <br />
      </div>
      <div className="flex  justify-center gap-5">
        <PropsCardComponents
          imageSrc="https://weteka.org/_next/image?url=https%3A%2F%2Fapi.weteka.org%2Fpublic%2Fbooks%2F660bb406b02e47aeaff184bb%2F0001.png&w=1080&q=75"
          title="The Hare and The Snail"
          director="សាលាឌីជីថល"
          genre="Khmer legend"
        />
        <PropsCardComponents
          imageSrc="https://weteka.org/_next/image?url=https%3A%2F%2Fapi.weteka.org%2Fpublic%2Fbooks%2F660bb278b02e47aeaff184aa%2F0001.png&w=1080&q=75"
          title="The Origin of the Dolphin"
          director="សាលាឌីជីថល"
          genre="Khmer legend"
        />
        <PropsCardComponents
          imageSrc="https://weteka.org/_next/image?url=https%3A%2F%2Fapi.weteka.org%2Fpublic%2Fbooks%2F660bb4a2b02e47aeaff184c0%2F0001.png&w=1080&q=75"
          title="Ear, Mouth and Hands"
          director="សាលាឌីជីថល"
          genre="Khmer legend"
        />
        <PropsCardComponents
          imageSrc="https://weteka.org/_next/image?url=https%3A%2F%2Fapi.weteka.org%2Fpublic%2Fbooks%2F660badf0b02e47aeaff18462%2F0001.png&w=1080&q=75"
          title="Duck and Frog"
          director="សាលាឌីជីថល"
          genre="Khmer legend"
        />
      </div>
      {/* <div className="flex  justify-center gap-5">
        <PropsCardComponents
          imageSrc="https://weteka.org/_next/image?url=https%3A%2F%2Fapi.weteka.org%2Fpublic%2Fbooks%2F660badc9b02e47aeaff18461%2F0001.png&w=1080&q=75"
          title="Sonita's Life"
          director="សាលាឌីជីថល"
          genre="Khmer legend"
        />
        <PropsCardComponents
          imageSrc="https://weteka.org/_next/image?url=https%3A%2F%2Fapi.weteka.org%2Fpublic%2Fbooks%2F65e91f43a8a670a46fc01029%2F0001.png&w=1080&q=75"
          title="Thun Chey Koma"
          director="សាលាឌីជីថល"
          genre="Khmer legend"
        />
        <PropsCardComponents
          imageSrc="https://weteka.org/_next/image?url=https%3A%2F%2Fapi.weteka.org%2Fpublic%2Fbooks%2F65e91d89a8a670a46fc0100a%2F0001.png&w=1080&q=75"
          title="Chor Chitchea"
          director="សាលាឌីជីថល"
          genre="Khmer legend"
        />
        <PropsCardComponents
          imageSrc="https://weteka.org/_next/image?url=https%3A%2F%2Fapi.weteka.org%2Fpublic%2Fbooks%2F65e91f90a8a670a46fc0102c%2F0001.png&w=1080&q=75"
          title="A Silly Rabbit"
          director="សាលាឌីជីថល"
          genre="Khmer legend"
        />
      </div> */}
    </div>
  );
};

export default LegendComponents;
