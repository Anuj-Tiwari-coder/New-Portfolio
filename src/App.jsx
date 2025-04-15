import React, { useEffect, useState } from 'react';
import { Toaster } from "react-hot-toast";
import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Navbar,
  ProjectDetails,
  Projects,
  Skills,
} from "./components/export";
import Preloader from "./components/Preloader/Preloader";


const App = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [screenLoading, setScreenLoading] = useState(true);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      document.getElementById("pre-loader").classList.add("hidden");
      setScreenLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {screenLoading ? (
        <Preloader />
      ) : (
        <div className="container">
          <Navbar />
          <About />
          <Skills />
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Experience />
          <Education />
          <Contact />
          <Footer />

          <Toaster />

          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </div>
      )}
    </>
  );
};

export default App;
