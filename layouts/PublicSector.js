import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';

const PublicSector = ({ data }) => {
  const {
    frontmatter: { title, content, certifications, acquisition, 'contract vehicles': contractVehicles },
  } = data;

  return (
    <div>
      <Typography variant="h4" align="center" className='text-4xl font-bold mb-8'>{title}</Typography>
      <Typography variant="h5">{content}</Typography>

      <Typography variant="h5">Certifications:</Typography>
      <ul>
        {certifications.map((certification, index) => (
          <li key={index}>{certification}</li>
        ))}
      </ul>

      <Typography variant="h4">Acquisition:</Typography>
      <Typography variant="h5">NAICS:</Typography>
      <ul>
        {acquisition.naics.map((naic, index) => (
          <li key={index}>{naic}</li>
        ))}
      </ul>

      <Typography variant="h5">PSC:</Typography>
      <ul>
        {acquisition.psc.map((psc, index) => (
          <li key={index}>{psc}</li>
        ))}
      </ul>

      <Typography variant="h4">DUNSU / UEI / CAGE CODE:</Typography>
      <Typography>{acquisition['DUNSU / UEI / CAGE CODE']}</Typography>

      <Typography variant="h4">Contract Vehicles:</Typography>
      {Object.keys(contractVehicles).map((vehicle, index) => (
        <div key={index}>
          <Typography variant="h5">{vehicle}</Typography>
          <Typography>{contractVehicles[vehicle]}</Typography>
        </div>
      ))}
    </div>
  );
};

export default PublicSector;
