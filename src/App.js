import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/navBar";
import Header from "./components/Header";
import Category from "./components/category";
import ItemList from "./components/ItemList";
import { items } from "./data";

function App() {
  const [itemsData, setItemsData] = useState(items);
  // get all category
  const allCategory = ["الكل", ...new Set(items.map((i) => i.category))];
  console.log(allCategory);
  // filter by category
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArray = items.filter((item) => item.category === cat);
      setItemsData(newArray);
    }
  };
  // filter by Search
  const filterBySearch = (word) => {
    if (word !== "") {
      const newArray = items.filter((item) => item.title === word);
      setItemsData(newArray);
    }
  };

  return (
    <div className="font body-color">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category
          filterByCategory={filterByCategory}
          allCategory={allCategory}
        />
        <ItemList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
