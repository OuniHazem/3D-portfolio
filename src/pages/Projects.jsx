import React from "react";
import { Link } from "react-router-dom";
import { CTA } from "../components";
import { diplomas, certificates } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <>
      <section className='max-container my-6'> {/* Adjusted margin class from 'my-12' to 'my-6' */}
        <h1 className='head-text'>
          My{" "}
          <span className='blue-gradient_text drop-shadow font-semibold'>
            Diplomas
          </span>
        </h1>

        <div className='flex flex-wrap my-12 gap-16'>
          {diplomas.map((diploma) => (
            <div className='lg:w-[400px] w-full' key={diploma.name}>
              <div className='block-container w-full h-80'>
                <div className='rounded-xl flex justify-center items-center'>
                  <img
                    src={diploma.imageUrl}
                    alt={diploma.name}
                    className='w-full h-full object-contain'
                  />
                </div>
              </div>

              <div className='mt-5 flex flex-col'>
                <h4 className='text-2xl font-poppins font-semibold'>
                  {diploma.name}
                </h4>
                <p className='mt-2 text-slate-500'>{diploma.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='max-container my-12'>
        <h1 className='head-text'>
          My{" "}
          <span className='blue-gradient_text drop-shadow font-semibold'>
            Certificates
          </span>
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {certificates.map((certificate) => (
            <div className='w-full flex flex-col' key={certificate.name}>
              <div className='block-container w-full h-80'>
                <div className='rounded-xl flex justify-center items-center'>
                  <img
                    src={certificate.imageUrl}
                    alt={certificate.name}
                    className='w-full h-full object-contain'
                  />
                </div>
              </div>

              <div className='mt-20 flex flex-col items-center'>
                <h4 className='text-2xl font-poppins font-semibold text-center'>
                  {certificate.name}
                </h4>
                <p className='mt-2 text-slate-500 text-center'>{certificate.description}</p>
              </div>
            </div>
          ))}
        </div>
       
        <hr className='border-slate-200' />
        <CTA />
      </section>

    </>
  );
};

export default Projects;
