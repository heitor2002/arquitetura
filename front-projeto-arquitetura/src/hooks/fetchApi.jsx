import { useEffect, useState } from "react";

const fetchApi = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) throw Error("A conexão falhou, tente novamente mais tarde...");
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null)
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1500);
  }, [url]);

  return { data, error, isPending };
};

export default fetchApi;
