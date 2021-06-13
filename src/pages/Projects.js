//contact
import SendEmail from '../components/SendEmail';
//styles
import styled from 'styled-components';
import { StyledAbout } from '../styles';
//animations
import { motion } from 'framer-motion';
import { fade, pageAnimation, lineAnim } from '../animation';
import ScrollTop from '../components/ScrollTop';

//images
import nhs from '../images/NHS.png';
import tower from '../images/tower-hamlets.png';
import swale from '../images/swale-bc-logo.jpg'
import pri from '../images/PRI logo_PNG.png';
import breeam from '../images/BREEAM.png'
import thanet from '../images/thanet orig.png'
import isg from '../images/isg.png';
import romania from '../images/romania.png';
import ciria from '../images/ciria.png';
import iema from '../images/IEMA_SF_PNG.png';
import atmosphere from '../images/Atmosphere_PNG.png';
import fisp from '../images/FISP_PNG.png';
import fsc from '../images/FSC_PNG.png';
import ciriaLearn from '../images/CIRIA_eLearn_PNG.png';
import lednet from '../images/LEDNet .png';
import londonCouncils from '../images/LondonCouncils.png';
import upp from '../images/upp-logo1.gif';
import kent from '../images/Kent UNi_Logo_.jpg';
import surrey from '../images/University_of_Surrey_logo.svg.png';
import cambridge from '../images/university-of-cambridge-logo-2.png';
import social from '../images/socialPartnerships.png';
import cyber from '../images/Cyber Essentials Large.png';

const Projects = () => {
  return (
    <StyledProjects
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
      <motion.h1 variants={fade}>Our Recent Projects</motion.h1>
      <p>
        Projects include consultancy, systems and product development, training
        services, event development and management. Selected recent projects are
        shown below.
      </p>
      <motion.div variants={lineAnim} className="personnel-line"></motion.div>
      <div className="project">
        <StyledBanner>
          <StyledCoLogo src={lednet} alt="lednet" />
          <StyledCoLogo src={londonCouncils} alt="londonCouncils" />
        </StyledBanner>
        <h2>
          <span>LEDNet and London Councils</span>
        </h2>

        <div className="description">
          <p>
            Square Gain worked for London Councils and the London Environment
            Directors Network (LEDNet) to develop and run a Climate and Carbon
            Training Series for the Elected Members, Chief Executives and their
            direct reports of all 32 London boroughs. The training programme ran
            from September 2020 - March 2021 and featured a series of eight
            interactive workshops, delivered remotely, and which received
            consistently excellent feedback from participants.
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <StyledBanner>
          <StyledCoLogo src={upp} alt="upp" />
        </StyledBanner>
        <h2>
          <span>UPP</span>
        </h2>

        <div className="description">
          <p>
            Square Gain provided Board level training for UPP, the UK's largest
            provider of on-campus residential and academic infrastructure, to
            help define a carbon strategy and transition pathway to net zero
            carbon emissions for their 36,000 rooms.
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <StyledBanner>
          <StyledCoLogo src={kent} alt="kent" />
          <StyledCoLogo src={cambridge} alt="cambridge" />
          <StyledCoLogo src={surrey} alt="surrey" />
        </StyledBanner>
        <h2>
          <span>University Lecturing</span>
        </h2>

        <div className="description">
          <p>
            As part of our commitment to climate action, we provide lecturing
            services to help educate the next generation of industry
            practitioners. This is provided on a range of university courses
            including sociology and psychology as well as archiecture,
            construction management and MBA courses. This work is usually
            probono or heavily discounted and clients include the University of
            Cambridge, Durham University, City University, Kent University, Cass
            Business School and the University of Surrey.​
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <StyledBanner>
          <StyledCoLogo src={tower} alt="tower" />
        </StyledBanner>
        <h2>
          <span>London Borough of Tower Hamlets</span>
        </h2>

        <div className="description">
          <p>
            Square Gain leads the internal co-ordination and project management
            of the Council's Net Zero Carbon Action Plan and Programme. Tower
            Hamlets is one of only seven councils in the UK, and the only
            council in London, to have committed to achieving net zero carbon
            emissions by 2025. Square Gain is also closely involved with the
            stakeholder engagement and green recovery initiatives accross the
            borough as the borough-wide net zero carbon programme starts to be
            implemented.
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <StyledBanner>
          <StyledCoLogo src={swale} alt="swale" />
        </StyledBanner>
        <h2>
          <span>Swale Borough Council</span>
        </h2>

        <div className="description">
          <p>
            Square Gain provided a suite of support for Swale Borough Council,
            leading the pragmatic implementation of the council's commitment to
            achieve net zero carbon emissions. This included the development of
            a Carbon and Ecological Action Plan, development of Supplementary
            Planning Documents and drafting new Sustainable Design and
            Construction, and Energy Policies as part of the Local Plan Review
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <StyledBanner>
          <StyledCoLogo src={nhs} alt="nhs" />
        </StyledBanner>
        <h2>
          <span>Net Zero Carbon NHS</span>
        </h2>

        <div className="description">
          <p>
            This ambitious project by NHS England and NHS Improvement was
            focused on developing a transition tool for NHS trusts to use on
            their pathway to net zero carbon emissions. The suite of practical
            outputs included a Client Brief, Refurbishment Pilot, Transition
            Tool and Innovative Solutions Library. The project was coordinated
            by the Carbon Free Group CIC with key technical development provided
            by Square Gain
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <StyledBanner>
          <StyledCoLogo src={thanet} alt="thanet" /> 
        </StyledBanner>
        <h2>
          <span>Thanet District Council</span>
        </h2>

        <div className="description">
          <p>
            Thanet District Council sought central Government funding via the
            Public Sector Decarbonisation Fund, and appointed Square Gain to
            undertake Energy Assessments and Recommendations at the Kent
            Innovation Centre (a local business centre), and the Margate Winter
            Gardens to reduce the carbon emissions of these buildings and
            provide them with the ability to achieve net zero carbon emissions.
            The funding application was successful and works are scheduled to
            commence to implement our recommendations later in the year.
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <StyledBanner>
          <StyledCoLogo src={isg} alt="isg" />
        </StyledBanner>
        <h2>
          <span>ISG environmental compliance check</span>
        </h2>

        <div className="description">
          <p>
            Square Gain provided environmental assurance services to ISG accross
            all divisions (UK and Europe), against all relevant environmental
            legislation, company standards, and international best practice.
            This involved both desktop analysis, and site visits to view how
            systems were implemented in practice. A suite of recommendations
            were made to ensure a robust and standardised, yet flexible approach
            accross the company's international operations.
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
      </div>
      <div className="project">
        <StyledBanner>
        <StyledCoLogo src={fisp} alt="fisp" />
          <StyledCoLogo src={fsc} alt="fsc" />
          <StyledCoLogo src={atmosphere} alt="atmosphere" />
          
        </StyledBanner>
        <h2>
          <span>Atmosphere Furniture - Furniture Industry Sustainability</span>
        </h2>

        <div className="description">
          <p>
            Square Gain developed a full environmental management system for
            Atmosphere Furniture, which not only saved cost and reduced risk
            exposure, it also allowed the company to gain accreditation to the
            Furniture Industry Sustainability Programme (FISP), and to gain
            Forestry Stewardship Council (FSC) certification
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
       
      </div>
      <div className="project">
        <StyledBanner>
          <StyledCoLogo src={swale} alt="swale" />
        </StyledBanner>
        <h2>
          <span>Swale Borough Council</span>
        </h2>

        <div className="description">
          <p>
          Square Gain supported Swale Borough Council with the provision of Expert Witness services on Climate
Change, which is believed to be the first time this has been provided at Public Inquiry. The Council's
Declaration of Climate and Ecological Emergency was found by the Planning Inspector to be of material
importance and was given significant weight.
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
        
      </div>
      <div className="project">
        <StyledBanner>
          <StyledCoLogo src={ciria} alt="ciria" />
        </StyledBanner>
        <h2>
          <span>CIRIA - Wellbeing on Construction Sites</span>
        </h2>

        <div className="description">
          <p>
          Square Gain authored this CIRIA guide, focused on delivering wellbeing on site, during the construction
process. The guide compliments the WELL Building Standard (which focuses on the built asset
www.wellcertified.com). The guide focuses on Mind, Body, Culture and the Physical Environment and is
available from www.ciria.org
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
        
      </div>
      <div className="project">
        <StyledBanner>
          <StyledCoLogo src={breeam} alt="breeam" />
        </StyledBanner>
        <h2>
          <span>Wellbeing training</span>
        </h2>

        <div className="description">
          <p>
          Square Gain, with Building4Health, developed and delivered a series of workshops for both specific clients
and as open courses, on wellbeing in the built environment. This included WELL Building Standard, BREEAM
and other certification standards, as well as highlighting best practice examples and common pitfalls. The
training was delivered by four WELL Accredited Professional (AP) Square Gain Associates.
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
        
      </div>
      <div className="project">
        <StyledBanner>
          <StyledCoLogo src={romania} alt="romania" />
        </StyledBanner>
        <h2>
          <span>Next Generation Buildings, Romania
</span>
        </h2>

        <div className="description">
          <p>
          Developed content on finance options for a sustainable built environment, and the vital role that wellbeing
plays as part of sustainability. This included how Green buildings complement the WELL Building Standard
and links to the Green & Healthy Mortgage, for which banks are now offering lower cost financing. This
initiative has now grown internationally.
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
        
      </div>
      <div className="project">
        <StyledBanner>
          <StyledCoLogo src={pri} alt="pri" />
        </StyledBanner>
        <h2>
          <span>United Nations Principles for Responsible Investment</span>
        </h2>

        <div className="description">
          <p>
          Square Gain developed and delivered the PRI Supply Chain Environmental, Social & Governance SupplyChain Risk Management guidance and questionning toolkit. This involved partnership with a number of
leading ESG investors including: Actis Coller Capital HESTA Super Fund IFM Investors InfraRed Capital
Partners JP Morgan Asset Management Macquarie Meridiam Partners Group Pegasus Capital Advisors
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
       
      </div>
      <div className="project">
        <StyledBanner>
          <StyledCoLogo src={iema} alt="iema" />
        </StyledBanner>
        <h2>
          <span>IEMA - Sustainable Finance Guide</span>
        </h2>

        <div className="description">
          <p>
          Square Gain co-authored the Institute of Environmental Management & Assessment's (IEMA) Sustainable
Finance Guide, which provides an introduction to finance and sustainable finance for sustainability and
environmental professionals. This includes an overview of financial markets, mechanisms and products, and
how to position a company's activities, products and services to benefit from sustainable finance. Square
Gain has recently started to provide training to leading organisations on sustainable finance.
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
        
      </div>
      <div className="project">
        <StyledBanner>
          <StyledCoLogo src={isg} alt="isg" />
        </StyledBanner>
        <h2>
          <span>ISG environmental e-learning</span>
        </h2>

        <div className="description">
          <p>
          Square Gain developed interactive e-learning for site-based and management staff, to help build
competance and confidence regarding the management of environmental issues, including:<br></br>
● noise <br></br>
● waste<br></br>
● pollution<br></br>
● wellbeing and<br></br>
● sustainable materials.<br></br>
Each e-learning module was 20-30 minutes long, involved interactive tasks and also a brief assessment, to
help ensure that the learning aims and outcomes were achieved.
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
        
      </div>
      <div className="project">
        <StyledBanner>
          <StyledCoLogo src={ciriaLearn} alt="ciriaLearn" />
        </StyledBanner>
        <h2>
          <span>CIRIA e-Learning programme</span>
        </h2>

        <div className="description">
          <p>
          Square Gain designed and developed content and delivery of the CIRIA e-Learning programme for
Environmental Good Practice on Site, starting with the design and development of Water pollution and
Resource & Waste management modules. The project was developed using Articulate Storyline and
delivered using the Litmos platform, and is CPD approved by the Institute of Environmental Management &
Assessment (IEMA).
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
        
      </div>
      <div className="project">
        <StyledBanner>
          <StyledCoLogo src={social} alt="social" />
        </StyledBanner>
        <h2>
          <span>Annual Review for Social Partneships</span>
        </h2>

        <div className="description">
          <p>
          Square Gain provides editorial services and content development on Sustainability for the practitioners
element of the Annual Review for Social Partnerships, with a circulation of over 1.4 million copies.
          </p>
          <motion.div
            variants={lineAnim}
            className="personnel-line"
          ></motion.div>
        </div>
        <div className="contact">
          <img src={cyber} alt="cyber essentials" />
            <button onClick={SendEmail}>email</button>
            </div>
      </div>
    </StyledProjects>
  );
};

const StyledProjects = styled(StyledAbout)`
  display: block;

  p {
    font-size: 1.1rem;
  }
  h1 {
    font-size: 2.5rem;
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
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
    p {
      padding: 1rem 0rem;
    }
  }
  span {
    font-size: 2rem;
  }
`;

const StyledCoLogo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  object-fit: contain;
  max-width: 33vw;
  overflow: hidden;
`;

const StyledBanner = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export default Projects;
