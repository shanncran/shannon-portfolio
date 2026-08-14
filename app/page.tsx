import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    number: "01",
    title: "Pac-Man on an FPGA",
    type: "Digital systems · VHDL",
    mark: "PX",
    description:
      "A hardware implementation of Pac-Man built with VHDL, VGA output, an FPGA, and an NES controller.",
  },
  {
    number: "02",
    title: "Voice Synthesizer",
    type: "Embedded systems · Audio",
    mark: "VS",
    description:
      "An embedded voice synthesizer that captures, transforms, and plays back an audio signal.",
  },
  {
    number: "03",
    title: "Mojo Story Composer",
    type: "Software · Front-end · Back-end",
    mark: "ME",
    description:
      "A web-based application for creating and managing stories with a focus on user experience and performance.",
  },
];
function GithubIcon() {
  return (
    <svg className="contact-social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.3c-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C15.5 4.2 16.5 4.5 16.5 4.5c.6 1.7.2 3 .1 3.3a4.7 4.7 0 0 1 1.2 3.3c0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="contact-social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V8.999h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.559 20.452h3.558V8.999H3.559v11.453Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Shannon Crandley home">
          SC<span>_</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <a href="#contact">Contact</a>
        </nav>
        <p className="system-status"><i /> Available for opportunities</p>
      </header>

      <section className="hero shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="overline">Hello, I&apos;m Shannon.</p>
            <h1>
              Hardware<br />
              <em>& Software</em>
            </h1>
            <p className="lede">
              I am a computer engineering student at Tufts University.
              I focus on building systems that combine hardware and software, from low-level design to high-level applications.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/projects">Explore projects <span>↗</span></Link>
              <a className="button" href="/api/resume" download="Shannon-Crandley-Resume.pdf">Download resume <span>↓</span></a>
              <a className="quiet-link" href="#about">About me <span>↓</span></a>
            </div>
          </div>
          <div className="profile-panel" aria-label="Shannon Crandley profile">
            <div className="profile-grid" />
            <div className="profile-label"><span>Computer Engineer</span><span>Tufts University</span></div>
            <Image src="/images/shannon-portrait.png" alt="Shannon Crandley" width={220} height={220} priority />
            <div className="profile-caption"><span>SHANNON CRANDLEY</span><span>SHE / HER</span></div>
          </div>
        </div>
      </section>

      <section className="about-section shell" id="about">
        <div className="section-label"><span>01</span><span>About</span></div>
        <div className="about-layout">
          <h2>Engineering at the intersection of <em>hardware and software.</em></h2>
          <div className="about-detail">
            <p>
              I&apos;m a senior at Tufts University studying Computer Engineering with a
              concentration in Computer Architecture. I enjoy building systems that combine hardware and software,
              from low-level design to high-level applications.
            </p>
            <p>
              This summer, I interned at MojoTech, where I built an internal web application for building user stories. 
            </p>
          </div>
        </div>
        <div className="skills-strip" aria-label="Technical skills">
          <span>VHDL</span><span>FPGA</span><span>C++</span><span>C</span><span>Microcontrollers</span><span>Embedded systems</span><span>Computer architecture</span><span>Python</span><span>Java</span><span>TypeScript</span>
        </div>
      </section>

      <section className="featured-section shell">
        <div className="section-heading">
          <div className="section-label"><span>02</span><span>Selected work</span></div>
          <Link href="/projects" className="all-projects">All projects <span>↗</span></Link>
        </div>
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <article className="work-card" key={project.number}>
              <div className="work-visual"><span>{project.mark}</span><b /></div>
              <p className="work-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <div><p className="overline">03 / Contact</p><h2>Let&apos;s<br /><em>Connect.</em></h2></div>
        <div className="contact-links">
          <div className="contact-socials">
            <a href="https://github.com/shanncran" target="_blank" rel="noreferrer"><GithubIcon /><span>@shanncran</span><b>↗</b></a>
            <a href="https://www.linkedin.com/in/shannon-crandley" target="_blank" rel="noreferrer"><LinkedinIcon /><span>@shannon-crandley</span><b>↗</b></a>
          </div>
          <a className="contact-link" href="mailto:shannon.crandley@gmail.com">shannon.crandley@gmail.com <span>↗</span></a>
        </div>
      </section>

      <footer className="site-footer shell"><span>© 2026 Shannon Crandley</span><span>Built with Next.js + TypeScript</span><div className="footer-socials"><a href="https://github.com/shanncran" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/shannon-crandley" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
