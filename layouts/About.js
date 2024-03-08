import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';

const About = ({ data }) => {
  const {
    frontmatter: { title, sections },
  } = data;

  return (
    <div>
      <Typography variant="h3" align="center" className='text-4xl font-bold mb-8'>
        {title}
      </Typography>
      <Grid container spacing={2}>
        {sections.map((section, index) => (
          <Grid item xs={12} key={index}>
            <Paper elevation={3} className="section-box">
              <Grid container spacing={2} className="section-content">
                <Grid item>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h5">{section.title}</Typography>
                    <img src={section.image} alt={section.title} style={{ width: '5%', marginLeft: '1rem' }} />
                  </div>
                  <Typography variant="body1">{section.content}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default About;
