import { useEffect } from "react";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

export default function LandingPage() {
  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
  };

  return (
    <div className="relative bg-white text-black">
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-white text-center">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/images/am_seguridad.mp4" type="video/mp4" />
        </video>
        <Image src="/images/carbologo.svg" alt="Logo" width={100} height={100} className="absolute top-5 left-5 z-20 w-[300px] h-[100px] " />
        <div className="relative z-20">
          <h1 className="text-5xl mb-4">VOTRE SPÉCIALISTE EN PROTECTION, SURVEILLANCE ET SÉCURITÉ</h1>
          <h2 className="text-2xl mb-4">Nous nous soucions de ce qui vous tient à cœur</h2>
          <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-700 rounded">demander un devis</button>
        </div>
      </section>

      <section id="section1" className="py-5 text-center flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 p-4">
          <p className="mb-4">De la sécurité lors d'événements à la protection de tous types d'installations partout en France, notre engagement est de garantir une sécurité adaptée aux besoins de chaque service. Nous proposons des solutions rapides, efficaces et centrées sur les personnes.</p>
          <p className="mb-4">Sécurité lors d'événements Nous nous soucions de surveiller et de garantir la sécurité de chaque célébration ou événement, en mettant à la disposition de l'organisation toute notre expérience et les mécanismes disponibles.</p>
          <p className="mb-4">Notre maxime est la prévention de tout risque et une attention personnelle, tant aux utilisateurs qu'au client. Des fêtes aux compétitions, nous veillerons à ce que tout se passe bien.</p>
        </div>
        <div className="md:w-1/2 p-4">
          <Image src="/images/seccion1.png" alt="Section 1" width={600} height={400} className="mx-auto" />
        </div>
      </section>

      <section id="section2" className="py-20 text-center">
        <h2 className="text-3xl mb-4 text-[#004AAD] font-bold ">DES CLIENTS QUI ONT CONFIÉ EN SÉCURITÉ CARBOSECURITY</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-1/2 sm:w-1/3 md:w-1/5 p-2">
            <Image src="/images/image1.png" alt="Client 1" width={200} height={200} className="mx-auto" />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/5 p-2">
            <Image src="/images/image2.png" alt="Client 2" width={200} height={200} className="mx-auto" />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/5 p-2">
            <Image src="/images/image3.png" alt="Client 3" width={200} height={200} className="mx-auto" />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/5 p-2">
            <Image src="/images/image4.png" alt="Client 4" width={200} height={200} className="mx-auto" />
          </div>
          <div className="w-1/2 sm:w-1/3 md:w-1/5 p-2">
            <Image src="/images/image5.png" alt="Client 5" width={200} height={200} className="mx-auto" />
          </div>
        </div>
      </section>

      <section id="section3" className="relative h-screen text-center">
        <Image src="/images/fondo1.jpg" alt="Background" layout="fill" objectFit="cover" className="absolute inset-0 z-0" />
        <div className="absolute max-w-[300px] top-5 left-5 bg-blue-500 text-white p-4 md:p-8 z-10">
          <h2 className="text-3xl mb-4">Centre opérationnel 24H/24 </h2>
          <p className="mb-4"> La permanence téléphonique de notre centre opérationnel de sécurité est à votre écoute 7j/7 - 24h/24 pour toute demande  +33 7 73 02 42 41  Help Desk.</p>
        </div>
      </section>

      <section id="section4" className="relative h-screen text-center">
        <Image src="/images/fondo1.jpg" alt="Background" layout="fill" objectFit="cover" className="absolute inset-0 z-0" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full w-full">
          <div className="md:w-1/2 h-full">
            <Image src="/images/banner1.jpg" alt="Section 4" width={600} height={400} className="h-full w-full object-cover" />
          </div>
          <div className="md:w-1/2 h-full bg-white text-black flex flex-col justify-center p-8">
            <p className="mb-4"><strong className="text-[#004AAD] ">Carbosecurity</strong> est une société de sécurité privée française avec l’activité de gardiennage et surveillance au travers d’agents qualifiés, appartenant au groupe DNI, acteur majeur dans l’ingénierie pétrolière forte d’une expérience de plus de quarante ans d’existence et une présence à l’international sur les quatre continents.</p>
            <h2 className="text-3xl mb-4 text-[#004AAD]">L'agent de sécurité</h2>
            <p className="mb-4">Nos agents de sécurité et de gardiennage CarboSecurity sont formés et qualifiés pour la protection des biens et des personnes, ainsi qu’au bon fonctionnement des sites et implantations dont ils doivent assurer la sécurité et le gardiennage.</p>
          </div>
        </div>
      </section>

      <section id="section5" className="relative h-screen text-center">
        <Image src="/images/fondo1.jpg" alt="Background" layout="fill" objectFit="cover" className="absolute inset-0 z-0" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full w-full">
          <div className="md:w-1/2 h-full bg-blue-500 text-white flex flex-col justify-center p-8">
            <p className="mb-4">contrôle et la sécurité des participants, aussi bien pour les exposants que le public présent afin de promouvoir le bon fonctionnement et déroulement des évènements depuis la mise en place au démontage des installations ou décors scénographiques.</p>
            <p className="mb-4">Notre domaine d’intervention et expertise est présent pour toute manifestation artistique ou culturelle comme les expositions, défilés de mode, concerts de musique indoor (Salle) & outdoor (festivals en plein air), soirées étudiantes ou évènements religieux.</p>
          </div>
          <div className="md:w-1/2 h-full">
            <Image src="/images/banner2.jpg" alt="Section 4" width={600} height={400} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section id="section6" className="relative h-screen text-center">
        <Image src="/images/fondo1.jpg" alt="Background" layout="fill" objectFit="cover" className="absolute inset-0 z-0" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full w-full">
          <div className="md:w-1/2 h-full">
            <Image src="/images/banner3.jpg" alt="Section 4" width={600} height={400} className="h-full w-full object-cover" />
          </div>
          <div className="md:w-1/2 h-full bg-blue-500 text-white flex flex-col justify-center p-8">
            <h2 className="text-3xl mb-4">Nos secteurs d’activités</h2>
            <ul className="list-disc list-inside text-left mx-auto">
              <li className="mb-2">Sécurité et gardiennage de chantier.</li>
              <li className="mb-2">Sécurité de la grande distribution.</li>
              <li className="mb-2">Sécurité de galeries commerciales.</li>
              <li className="mb-2">Sécurité secteur tertiaire – sièges sociaux.</li>
              <li className="mb-2">Sécurité événementiel – Luxe & Sport.</li>
              <li className="mb-2">Sécurité du secteur hôtelier.</li>
              <li className="mb-2">Gardiennage de plateformes logistique.</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="relative h-screen text-center bg-white">
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full p-8">
          <h2 className="text-3xl mb-4 text-[#004AAD] font-bold"> DEMANDER UN DEVIS</h2>
          <div className="flex flex-col md:flex-row items-center justify-center w-full">
            <div className="md:w-1/2 p-4">
              
            <div className="mb-4">
            <p className="mb-4 text-justify">Chez CARBONASECURITY nous réalisons une étude détaillée et entièrement personnalisée des besoins de sécurité spécifiques requis par votre célébration, événement ou situation particulière.</p>
            <p className="mb-4 text-justify">Si vous le souhaitez, nous préparerons un budget basé sur les besoins de votre entreprise, sans aucun type d'engagement et en moins de 24 heures vous pourrez l'avoir entre vos mains pour l'étudier attentivement.</p>
            </div>
              
              <h3 className="text-2xl mb-4 text-[#004AAD] font-bold">VOUS POUVEZ NOUS CONTACTER AU</h3>
              <div className="flex flex-col justify-center mb-4">
                <div className="flex items-center mx-2 text-[#004AAD]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                  <span>+33 6 08 01 24 87   Info.</span>
                </div>
                <div className="flex items-center mx-2 text-[#004AAD]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <span>contact@carbosecurity.com</span>
                </div>
              </div>
              <h3 className="text-2xl mb-4 text-[#004AAD] font-bold">OU NOUS VISITER</h3>
              
              <div className="flex flex-col justify-start">
                
                <div className="flex items-start ">
                  <span className="text-black font-semibold">Siège social :</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-[#004AAD]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span className="font-semibold text-[#004AAD]">29, place de la République, 72600 Mamers-France</span>
                </div>


                <div className="flex items-start ">
                  <div className="text-black font-semibold">Ventes et formation:</div>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-[#004AAD]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>

                  <div className="font-semibold text-[#004AAD]">173 rue de Charenton 75012 Paris - France</div>
                </div>


              </div>

            </div>
            <div className="md:w-1/2 p-4">
            <iframe
  width="540"
  height="305"
  src="https://sibforms.com/serve/MUIFAMAWyL_2Hq5SNuqb3lfEZaDngVPZk3pi2DB82AU6JCxxN4eoMs3-x0dB55ew602EkLZlyqWlmIHIyVq7ogxIkj2W-4aa9M1A8rl8yG4E5bzeTj5I73o1KBlrD2vSPPLoNs5z29MBYPfDZMHcY_0tGRltJEyNaJ2iwBtwHZQrCGUrgO6AIPHokIFW1x70WioY193DlcY4yrn6"
  frameBorder="0"
  scrolling="auto"
  allowFullScreen
  style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
></iframe>
            </div>
          </div>
          <div className="flex flex-col justify-between w-full mt-8">
            <div className="flex items-center justify-center gap-2 bg-[#345073] p-2 text-white">
              <p>Mentions légales - Politique de confidentialité - Système de gestion intégré - Vous souhaitez travailler avec nous ?</p>
              <button className="flex rounded-md bg-green-600 hover:bg-emerald-700 text-white p-2">Envoyez votre CV</button>
            </div>
      <div className="flex items-start justify-start text-[#004AAD]">
        <p>CARBOSECURITY est une marque appartenant à l’entreprise CARBONAPH R&D (N°905146791 RCS Le Mans) et enregistré au près du CNAPS, Conseil national des activités privées de sécurité Établissement public sous tutelle du Ministère de l'Intérieur sous le numéro d’agrément suivant : 069-2024-03-27-2024052409.</p>
      </div>
    </div>
  </div>
</footer>

      <button className="fixed bottom-5 right-5 p-3 bg-gray-100 hover:bg-gray-400 text-white rounded-full z-50" onClick={scrollToTop}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 2l-10 10h6v10h8v-10h6z" />
        </svg>
      </button>
    </div>
  );
}