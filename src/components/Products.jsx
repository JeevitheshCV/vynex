import products from '../data/products';
import './Products.css';

export default function Products() {
  return (
    <section className="section products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((prod) => (
          <div key={prod.id} className="product-card">
            <img src={prod.image} alt={prod.name} />
            <h3>{prod.name}</h3>
            <p><em>{prod.category}</em></p>
            <p>{prod.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
