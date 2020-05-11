import { useState } from "react";

export const usePagination = (
  { pageDefault, limitDefault } = { pageDefault: 0, limitDefault: 25 }
) => {
  const [page, setPage] = useState(pageDefault);
  const [limit, setLimit] = useState(limitDefault);

  return { page, setPage, limit, setLimit, offset: page * limit };
};
