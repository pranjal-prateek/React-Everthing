//custom hooks are nothing but manipulating or using react hooks to customise in such a way that it solves our purpose
import { useEffect, useState } from "react";

const useCustomFetchHooks = ({ url, options }) => {
  const [data, setData] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchData = await fetch(url, options);
        if (!fetchData.ok) {
          throw new Error(`Error: ${fetchData.statusText}`);
        }
        const result = fetchData.json();
        setData(data);
      } catch {
        setError(err.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options]);

  return { data, loading, error };
};
