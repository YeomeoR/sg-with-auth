
//contact
import SendEmail from '../components/SendEmail'
//animation
import { fade } from '../animation'
import { AnimateSharedLayout } from 'framer-motion';
//state and Toggle
import Toggle from './Toggle';
//images and icons
import cyber from '../images/Cyber Essentials Large.png';
import gregCH from '../images/GregCH.png';
import markT from '../images/MarkThomas.png';
import davidS from '../images/DavidShort.png';
import samH from '../images/SamHall.png';
import stevenB from '../images/StevenBorncamp.png';
import emmaKS from '../images/Emma_KnightStrong_PNG.png';
import davidH from '../images/David Hampton.png';
import martinG from '../images/Martin Gibson.png';
import martinH from '../images/martin hunt.png';
import gregP from '../images/Greg Poole.png';
import jonB from '../images/Jon Bootland.png';
//styles
import styled from 'styled-components';
import { StyledAbout } from '../styles';

const Personnel = () => {
  
  return (
    <StyledPersonnel variants={fade}  initial='hidden' animate='show'>
      <AnimateSharedLayout>
        
      <h1>Who we are</h1>
      <p>
        Square Gain works in the public and private sectors, and is focused on
        delivering practical sustainable solutions around carbon, energy, waste
        and sustainable finance. Our experienced team has a proven track-record
        to help our clients strategically and operationally. Established in 2015
        by a group of experienced sustainability leaders, Square Gain has
        already worked with many leading organisations. Our Associates have over
        150 years of sustainability leadership, working in local authorities,
        blue-chip multinationals, SMEs, research and third sector organisations.
        ​ We are a Cyber Essentials certified company.
      </p>
      
      <div className="personnel-line"></div>
      <div className="person">
        <h2>
          <span>Greg Chant-Hall</span>
        </h2>
          <img layout src={gregCH} alt="gregCH" />
          <div className="position">
          <Toggle title="Director">
            
            <div className="biog">
              <p>
                Greg has 25 years experience in sustainability leadership and
                consultancy, non-profits, blue chip finance, project development
                and construction companies. He understands how to create lasting
                partnerships that bring value to all parties and deliver
                sustainable benefits.{' '}
              </p>
            </div>
          </Toggle>
        </div>
      </div>
      <div className="person">
        <h2>
          <span>Greg Poole</span>
        </h2>
        <img src={gregP} alt="gregP" />

        <div className="position">
          <Toggle title="Associate">
            <div className="biog">
              <p>
                Greg is a Chartered Surveyor and sustainability professional
                with 17 years industry experience on business engagement,
                negotiations, procurement, and cost planning, including managing
                funding competitions to secure the best value for money for
                individual clients. Previous experience includes Commercial
                Director for ISG and Head of Green Business for Skanska UK.
              </p>
            </div>
          </Toggle>
        </div>
      </div>
      <div className="person">
        <h2>
          <span>Sam Hall</span>
        </h2>
        <img src={samH} alt="samH" />

        <div className="position">
          <Toggle title="Associate">
            <div className="biog">
              <p>
                Sam has a passion for delivering change towards sustainability
                and has the proven ability of getting results for both the
                public and private sectors over the last 20 years. Sam's skills
                include sustainability leadership, ISO14001 and environmental
                management issues relevant to the construction sector.
              </p>
            </div>
          </Toggle>
        </div>
      </div>
       <div className="person">
        <h2>
          <span>Emma Knight-Strong</span>
        </h2>
        <img src={emmaKS} alt="emmaKS" />

        <div className="position">
          <Toggle title="Associate">
            <div className="biog">
              <p>
                Emma has 10 years experience in environmental consulting,
                environmental product design, environmental assessment of
                projects and sustainability training and coaching, including
                being part of the team that developed the Green Investment
                Bank's processes for assessing the Green Impact of investments.
              </p>
            </div>
          </Toggle>
        </div>
      </div>
      <div className="person">
        <h2>
          <span>David Short</span>
        </h2>
        <img src={davidS} alt="davidS" />

        <div className="position">
          <Toggle title="Associate">
            <div className="biog">
              <p>
                David brings over 20 years’ experience and combines expertise as
                a lawyer in the fields of environment, energy and technology,
                with commercial acumen developed through roles in risk
                management, asset management and sustainability leadership for
                real estate, infrastructure and technology businesses.
              </p>
            </div>
          </Toggle>
        </div>
      </div>
      <div className="person">
        <h2>
          <span>Steven Borncamp</span>
        </h2>
        <img src={stevenB} alt="stevenB" />

        <div className="position">
          <Toggle title="Associate">
            <div className="biog">
              <p>
                Steven has 20 years experience campaigning for ecological
                buildings, particularly in nascent green building markets, and
                is currently leading a "Green Homes & Green Mortgage" program
                with over 4,000 residential units, providing discounted interest
                rates for environmentally-responsible, energy-efficient, and
                healthy homes.
              </p>
            </div>
          </Toggle>
        </div>
      </div>
      <div className="person">
        <h2>
          <span>David Hampton</span>
        </h2>
        <img src={davidH} alt="davidH" />

        <div className="position">
          <Toggle title="Associate">
            <div className="biog">
              <p>
                David is perhaps best known as the Carbon Coach. Amongst other
                things he is also a radio show host, CIOB Ambassador, and Green
                Party candidate. He has 35 years’ experience in delivering
                sustainability in the built environment at a senior level.
              </p>
            </div>
          </Toggle>
        </div>
      </div>
      <div className="person">
        <h2>
          <span>Mark Thomas</span>
        </h2>
        <img src={markT} alt="markT" />

        <div className="position">
          <Toggle title="Associate">
            <div className="biog">
              <p>
                Mark has been a web developer for 19 years and is experienced in
                all relevant aspects of eLearning design and development. His
                background includes significant experience working with Drupal
                content management platform, Articulate 360 Storyline and
                Litmos.
              </p>
            </div>
          </Toggle>
        </div>
      </div>
      <div className="person">
        <h2>
          <span>Martin Gibson</span>
        </h2>
        <img src={martinG} alt="martinG" />

        <div className="position">
          <Toggle title="Advisor">
            <div className="biog">
              <p>
                Martin is a business professional with over 40 years experience,
                and particular skills in sustainability and environment. This
                includes, leading development of corporate sustainability policy
                and supply chain implementation, as well as programme delivery,
                project and operational management, marketing, communications
                and stakeholder engagement
              </p>
            </div>
          </Toggle>
        </div>
      </div>
      <div className="person">
        <h2>
          <span>Jon Bootland</span>
        </h2>
        <img src={jonB} alt="jonB" />

        <div className="position">
          <Toggle title="Advisor">
            <div className="biog">
              <p>
                Jon is an ethical entrepreneur with a track record of successful
                company management, strategy and business development in the
                non-profit and sustainability sectors. He also currently runs
                the Passivhaus Trust and Sustainable Development Foundation
                (SDF), and helped establish the Good Homes Alliance.
              </p>
            </div>
          </Toggle>
          </div>
      </div>
      <div className="person">
        <h2>
          <span>Martin Hunt</span>
        </h2>
        <img src={martinH} alt="martinH" />

        <div className="position">
          <Toggle title="Advisor">
            <div className="biog">
              <p>
                Martin works as senior member of Forum for the Future's Energy
                team, leading their work in the built environment and
                infrastructure arena, working with a wide range of organisations
                in the design, contracting and development space. Martin
                facilitates collaboration across sectors and value networks to
                stimulate big, bold responses to massive systemic challenges.
              </p>
            </div>
          </Toggle>
        </div>
      </div>
          <div className="contact">
          <img src={cyber} alt="cyber essentials" />
            <button onClick={SendEmail}>email</button>
            </div>
          </AnimateSharedLayout>
    </StyledPersonnel>
  );
};

const StyledPersonnel = styled(StyledAbout)`
  display: block;
  span {
    display: block;
    font-size: 3rem;
  }

  h1 {
    font-size: 2.8rem;
  }
  h2 {
    margin-left: 0;
    padding: 1.5rem 0;
    font-weight: lighter;
 
  }
  h4 {
    font-size: 2rem;
    padding: 1rem;
  }
  h6 {
    color: #fff;
    font-size: 1.2rem;
    margin-left: 14px;
  }
  .personnel-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  
  }
  span{
    font-size: 2rem;
  }
 
  `;

export default Personnel;
