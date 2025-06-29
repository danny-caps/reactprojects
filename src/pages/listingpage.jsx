import React from 'react';
import Navbar from '../components/navbar';
import './listing.css';

const Listings = () => {
  const sampleListings = [
    {
      id: 1,
      title: 'Elegant City Apartment',
      image: 'https://source.unsplash.com/400x300/?apartment',
      details: '2 Bed • 1 Bath • 1,100 sqft',
      price: '$320,000',
    },
    {
      id: 2,
      title: 'Luxury Villa in the Hills',
      image: 'https://source.unsplash.com/400x300/?villa',
      details: '4 Bed • 3 Bath • 3,500 sqft',
      price: '$1,250,000',
    },
    {
      id: 3,
      title: 'Cozy Suburban Home',
      image: 'https://source.unsplash.com/400x300/?house',
      details: '3 Bed • 2 Bath • 1,800 sqft',
      price: '$480,000',
    },
    {
      id: 4,
      title: 'Modern Studio Flat',
      image: 'https://source.unsplash.com/400x300/?studio',
      details: '1 Bed • 1 Bath • 650 sqft',
      price: '$210,000',
    },
    {
      id: 5,
      title: 'Beachfront Bungalow',
      image: 'https://source.unsplash.com/400x300/?beach-house',
      details: '2 Bed • 2 Bath • 1,400 sqft',
      price: '$775,000',
    },
  ];

  return (
    <div className="listings-page">
      <Navbar />

      <header className="listings-header">
        <h1>Explore Listings</h1>
        <p>Discover your next home from our curated properties</p>
      </header>

      <main className="listings-grid">
        {sampleListings.map((listing) => (
          <div className="listing-card" key={listing.id}>
            <img src={listing.image} alt={listing.title} />
            <div className="listing-info">
              <h3>{listing.title}</h3>
              <p>{listing.details}</p>
              <p className="price">{listing.price}</p>
              <button className="view-btn">View Details</button>
            </div>
          </div>
        ))}
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} RealEstatePro. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Listings;
