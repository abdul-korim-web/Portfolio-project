import React, { useRef } from "react";
import { useEffect } from "react";

const RecentProjects = () => {
    const scrollRef = useRef(null)
    useEffect(() => {
    const timer = setInterval(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
            if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
                scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
            }
        }
    }, 3000);

    return () => clearInterval(timer);
}, []);

  const projectsitems = [
    {
      image: "image/projectimage1.png",
      heading: "Ahuse",
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      image: "image/projectimage2.png",
      heading: "Easy Rent",
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      image: "image/projectimage3.png",
      heading: "App Dashboarde",
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      image: "image/projectimage1.png",
      heading: "Ahuse",
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      image: "image/projectimage2.png",
      heading: "Easy Rent",
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      image: "image/projectimage3.png",
      heading: "App Dashboarde",
      dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ];
  return (
    <>
      <section className="my-10 mx-5 md:my-20 md:mx-20 ">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-col space-y-2">
            <h2 className="text-sm font-semibold italic md:text-[21px]">
              Recent Projects
            </h2>
            <h2 className="text-2xl font-semibold  md:text-[64px] ">
              My Portfolio
            </h2>
          </div>
          <div>
            <button className="flex bg-[#E62872] justify-center items-center rounded-xl md:px-3 md:py-2">
              <img
                className="w[10px] h-[40px] p-2 "
                src="image/Social icon.png"
                alt="Social icon.png"
              />{" "}
              <span className="mr-2 text-white">Visit My Dribbble</span>
            </button>
          </div>
        </div>
        {/* project  */}
        <div
          className="my-10 md:my-20 overflow-x-auto "ref={scrollRef }>
          <div className="flex items-center space-x-5 w-max ">
            {projectsitems.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[400px] bg-[#F5FCFF] p-4 rounded-xl"
              >
                <div>
                  <img
                    src={item?.image}
                    alt={item.image}
                    className="rounded-md"
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-xl font-semibold">{item.heading}</h2>
                  <p className="text-gray-600">{item.dec}</p>
                  <button className="mt-3 flex items-center gap-2 text-blue-600 font-medium">
                    View In Dribbble
                    <img src="image/Vector (1).png" alt="Vector icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentProjects;
