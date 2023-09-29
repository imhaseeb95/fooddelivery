import { Link } from "react-router-dom";
import Addproductcard from "../../components/Productcard/Addproductcard";
import "./addproduct.css";

function Addproduct() {
  return (
    <>
      <div className="addproduct-container main-dash">
        <div className="admin-side-bar">
          <div className="admin-link">
            <ul>
              <li>
                <Link to="/dashboard" className="">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/orders" className="">
                  Order
                </Link>
              </li>
              <li>
                <Link to="/addproduct" className="">
                  Add Product
                </Link>
              </li>
              <li>
                <Link to="/addcategory" className="">
                  Add Category
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="admin-content-container">
          <Addproductcard />
        </div>
      </div>
    </>
  );
}

export default Addproduct;
