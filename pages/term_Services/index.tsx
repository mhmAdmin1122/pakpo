import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from '../components/Layout'
import Head from 'next/head';

const TermServices = () => {

  useEffect(() => {
    AOS.init({
      // Customize AOS options here (easing, duration, etc.)
    });
  }, []);

  return (
    <>
      <Head>
        <title>DevPak || Terms & Conditions</title>
      </Head>
      <Layout>
        <h1 className='text-center my-4 text-3xl font-bold'><b className='text-green-700'>DevPak</b> Terms & Conditions of Use</h1>
        <div className="mainBox-TServices px-32">

          <div className="ts-boxes-cont termBox">
            <h2>1. Terms</h2>

            <p>
              By accessing this Website, accessible from www.devpak.tech, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.
            </p>
          </div>

          <div className="ts-boxes-cont licenseBox bg-gray-800 text-white" data-aos="zoom-out" data-aos-duration="2000">
            <h2>2. Use License</h2>

            <p>
              Permission is granted to temporarily download one copy of the materials on DevPak{"'"}s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>

            <ul className='list-disc px-4 my-4'>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose or for any public display;</li>
              <li>attempt to reverse engineer any software contained on DevPak{"'"}s Website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transferring the materials to another person or {"mirror"} the materials on any other server.</li>
            </ul>

            <p>
              This will let DevPak to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. These Terms of Service has been created with the help of the <a href="https://www.termsofservicegenerator.net">Terms Of Service Generator</a>.
            </p>
          </div>

          <div className="ts-boxes-cont Limitations" data-aos="zoom-in-down" data-aos-duration="2000">
            <h2>4. Limitations</h2>

            <p>
              DevPak or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on DevPak{"'"}s Website, even if DevPak or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.
            </p>
          </div>

          <div className="ts-boxes-cont Revisions_Errata bg-gray-800 text-white" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <h2>5. Revisions and Errata</h2>

            <p>
              The materials appearing on DevPak{"'"}s Website may include technical, typographical, or photographic errors. DevPak will not promise that any of the materials in this Website are accurate, complete, or current. DevPak may change the materials contained on its Website at any time without notice. DevPak does not make any commitment to update the materials.
            </p>
          </div>

          <div className="ts-boxes-cont linkBox" data-aos="fade-up" data-aos-duration="3000">
            <h2>6. Links</h2>

            <p>
              DevPak has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by DevPak of the site. The use of any linked website is at the user{"'"}s own risk.
            </p>
          </div>

          <div className="ts-boxes-cont termsandModification bg-gray-800 text-white" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
            <h2>7. Site Terms of Use Modifications</h2>

            <p>
              DevPak may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
            </p>
          </div>

          <div className="ts-boxes-cont governingLaw-box mb-5">
            <h2>9. Governing Law</h2>

            <p>
              Any claim related to DevPak{"'"}s Website shall be governed by the laws of pk without regards to its conflict of law provisions.
            </p>
          </div>

        </div>
      </Layout>
    </>
  )
}

export default TermServices;