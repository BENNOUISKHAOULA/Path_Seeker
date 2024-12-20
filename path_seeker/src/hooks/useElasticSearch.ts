import { useState } from "react";
import axios from "axios";

const ELASTIC_SEARCH_URL = "http://localhost:9200";

export const useElasticSearch = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (index: string, query: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${ELASTIC_SEARCH_URL}/${index}/_search`, {
        query: {
          multi_match: {
            query,
            fields: ["name", "description"], // Champs de recherche
          },
        },
      });
      setResults(response.data.hits.hits); // Résultats de la recherche
    } catch (err) {
      setError("Failed to fetch data from ElasticSearch");
    } finally {
      setLoading(false);
    }
  };

  return { results, search, loading, error };
};
