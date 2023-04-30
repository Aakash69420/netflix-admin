import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./movie.css";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { Publish } from "@mui/icons-material";
import { updateMovie, getMovies } from "../../context/movieContext/apiCalls";

export default function Movie() {
  const { movies, dispatch } = useContext(MovieContext);
  const location = useLocation();
  const [movie, setMovie] = useState(location.state.movie[0]);

  console.log(movie)

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateMovie(movie._id, movie, dispatch);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newMovie">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={movie.img} alt="" className="productInfoImg" />
            <span className="productName">{movie.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input
              type="text"
              name="title"
              value={movie.title}
              onChange={handleChange}
            />
            <label>Year</label>
            <input
              type="text"
              name="year"
              value={movie.year}
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              value={movie.genre}
              onChange={handleChange}
            />
            <label>Limit</label>
            <input
              type="text"
              name="limit"
              value={movie.limit}
              onChange={handleChange}
            />
            <label>Trailer</label>
            <input type="file" />
            <label>Video</label>
            <input type="file" />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={movie.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton" onClick={() => handleUpdate(movie._id)}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
