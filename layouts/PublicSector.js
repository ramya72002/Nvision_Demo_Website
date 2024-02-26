import React from 'react';

const PublicSector = ({ data }) => {
  const {
    frontmatter: { title, content },
  } = data;

  return (
    <div className="publicSectorContainer">
      <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
      <div className="publicSectorContent" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PublicSector;
