import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Education from "./components/Educatioon";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div class="text-purple">
    <Navbar />
    <Hero />
    <Profile />
    <Education />
    <Footer />
    </div>
  );
}
