//contact
import SendEmail from '../components/SendEmail';
//animation
// import { fade } from '../animation'
import { AnimateSharedLayout } from 'framer-motion';
//state and Toggle
// import Toggle from '../components/Toggle';
//images and icons
// import icons
import weather from '../images/iconmonstr-weather-91-48 (1).png';
import finance from '../images/iconmonstr-currency-10-32.png';
import infrastructure from '../images/iconmonstr-networking-2-48 (1).png';
import responsibility from '../images/iconmonstr-clipboard-11-32.png';
import environmental from '../images/iconmonstr-tree-5-32.png';
import supply from '../images/iconmonstr-link-1-32.png';
import wellbeing from '../images/iconmonstr-home-10-32.png';
import building from '../images/iconmonstr-construction-10-32.png';
//images
// import millennium from '../images/pexels-pixabay-220769.jpg';
// import blur from '../images/pexels-negative-space-6618 (1).jpg';
// import towerBridge from '../images/pexels-chris-schippers-427679.jpg';
// import wheel from '../images/pexels-bill-emrich-230794.jpg'
import cyber from '../images/Cyber Essentials Large.png';
//animation
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import ScrollTop from '../components/ScrollTop';
import Toggle2 from '../ToggleServices';
// styles
import styled from 'styled-components';
import { StyledAbout } from '../styles';

const Services2 = () => {
  return (
    <StyledPersonnel variants={pageAnimation} initial="hidden" animate="show">
      <ScrollTop />
      <AnimateSharedLayout>
        <motion.h2>
          <h1>What we excel at...</h1>
        </motion.h2>

        <div className="personnel-line"></div>
        <div>
          <motion.h5>
            <span>Climate Emergency and Carbon</span>
          </motion.h5>
          <div>
            <Toggle2 title="Climate Emergency and Carbon">
              <div>
                <br></br>
                <br></br>
                <img layout src={weather} alt="weather" />
                <p>
                  Assisting local councils to develop and implement robust
                  action plans, in response to their declarations of climate and
                  ecological emergency, Square Gain provides technical and
                  commercial support to implement practical actions accross
                  buildings, transport, procurement waste and other high
                  intensity areas. Services include: Carbon benchmarking Priory
                  setting Programme development Implementation Training
                  (in-person, remotely and via e-learning) Monitoring and
                  communication To access free introductory e-learning visit:
                  www.ClimateCrisisAction.com
                </p>
              </div>
            </Toggle2>
          </div>
        </div>
        <div>
          <motion.h5>
            <span>Sustainability and Environmental Management Systems</span>
          </motion.h5>

          <div>
            <Toggle2>
              <div>
                <br></br> <br></br>
                <img layout src={environmental} alt="environmental" />
                <p>
                  {' '}
                  Strategy development and due diligence Carbon Management
                  Strategy and Planning Company corporate responsibility
                  reporting to meet investor ESG requirements (including TCFD)
                  Development and improvement of Environmental Management
                  Systems - to ensure practical, simple and in-line with
                  certifications including ISO 14001, ISO45001, BS8555 Audit and
                  verification services Sustainable building and infrastructure
                  certification, including: BREEAM, HQM, CEEQUAL, Envision
                  Training - bespoke in-house and public courses eLearning -
                  development of bespoke solutions, using a variety of delivery
                  platforms including Articulate Storyline and Litmos.
                </p>
              </div>
            </Toggle2>
          </div>
        </div>
        <div>
          <motion.h5>
            <span>Zero Carbon and Green Buildings</span>
          </motion.h5>
          <div>
            <Toggle2>
              <div>
                <br></br> <br></br>
                <img layout src={building} alt="building" />
                <p>
                  Working with our partner the Carbon Free Group, we provide
                  ultra-low and zero carbon buildings. Services range from
                  consultancy support, through to design, sourcing innovative
                  supply-chain companies, and full turnkey solutions. Experience
                  includes exemplar sustainability and innovation on over 500
                  retail, education, public, commercial and residential
                  buildings. Other services include: Green building cost
                  consulting and life cycle cost analysis Sustainability
                  masterplanning Technology due-diligence BREEAM SKA Home
                  Quality Mark (HQM).
                </p>
              </div>
            </Toggle2>
          </div>
          {/* <img className="contained" src={wheel} alt="wheel"/> */}
        </div>
        <div>
          <motion.h5>
            <span>Supply-Chain Risk Management</span>
          </motion.h5>

          <div>
            <Toggle2>
              <div>
                <br></br>
                <br></br>
                <img layout src={supply} alt="supply" />
                <p>
                Supply chains are often opaque. We have significant experience working with investors, multinationals and 
their supply chains and have worked on this issue with (amongst others) UN Principles for Responsible 
Investment and the Chartered Institute for Purchase and Supply. 
Specific services include:<br></br>
● ESG (Environmental, Social and Governance) investor & multi-national supply-chain engagement strategy 
and implementation. <br></br>
● TCFD assistance (Taskforce on Financial Related Climate Disclosure) for both companies and investors.
Sustainable Development Goals (SDGs) - materiality and supply-chain risk assessment 
                </p>
              </div>
            </Toggle2>
          </div>
        </div>
        <div>
          <motion.h5>
            <span>Sustainable Finance</span>
          </motion.h5>

          <div>
            <Toggle2>
              <div>
                <br></br> <br></br>
                <img layout src={finance} alt="finance" />
                <p>
                  Sustainable finance seeks to improve environment, social and
                  governance issues whilst also making a healthy financial
                  return. Square Gain services include: Support on reporting,
                  including climate related financial disclosure aligned with
                  the requirements of TCFD (Taskforce on Financial Related
                  Climate Disclosure) Action-orientated support to enhance
                  positive performance and disclosure on financial and ESG
                  (Environmental, Social and Governance) issues. Consultancy
                  support on sustainable finance and commercial awareness
                  Capacity-building training, on sustainable finance and
                  commercial awareness. Tailored for environment and
                  sustainability professionals. This has been provided to
                  leading consultancies including Matt MacDonald, ERM, AECOM,
                  EBRD and with other large organisations such as Network Rail.
                  Contact us for a free Sustainable Finance overview download.
                  
                </p>
              </div>
            </Toggle2>
          </div>
        </div>
        <div>
          <motion.h5>
            <span>Corporate Responsibility, Risk Management and Reporting</span>
          </motion.h5>

          <div>
            <Toggle2>
              <div>
                <br></br> <br></br>
                <img layout src={responsibility} alt="responsibility" />
                <p>
                  Sustainability strategy, and planning Implementation support
                  Environmental training & awareness Risk and Value auditing,
                  including environmental, social and governance issues, and
                  business ethics Reporting
                </p>
              </div>
            </Toggle2>
          </div>
        </div>
        <div className="person">
          <motion.h5>
            <span>Wellbeing</span>
          </motion.h5>

          <div>
            <Toggle2>
              <div>
                <br></br> <br></br>
                <img layout src={wellbeing} alt="wellbeing" />
                <p>
                  WELL Building Standard: WELL AP (accredited professional)
                  services RESET indoor air quality (IAQ) monitoring and
                  benchmarking Training & capacity building of what is entailed
                  with the WELL Building Standard, best practices and common
                  pitfalls.
                </p>
              </div>
            </Toggle2>
          </div>
        </div>
        <div>
          <motion.h5>
            <span>Sustainable Infrastructure</span>
          </motion.h5>

          <div>
            <Toggle2>
              <div c>
                <br></br>
                <br></br>
                <img layout src={infrastructure} alt="infrastructure" />
                <p>
                  Support to sustainable infrastructure investors, clients and
                  developers. Expert sustainability, life-cycle, environmental,
                  social knowledge Qualified and experienced in CEEQUAL
                  assessment, and verification, including active involvement in
                  the highest scoring CEEQUAL scoring project (M25 motorway
                  widening) Qualified and experienced in Envision Sustainable
                  infrastructure rating scheme, including active involvement in
                  the first Envision Platinum rated project (I-4 Highway,
                  Florida) Good working knowledge of GRESB Infrastructure, SuRE
                  and Infrastructure Sustainability.
                </p>
              </div>
            </Toggle2>
          </div>
        </div>
        
        
        <div className="contact">
          <img src={cyber} alt="cyber essentials" />
          <button onClick={SendEmail}>Start a conversation</button>
        </div>
      </AnimateSharedLayout>
    </StyledPersonnel>
  );
};

const StyledPersonnel = styled(StyledAbout)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    display: block;
    font-size: 3rem;
    color: #fff;
  }
  h5 {
    display: flex;
    justify-content: center;

    align-items: center;
    button {
    }

    align-items: center;
  }

  h1 {
    font-size: 3rem;
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
  p {
    padding: 1rem 0rem;
    font-size: 1rem;
  }
  #email {
    font-size: 1rem;
  }
  .contained {
    height: 70vh;
    width: 100%;
    object-fit: contain;
  }
  span {
    font-size: 1.6rem;
  }
  button {
    margin: 0.4rem 0.3rem;
    padding: 0.4rem;
  }
`;

export default Services2;
