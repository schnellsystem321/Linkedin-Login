import React , {  useEffect }   from "react";
import { Header } from "./Header";
import Sidebar from "./Sidebar";
import { useSelector, useDispatch} from "react-redux";
import "./App.css";
import Feed from "./Feed";
import { selectUser } from "./features/userSlice";
import { login } from "./features/userSlice";
import { logout } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import Widgets from "./Widgets";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
        //logged in
      } else {
        //logged out
         dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      {/* header*/}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets/>
        </div>
      )}
      {/* app body*/}

      {/* side bar*/}
      {/* feed */}
      {/* widgets */}


     
    </div>
  );
}

export default App;
