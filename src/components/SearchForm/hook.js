import { useReducer } from "react";

const ACTIONS = {
  CHANGE_KEYWORD: "change_keyword",
  CHANGE_RATING: "change_rating",
  CHANGE_LANG: "change_lang",
};

const ACTIONS_REDUCERS = {
  [ACTIONS.CHANGE_KEYWORD]: (state, action) => ({
    ...state,
    times: state.times + 1,
    keyword: action.payload,
  }),
  [ACTIONS.CHANGE_RATING]: (state, action) => ({
    ...state,
    rating: action.payload,
  }),
  [ACTIONS.CHANGE_LANG]: (state, action) => ({
    ...state,
    lang: action.payload,
  }),
};

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

export default function useForm ({
  initialKeyword = "",
  initialRating = "g",
  initialLang = "es",
} = {}) {
  const [{ keyword, rating, lang }, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    lang: initialLang
  });

  return {
    changeKeyword: ({ keyword }) =>
      dispatch({ type: ACTIONS.CHANGE_KEYWORD, payload: keyword }),
    changeRating: ({ rating }) =>
      dispatch({ type: ACTIONS.CHANGE_RATING, payload: rating }),
    changeLang: ({ lang }) =>
      dispatch({ type: ACTIONS.CHANGE_LANG, payload: lang }),
    keyword,
    rating,
    lang
  };
}
