import React, { useEffect, useState } from "react";
import getTrendingTerms from "services/getTrendingTerms";
import Category from "components/Category";

export default function Trending() {
  const [terms, setTerms] = useState([]);

  useEffect(function () {
    getTrendingTerms().then(setTerms);
  }, []);

  if (terms.length === 0) return null;

  return <Category name="Tendencias" options={terms} />;
}
