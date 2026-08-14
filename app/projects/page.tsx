import Image from "next/image";
import Link from "next/link";

const projects = [
  ["01", "Pac-Man on an FPGA", "VHDL · FPGA · VGA", "A school-wide showcase game built with a VGA display, FPGA, and NES controller. I led much of the VHDL, display, and sprite movement work.", "PX", "/images/projects/pacman.png", "github", "https://github.com/shanncran/pacman"],
  ["02", "Voice Synthesizer", "Embedded systems · Microcontroller", "A group embedded systems project using a microphone, microcontroller, and speaker to alter and synthesize audio inputs.", "VS", "/images/projects/synth.png", "github", "https://github.com/shanncran/Embedded_Systems_Final"],
  ["03", "Mojo Story Composer", "TypeScript · SvelteKit · Front-end · Back-end", "A web-based application for creating and managing stories with a focus on user experience and performance.", "SC", "/images/projects/story-composer.png", "slides", "/mojo-story-composer.pptx"],
  ["04", "Smart Activity Monitoring App", "Android Studio · Java", "An Android activity app that lets people build a profile, set goals, log exercises, and receive tailored suggestions.", "AA", "/images/projects/sama.png", "github", "https://github.com/shanncran/SAMA"],
  ["05", "Pipelined MIPS Processor", "VHDL · Computer organization", "A five-stage pipelined MIPS processor built for computer organization coursework, including forwarding and stalling.", "MP", "/images/projects/mips.png", "website", "https://www.cs.tufts.edu/~nr/toolkit/specs/mips.html"],
  ["06", "Autonomous Robot", "Arduino · Sensors · Robotics", "A team-built robot that senses color and follows a lane with photodiode and distance sensors, communicating through a server.", "AR", "/images/projects/junior-design.png", "github", "https://github.com/shanncran/Junior_Design"],
  ["07", "MemSysExplorer Research", "Memory systems · SPEC2017", "Research support for a MemSysExplorer dataset, using memory profilers to run and analyze benchmark workloads.", "ME", "/images/projects/memsys.png", "pdf", "/Shannon_Crandley_Directed_Study.pdf"],
];

function GithubIcon() {
  return (
    <svg className="github-icon" viewBox="0 0 24 24" aria-label="GitHub" role="img">
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.3c-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C15.5 4.2 16.5 4.5 16.5 4.5c.6 1.7.2 3 .1 3.3a4.7 4.7 0 0 1 1.2 3.3c0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}

function ProjectRow({ project }: { project: readonly string[] }) {
  const [number, title, tags, description, mark, image, linkType, href] = project;
  const rowContent = (
    <>
      <span className="project-number">{number}</span>
      <div className="project-mark">
        {image ? <Image src={image} alt="" width={128} height={96} /> : mark}
      </div>
      <div className="project-info">
        <p>{tags}</p>
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
      {linkType === "github" ? (
        <span className="project-arrow github-project-icon"><GithubIcon /></span>
      ) : (
        <span className="project-arrow">↗</span>
      )}
    </>
  );

  return href ? (
    <a className="project-row" href={href} target="_blank" rel="noreferrer" aria-label={`Open ${title}`}>
      {rowContent}
    </a>
  ) : (
    <article className="project-row">{rowContent}</article>
  );
}

export default function ProjectsPage() {
  return (
    <main>
      <header className="site-header"><Link className="wordmark" href="/">SC<span>_</span></Link><nav><Link href="/">Home</Link><Link className="active" href="/projects">Projects</Link><Link href="/#contact">Contact</Link></nav><p className="system-status"><i /> Project archive</p></header>
      <section className="projects-hero shell"><p className="overline">Projects / 2024—2026</p><h1>Systems, <em>studies,</em><br />and projects.</h1><p>Seven projects across computer architecture, embedded systems, hardware, software, and research.</p></section>
      <section className="project-list shell">
        {projects.map((project) => <ProjectRow key={project[0]} project={project} />)}
      </section>
      <footer className="site-footer shell"><span>© 2026 Shannon Crandley</span><div className="footer-socials"><a href="https://github.com/shanncran" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/shannon-crandley" target="_blank" rel="noreferrer">LinkedIn ↗</a></div><Link href="/">Home</Link><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
