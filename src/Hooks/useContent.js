
import { useEffect, useState } from 'react'

import { YOUTUBE_API } from '../utils/constant';

const useContent = () => {
    const [content, setContent] = useState(null);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
    const result = await fetch(YOUTUBE_API);
    const response = await result.json();
    setContent(response?.items);
    }
    return content
}

export default useContent;