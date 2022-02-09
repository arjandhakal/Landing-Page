import React from "react";
import Download from "../../Components/Download/Download";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Previews from "../../Components/Previews/Previews";

export const Home: React.FC = () => {
  return (
    <div className="flow-content">
      <Header />
      <main className="flow-content">
        <Features />
        <Previews />
        <Download />
      </main>
      <Footer />
    </div>
  );
};
