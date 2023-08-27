import logo from "./logo.svg";
import "./App.css";
import JSON from "./data.json";
import { ProductList } from "./ProductList";

function App() {
  //js starts
  const productList = JSON;
  console.log("productList=>", productList);
  //js ends
  //jsx starts
  return (
    <div className="App">
      <DisplayDataInTable />
      {/* <div className="product-data">
        {productList.map((pd) => (
          <ProductList product={pd} />
        ))}
      </div> */}
    </div>
  );
  //jsx ends
}

function DisplayDataInTable() {
  const items = [
    {
      id: 1,
      title: "Onion",
      category: "veg",
    },
    {
      id: 2,
      title: "Tomato",
      category: "veg",
    },
    {
      id: 3,
      title: "Apple",
      category: "Fruit",
    },
    {
      id: 4,
      title: "Orange",
      category: "Fruit",
    },
  ];
  return (
    <div>
      <table
        style={{ width: "800px", height: "200px", border: "1px solid black" }}
      >
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>

        {items.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.category}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default App;
