import React from "react";
import Landing from "../Components/Landing";
import Card from "../Components/Card";
import Divisi2 from "../Components/Divisi";
import Footer from "../Components/Footer";
import Cardprofile from "../Components/Cardprofile";
import Cardlaut from "../Components/Cardlaut";

export default function Divisi() {
  function getRandomDelay(min, max) {
    const step = 50; // Langkah kelipatan
    const randomMultiplier =
      Math.floor(Math.random() * (max / step - min / step + 1)) + min / step;
    return randomMultiplier * step;
  }
  function getRandomAnimation() {
    const animations = ["fade-up", "fade-down", "fade-left", "fade-right"];
    return animations[Math.floor(Math.random() * animations.length)];
  }
  return (
    <div>
      <Landing
        judul="Biro Riset Pengembangan"
        subjudul="Ormawa Eksekutif PKU 2024/2025"
        subjudul2="Kabinet Samudra Wirakarsa"
      ></Landing>

      <Divisi2 link="#proker"></Divisi2>

      <div className="flex flex-col mt-6" id="proker">
        <h1
          className="pb-3 bg-clip-text text-transparent inline-block mx-auto
                text-center font-bold text-6xl bg-gradient-to-tr from-sky-800 to-cyan-400"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Proker Biro Riset Pengembangan
        </h1>
        <div className="flex flex-wrap justify-center gap-4 py-10 px-5">
          <Cardlaut delay={0}></Cardlaut>
          <Cardlaut delay={50}></Cardlaut>
          <Cardlaut delay={100}></Cardlaut>
          <Cardlaut delay={0}></Cardlaut>
          <Cardlaut delay={50}></Cardlaut>
          <Cardlaut delay={100}></Cardlaut>
        </div>
      </div>

      <div className="p-5">
        <div className="flex flex-col">
          <h1
            className="pb-4 bg-clip-text text-transparent inline-block mx-auto
                text-center font-bold text-7xl bg-gradient-to-l from-sky-900 to-cyan-400"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            BPH dan Staf
          </h1>
          <div
            id=""
            className="bg-gradient-to-tr from-cyan-400 to-sky-700 flex justify-between p-6 gap-8 flex-wrap rounded-lg"
          >
            <Cardprofile
              delay={getRandomDelay(0, 500)}
              transition={getRandomAnimation()}
            ></Cardprofile>
            <Cardprofile
              delay={getRandomDelay(0, 500)}
              transition={getRandomAnimation()}
            ></Cardprofile>
            <Cardprofile
              delay={getRandomDelay(0, 500)}
              transition={getRandomAnimation()}
            ></Cardprofile>
            <Cardprofile
              delay={getRandomDelay(0, 500)}
              transition={getRandomAnimation()}
            ></Cardprofile>
            <Cardprofile
              delay={getRandomDelay(0, 500)}
              transition={getRandomAnimation()}
            ></Cardprofile>
            <Cardprofile
              delay={getRandomDelay(0, 500)}
              transition={getRandomAnimation()}
            ></Cardprofile>
            <Cardprofile
              delay={getRandomDelay(0, 500)}
              transition={getRandomAnimation()}
            ></Cardprofile>
            <Cardprofile
              delay={getRandomDelay(0, 500)}
              transition={getRandomAnimation()}
            ></Cardprofile>
            <Cardprofile
              delay={getRandomDelay(0, 500)}
              transition={getRandomAnimation()}
            ></Cardprofile>
            <Cardprofile
              delay={getRandomDelay(0, 500)}
              transition={getRandomAnimation()}
            ></Cardprofile>
            <Cardprofile
              delay={getRandomDelay(0, 500)}
              transition={getRandomAnimation()}
            ></Cardprofile>
            <Cardprofile
              delay={getRandomDelay(0, 500)}
              transition={getRandomAnimation()}
            ></Cardprofile>
            <Cardprofile
              delay={getRandomDelay(0, 500)}
              transition={getRandomAnimation()}
            ></Cardprofile>
            <Cardprofile
              delay={getRandomDelay(0, 500)}
              transition={getRandomAnimation()}
            ></Cardprofile>
            <Cardprofile
              delay={getRandomDelay(0, 500)}
              transition={getRandomAnimation()}
            ></Cardprofile>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
