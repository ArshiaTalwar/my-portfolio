import {

  firebase,
  typescript,
  mongoDB,
  Git,
  Vite,
  java,
  TailwindCSS,
  react,
  Python,
  Javascript,
  powerbi,
  sql,
} from "../constants/Constant";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="EXPERIENCE p-2 mx-60 mb-10  font-['Poppins']  max-sm:p-2 max-sm:mx-5">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl ">
          SKILLS
        </h1>
        <div
          className="IMG grid place-content-center p-5 grid-cols-3 gap-4 max-sm:p-2 mt-10"
          data-aos="zoom-out-up"
        >
          {/* <Image img={HTML}></Image>
          <Image img={CSS}></Image> */}
          <Image img={react}></Image>
      
          <Image img={Python}></Image>
          <Image img={powerbi}></Image>
          <Image img={firebase}></Image>
          <Image img={sql}></Image>
          <Image img={java}></Image>
          <Image img={Javascript}></Image>
          <Image img={mongoDB}></Image>
          <Image img={Vite}></Image>
          <Image img={Git}></Image>
          <Image img={TailwindCSS}></Image>
          <Image img={typescript}></Image>
          
        </div>
      </section>
    </>
  );
};
export default Skills;
