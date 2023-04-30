import { Link, useLocation } from "react-router-dom";
import "./list.css";

export default function List() {
  const location = useLocation();
  const { list } = location.state;
  const object = list.reduce(
    (obj, item) => Object.assign(obj, { ['_id']: item._id, ['title']: item.title, ['type']: item.type, ['genre']: item.genre, ['content']: item.content }), {});
    console.log(object)
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
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
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{object.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input type="text" placeholder={object.title} />
            <label>Type</label>
            <input type="text" placeholder={object.type} />
            <label>Genre</label>
            <input type="text" placeholder={object.genre} />
          </div>
          <div className="productFormRight">
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
