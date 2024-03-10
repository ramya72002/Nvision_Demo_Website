import React from 'react';
import { Typography, Paper, Container, Grid } from '@mui/material';

const PublicSector = ({ data }) => {
  const {
    frontmatter: {
      title,
      content,
      certifications,
      acquisition,
      'contract vehicles': contractVehicles,
    },
  } = data;

  return (
  
    <Container maxWidth="md">
           <Paper elevation={3} sx={{ p: 4,margin: '0 -16px'}}>
        <Typography variant="h4" align="center" sx={{ mb: 4,mt :0 }}>
    {title}
  </Typography>
 
       
        <Typography variant="h6">{content}</Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, margin: 0, mt: 3 }}>
        <Typography variant="h5">Certifications:</Typography>
        <ul>
          {certifications.map((certification, index) => (
            <li key={index}>{certification}</li>
          ))}
        </ul>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, margin: 0, mt: 3 }}>
        <Typography variant="h4">Acquisition:</Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h5">NAICS:</Typography>
            <ul>
              {acquisition.naics.map((naic, index) => (
                <li key={index}>{naic}</li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">PSC:</Typography>
            <ul>
              {acquisition.psc.map((psc, index) => (
                <li key={index}>{psc}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, margin: 0, mt: 3 }}>
        <Typography variant="h4">Contract Vehicles:</Typography>
        {Object.keys(contractVehicles).map((vehicle, index) => (
          <div key={index}>
            <Typography variant="h5">{vehicle}</Typography>
            <Typography>{contractVehicles[vehicle]}</Typography>
          </div>
        ))}
      </Paper>
    </Container>
  );
};

export default PublicSector;
