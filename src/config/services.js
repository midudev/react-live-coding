export const services = {
  getGifs: (keyword, query) => ({
    path: "/gifs/search",
    query: {
      q: keyword,
      limit: 25,
      offset: 0,
      rating: "G",
      lang: "en",
      ...query,
    },
  }),
  getTrending: (query) => ({
    url: "/trending/searches",
    queyr: { ...query },
  }),
};

export const getService = (key) => services[key];
