import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./movie.css";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { Publish } from "@mui/icons-material";
import { updateMovie, getMovies } from "../../context/movieContext/apiCalls";

export default function Movie() {
  const { movies, dispatch } = useContext(MovieContext);
  const location = useLocation();
  const [movie, setMovie] = useState(location.state?.movie || {});
  const navigate = useNavigate();

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateMovie(movie[0]._id, movie, dispatch)
    .then(() => {
      // Navigate back to the lists page after update
      navigate("/movies");
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
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
            <img src={movie[0].img} alt="" className="productInfoImg" />
            <span className="productName">{movie[0].title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{movie[0]._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie[0].genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movie[0].year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{movie[0].limit}</span>
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
          <img src={movie[0].img} alt="" className="productUploadImg" />
          <label htmlFor="file">
            <Publish />
          </label>
          <input type="file" id="file" name="img" onChange={handleChange} style={{ display: "none" }} />
        </div>
        <button className="productButton" onClick={handleUpdate}>Update</button>
      </div>
    </form>
  </div>
</div>
);
}