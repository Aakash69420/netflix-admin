  import { Link, useLocation, useNavigate } from "react-router-dom";
  import "./list.css";
  import { useContext, useEffect, useState } from "react";
  import { ListContext } from "../../context/listContext/ListContext";
  import { updateList, getLists } from "../../context/listContext/apiCalls";

  export default function List() {
    const location = useLocation();
    const { lists, dispatch } = useContext(ListContext);
    const [list, setList] = useState(location.state?.list || {});
    const navigate = useNavigate();

    useEffect(() => {
      getLists(dispatch);
    }, [dispatch]);

    const handleUpdate = (e) => {
      e.preventDefault();
      updateList(list[0]._id, list, dispatch)
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
      setList({ ...list, [name]: value });
    };

    console.log(list[0])

    return (
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">List</h1>
          <Link to="/newList">
            <button className="productAddButton">Create</button>
          </Link>
        </div>
        {list && (
      <>
        <div className="productTop">
          <div className="productTopRight">
            <div className="productInfoTop">
              <span className="productName">{list[0].title}</span>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">{list[0]._id}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">genre:</span>
                <span className="productInfoValue">{list[0].genre}</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">type:</span>
                <span className="productInfoValue">{list[0].type}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>List Title</label>
              <input 
                            type="text"
                            name="title"
                            value={list.title}
                            onChange={handleChange}
              />
              <label>Type</label>
              <input 
                                        type="text"
                                        name="type"
                                        value={list.type}
                                        onChange={handleChange}
              />
              <label>Genre</label>
              <input 
                                                    type="text"
                                                    name="genre"
                                                    value={list.genre}
                                                    onChange={handleChange}
              />
            </div>
            <div className="productFormRight">
              <button className="productButton" onClick={handleUpdate}>Update</button>
            </div>
          </form>
        </div>
        </>
        )}
      </div>
    );
  }
