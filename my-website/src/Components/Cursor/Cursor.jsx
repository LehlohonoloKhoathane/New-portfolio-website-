import { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import './Cursor.css'

const Cursor = () =>{

    // State to store the current mouse position
    const [position, setPosition] = useState({x: 0,y: 0});

    // Effect to update the position state on mouse move
    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY})
        };

        window.addEventListener('mousemove', mouseMove);

         // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

     // Render a motion.div with a 'cursor' class that animates based on mouse position
    return(
        <motion.div className='cursor' animate={{x:position.x-1, y:position.y-108}}></motion.div>
    );
};

export default Cursor;