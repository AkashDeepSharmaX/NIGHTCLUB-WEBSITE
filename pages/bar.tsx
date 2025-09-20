import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image_url: string;
}

const Bar: React.FC = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/bar/")
      .then(res => {
        setItems(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to load bar menu.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navigation />
      <section className="py-16 bg-gray-900/30 text-white min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-pink-500 font-['Cinzel_Decorative'] mb-8">The Night Crew Bars - Fully Stocked Bars</h2>
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-400">{error}</p>}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map(item => (
              <div key={item.id} className="bg-gray-800/40 rounded-lg p-6 shadow-lg">
                {item.image_url && <img src={item.image_url} alt={item.name} className="mx-auto mb-4 rounded" />}
                <h3 className="text-xl font-bold text-pink-400 mb-2">{item.name}</h3>
                <p className="text-sm text-gray-300 mb-2">{item.category}</p>
                <p className="text-lg text-white mb-2">${item.price.toFixed(2)}</p>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Bar;
