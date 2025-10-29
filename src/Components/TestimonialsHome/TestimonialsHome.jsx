import React from 'react';

const TestimonialsHome = () => {
    const testimonialitem = [
            {   
                clientImage:`image/client1.png`,
                clientName:`Dianne Russell`,
                clientRole:`Starbucks`,
                clientdes:`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`
            },
            {   
                clientImage:`image/client2.png`,
                clientName:`Kristin Watson`,
                clientRole:`Louis Vuitton`,
                clientdes:`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`
            },
            {   
                clientImage:`image/client3.png`,
                clientName:`Kathryn Murphy`,
                clientRole:`McDonald's`,
                clientdes:`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.`
            },
        ]
    return (
        <>
            <section className='mx-5 md:mx-10 my-10 md:my-20 flex flex-col '>
                <div className='flex flex-col space-y-3'>
                    <h2 className='text-sm'>Clients Feedback</h2>
                    <h2 className='text-xl font-semibold'>Customer testimonials</h2>
                </div>
                {/* client review */}
                <div>
                    

                </div>
            </section>
        </>
    );
}

export default TestimonialsHome;
