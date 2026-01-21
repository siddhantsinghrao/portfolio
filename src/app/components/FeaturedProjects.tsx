import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  role: string;
  year: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

function ProjectCard({
  title,
  description,
  role,
  year,
  tags,
  image,
  liveUrl,
  githubUrl,
}: ProjectProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 items-stretch">
      {/* Project Image */}
      <div className="bg-[#1A1A1A] rounded-lg p-6 border border-white/5 h-full flex items-center">
        <div className="bg-white rounded overflow-hidden w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-6 lg:pt-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Project Info */}
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <p className="text-gray-500 mb-1">PROJECT</p>
            <p className="text-white">{role}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">YEAR</p>
            <p className="text-white">{year}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <p className="text-gray-500 text-xs mb-3">
            TECH STACK / SOLUTIONS
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 pt-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#D4FF00] group"
            >
              <span className="border-b border-transparent group-hover:border-[#D4FF00]">
                LIVE PREVIEW
              </span>
              <ExternalLink size={14} />
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs group hover:text-[#D4FF00]"
            >
              <span className="border-b border-transparent group-hover:border-[#D4FF00]">
                SEE GITHUB REPO
              </span>
              <Github size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  const projects: ProjectProps[] = [
    {
      title: 'AI-Powered Solutions Platform for Cognus Technology',
      description:
        'AI-driven solutions enabling analytics, conversational AI, and voice automation to help businesses scale communication and improve efficiency.',
      role: 'Stack of AI',
      year: '2025',
      tags: ['AI Analytics', 'AI Chatbot', 'AI Calling Agent'],
      image:
        // 'https://samplelib.com/lib/preview/png/sample-bumblebee-400x300.png',
        '../../src/assets/bccb90f8c4203b5ec113352ec9459d021bd9ff98.png',
      liveUrl: 'https://www.cognustechnology.com/',
    },
    {
      title: 'AI-Powered Education & Study Abroad Platform for Gradding.com',
      description:
        'An AI-powered platform designed to enhance student counseling, engagement, and operational efficiency through intelligent automation.',
      role: 'AI-Driven EdTech Platform',
      year: '2025',
      tags: ['AI Analytics', 'AI Chatbot', 'AI Calling Agent'],
      image:
        // 'https://samplelib.com/lib/preview/png/sample-bumblebee-400x300.png',
        'https://i.ibb.co/YTQfJdw3/5d04433138b8d7a601804fb888065e8f6b20473d.png',
      liveUrl: 'https://www.gradding.com/',
    },
    {
      title: 'AI-Powered Crypto Analytics Platform for Money Scalper',
      description:
        'A real-time crypto analytics platform delivering intelligent trading signals and market insights.',
      role: 'Crypto Analytics Platform',
      year: '2025',
      tags: [
        'Real-Time Crypto Analytics',
        'Market Analysis',
        'Trading Signals',
      ],
      image:
        // 'https://samplelib.com/lib/preview/png/sample-bumblebee-400x300.png',
        '../../src/assets/5d04433138b8d7a601804fb888065e8f6b20473d.png',

      liveUrl: 'https://www.moneyscalper.com/',
    },
  ];

  return (
    <section id="work" className="py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            FEATURED PROJECTS
          </h2>
          <p className="text-gray-400 text-sm max-w-md">
            Selected projects showcasing AI-driven product strategy,
            scalability, and real-world impact.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-20">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
