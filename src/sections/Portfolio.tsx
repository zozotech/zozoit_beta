import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ExternalLink, Plus } from 'lucide-react';

const Portfolio = () => {
  return (
    <section className="py-24 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-primary font-bold uppercase tracking-widest text-sm"
            >
              Selected Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mt-4"
            >
              Case Studies of <span className="text-gradient">Success</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all inline-block"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brand-primary font-bold text-sm mb-2 uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6 max-w-md">
                  {project.description}
                </p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </Link>
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 transition-transform"
                  >
                    <Plus size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
