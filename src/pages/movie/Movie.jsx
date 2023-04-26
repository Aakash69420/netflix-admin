import { Link, useLocation } from "react-router-dom";
import "./movie.css";
import { Publish } from "@mui/icons-material";

export default function Movie() {
  const location = useLocation();
  const { movie } = location.state;
  const object = movie.reduce(
    (obj, item) => Object.assign(obj, { ['_id']: item._id, ['img']: item.img, ['title']: item.title, ['year']: item.year, ['genre']: item.genre, ['limit']: item.limit, ['trailer']: item.trailer, ['video']: item.video }), {});
    console.log(object)

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
                <img src={object.img} alt="" className="productInfoImg" />
                <span className="productName">{object.title}</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                  <span className="productInfoKey">id:</span>
                  <span className="productInfoValue">{object._id}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">genre:</span>
                  <span className="productInfoValue">{object.genre}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">year:</span>
                  <span className="productInfoValue">{object.year}</span>
                </div>
                <div className="productInfoItem">
                  <span className="productInfoKey">limit:</span>
                  <span className="productInfoValue">{object.limit}</span>
                </div>
              </div>
            </div>
          </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input type="text" defaultValue={object.title} />
            <label>Year</label>
            <input type="text" defaultValue={object.year} />
            <label>Genre</label>
            <input type="text" defaultValue={object.genre} />
            <label>Limit</label>
            <input type="text" defaultValue={object.limit} />
            <label>Trailer</label>
            <input type="file" />
            <label>Video</label>
            <input type="file" />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={object.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
