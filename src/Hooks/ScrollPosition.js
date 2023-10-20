import { useEffect, useState} from "react";


export const useScrollPosition = () => {
    const [ScrollPosition, setScrollPosition] = useState (0);

    useEffect (()=> {
        const udaptePosition = () => {
            setScrollPosition(window.pageYOffset);
        };
        window.addEventListener("scroll", udaptePosition);
        udaptePosition();
        return() => window.removeEventListener("scroll", udaptePosition);
    }, []);
    return ScrollPosition;
};