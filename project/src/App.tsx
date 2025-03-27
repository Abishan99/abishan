import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';

function App() {
  const animation = useSpring({
    from: { transform: 'translateY(100px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    config: { tension: 100, friction: 20 },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(255,255,255,0)_100%)]" />
        <animated.div style={animation} className="container mx-auto px-4 text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            John Doe
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Full Stack Developer & UI/UX Designer
          </motion.p>
          <div className="flex justify-center space-x-6">
            <SocialLink icon={<Github />} href="https://github.com" />
            <SocialLink icon={<Linkedin />} href="https://linkedin.com" />
            <SocialLink icon={<Mail />} href="mailto:contact@example.com" />
          </div>
        </animated.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <SectionTitle icon={<User />} title="About Me" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Profile" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate developer with 5+ years of experience in creating beautiful and functional web applications. 
                I specialize in React, Node.js, and modern web technologies.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <Skill title="React" level={90} />
                <Skill title="Node.js" level={85} />
                <Skill title="TypeScript" level={88} />
                <Skill title="UI/UX" level={82} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle icon={<Code2 />} title="Projects" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard 
              title="E-Commerce Platform"
              description="A full-stack e-commerce solution with React and Node.js"
              image="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <ProjectCard 
              title="Social Media Dashboard"
              description="Analytics dashboard with real-time data visualization"
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <ProjectCard 
              title="AI Chat Application"
              description="Real-time chat app with AI-powered responses"
              image="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <SectionTitle icon={<Briefcase />} title="Get in Touch" />
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea 
                placeholder="Your Message" 
                rows={6}
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <motion.a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
    >
      {icon}
    </motion.a>
  );
}

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center justify-center mb-12">
      <span className="mr-3">{icon}</span>
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
}

function Skill({ title, level }: { title: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span>{title}</span>
        <span>{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
        />
      </div>
    </div>
  );
}

function ProjectCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-gray-800 rounded-lg overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a 
          href="#" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300"
        >
          View Project <ExternalLink className="ml-2 w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

export default App;