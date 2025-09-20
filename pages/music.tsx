import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import React from "react";

const Music: React.FC = () => (
  <>
  <Navigation />
    <section className="py-16 bg-gray-900/30 text-white min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-pink-500 font-['Cinzel_Decorative']">Music</h2>
        <p className="mt-4 text-lg text-gray-300">Discover our latest DJ sets and live performances.</p>
      </div>
    </section>
    <Footer />
  </>
);

export default Music;
