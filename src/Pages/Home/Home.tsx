import React from "react";
import Download from "../../Components/Download/Download";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Previews from "../../Components/Previews/Previews";
import DividerSection from "../../Components/DividerSection/DividerSection";

export const Home: React.FC = () => {
  return (
    <div className="flow-content">
      <Header />
      <main className="flow-content">
        <Features />
        <DividerSection>
          <h3 className="divide-filler">One Screen for all your needs</h3>
        </DividerSection>
        <Previews />
        <Download />
      </main>
      <Footer />
    </div>
  );
};
