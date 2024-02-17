import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div class="text-purple">
    <Navbar />
    <Hero />
    </div>
  );
}
