//custom component
// 1. First letter of comp should be capital
// 2. should return JSX
export function ProductList({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <div>
        <h6>{product.name}</h6>
        <p>{product.description}</p>
        <p>Rs/- {product.cost}</p>
      </div>
    </div>
  );
}
