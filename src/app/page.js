import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <div class="text-purple">
    <Navbar />
    <Hero />
    <Profile />
    </div>
  );
}
