"use client";

import { motion } from "framer-motion";
import { Cpu, Layout, Server, Database, PenTool, CheckCircle2 } from "lucide-react";

const skillCategories = [
  {
    id: "ml",
    title: "Machine Learning & AI",
    icon: Cpu,
    color: "from-primary-light to-primary",
    badgeColor: "bg-primary-light/10 text-primary-light border-primary-light/20 hover:border-primary-light/40",
    skills: [
      "Python",
      "Deep Learning (CNN)",
      "PyTorch & TensorFlow",
      "Computer Vision (OpenCV)",
      "Scikit-Learn",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Layout,
    color: "from-secondary to-primary",
    badgeColor: "bg-secondary/10 text-secondary border-secondary/20 hover:border-secondary/40",
    skills: [
      "Next.js 15 (App Router)",
      "React 19 & TypeScript",
      "Tailwind CSS",
      "HTML5 & CSS3",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    color: "from-primary to-accent",
    badgeColor: "bg-accent/10 text-accent border-accent/20 hover:border-accent/40",
    skills: [
      "Node.js & Express",
      "FastAPI & Flask",
      "CI4 & Laravel",
      "Docker",
    ],
  },
  {
    id: "database",
    title: "Database Management",
    icon: Database,
    color: "from-secondary to-accent",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:border-cyan-500/40",
    skills: [
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    id: "uiux",
    title: "UI/UX & Design",
    icon: PenTool,
    color: "from-accent to-primary-light",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20 hover:border-pink-500/40",
    skills: [
      "Figma UI Design",
      "User Interface Prototyping",
      "Responsive UI/UX Standards",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-24 px-6 bg-background/50">
      {/* Background glow blobs */}
      <div className="glow-primary bottom-0 left-1/4 w-[350px] h-[350px] opacity-10" />
      <div className="glow-accent top-0 right-1/4 w-[300px] h-[300px] opacity-10" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-secondary mb-3 flex items-center gap-1.5">
            <Cpu className="w-4 h-4" />
            <span>02 . Keahlian</span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-black font-sans tracking-tight">
            Kekuatan <span className="text-gradient-primary">Spesialisasi Teknis</span>
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/5">
                    <div className={`p-3 rounded-xl bg-gradient-to-tr ${category.color} text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-sans text-white">
                        {category.title}
                      </h4>
                      <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mt-0.5">
                        {category.skills.length} Keahlian Utama
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold font-sans border transition-all duration-200 ${category.badgeColor}`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 opacity-70" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

