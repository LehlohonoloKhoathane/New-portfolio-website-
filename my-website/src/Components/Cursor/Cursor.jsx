import { useEffect, useState } from 'react'
import 'cursor.css'

const Cursor = () =>{

    const [position, setPosition] = useState({x:0,y:0})

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({x:e.clientX, y:e.clientY})
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            
        }
    })
    return(
        <div className='cursor'></div>
    )
}

export default Cursor;