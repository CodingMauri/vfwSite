import  { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (api) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      await axios
        .get(api)
        .then((res) => {
          setData(res.data.results);

          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log("error getting data:", console.log(err));
        });
    };

    getData();
  }, [api]);

  return { loading, data };
};

export default useFetch;
