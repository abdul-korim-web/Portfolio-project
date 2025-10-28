import React from 'react';

const AboutHome = () => {
    return (
        <>
            <section className='my-10 md:my-30 mx-5 md:mx-10 flex flex-col flex-wrap space-y-5 justify-center items-center md:flex-row'>
                <div className='flex justify-center md:w-1/2'>
                    <img className='w-[80%] md:w-[50%] ' src="image/About Me.png" alt="About Me.png" />
                </div>
                <div className='flex flex-col space-y-3 md:w-1/2'>
                    <h2 className='text-[44px] font-semibold italic font-mono md:text-[64px]'>About Me</h2>
                    <p className='text-sm text-gray-500 md:text-[24px] w-[95%] md:w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.</p>
                    <p className='text-sm text-gray-500 md:text-[24px] w-[95%] md:w-[70%]'>Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
                </div>
            </section>
        </>
    );
}

export default AboutHome;
