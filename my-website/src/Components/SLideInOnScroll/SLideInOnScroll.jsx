
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './SlideInOnScroll.css';

const SlideInOnScroll = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5, // Change as needed
    });

    return (
        <div ref={ref} className={`slide-in ${inView ? 'active' : ''}`}>
            {children}
        </div>
    );
};

export default SlideInOnScroll;
