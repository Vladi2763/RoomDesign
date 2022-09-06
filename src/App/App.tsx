import { useEffect } from "react";
import { getTickets } from "../store/actionsCreater";
import { useDispatch } from "react-redux";
import { Dispatch } from "../store/actionsCreater";

import MainPage from "./pages/MainPage";

function App() {
  const dispatch: Dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTickets());
  }, []);
  return <MainPage />;
}

export default App;
