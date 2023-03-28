import React from "react";

//Icons
import { BsArrowUpRight } from "react-icons/bs";

//MOtion
import { motion } from "framer-motion";

//varians
import { fadeIn } from "../variants";

//Services data
const services = [
  {
    name: "E-Commerce",
    description:
      "Tienda virtual que cuenta con interfaces para clientes como administrador, dando la posibilidad de gestionar dicha tienda.",
    link: "https://github.com/nahuelvera00/Frontend-E-commerce-v2",
  },
  {
    name: "Exam Portal",
    description:
      "Pagina web para poder realizar examenes, los mismos estan estan divididos por categorias. Este cuenta con un panel de administrador para poderla gestionar.",
    link: "https://github.com/nahuelvera00/ExamPortal-FrontEnd",
  },
  {
    name: "Up Task",
    description:
      "Pagina web en la cual podemos gestionar nuestras tareas, crear grupos y agregar miembros, designarles tareas y mas...",
    link: "https://github.com/nahuelvera00/UpTask_FrontEnd",
  },
  {
    name: "Agencia de Viajes",
    description:
      "Pagina web que muestra viajes disponibles, con sus reseñas y permite crear nuevas. Su interfaz es generada desde el Backend.",
    link: "https://github.com/nahuelvera00/AgenciaViajes",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What i Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">My latest projects</h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>

          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            {/* Services list */}
            <div>
              {services.map((service, index) => {
                //destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end ml-3">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href={link}
                        target={"_blank"}
                        className="text-gradient text-sm "
                      >
                        Learn Code.
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
