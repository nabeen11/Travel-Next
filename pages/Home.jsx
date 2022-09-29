import { React } from "react";
import Slider1 from "/image/slider1.jpg";
import Slider2 from "/image/slider2.jpg";
import Slider3 from "/image/langtang.jpg";
import Slider4 from "/image/pokhara.jpg";
import Manakamana from "/image/manakamana.jpg";
import Kalinchowk from "/image/Kuri_Village.jpg";
import Rara from "/image/rara.jpg";
import HeroSlider from "../Components/home/HeroSlider";
import TopDestination from "../Components/home/TopDestination";
import ActivitiesFilter from "../Components/home/ActivitiesFilter";
import HomePackage from "../Components/home/HomePackage";
import Testimonial from "../Components/home/Testimonial";
import Blog from "../Components/home/Blog";
import Footer from "../Components/common/Footer";

const arrayActivity = [
  {
    id: "Odd",
    name: "All",
  },
  { id: 1, destinationId: [1], name: "Rafting" },
  { id: 2, destinationId: [4], name: "Paragliding" },
  { id: 3, destinationId: [1, 2, 3, 4, 5, 6, 9], name: "Sight Seeing" },
  { id: 4, destinationId: [4], name: "Bunjee Jumping" },
  { id: 5, destinationId: [1, 2, 3, 4], name: "Camping" },
  { id: 6, destinationId: [10], name: "Rock Climbing" },
];
const packages = [
  {
    id: 0,
    title: "Kathmandu Tour - 2 Days",
    activitiesID: ["Odd", 1],
    price: "5,000",
    image: Slider1,
  },
  {
    id: 1,
    title: "Everest Base Camp - 4 Days-3 Nights",
    activitiesID: ["Odd", 2],
    price: "15,000",
    image: Slider2,
  },
  {
    id: 2,
    title: "Pokhara Tour - 2 Days-1 Night",
    activitiesID: ["Odd", 3],
    price: "10,000",
    image: Slider4,
  },
  {
    id: 3,
    title: "Langtang Tour - 2 Days-1 Night",
    activitiesID: ["Odd", 4],
    price: "10,000",
    image: Slider3,
  },
  {
    id: 4,
    title: "rara Tour - 2 Days-1 Night",
    activitiesID: ["Odd", 5],
    price: "10,000",
    image: Rara,
  },
  {
    id: 5,
    title: "Manakamana Tour - 2 Days-1 Night",
    activitiesID: ["Odd", 6],
    price: "10,000",
    image: Manakamana,
  },
  {
    id: 6,
    title: "Kalinchowk Tour - 2 Days-1 Night",
    activitiesID: ["Odd", 1],
    price: "10,000",
    image: Kalinchowk,
  },
];

export default function Home() {
  return (
    <div className="home">
      <HeroSlider arrayActivity={arrayActivity} />
      <HomePackage arrayActivity={arrayActivity} packages={packages} />
      <TopDestination />
      <ActivitiesFilter arrayActivity={arrayActivity} packages={packages} />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );
}
