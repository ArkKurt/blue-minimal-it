
import React from 'react';
import Navbar from "@/components/Navbar";
import CMSDashboard from "@/components/CMSDashboard";
import Footer from "@/components/Footer";

const Admin = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="pt-24">
        <CMSDashboard />
      </div>
      <Footer />
    </main>
  );
};

export default Admin;
