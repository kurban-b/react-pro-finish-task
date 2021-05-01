const initialState = {
  items: {},
  loading: false,
  LoadingComment: false,
};

const publicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "publication/load/start":
      return {
        ...state,
        loading: true,
      };

    case "publication/load/success":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    case "publication/comments/loading":
      return {
        ...state,
        loadingComment: true,
      };

    case "publication/comments/add":
      return {
        ...state,
        loadingComment: false,
        items: {
          ...state.items,
          comments: [
            ...state.items.comments,
            { name: action.name, text: action.payload, date: action.date },
          ],
        },
      };

    default:
      return state;
  }
};

export default publicationReducer;
