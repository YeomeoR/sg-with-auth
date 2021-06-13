//email
import SendEmail from '../components/SendEmail';
//twitter
import tweet from '../images/iconmonstr-twitter-1-16.png'
//styles
import styled from 'styled-components';
import { StyledAbout } from '../styles';
//animations
import { motion } from 'framer-motion';
import { fade, pageAnimation, lineAnim } from '../animation';
import ScrollTop from '../components/ScrollTop';

//images
import lwarb from '../images/lwarb.png'

import nhs from '../images/NHS.png';
import pri from '../images/PRI logo_PNG.png';
import swale from '../images/swale-bc-logo.jpg';
import iema from '../images/IEMAfor_Web.jpg';
import kier from '../images/Kier_Group_logo.png';
import isg from '../images/isg.png';
import horizon from '../images/HorizonL_PNG.png'
import romania from '../images/romania.png';
import skanska from '../images/Skanska_logo.png';
import erm from '../images/ERM-logo.jpg';
import actuaries from '../images/Institute_and_Faculty_of_Actuaries_-_Logo.png';
import unicamb from '../images/university-of-cambridge-logo-2.png';
import ciria from '../images/ciria.png';
import arcadis from '../images/arcadis-logo.png';
import unisurrey from '../images/University_of_Surrey_logo.svg.png';
import uniKent from '../images/Kent UNi_Logo_.jpg';
import raiffeisen from '../images/raiffeisenbank.png';
import multiplex from '../images/multiplex.png';
import cfg from '../images/carbon-free-group.png';
import aecom from '../images/aecom_black.jpg';
import well from '../images/iwbi-logo-gray.png';
import cyber from '../images/Cyber Essentials Large.png';
import tower from '../images/tower-hamlets.png';
import upp from '../images/upp-logo1.gif';
import rail from '../images/networkrail (1).png';
import lednet from '../images/LEDNet .png'

const OurClients = () => {
  return (
    //styles

    <StyledClients
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
      <motion.h1 variants={fade}>Our Clients</motion.h1>
      <p>
        Square Gain has provided a range of sustainability related services for
        a wide range of clients, examples of which are shown below. Please see
        further details on our Services page and examples on our Projects page.
      </p>
      <motion.div variants={lineAnim} className="personnel-line" style={{background: '#E87AD0'}}></motion.div>
     
      <div className="project">
        <div className="container">
          <img className="co-logo" src={lwarb} alt="lwarb" />
          <img className="co-logo" src={tower} alt="tower" />
          <img className="co-logo" src={upp} alt="upp" />
          <img className="co-logo" src={rail} alt="netrail" />
          <img className="co-logo" src={isg} alt="isg" />
        </div>
        <div className="description">
          <p>
            "Square Gain has been instrumental in rolling out an extensive and
            ambitious environmental programme for all our construction people,
            as part of our commitment to having a positive impact. Their
            expertise and engaging style has resulted in excellent feedback and
            I would highly recommend Square Gain to help achieve high quality
            outcomes."
          </p>
          <p>
            <em>Eva Gkenakou, Multiplex</em>
          </p>
          <p>
            "Square Gain has been instrumental in rolling out an extensive and
            ambitious environmental programme for all our construction people,
            as part of our commitment to having a positive impact. Their
            expertise and engaging style has resulted in excellent feedback and
            I would highly recommend Square Gain to help achieve high quality
            outcomes."
          </p>
          <p>
            <em>Abdul Khan, London Borough of Tower Hamlets
</em>
          </p>
          <p>
          “Over the last year, we have engaged Square Gain to assist us with several discreate projects as part of our
climate and air quality workstreams. We are delighted with the way Square Gain has supported Swale and
how they we have engaged with the officers to encourage ownership and deliver positive outcomes that
have exceeded our expectations.”


          </p>
          <p>
            <em>Councillor Tim Valentine, Swale Borough Council</em>
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <div className="container">
          <img className="co-logo" src={nhs} alt="nhs" />
          <img className="co-logo" src={swale} alt="swale" />
          <img className="co-logo" src={horizon} alt="horizon" />
          <img className="co-logo" src={iema} alt="iema" />
          <img className="co-logo" src={kier} alt="kier" />
        </div>
        <div className="description">
          <p>
            "Square Gain has developed a new environmental and business
            management system, which has been certified to the furniture
            industry sustainability programme (FISP) standard and enabled us to
            gain FSC certification. This has improved our business performance,
            aligned us with client expectations and helped us become more
            profitable and more sustainable."
          </p>
          <p>
            <em>Nicola Murch, Director, Atmosphere Furniture</em>
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <div className="container">
          <img className="co-logo" src={raiffeisen} alt="bank" />
          <img className="co-logo" src={pri} alt="pri" />
          <img className="co-logo" src={multiplex} alt="multiplex" />
          <img className="co-logo" src={cfg} alt="cfg" />
          <img className="co-logo" src={aecom} alt="aecom" />
          <img className="co-logo" src={well} alt="well" />
        </div>
        <div className="description">
          <p>
            “We have enjoyed Square Gain's involvements with a series of low
            carbon building research projects and very much value the
            experience, expertise and insights that Square Gain brings.”​
          </p>
          <p>
            <em>
              Professor Alan Short, Head of School of Architecture, University of Cambridge
            </em>
          </p>

          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <div className="container">
          <img className="co-logo" src={skanska} alt="skanska" />
          <img className="co-logo" src={erm} alt="erm" />
          <img className="co-logo" src={actuaries} alt="actuaries" />
          <img className="co-logo" src={unicamb} alt="unicamb" />
          <img className="co-logo" src={romania} alt="romania" />
        </div>
        <div className="description">
          <p>
            “Square Gain ran entertaining and memorable sessions and gave
            students the chance to apply learned theory to practice of
            sustainability and business ethics. Student feedback was outstanding
            and we appreciate you taking time to help educate the next
            generation!”
          </p>
          <p>
            <em>Dr Joana Vassilopoulou, Kent Business School</em>
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <div className="container">
          <img className="co-logo" src={ciria} alt="ciria" />
          <img className="co-logo" src={arcadis} alt="arcadis" />
          <img className="co-logo" src={unisurrey} alt="unisurrey" />
          <img className="co-logo" src={uniKent} alt="uniKent" />
          <img className="co-logo" src={lednet} alt="lednet" />
        </div>
        <div className="description">
          <p>
            “Square Gain's experience and understanding led them to be selected
            to author PRI's ESG Risks in the Supply Chain guide, which provides
            a great opportunity to companies to understand and manage their
            exposure to supply chain extra-financial risks. Square Gain's
            experience and understanding led them to be selected to author PRI's
            ESG Risks in the Supply Chain guide, which provides a great
            opportunity to companies to understand and manage their exposure to
            supply chain extra-financial risks."
          </p>
          <p>
            <em>Archie Beeching, Head of Private Markets, Principals for Responsible Investment</em>
          </p>

          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>

      <div className="project" id="contact-section">
        <img className="co-logo" src={cyber} alt="cyber" />
        <h2>
          <span>Contact Us</span>
        </h2>

        <div className="description" >
          <p>
            <button onClick={SendEmail}>email</button> : (info@squaregain.co)
          </p>
          <p>
            <em>tel</em>: 07814 246 382
          </p>
          <p>
          <a href="https://twitter.com/Square_Gain" target="blank"><img id="tweet" src={tweet} alt="tweet"/>{' '}
             @square_gain</a>
          </p>
          <p>Address: 

Suite 004, Oakford House, 25 Orchard Drive,

Wye, Kent TN25 5AT, UK</p>
        </div>
      </div>
    </StyledClients>
  );
};

const StyledClients = styled(StyledAbout)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
p{
  font-size: 1.2rem;
}
  h1 {
    font-size: 4rem;
  }
  h2 {
    margin-left: 0;
    padding: 1.5rem 0;
    font-weight: lighter;
  }
  .personnel-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
 
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  .container {
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
 
    @media(max-width: 1024px){
      display: block;
    }
  }
  #contact-section p {
    padding: 10px;
  }
  .description {
    p {
      margin: 0 1rem;
      padding: 1.5rem 2rem;
      font-size: 1.2rem;
    }
  }
`;

export default OurClients;
