import Link from "next/link";

const projects = [
  ["01", "Pac-Man on an FPGA", "VHDL · FPGA · VGA", "A school-wide showcase game built with a VGA display, FPGA, and NES controller. I led much of the VHDL, display, and sprite movement work.", "PX"],
  ["02", "Voice Synthesizer", "Embedded systems · Microcontroller", "A group embedded systems project using a microphone, microcontroller, and speaker to alter and synthesize audio inputs.", "VS"],
  ["03", "Smart Activity Monitoring App", "Android Studio · Java", "An Android activity app that lets people build a profile, set goals, log exercises, and receive tailored suggestions.", "AA"],
  ["04", "Pipelined MIPS Processor", "VHDL · Computer organization", "A five-stage pipelined MIPS processor built for computer organization coursework, including forwarding and stalling.", "MP"],
  ["05", "Autonomous Robot", "Arduino · Sensors · Robotics", "A team-built robot that senses color and follows a lane with photodiode and distance sensors, communicating through a server.", "AR"],
  ["06", "MemSysExplorer Research", "Memory systems · SPEC2017", "Research support for a MemSysExplorer dataset, using memory profilers to run and analyze benchmark workloads.", "ME"],
];

export default function ProjectsPage() {
  return (
    <main>
      <header className="site-header"><Link className="wordmark" href="/">SC<span>_</span></Link><nav><Link href="/">Home</Link><Link className="active" href="/projects">Projects</Link><Link href="/#contact">Contact</Link></nav><p className="system-status"><i /> Project archive</p></header>
      <section className="projects-hero shell"><p className="overline">Archive / 2022—2025</p><h1>Systems, <em>studies,</em><br />and prototypes.</h1><p>Six projects across computer architecture, embedded systems, hardware, mobile software, and research.</p></section>
      <section className="project-list shell">{projects.map(([number, title, tags, description, mark]) => <article className="project-row" key={number}><span className="project-number">{number}</span><div className="project-mark">{mark}</div><div className="project-info"><p>{tags}</p><h2>{title}</h2><span>{description}</span></div><span className="project-arrow">↗</span></article>)}</section>
      <footer className="site-footer shell"><span>© 2025 Shannon Crandley</span><Link href="/">Home</Link><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
