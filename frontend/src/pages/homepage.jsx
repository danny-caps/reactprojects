import './homepage.css';
import Navbar from '../components/navbar';

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Find Your Perfect Home</h1>
          <p>Luxury apartments, family homes, and more — all in one place.</p>
          <div className="search-bar">
            <input type="text" placeholder="Search city or neighborhood..." />
            <button>Search</button>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="featured">
        <h2>Featured Properties</h2>
        <div className="listing-grid">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="listing-card">
              <img src={`https://source.unsplash.com/400x300/?modern-home&sig=${id}`} alt="Home" />
              <div className="listing-info">
                <h3>Modern Villa</h3>
                <p>3 Bed • 2 Bath • 2,100 sqft</p>
                <p className="price">$650,000</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Why Choose Us?</h2>
        <p>
          We're more than a listing site. We’re a trusted partner in your real estate journey. 
          Our agents and data-backed tools help you make the right move.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} RealEstatePro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
