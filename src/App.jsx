import './App.css'
import profileImg from './assets/myphoto.png'

const projects = [
  {
    title: 'Smart Home Monitoring System',
    description:
      'An intelligent occupancy and environment monitoring system that tracks real-time temperature and human presence to reduce energy wastage through smart lighting insights.',
    imageAlt: 'IoT Smart Energy Monitoring Prototype',
    tags: ['ESP32', 'Sensors', 'Firebase', 'Real-time Data', 'Sustainability'],
  }, ,
  {
    title: 'Autonomous Serve Robot',
    description:
      'A robotic automation system for restaurants that delivers orders from the kitchen to specific tables using a web based dashboard and autonomous navigation.',
    imageAlt: 'Autonomous Food Delivery Robot Prototype',
    tags: ['Arduino', 'ESP32', 'WebTechnology'],
  }, ,
  {
  title: 'BLE based University Indoor Navigator (Pending)',
  description:
    'An indoor wayfinding solution using BLE beacons and 2D mapping to help visitors navigate university buildings where GPS signals are unreliable.',
  imageAlt: 'BLE Beacon based indoor navigation map interface',
  tags: ['BLE Beacon', 'IoT','ESP32', '2D Mapping', 'Indoor Positioning', 'MQTT'],
},
]

const skills = [
  { name: 'Embedded Systems', short: 'EMB' },
  { name: 'IoT Protocols (MQTT, LoRaWAN)', short: 'NET' },
  { name: 'Prototyping & Testing', short: 'LAB' },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-950/95 text-slate-100">
      <div className="relative overflow-hidden">
        {/* Floating accent glows */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-40 left-16 h-64 w-64 rounded-full bg-blue-600/30 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl" />
        </div>

        {/* Page container */}
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8">
          {/* Header / Nav */}
          <header className="sticky top-0 z-20 mb-6 bg-slate-950/70 backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between border border-slate-800/80 bg-slate-900/70 px-4 py-2.5 text-sm shadow-[0_0_40px_rgba(15,23,42,0.95)] shadow-blue-700/40 sm:rounded-full sm:px-6">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-12 items-center justify-center rounded-full border border-blue-500/60 bg-blue-600/25 text-xs font-semibold tracking-widest text-blue-100 shadow-[0_0_20px_rgba(37,99,235,0.7)]">
                  DA
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                  IoT Engineer
                </span>
              </div>

              <div className="hidden items-center gap-6 text-lg font-medium text-slate-300 sm:flex">
                <a href="#hero" className="hover:text-blue-400">
                  Hero
                </a>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
                <a href="#projects" className="hover:text-blue-400">
                  Projects
                </a>
                <a href="#skills" className="hover:text-blue-400">
                  Skills
                </a>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </div>

              <a
                href="#contact"
                className="rounded-full border border-blue-500/70 bg-blue-600/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-50 shadow-[0_0_30px_rgba(37,99,235,0.9)] transition hover:-translate-y-px hover:bg-blue-500"
              >
                Let&apos;s talk
              </a>
            </nav>
          </header>

          <main className="flex-1">
            {/* Hero */}
            <section
              id="hero"
              className="section-padding flex flex-col gap-10 md:flex-row md:items-center"
            >
              <div className="flex-1 space-y-7">
                <p className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-xs font-medium text-slate-300 shadow-[0_0_30px_rgba(15,23,42,0.9)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                  Available for freelance & collaborations
                </p>

                <div className="space-y-2">
                  <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                    Dulara Abhishek
                  </h1>
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
                    IoT Engineer/Fullstacks
                  </p>
                </div>

                <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                  I design and build connected systems that bridge the physical and digital
                  worlds—from low-power embedded devices to scalable cloud platforms. I care
                  deeply about reliability, observability, and elegant, maintainable hardware–
                  software interfaces.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-50 shadow-[0_0_35px_rgba(37,99,235,0.9)] transition hover:-translate-y-0.5 hover:bg-blue-500"
                  >
                    View projects
                    <span className="h-1.5 w-4 rounded-full bg-slate-100/80 shadow-[0_0_16px_rgba(248,250,252,0.9)]" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 transition hover:-translate-y-0.5 hover:border-blue-500/80 hover:text-blue-200"
                  >
                    Contact
                  </a>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="h-px w-8 bg-linear-to-r from-blue-500/80 to-transparent" />
                    Edge to cloud architectures
                  </div>
                </div>
              </div>

              {/* Photo */}
              <div className="mt-4 flex flex-1 justify-center md:mt-0">
                <div className="glass-surface relative flex h-64 w-64 items-center justify-center overflow-hidden sm:h-72 sm:w-72">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(37,99,235,0.5),transparent_55%)]" />
                  <img
                    src={profileImg}
                    alt="Dulara Abhishek - IoT Engineer"
                    className="relative h-55 w-55 rounded-3xl object-cover border border-slate-500/40 shadow-[0_0_30px_rgba(15,23,42,0.9)]"
                  />
                </div>
              </div>
            </section>

            {/* About */}
            <section id="about" className="section-padding border-t border-slate-800/60">
              <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
                <div className="space-y-4">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                    About Me
                  </h2>
                  <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                    As an IoT Engineer, I specialize in embedded firmware, sensor selection, secure connectivity
                    and cloud integrations that provide meaningful,
                    observable data. I enjoy designing architectures
                    that are robust, low-power, and easy to maintain.
                  </p>
                  <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                    I have hands-on experience with microcontrollers, industrial protocols,
                    wireless networks, and modern DevOps practices. Whether it&apos;s building a
                    proof of concept or hardening a production deployment, I focus on signal
                    quality, system reliability, and clear, well documented interfaces.
                  </p>
                </div>

                <div className="glass-surface relative p-5 text-xs text-slate-200">
                  <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Snapshot
                  </h3>
                  <dl className="space-y-2">
                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-400">Focus areas</dt>
                      <dd className="text-right">
                        Embedded IoT, Robotics, Automation Systems
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-400">Strengths</dt>
                      <dd className="text-right">
                        System thinking, debugging, rapid prototyping
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-slate-400">Preferred stack</dt>
                      <dd className="text-right">
                        Python, React, cloud IoT platforms, Robotics
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section
              id="projects"
              className="section-padding border-t border-slate-800/60"
            >
              <div className="mb-8 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Selected Projects
                  </h2>
                  <p className="mt-2 max-w-xl text-xm text-slate-300">
                    A curated set of recent work that highlights my approach to designing
                    reliable, observable IoT systems from device firmware to data
                    visualization.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {projects.map((project) => (
                  <article
                    key={project.title}
                    className="group flex flex-col rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 shadow-[0_0_35px_rgba(15,23,42,0.95)] transition-transform duration-200 hover:-translate-y-1 hover:border-blue-500/80 hover:shadow-[0_0_45px_rgba(37,99,235,0.7)]"
                  >
                    <div className="relative mb-4 h-32 overflow-hidden rounded-xl bg-slate-900">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_bottom,rgba(37,99,235,0.7),transparent_55%)] transition duration-200 group-hover:scale-105" />
                      <div className="relative flex h-full items-end justify-between p-3 text-[11px] text-slate-100">


                      </div>
                    </div>
                    <h3 className="mb-2 text-sm font-semibold text-slate-50">
                      {project.title}
                    </h3>
                    <p className="mb-3 text-xs leading-relaxed text-slate-300">
                      {project.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium tracking-wide text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section
              id="skills"
              className="section-padding border-t border-slate-800/60"
            >
              <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Skills
                  </h2>
                  <p className="mt-2 max-w-xl text-sm text-slate-300">
                    A snapshot of the tools and disciplines I use regularly across hardware,
                    firmware, and cloud.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-6">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center gap-2 rounded-2xl border border-slate-800/80 bg-slate-950/80 px-3 py-4 text-center text-xs text-slate-200 shadow-[0_0_25px_rgba(15,23,42,0.95)] transition-transform hover:-translate-y-0.5 hover:border-blue-500/80 hover:shadow-[0_0_35px_rgba(37,99,235,0.7)]"
                  >
                    <div className="mb-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-500/70 bg-linear-to-br from-blue-600/80 to-sky-500/70 text-[11px] font-semibold tracking-[0.16em] text-blue-50 shadow-[0_0_30px_rgba(37,99,235,0.9)] group-hover:scale-105">
                      {skill.short}
                    </div>
                    <span className="text-[11px] text-slate-100">{skill.name}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section
              id="contact"
              className="section-padding border-t border-slate-800/60"
            >
              <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
                <div className="space-y-3">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Contact
                  </h2>
                  <p className="max-w-lg text-sm text-slate-300">
                    Want to discuss a project, collaboration, or role? Reach out using any of the
                    channels below. I&apos;m happy to talk about opportunities where thoughtful
                    IoT design can make a real impact.
                  </p>
                </div>

                <div className="space-y-3 text-sm">
                  <ContactLink
                    label="GitHub"
                    href="https://github.com/abhishek-dulara"
                    handle="abhishek-dulara"
                  />
                  <ContactLink
                    label="LinkedIn"
                    href="https://www.linkedin.com/in/dulara-abhishek-405365137/?trk=public-profile-join-page"
                    handle="Dulara Abhishek"
                  />
                  <ContactLink
                    label="Facebook"
                    href="dulara.abhishek.7"
                    handle="Dulara Abhishek"
                  />
                  <ContactLink
                    label="WhatsApp"
                    href="https://wa.me/+94768861019"
                    handle="+94768861019"
                  />
                  <ContactLink
                    label="Email"
                    href="dularaabhishek91@gmail.com"
                    handle="dularaabhishek91@gmail.com"
                  />
                </div>
              </div>
            </section>
          </main>

          <footer className="mt-4 border-t border-slate-800/70 pt-4 text-[11px] text-slate-500">
            <p>
              © {new Date().getFullYear()} Dulara Abhishek. Crafted with React & Tailwind in a
              minimalist dark theme.
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

function ContactLink({ label, href, handle }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between gap-4 rounded-full border border-slate-800/80 bg-slate-950/80 px-4 py-2 text-slate-200 shadow-[0_0_25px_rgba(15,23,42,0.95)] transition hover:-translate-y-px hover:border-blue-500/80 hover:bg-slate-900/80"
    >
      <span className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
        {label}
      </span>
      <span className="flex items-center gap-3 text-xs text-slate-100">
        <span className="text-slate-300">{handle}</span>
        <span className="h-px w-6 bg-linear-to-r from-blue-500/80 to-transparent group-hover:w-8 transition-all" />
      </span>
    </a>
  )
}

export default App