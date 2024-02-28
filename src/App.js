import "./App.css";
import logo from "./assets/logo.png";
import trophy from "./assets/1.png";
import awardee from "./assets/2.png";
import services from "./assets/3.png";
import { FaFacebook } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { IoIosCall } from "react-icons/io";

function App() {
  return (
    <div className="App">
      {/* LOGO IMAGE */}
      <div className="logo">
        <img id="logoImg" src={logo} alt="logoImg" />
      </div>

      {/* AWARD AND AWARDEE SECTION */}
      <div className="about">
        <div className="leftPart">
          <img id="trophyImg" src={trophy} alt="trophyImg" />
        </div>
        <div className="rightPart">
          <h4>
            C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2019 for the
            4th time.
          </h4>
          <ul>
            <li>
              C.R.I's energy efficient products are well recognized by varoius
              Government Institutions, as trustworth products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img id="awardeeImg" src={awardee} alt="awardeeImg" />
          <p>
            Government of India has awarded the{" "}
            <b>"National Energy Conservation Award 2018".</b> Mr. G. Selvaraj,
            joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha of Lok Sabha & Shri. Raj Kumar
            Singh, Honorable Minister of State.
          </p>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="services">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img id="serviceImg" src={services} alt="servicesImg" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>

      <hr color="red" />

      {/* SEGMENTS SECTION */}
      <div className="segments">
        <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        <p>
          CHEMICALS & PROCESS | POWER | WATER & WASTER WATER | OILS & GAS |
          PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE |
          METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR
          | BUILDING | HAVC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL
        </p>
      </div>

      {/* FOOTER */}
      <div className="contact">
        <p>
          <IoIosCall />
          Toll free 1800 200 1234
        </p>
        <p>
          <FaFacebook />
          www.facebook.com/cripumps
        </p>
        <p>
          <IoIosGlobe />
          www.crigroups.com
        </p>
      </div>
    </div>
  );
}

export default App;
