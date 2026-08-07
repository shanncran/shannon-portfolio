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
    title: "MemSysExplorer",
    type: "Computer architecture · Research",
    mark: "ME",
    description:
      "Memory-system research using profilers and SPEC2017 benchmarks to create a useful dataset.",
  },
];

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
        <div className="hero-kicker">
          <span>Portfolio / 2025</span>
          <span>Computer Engineering</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="overline">Hello, I&apos;m Shannon.</p>
            <h1>
              I build systems<br />
              <em>that make sense.</em>
            </h1>
            <p className="lede">
              I&apos;m a Computer Engineering student at Tufts University focused on
              embedded systems, computer architecture, and the details that make
              technology work beautifully.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/projects">Explore projects <span>↗</span></Link>
              <a className="quiet-link" href="#about">About me <span>↓</span></a>
            </div>
          </div>
          <div className="profile-panel" aria-label="Shannon Crandley profile">
            <div className="profile-grid" />
            <div className="profile-label"><span>Engineer profile</span><span>01 / 01</span></div>
            <Image src="/images/shannon-portrait.png" alt="Shannon Crandley" width={220} height={220} priority />
            <div className="profile-caption"><span>SHANNON CRANDLEY</span><span>SHE / HER</span></div>
          </div>
        </div>
      </section>

      <section className="about-section shell" id="about">
        <div className="section-label"><span>01</span><span>About</span></div>
        <div className="about-layout">
          <h2>Engineering at the intersection of <em>hardware, software, and curiosity.</em></h2>
          <div className="about-detail">
            <p>
              I&apos;m a junior at Tufts University studying Computer Engineering with a
              concentration in Computer Architecture. I enjoy moving between a
              low-level problem and the larger system around it.
            </p>
            <p>
              Right now, I&apos;m assisting in a research lab testing memory systems on
              different benchmarks, including SPEC2017.
            </p>
          </div>
        </div>
        <div className="skills-strip" aria-label="Technical skills">
          <span>VHDL</span><span>FPGA</span><span>Embedded systems</span><span>Computer architecture</span><span>Python</span><span>Java</span>
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
              <div className="work-visual"><span>{project.mark}</span><i>{project.number}</i><b /></div>
              <p className="work-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section shell" id="contact">
        <div><p className="overline">03 / Contact</p><h2>Let&apos;s build<br /><em>something useful.</em></h2></div>
        <a className="contact-link" href="mailto:hello@example.com">hello@example.com <span>↗</span></a>
      </section>

      <footer className="site-footer shell"><span>© 2025 Shannon Crandley</span><span>Built with Next.js + TypeScript</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
