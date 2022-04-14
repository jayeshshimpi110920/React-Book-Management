import { useState } from "react";
import "./styles.css";
// import data from "./db.json";
// import { useEffect } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [obj, setobj] = useState([
    { name: "book 1", price: "50" },
    { name: "book 2", price: "100" }
  ]);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleprice = (e) => {
    setPrice(e.target.value);
  };

  const handleAdd = (namee, pri) => {
    const newobj = { name: namee, price: pri };
    setobj([...obj, newobj]);
    setName("");
    setPrice("");
  };

  const handleDelete = (ele, index) => {
    const newobj = obj.filter(function (e, i) {
      return index !== i;
    });
    setobj(newobj);
  };

  return (
    <div className="App">
      <h3>Book management</h3>
      <h6>&copy; Jayesh shimpi -</h6>
      <input
        type="text"
        name="book"
        value={name}
        onChange={handleChange}
        placeholder="Book name"
        required
      />
      <input
        type="text"
        placeholder="Book price"
        name="price"
        value={price}
        onChange={handleprice}
        required
      />
      <br />
      <button onClick={() => handleAdd(name, price)}>
        click me to add book
      </button>

      <div className="container">
        <div className="row border border-dark">
          <div className="col">Book name</div>
          <div className="col">price</div>
          <div className="col">Manage</div>
        </div>
        {obj.map((ele, i) => {
          return (
            <div className="row">
              <div className="col">{ele.name}</div>
              <div className="col">{ele.price}</div>
              <div className="col">
                <button onClick={() => handleDelete(ele, i)}>delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
