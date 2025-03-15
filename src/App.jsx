import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <main className="max-w-7xl min-h-screen mx-auto px-4 text-black">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
