import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { bestsellerIds, products } from '../data/products';

const Home = () => {
  const [bestsellers, setBestsellers] = useState([]);
  const categories = [
    { name: 'Fruits', image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', slug: 'fruits' },
    { name: 'Vegetables', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', slug: 'vegetables' },
    { name: 'Dairy', image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', slug: 'dairy' },
    { name: 'Bakery', image: 'https://images.pexels.com/photos/1209029/pexels-photo-1209029.jpeg', slug: 'bakery' },
  ];

  useEffect(() => {
    const bestsellerProducts = bestsellerIds.map(id => 
      products.find(product => product.id === id)
    ).filter(Boolean);
    setBestsellers(bestsellerProducts);
  }, []);

  return (
    <div>

      {/* Hero Section (Restaurant Theme) */}
      <section 
        className="relative bg-cover bg-center h-96 flex items-center justify-center text-white"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#F39C12]">KISINIA RESTAURANT</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#FFE8CC]">
            Enjoy delicious meals, fresh dishes, and premium dining made with love.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-[#D35400] hover:bg-[#E67E22] text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Order Now
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-[#FFF4E6] dark:bg-[#1E1A17]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#D35400] dark:text-[#F39C12]">
            Explore Our Menu
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard 
                key={index}
                name={category.name}
                image={category.image}
                slug={category.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section className="py-12 bg-[#E67E22] dark:bg-[#D35400] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Special Offers!</h2>
          <p className="text-xl mb-6">Enjoy up to 20% OFF on selected meals this week.</p>
          <Link 
            to="/shop" 
            className="inline-block bg-[#F39C12] hover:bg-[#F1C40F] text-gray-900 font-bold py-2 px-6 rounded-full transition duration-300"
          >
            View Deals
          </Link>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-12 bg-[#FFF9F3] dark:bg-[#1E1A17]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#D35400] dark:text-[#F39C12]">
            Customer Favorites
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {bestsellers.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
