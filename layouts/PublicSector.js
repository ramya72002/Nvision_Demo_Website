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
    <Container maxWidth="md" style={{ backgroundColor: '#FAEEFA' }}>
      <Typography variant="h4" className="text-4xl font-bold text-center mb-8">
        {title}
      </Typography>

      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#edf6f5' }}>
        <Typography variant="h6">{content}</Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, margin: 0, mt: 3, backgroundColor: '#edf6f5' }}>
  <Typography variant="h5">Certifications:</Typography>
  <ul>
    {certifications.map((certification, index) => (
      <li key={index}>{certification}</li>
    ))}
  </ul>
</Paper>

      <Paper elevation={3} sx={{ p: 4, margin: 0, mt: 3, backgroundColor: '#edf6f5' }}>
        <Typography variant="h4">Acquisition:</Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h5">Naics:</Typography>
            <ul>
              {acquisition.naics.map((naic, index) => (
                <li key={index}>{naic}</li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">Psc:</Typography>
            <ul>
              {acquisition.psc.map((psc, index) => (
                <li key={index}>{psc}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Paper>

      <Paper elevation={3} sx={{ p: 4, margin: 0, mt: 3, backgroundColor: '#edf6f5' }}>
        <Typography variant="h4">Contract Vehicles:</Typography>
        {Object.keys(contractVehicles).map((vehicle, index) => (
          <Paper key={index} elevation={3} sx={{ p: 4, margin: 0, mt: 3, backgroundColor: '#d9f0f2' }}>
            <Typography variant="h5">{vehicle}</Typography>
            <Typography>{contractVehicles[vehicle]}</Typography>
          </Paper>
        ))}
      </Paper>
      {/* Add space above the footer */}
      <div style={{ marginTop: '20px' }}>
      </div>
    </Container>
  );
};

export default PublicSector;
