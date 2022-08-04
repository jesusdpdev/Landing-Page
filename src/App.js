import './App.css';
import travel_01 from "./assets/travel-01.jpg";
import travel_02 from "./assets/travel-02.jpg";
import travel_03 from "./assets/travel-03.jpg";
import Hero from "./components folder/hero.js";
import Slider from "./components folder/slider.js";
import Navbar from "./components folder/navbar.js";


const navbarLinks = [
  { url: "#", title: "Home" },
  { url: "#", title: "Trips" },
  { url: "#", title: "Rewards" },
];


function App() {
  return ( 
    <div className='App'>
    <Navbar navbarLinks={navbarLinks} />
    <Hero imageSrc={travel_01} />
    <Slider
     imageSrc={travel_02} 
    title={"Be an explorer!"} 
    subtitle={"out plataform offers a wide variaty of unique travel location"
    } 
    />

    <Slider 
    imageSrc={travel_03}
    title={"Memories for a lifetime!"}
    subtitle={"Your dress vacations is only a few clicks away."}
    flipped={true}
     />
  </div>
   );
  } 

export default App;
