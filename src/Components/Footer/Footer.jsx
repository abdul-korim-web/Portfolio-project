import React from 'react';

const Footer = () => {
    return (
        <>
            <section className=' my-10  md:mt-20 flex flex-col space-y-5 bg-[#F5FCFF]  dark:text-black py-5 px-4 rounded-2xl md:flex-row md:flex-wrap justify-between items-center md:py-20 md:px-10 '>
                <div className='text-2xl text-center'>
                    <h2>Made with 💖 by Abdul korim</h2>
                </div>
                <div className=''>
                    <ul className='flex flex-wrap  justify-between md:space-x-3'>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                        <li><a href="">Cookies Settings</a></li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Footer;
