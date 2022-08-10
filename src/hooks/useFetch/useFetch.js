import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const useFetch = (url, pageNumber) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
   
    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(url);
            setData(responseData);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error.message);

        }
    };
 
if (pageNumber) {
    useEffect(() => {
        fetchData();
    }, [pageNumber]);
} else {
    useEffect(() => {
        fetchData();
    }, []);
}

    return {data, loading, error};
}


export default useFetch;