import { div } from "framer-motion/client";
import React, { useEffect } from "react";
import { useRef } from "react";

const TestimonialsHome = () => {
  const testimonialitem = [
    {
      clientImage: `image/client1.png`,
      clientName: `Dianne Russell`,
      clientRole: `Starbucks`,
      clientdes: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`,
    },
    {
      clientImage: `image/client2.png`,
      clientName: `Kristin Watson`,
      clientRole: `Louis Vuitton`,
      clientdes: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`,
    },
    {
      clientImage: `image/client3.png`,
      clientName: `Kathryn Murphy`,
      clientRole: `McDonald's`,
      clientdes: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`,
    },
    {
      clientImage: `image/client1.png`,
      clientName: `Dianne Russell`,
      clientRole: `Starbucks`,
      clientdes: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`,
    },
    {
      clientImage: `image/client2.png`,
      clientName: `Kristin Watson`,
      clientRole: `Louis Vuitton`,
      clientdes: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`,
    },
    {
      clientImage: `image/client3.png`,
      clientName: `Kathryn Murphy`,
      clientRole: `McDonald's`,
      clientdes: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`,
    },
    {
      clientImage: `image/client1.png`,
      clientName: `Dianne Russell`,
      clientRole: `Starbucks`,
      clientdes: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`,
    },
    {
      clientImage: `image/client2.png`,
      clientName: `Kristin Watson`,
      clientRole: `Louis Vuitton`,
      clientdes: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`,
    },
    {
      clientImage: `image/client3.png`,
      clientName: `Kathryn Murphy`,
      clientRole: `McDonald's`,
      clientdes: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`,
    },
  ];
  const scrollRef = useRef(null);
  useEffect(() => {
    const scroll = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      }
      if (scrollRef.current.clientWidth+scrollRef.current.scrollLeft>=scrollRef.current.scrollWidth) {
        scrollRef.current.scrollTo({left:0,behavior:"smooth"})
        
      }
    }, 2000);
    return () => {clearInterval(scroll)};
  }, []);
  return (
    <>
      <section className="px-5 py-10 md:px-10 md:py-20 flex flex-col bg-[#F5FCFF] ">
        <div className="flex flex-col space-y-3">
          <h2 className="text-sm md:text-[21px]">Clients Feedback</h2>
          <h2 className="text-xl font-semibold md:text-[64px]">
            Customer testimonials
          </h2>
        </div>
        {/* client review */}
        <div className="overflow-x-auto my-10 md:my-20" ref={scrollRef}>
          <div className="flex space-x-5">
            {testimonialitem.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[400px] border border-[#006B6A] p-[20px] md:p-[42px] flex flex-col space-y-5 rounded-2xl"
              >
                <div className="text-[#006B6A] flex flex-wrap space-x-1 items-center">
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <div>
                  <p className="text-sm">{item.clientdes}</p>
                </div>
                <div className="flex flex-wrap space-x-5 items-center">
                  <div className=" ">
                    <img
                      className="w-[50px]"
                      src={item.clientImage}
                      alt={item.clientName}
                    />
                  </div>
                  <div>
                    <h2>{item.clientName}</h2>
                    <h2>{item.clientRole}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsHome;
