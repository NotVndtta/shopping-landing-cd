'use client'
import { useForm } from "react-hook-form"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Education from "./components/Educatioon";
import Footer from "./components/Footer";
import Form from "./components/Form";




export default function Home() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div class="text-purple">
    <Navbar />
    <Hero />
    <Profile />
    <Education />
    <Form />
    <Footer /> 
    </div>
  );
}
