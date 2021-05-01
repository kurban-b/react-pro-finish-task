import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadPublication } from "../redux/actionss";
import Comments from "./Coments";
import Form from "./Form";
import Loader from "./Loader";

function Publication(props) {
  const dispatch = useDispatch();
  const params = useParams().id;
  const publication = useSelector((state) => state.publication.items);
  const history = useHistory();
  const loading = useSelector((state) => state.publication.loading);

  useEffect(() => {
    dispatch(loadPublication(params));
  }, [dispatch, params]);

  function handleClose() {
    history.push("/");
  }

  return (
    <div className="modal-window">
      <div className="card">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="left">
              <div className="card_img">
                <img src={publication.url} alt="" />
              </div>
              <div className="comments">
                {publication.comments !== undefined ? (
                  publication.comments.map((item, i) => {
                    return <Comments com={item} key={i} id={i} />;
                  })
                ) : (
                  <div className="no-comments">Комментариев нет</div>
                )}
              </div>
              <Form />
            </div>

            <div className="right">
              <button onClick={handleClose}>&#10006;</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Publication;
