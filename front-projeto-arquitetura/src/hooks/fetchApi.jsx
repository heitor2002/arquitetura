import { useEffect, useState } from "react";

const fetchApi = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) throw Error("Falha ao se conectar com o banco de dados");
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
        })
        .catch((err) => setError(err.message));
    }, 1000);
  }, [url]);

  return { data, error, isPending };
};

export default fetchApi;
