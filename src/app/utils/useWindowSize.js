import React, {useState, useEffect} from "react"

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({width: undefined})

    useEffect(() => {
        function handleResize(){
            setWindowSize({
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize;
}

export default useWindowSize;