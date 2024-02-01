// useFetch.js
import { useState, useEffect, } from "react";
import axios from "axios";

const useFetch = (endpoints) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        // Use Promise.all to fetch data from multiple endpoints concurrently
        const responses = await Promise.all(
          endpoints.map((endpoint) => axios.get(`http://localhost:1337/api/${endpoint}`))
        );

        // Extract data from each response
        const responseData = responses.map((response) => response.data.data[0].attributes);

        // Concatenate the results
        setData(responseData);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error getting data:", error);
      }
    };

    fetchData();
  },[]);

  return { loading, data };
};

export default useFetch;


