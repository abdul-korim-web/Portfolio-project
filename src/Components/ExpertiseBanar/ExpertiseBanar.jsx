
import React from "react";

const ExpertiseBanar = () => {
  const Expertise = [
    {
      image: "image/Strategy & Direction.png",
      heading: "Strategy & Direction",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: "image/Branding & Logo.png",
      heading: "Branding & Logo",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: "image/UI & UX Design.png",
      heading: "UI & UX Design",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      image: "image/Webflow Development.png",
      heading: "Webflow Development",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];
  return (
    <>
      <section className="mt-10 md:my-20 mx-5 md:mx-10 flex flex-col space-y-10 ">
        <div className="flex flex-col space-y-3">
          <p className="font-semibold text-sm italic font-mono md:text-[21px] ">My Skills</p>
          <h2 className="text-2xl font-bold italic md:text-[34px]">My Expertise</h2>
        </div>
        <div className="flex flex-col justify-center items-center  space-y-10 md:flex-row md:items-center md:justify-center md:space-x-3 md:space-y-0 ">
          {Expertise.map((item, index) => (
            <div key={index} className="bg-[#F5FCFF] px-5 py-3 rounded-2xl dark:text-black md:w-1/4 ">
              <img src={item.image} className="w-[100px]" alt={item.image} />
              <h2 className="text-2xl font-semibold">{item.heading}</h2>
              <p className="text-gray-500 md:w-[90%] ">{item.des}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ExpertiseBanar;
