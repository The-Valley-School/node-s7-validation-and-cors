import "./App.css";
import React from "react";

function App() {
  const apiUrl = "https://node-s7-validation-and-cors.vercel.app/brand";
  const [brands, setBrands] = React.useState();

  React.useEffect(() => {
    fetch(apiUrl).then((brands) => {
      setBrands(brands);
    });
  }, []);

  return (
    <div className="App">
      <h2>Marcas:</h2>
      <ul>
        {brands?.map((brand) => (
          <li>{brand.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
