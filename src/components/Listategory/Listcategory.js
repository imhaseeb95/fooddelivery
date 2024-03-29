import { useEffect, useState } from "react";
import "./listcategory.css";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";

function Listcategory({ getData, setIsActive }) {
  const [listCategory, setListCategory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/category/getAllCategories")
      .then((res) => setListCategory(res.data.result))
      .catch((err) => console.error(err));
  }, [listCategory]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/category/deletecategory/${id}`)
      .then((res) => res.status)
      .catch((err) => console.log(err));
  };
  const handleEdit = (id, items) => {
    getData(id, items);
    setIsActive(true);
  };

  return (
    <>
      <div>
        <table style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Update/Delete</th>
            </tr>
          </thead>
          <tbody>
            {listCategory?.map((items) => (
              <tr key={items._id}>
                <td>{items.name}</td>
                <td>{items.desc}</td>
                <td>
                  <RiDeleteBin6Line
                    onClick={() => handleDelete(items._id)}
                    style={{ cursor: "pointer" }}
                  />
                  <button
                    onClick={() => handleEdit(items._id, items)}
                    style={{ cursor: "pointer" }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Listcategory;
