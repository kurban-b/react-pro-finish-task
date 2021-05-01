export function loadImages() {
  return function (dispatch) {
    dispatch({
      type: "images/load/start",
    });

    fetch("https://boiling-refuge-66454.herokuapp.com/images")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "images/load/success",
          payload: json,
        });
      });
  };
}

export function loadPublication(id) {
  return function (dispatch) {
    dispatch({
      type: "publication/load/start",
    });
    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "publication/load/success",
          payload: json,
        });
      });
  };
}

export function addComment(name, text, id) {
  return function (dispatch) {
    dispatch({
      type: "publication/comments/loading",
    });
    fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}/comments`, {
      method: "POST",
      body: JSON.stringify({
        name: `${name}`,
        comment: `${text}`,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      dispatch({
        type: "publication/comments/add",
        payload: text,
        name: name,
      });
    });
  };
}
