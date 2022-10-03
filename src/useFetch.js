import { useEffect, useState } from "react";
import paginate from "./utilis";

const url = `https://api.github.com/users/fabpot/followers?per_page=100`;

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    setData(paginate(data));
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return { loading, data };
};
