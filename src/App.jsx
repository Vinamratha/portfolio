export default function PortfolioWebsite() {
  const projects = [
    {
      title: 'FinFlow Wallet System',
      description:
        'A Laravel-based digital wallet and peer-to-peer money transfer platform with secure transaction handling and REST APIs.',
      tech: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Render', 'Railway'],
      github: 'https://github.com/Vinamratha/finflow-wallet-system',
      demo: 'https://finflow-wallet-system.onrender.com/',
    },
    /*{
      title: 'Job Application Tracker',
      description:
        'A productivity application to track job applications, interview stages, recruiter notes, and application statuses.',
      tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      github: 'https://github.com/Vinamratha/job-tracker',
      demo: 'https://job-tracker.onrender.com',
    },*/
  ];

  const skills = [
    'PHP',
    'Laravel',
    'MySQL',
    'REST APIs',
    'JavaScript',
    'HTML/CSS',
    'GitHub',
    'Render',
    'Railway',
    'SQL',
    'Backend Development',
    'Debugging',
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="px-6 md:px-16 py-24 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
              Backend Engineer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Vinamratha
              <span className="block text-gray-400">Shettigar</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              Backend developer with 10+ years of experience building reliable
              PHP applications for payments, financial services, and enterprise
              systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/Vinamratha_Shettigar_Resume.pdf"
                target="_blank"
                className="bg-white text-black px-6 py-3 rounded-2xl font-medium hover:scale-105 transition"
              >
                Download Resume
              </a>

              <a
                href="#projects"
                className="bg-white text-black px-6 py-3 rounded-2xl font-medium hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="https://github.com/Vinamratha"
                target="_blank"
                className="border border-white/20 px-6 py-3 rounded-2xl hover:bg-white/10 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/profile.JPG"
              alt="Vinamratha Shettigar"
              className="w-72 h-72 object-cover rounded-[2rem] border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-16 py-20 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-gray-300 leading-relaxed text-lg">
            I specialize in backend development using PHP and Laravel, with
            hands-on experience in payment systems, APIs, database design, and
            production issue resolution. I enjoy building scalable systems with
            clean architecture and reliable performance.
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-16 py-20 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Skills</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-6 md:px-16 py-20 border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-xl"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-2 rounded-xl bg-black border border-white/10 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 text-center border border-white/20 py-3 rounded-2xl hover:bg-white/10 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex-1 text-center bg-white text-black py-3 rounded-2xl font-medium hover:scale-105 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 md:px-16 py-20 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Experience Highlights</h2>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-3">
                Backend & Fintech Systems
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Built and supported enterprise backend systems in payments and
                financial services environments with focus on APIs, SQL,
                debugging, production support, and reliable application
                performance.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-3">
                Cloud & Deployment
              </h3>

              <p className="text-gray-300 leading-relaxed">
                Experience deploying Laravel applications using modern cloud
                hosting platforms and Git-based workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 md:px-16 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Great
          </h2>

          <p className="text-gray-300 text-lg mb-10">
            Open to Backend Engineer, PHP Developer, and API-focused roles in
            Canada.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:vinamrathashettigar1@email.com"
              className="bg-white text-black px-8 py-4 rounded-2xl font-medium hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="https://linkedin.com/in/vinamrathars"
              target="_blank"
              className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white/10 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
