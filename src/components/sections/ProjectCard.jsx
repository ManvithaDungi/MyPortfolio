import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import Tag from '../ui/Tag';
import Button from '../ui/Button';

const ProjectCard = ({ project, index }) => {
   return (
      <Card variant="project" className="project-card">
         <div className="project-card-header">
            <span className="project-number">№{String(index + 1).padStart(2, '0')}</span>
            <h3 className="project-title">{project.title}</h3>
         </div>

         <p className="project-desc">{project.overview}</p>

         {project.features && (
            <ul className="project-features">
               {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
               ))}
            </ul>
         )}

         <div className="project-tags">
            {project.stack.split(' · ').map((tech, i) => (
               <Tag key={i}>{tech}</Tag>
            ))}
         </div>

         {project.image && (
            <div className="project-image-container">
               <img loading="lazy" src={`${process.env.PUBLIC_URL}${project.image}`} alt={project.title} className="card-image" />
            </div>
         )}

         <div className="project-actions">
            {project.repo && (
               <Button variant="ghost" size="sm" href={project.repo} target="_blank">
                  GitHub ↗
               </Button>
            )}
            {project.live && (
               <Button variant="ghost" size="sm" href={project.live} target="_blank">
                  Live Demo ↗
               </Button>
            )}
         </div>
      </Card>
   );
};

export default ProjectCard;
