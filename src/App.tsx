import './App.css'
import { useEffect } from 'react';

// Social media SVG icons
const LinkedInIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{verticalAlign: 'middle'}}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
);
const InstagramIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style={{verticalAlign: 'middle'}}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
);

function Sidebar() {
  return (
    <aside className="sidebar sidebar-fixed">
      <span className="profile-pic-wrapper">
        <img style={{borderRadius: '12px', marginBottom:'70px'}} src="/images/retouch_2025070115595965.jpg" alt="Sanjiv" className="profile-pic" />
      </span>
      <h3>S.S. Sanjiv</h3>
      <p>Mechanical Engineering Graduate</p>
      <p>Chennai, India</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/ss-sanjiv-980206274" target="_blank" rel="noopener noreferrer" title="LinkedIn"><LinkedInIcon /></a>
        <a href="https://www.instagram.com/sanjiv._x" target="_blank" rel="noopener noreferrer" title="Instagram"><InstagramIcon /></a>
      </div>
      <p style={{marginTop: '1rem', fontSize: '0.95rem', color: '#bcbcbc'}}>
        <a href="mailto:sivasumasnjiv@gmail.com" style={{ color: '#50fa7b', textDecoration: 'underline' }}>sivasumasnjiv@gmail.com</a>
      </p>
      <p style={{marginTop: '0px', color: '#00ffd0'}}>+91-8072014123</p>
    </aside>
  );
}

function PortfolioHeader() {
  return (
    <header className="portfolio-header full-viewport-header">
      <h1 style={{ textTransform: 'uppercase', fontFamily: 'Arial,Helvetica,sans-serif', letterSpacing: '5px', margin: '10', fontSize: '3.0rem' }}>Mechanical Engineer &amp; Automobile Enthusiast</h1>
    </header>
  );
}

// Portfolio sections
function AboutSection() {
  return (
    <section className="portfolio-section">
      <h2>About Me</h2>
      <p>I am S.S. Sanjiv, <span style={{ color: '#76b0ab', fontWeight: 'bolder' }}>Mechanical Engineering Graduate</span> from Meenakshi Sundararajan Engineering College, Chennai. With a strong foundation in <span style={{ color: '#76b0ab', fontWeight: 'bolder' }}>design, manufacturing processes, and CAE analysis</span>, I am committed to applying engineering principles to develop practical, efficient, and sustainable solutions in the manufacturing sector.</p>
      <p>My academic and industrial experiences have equipped me with critical technical proficiencies, including the use of tools such as <span style={{ color: '#76b0ab', fontWeight: 'bolder' }}>SolidWorks, MATLAB, and Ansys, along with hands-on exposure to special purpose machine design, product development, and assembly line optimization.</span> During my tenure at Hyundai Motor India Ltd., I collaborated on a project aimed at minimizing hardware spillage and ensuring process sequencing integrity—an initiative that received recognition for its operational relevance and measurable impact.</p>
      <p>I am currently preparing to pursue postgraduate studies in Germany, with a focus on advancing my <span style={{ color: '#76b0ab', fontWeight: 'bolder' }}>expertise in mechanical design and sustainable engineering practices.</span> I bring to every project a structured, detail-oriented approach, a strong ethical foundation, and a commitment to lifelong learning.</p>
      <p>Apart from my technical interests, I am engaged in digital sketching, am an avid follower of true-crime documentaries, and am progressively building proficiency in the German language to broaden my cultural and professional adaptability.</p>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="portfolio-section">
      <h2>Sanjiv's Expertise</h2>
      <ul className="expertise-list">
        <li>
          <strong style={{ color: '#76b0ab', fontWeight: 'bolder' }}>Product Design & Development:</strong> Skilled in conceptualizing and executing mechanical designs with a focus on functionality, efficiency, and manufacturability. Experienced with industrial component integration and iterative prototyping.
        </li>
        <li>
          <strong style={{ color: '#76b0ab', fontWeight: 'bolder' }}>CAD Modeling:</strong> Proficient in SolidWorks, MATLAB, and Ansys for 3D modeling, design validation, and CAE simulations. Capable of executing design optimization based on stress analysis and load path visualization.
        </li>
        <li>
          <strong style={{ color: '#76b0ab', fontWeight: 'bolder' }}>Innovation in Engineering:</strong> Transforming ideas into practical and sustainable engineering solutions that drive progress and excellence.
        </li>
        <li>
          <strong style={{ color: '#76b0ab', fontWeight: 'bolder' }}>Manufacturing Process Optimization:</strong> Hands-on experience with assembly line evaluation, fixture design, and special purpose machine (SPM) development. Contributed to hardware spillage and sequence control projects at Hyundai Motor India Ltd.
        </li>
      </ul>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section className="portfolio-section">
      <h2>Certifications</h2>
      <ul className="portfolio-list">
        <li>
          <strong>SOLIDWORKS PROFICIENT</strong> – <a href="https://8d11ce8b-529e-44e9-90e2-f17c788baee3.filesusr.com/ugd/2a1742_e049b26e65f848848e983be46bfd994f.pdf" target="_blank" rel="noopener noreferrer">Certificate</a>
        </li>
        <li>
          <strong>ANSYS</strong> – <a href="https://8d11ce8b-529e-44e9-90e2-f17c788baee3.filesusr.com/ugd/2a1742_948d01571ac34d1c813157419bec6664.pdf" target="_blank" rel="noopener noreferrer">Certificate</a>
        </li>
      </ul>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="portfolio-section">
      <h2>Internships & Experience</h2>
      <div className="experience-list experience-list-grid">
        {/* Hyundai Motor India Ltd. - Use provided local image */}
        <a
          href="./intern1.html"
          target="_blank"
          rel="noopener noreferrer"
          className="internship-image-card"
          tabIndex={0}
        >
          <img
            src="/images/Hyundai.jpg"
            alt="Hyundai Motor India Ltd."
            className="exp-logo internship-img-hover"
            draggable="false"
          />
          <span className="internship-hover-label">
            Hyundai Motor India Ltd.
            <br />
            <span className="internship-hover-disclaimer">Click for more details</span>
          </span>
        </a>
        {/* Tube Investment of India - Use provided local image */}
        <a
          href="./intern2.html"
          target="_blank"
          rel="noopener noreferrer"
          className="internship-image-card"
          tabIndex={0}
        >
          <img
            src="/images/tii-650x450-1.png"
            alt="Tube Investment of India"
            className="exp-logo internship-img-hover"
            draggable="false"
          />
          <span className="internship-hover-label">
            Tube Investment of India
            <br />
            <span className="internship-hover-disclaimer">Click for more details</span>
          </span>
        </a>
        {/* Gurumangala Engineering - Use provided local image */}
        <a
          href="./intern3.html"
          target="_blank"
          rel="noopener noreferrer"
          className="internship-image-card"
          tabIndex={0}
        >
          <img
            src="/images/retouch_2025070316212564.jpg"
            alt="Gurumangala Engineering"
            className="exp-logo internship-img-hover"
            draggable="false"
          />
          <span className="internship-hover-label">
            Gurumangala Engineering
            <br />
            <span className="internship-hover-disclaimer">Click for more details</span>
          </span>
        </a>
        {/* KMK Industries - local image as before */}
        <a
          href="./intern4.html"
          target="_blank"
          rel="noopener noreferrer"
          className="internship-image-card"
          tabIndex={0}
        >
          <img
            src="https://metalformingexpo.com/wp-content/uploads/2025/04/b-15-1.webp"
            alt="KMK Industries"
            className="exp-logo internship-img-hover"
            draggable="false"
          />
          <span className="internship-hover-label">
            KMK Industries
            <br />
            <span className="internship-hover-disclaimer">Click for more details</span>
          </span>
        </a>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="portfolio-section">
      <h2>Projects</h2>
      <div className="experience-list experience-list-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.2rem' }}>
        <a
          href="/project1.html"
          target="_blank"
          rel="noopener noreferrer"
          className="internship-image-card major-project-card"
          tabIndex={0}
        >
          <img
            src="/images/img1/c12.jpg"
            alt="SAE hBAJA India"
            className="exp-logo internship-img-hover"
            draggable="false"
          />
          <span className="internship-hover-label">
            SAE hBAJA India
            <br />
            <span className="internship-hover-disclaimer">Click for more details</span>
          </span>
        </a>
        {/* Project 1 */}
        <a
          href="/project2.html"
          target="_blank"
          rel="noopener noreferrer"
          className="internship-image-card"
          tabIndex={0}
        >
          <img
            src="/images/Screenshot_20250703_164222_M365 Copilot.jpg"
            alt="Hardware Spillage Prevention – Nut Cartridge Feeder System"
            className="exp-logo internship-img-hover"
            draggable="false"
          />
          <span className="internship-hover-label">
            Hardware Spillage Prevention<br />Nut Cartridge Feeder System
            <br />
            <span className="internship-hover-disclaimer">Click for more details</span>
          </span>
        </a>
        {/* Project 2 */}
        <a
          href="/project3.html"
          target="_blank"
          rel="noopener noreferrer"
          className="internship-image-card"
          tabIndex={0}
        >
          <img
            src="/images/Screenshot_20250703_164252_M365 Copilot.jpg"
            alt="Sequence Missing Prevention – IoT Smart Compartment System"
            className="exp-logo internship-img-hover"
            draggable="false"
          />
          <span className="internship-hover-label">
            Sequence Missing Prevention<br />IoT Smart Compartment System
            <br />
            <span className="internship-hover-disclaimer">Click for more details</span>
          </span>
        </a>
        {/* Project 3 */}
        <a
          href="/pull%20back.html"
          target="_blank"
          rel="noopener noreferrer"
          className="internship-image-card"
          tabIndex={0}
        >
          <img
            src="/images/img2/img5.jpg"
            alt="Pull-Back Machine Component – Tubes Investment of India"
            className="exp-logo internship-img-hover"
            draggable="false"
          />
          <span className="internship-hover-label">
            Pull-Back Machine Component<br />Tubes Investment of India
            <br />
            <span className="internship-hover-disclaimer">Click for more details</span>
          </span>
        </a>
      </div>
      <div style={{marginTop: '1.5rem'}}>
        <a href="/CO221006Z785235_1728524247.pdf" target="_blank" rel="noopener noreferrer" className="portfolio-link"></a>
      </div>
    </section>
  );
}

function useSectionFadeIn() {
  useEffect(() => {
    const sections = document.querySelectorAll('.portfolio-section, .project-card, .experience-item');
    sections.forEach((el, i) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(40px)';
      setTimeout(() => {
        (el as HTMLElement).style.transition = 'opacity 0.7s cubic-bezier(0.23,1,0.32,1), transform 0.7s cubic-bezier(0.23,1,0.32,1)';
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      }, 200 + i * 120);
    });
  }, []);
}

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div>
        <span>© {new Date().getFullYear()} Sanjiv S.S | Portfolio Website</span>
        <span style={{marginLeft: '1.5rem'}}>
          <a href="mailto:sivasumasnjiv@gmail.com" className="portfolio-link"></a>
        </span>
      </div>
    </footer>
  );
}

function App() {
  useSectionFadeIn();
  return (
    <>
      <PortfolioHeader />
      <div className="portfolio-root">
        <div className="main-content">
          <Sidebar />
          <div className="sections-area">
            <AboutSection />
            <ExpertiseSection />
            <CertificationsSection />
            <ExperienceSection />
            <ProjectsSection />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App
