import Header from "./Header";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadImages} from "../redux/actionss";
import Main from "./Main";
import Footer from "./Footer";
import { Route } from 'react-router-dom'
import Publication from "./Publication";


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(loadImages())
  },[])

  return (
          <div className="App">
              <div className="wrap">
                  <Route path={'/'}>
                      <div className="container">
                          <Header />
                          <Main />
                          <Footer />
                      </div>

                  </Route>
                  <Route path='/modal/:id?'>
                      <Publication />
                  </Route>

              </div>


          </div>
  );
}

export default App;
