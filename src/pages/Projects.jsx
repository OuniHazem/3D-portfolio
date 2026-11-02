import { CTA } from "../components";
import { diplomas, certificates } from "../constants";

const Projects = () => {
  return (
    <>
      <section className='max-container my-6'>
        <h1 className='head-text'>
          My{" "}
          <span className='blue-gradient_text drop-shadow font-semibold'>
            Diplomas
          </span>
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 my-12 gap-12'>
          {diplomas.map((diploma) => (
            <div className='w-full rounded-xl border border-slate-200 p-6' key={diploma.name}>
              <h2 className='text-2xl font-poppins font-semibold'>
                {diploma.name}
              </h2>
              <p className='mt-2 text-slate-500'>{diploma.description}</p>
              <p lang='fr' className='mt-4 text-sm font-medium text-slate-600'>
                Justificatif disponible sur demande.
              </p>
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

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-12'>
          {certificates.map((certificate) => (
            <div className='w-full rounded-xl border border-slate-200 p-6' key={certificate.name}>
              <h2 className='text-2xl font-poppins font-semibold'>
                {certificate.name}
              </h2>
              <p className='mt-2 text-slate-500'>{certificate.description}</p>
              <p lang='fr' className='mt-4 text-sm font-medium text-slate-600'>
                Justificatif disponible sur demande.
              </p>
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
