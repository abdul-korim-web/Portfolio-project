import React from "react";

const Contact = () => {
  return (
    <>
      <section className="mx-5 my-10 md:mx-10 md:my-20 flex flex-col  italic font-mono space-y-5">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h2 className="text-sm text-gray-600 italic font-mono">
            Get In Touch
          </h2>
          <h2 className="text-2xl font-semibold md:text-3xl ">Contact me</h2>
          <p className="text-sm text-center text-gray-500 md:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div className="">
          <form
            action=""
            className="flex flex-col space-y-2  "
          >
            <div className="flex flex-col space-y-2 md:flex-row">
              <div className="flex flex-col space-y-1 md:w-1/2 ">
                <label htmlFor="" className="text-xl">
                  First name
                </label>
                <input
                  type="text"
                  className="border px-2 rounded-xl border-gray-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 py-1 w-[90%]"
                />
              </div>
              <div className="flex flex-col space-y-1 md:w-1/2 ">
                <label htmlFor="" className="text-xl">
                 Last name
                </label>
                <input
                  type="text"
                  className="border px-2 rounded-xl border-gray-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 py-1 w-[90%]"
                />
              </div>
            </div>
            <div  className="md:flex flex-wrap">
              <div className="flex flex-col space-y-1 md:w-1/2  ">
                <label htmlFor="" className="text-xl">
                  Email
                </label>
                <input
                  type="email"
                  className="border px-2 rounded-xl border-gray-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 py-1 w-[90%]"
                />
              </div>
              <div className="flex flex-col space-y-1 md:w-1/2 ">
                <label htmlFor="" className="text-xl">
                 Phone number
                </label>
                <input
                  type="number"
                  className="border px-2 rounded-xl border-gray-500 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 py-1 w-[90%]"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2 md:w-full">
              <label htmlFor="" className="text-xl">Choose a topic</label>
              <select name="" id="" className="border py-2 rounded-xl focus:border-blue-500 focus:ring-blue-500 w-[90%] ">
                <option value="select one">select one</option>
                <option value="Web Development">Web Development</option>
                <option value="Grafix Desing">Grafix Desing</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="">Message</label>
              <textarea name="" id="" rows={10} className="border  focus:ring-blue-500 focus:border-blue-500 rounded-xl w-[90%]"></textarea>
            </div>
            <div className="flex  space-x-2   items-center"> 
              <input className="" type="checkbox" />
              <span className="text-xl">I accept the terms</span>
            </div>
            <div className="w-full flex justify-center">
              <button className="bg-blue-500 px-20 py-2 text-white  rounded-2xl hover:transition-background hover:bg-white hover:border hover:border-gray-600 hover:text-blue-500">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
