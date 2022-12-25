const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h2>Home Page</h2><a href="/api/products">product</a>');
});

app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;

  const singlePro = products.find(
    (product) => product.id === Number(productID)
  );
  res.json(singlePro);
});
