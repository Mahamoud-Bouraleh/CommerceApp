// Liste des produits
import Product from './Product';
const products = [
  {
    id: 1,
    name: "Pizza",
    urlImage:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 600,
  },
  {
    id: 2,
    name: "Hamburger",
    urlImage:
      "https://plus.unsplash.com/premium_photo-1684349034700-d3abbaa83ee1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 500,
  },
  {
    id: 3,
    name: "Tacos",
    urlImage:
      "https://plus.unsplash.com/premium_photo-1664476631037-87a2714dd04e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 700,
  },
  {
    id: 4,
    name: "Spaghetti",
    urlImage:
      "https://plus.unsplash.com/premium_photo-1674511582428-58ce834ce172?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 500,
  },
  {
    id: 5,
    name: "Poulet",
    urlImage:
      "https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1500,
  },
  {
    id: 6,
    name: "Poisson",
    urlImage:
      "https://plus.unsplash.com/premium_photo-1723489388483-eb3b235acaf9?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1400,
  },

];

// Import du composant Product


const Products = () => {

  return (
    <div className="grid" >
      {
        products.map((product) => (
          <Product product={product} />
        ))

      }
      </div>
  );

  
};

export default Products;
