import React from 'react';

const PublicSector = ({ data }) => {
  const {
    frontmatter: { title, content },
  } = data;

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 leading-relaxed">{content}</p>
        </div>
      </div>
    </section>
  );
};

export default PublicSector;
