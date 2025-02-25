import React from "react";
import "./Salons.css";
import MuseNails from "../assets/MuseNails.jpg";
import SugarPolish from "../assets/SugarPolish.jpg";
import MandQ from "../assets/MandQ.jpg";
import CherryBlossomSalon from "../assets/CherryBlossomSalon.jpg";
import AdoreHairSalon from "../assets/AdoreHairSalon.jpg";
import SalonStudios from "../assets/SalonStudios.jpg";
import KelseyErin from "../assets/KelseyErin.jpg";
import Phenix from "../assets/Phenix.jpg";
import Boardroom from "../assets/Boardroom.jpg";
import SalonsbyJC from "../assets/SalonsbyJC.jpg";

const salonData = [
  {
    img: SalonsbyJC,
    title: "Salons by JC",
    subtitle: "Providing high-quality beauty services in a modern, luxurious environment.",
    link: "https://salonsbyjc.com/salon-services/"
  },
  {
    img: MuseNails,
    title: "MUSE Nails",
    subtitle: "Trendy and artistic nail designs for every occasion.",
    link: "https://nailmusebuckhead.com/wp-content/uploads/2024/09/Nail-Muse-Menu-2.pdf"
  },
  {
    img: AdoreHairSalon,
    title: "Adore Hair Salon",
    subtitle: "Expert stylists providing personalized services for all hair types.",
    link: "https://adoresaloncorvallis.com/beauty-hair-salon-services/"
  },
  {
    img: SugarPolish,
    title: "Sugar Polish\n Nail Bar",
    subtitle: "Sweet and luxurious nail treatments to pamper you.",
    link: "https://www.sugarpolish.com/services"
  },
  {
    img: CherryBlossomSalon,
    title: "Cherry Blossom Salon",
    subtitle: "Bringing beauty and tranquility through professional salon services.",
    link: "https://thecherryblossomsalon.com/hair-services/"
  },
  {
    img: SalonStudios,
    title: "Salon Studios\n Beauty Mall",
    subtitle: "Unique beauty experiences tailored to your personal style.",
    link: "https://www.salonstudios.com/specialists?select_location=&select_services=&page=1"
  },
  {
    img: Phenix,
    title: "Phenix Salon Suites",
    subtitle: "A wide variety of beauty and wellness services in one place.",
    link: "https://phenixsalonsuites.com/own-your-own-suite/"
  },
  {
    img: MandQ,
    title: "Melrose & McQueen",
    subtitle: "Relaxing ocean-inspired nail services for a perfect escape.",
    link: "https://www.melroseandmcqueen.com/services"
  },
  {
    img: Boardroom,
    title: "Boardroom\n Salon for Men",
    subtitle: "Exclusive salon services designed for the modern man.",
    link: "https://davecuts.net/mens-haircuts-2/"
  },
  {
    img: KelseyErin,
    title: "Kelsey Erin",
    subtitle: "Specializing in luxurious hair and beauty services to make you feel fabulous.",
    link: "https://www.kelseyerinsalon.com/services-3"
  }
];

const Salons = () => {
  return (
    <div>
      <div className="title">Salon & Nail Favorites</div>
      
      <div className="cards-container">
        {salonData.map((salon, index) => (
          <div className="card" key={index}>
            <img className='card-img' src={salon.img} alt={`Image of ${salon.title}`} />
            <div className="card-title">{salon.title}</div>
            <div className="card-subtitle">{salon.subtitle}</div>
            <a className="card-button" href={salon.link} target="_blank" rel="noopener noreferrer">
              View Services
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Salons;