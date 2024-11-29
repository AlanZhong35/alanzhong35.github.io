import React from 'react';
import { Container, Row, Col, Navbar, Nav, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import profilePic from './assets/pictures/ProfilePicture.jpg';
import tristanPDF from './assets/pdfs/Extended_abstract_TRISTAN_XII.pdf';
import ABMimg from './assets/pictures/ABM.png'
import Madisonimg from './assets/pictures/uw-madison.jpg'
import RoboCupimg from './assets/pictures/robocup.webp'
import BMIimg from './assets/pictures/bmi.jpg'
import DAKimg from './assets/pictures/dak.jpg'
function App() {
  const ImageTextCard = ({ imageSrc, title, children, imageAlt = "Section Image" }) => (
    <Card className="mb-4">
      <Card.Body>
        <Row className="align-items-center">
          <Col md={3} className="text-center mb-3 mb-md-0">
            <img 
              src={imageSrc} 
              alt={imageAlt}
              className="img-fluid rounded shadow-sm"
              style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'cover' }}
            />
          </Col>
          <Col md={9}>
            <h4 className="mb-3">{title}</h4>
            {children}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );

  return (
    <>
      {/* Enhanced Navbar */}
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#" className="fw-bold">Alan Zhong</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#publications">Publications</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Content Sections */}
      <Container className="content" style={{ marginTop: '70px' }}>
        {/* About Section */}
        <section id="about" className="mb-5">
          <Row className="align-items-center">
            <Col md={4} className="text-center mb-4 mb-md-0">
              <img 
                src={profilePic} 
                alt="Alan Zhong" 
                className="img-fluid rounded-circle shadow-lg"
                style={{ maxWidth: '250px' }}
              />
            </Col>
            <Col md={8}>
              <h1 className="display-4 mb-3">About Me</h1>
              <p className="lead">
              I am a highly motivated Computer Science/Mathematics student at UW-Madison (GPA 3.95),
              experienced in internship & academic research programs. I am applying to Master's programs
              in the field of Reinforcement Learning and Robotics.
              </p>
            </Col>
          </Row>
        </section>

        {/* Publications Section */}
        <section id="publications" className="mb-5">
          <h2 className="mb-4">Publications</h2>
          <ImageTextCard 
            imageSrc={ABMimg} 
            title="Agent Based Model for Food Access"
          >
          
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>Agent Based Models for Quantifying Food Accessibility: Insights for Policy and Decision Making</strong>
                  <br />
                  Rosemarie Santa Gonzalez, <strong>Alan Zhong</strong>, Charlie Haight, Alfonso Morales and Carlos Guzman
                  <br />
                  Submitted to TRISTAN25
                  <a 
                    href={tristanPDF} 
                    className="text-primary ms-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Paper
                  </a>
                </li>
                {/* Add more publications */}
              </ul>
            
          </ImageTextCard>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-5">
          <h2 className="mb-4">Education</h2>
          <ImageTextCard
           imageSrc={Madisonimg} 
           title="University of Wisconsin-Madison"
         >
          
              <h5 className="mt-3">B.S. in Computer Science + Math Minor</h5>
              <p>
                3.95/4.00 GPA
                <br />
                September 2022 - May 2025
              </p>
            
          </ImageTextCard>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-5">
          <h2 className="mb-4">Research & Professional Experience</h2>
          <Card>
          <Card.Body>
            
          <h3>Research</h3>
          <br/>
          <ImageTextCard
          imageSrc={RoboCupimg}
          title="Undergraduate Researcher @ BadgerRL Lab"
          >
              <p>
              Advisor: Prof. Josiah Hanna
              <br/>
                September 2024 - Present
                <br />
                <ul>
                <li>Designed and trained reinforcement learning policies for NAO robots in the 
                RoboCup competition using Python, OpenAI Gym, and C++.</li>
                <li>Currently improving the performance and generalization of multi-agent reinforcement learning by optimizing the action space and simulating within an abstracted environment.</li>
                </ul>
              </p>
          </ImageTextCard>
          <ImageTextCard
          imageSrc={ABMimg}
          title="Undergraduate Researcher @ Kaufman Lab"
          >
              <p>
              Advisor: Prof. Alfonso Morales
              <br/>
                March 2024 - Present
                <br />
                <ul>
                <li>Developed agent-based model for urban planners to predict the 
                impact of grocery store closure on low-income households, known 
                as Food Access Strategy Simulator (FASS).</li>
                
                <li>Second-authored research paper for FASS through NSF-sponsored 
                ICICLE AI grant</li>
                </ul>
              </p>
          </ImageTextCard>
          <h3>Industry</h3>
          <br/>
          <ImageTextCard
          imageSrc={BMIimg}
          title="Software Engineer Intern @ Badger Meter"
          >
              <p>
                June 2024 - September 2024
                <br />
                <ul>
                <li>Led development of web/mobile app for cellular endpoint tracking servicing 40k API weekly requests, built using React/Redux 
                </li>
                <li>Saved 50% of deployment-time from staging to prod through auto-deployments for CI/CD from Github to AWS using CloudFront, Codebuild, CodePipeline, S3
                </li>
              </ul>
              </p>
          </ImageTextCard>
          <ImageTextCard
          imageSrc={DAKimg}
          title="Software Design Intern @ Daktronics"
          >
              <p>
                May 2023 - September 2023
                <br />
                <ul>
                <li>Conducted Agile life-cycle testing for Salesforce projects by performing quality analysis</li>
                <li>Ensured quality by creating 50+ test cases and identifying 60+ bugs on 30+ user stories</li>
                <li>Partnered with cross functional teams: Developers, Business Analysts, Scrum Masters</li>
              </ul>
              </p>
          </ImageTextCard>
            </Card.Body>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-5">
          <h2 className="mb-4">Contact</h2>
          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <p>
                    <strong>Email:</strong> azhong4 at wisc dot edu
                    <br />
                    <strong>Department:</strong> Computer Science
                    <br />
                    <strong>University:</strong> UW-Madison
                  </p>
                </Col>
                <Col md={6}>
                  <div className="d-flex justify-content-start">
                    <a 
                      href="https://www.linkedin.com/in/alan-zhong/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="me-3 text-dark"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="https://github.com/AlanZhong35" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-dark"
                    >
                      GitHub
                    </a>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </section>
      </Container>

      {/* Footer */}
      <footer className="bg-light py-3 mt-5 text-center">
        <Container>
          <p className="mb-0">© {new Date().getFullYear()} Alan Zhong. All Rights Reserved.</p>
        </Container>
      </footer>
    </>
  );
}

export default App;