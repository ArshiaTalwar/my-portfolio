import Project_prop from "./Project_prop.jsx";
import {
 
  shedetects,yapnest,food
  
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  
  
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiFirebase,
  SiPandas,
  SiTensorflow,
  SiGooglecolab,
  SiKeras
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="Food Delivery Website"
            para="Built a fully functional food delivery platform with user authentication, menu browsing, and dynamic cart functionality."
            img={food}
            link=""
            github_link="https://github.com/ArshiaTalwar/Food_Delivery"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            mongodb={
              <Tooltip title="MongoDB" arrow>
                <IconButton>
                  <SiMongodb className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            nodejs={
              <Tooltip title="nodejs" arrow>
                <IconButton>
                  <SiNodedotjs className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            express={
              <Tooltip title="express" arrow>
                <IconButton>
                  <SiExpress className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="YapNest"
            para="A user-friendly blogging webiste multimedia support with secure authentication"
            img={yapnest}
            link=""
            github_link="https://github.com/ArshiaTalwar/YapNest"
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            firebase={
              <Tooltip title="Firebase" arrow>
                <IconButton>
                  <SiFirebase className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="SheDetects"
            para="Developed a deep learning model using transfer learning with ResNet50 to classify breast cancer from histopathology images."
            img={shedetects}
            link=""
            github_link="https://github.com/ArshiaTalwar/SheDetects/tree/main"
            pandas={
              <Tooltip title="Pandas" arrow>
                <IconButton>
                  <SiPandas className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tensor={
              <Tooltip title="tensorflow" arrow>
                <IconButton>
                  <SiTensorflow className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            googlecolab={
              <Tooltip title="Google Colab" arrow>
                <IconButton>
                  <SiGooglecolab className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            keras={
              <Tooltip title="keras" arrow>
                <IconButton>
                  <SiKeras className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            
          />
          
           
         
           
        </div>
      </div>
    </section>
  );
};
export default Projects;
