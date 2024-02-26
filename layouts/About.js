import React from 'react';

const About = ({ data }) => {
  const {
    frontmatter: { title, sections },
  } = data;

  return (
    <div>
      <h1 className='text-4xl font-bold text-center mb-8'>{title}</h1>
      {sections.map((section, index) => (
        <div key={index} className="section-box">
          <div className="section-content">
            <img src={section.image} alt={section.title} />
            <div>
              <h3>{section.title}</h3>
              <p>{section.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
