"use client";
import Header from "./header";
import Footer from "./footer";

export default function ClientLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
} 