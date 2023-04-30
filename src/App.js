import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import MovieList from "./pages/movieList/MovieList";
import Movie from "./pages/movie/Movie";
import NewMovie from "./pages/newMovie/NewMovie";

function App() {
  // console.log(userStats);
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
      {user && (
        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:useId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/movies" element={<MovieList />} />
              <Route path="/movie/:movieId" element={<Movie />} />
              <Route path="/lists" element={<ListList />} />
              <Route path="/list/:listId" element={<List />} />
              <Route path="/newMovie" element={<NewMovie />} />
              <Route path="/newlist" element={<NewList />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
