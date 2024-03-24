import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';

const About = ({ data }) => {
  const {
    frontmatter: { title, sections },
  } = data;

  return (
    <div style={{ backgroundColor: '#FAEEFA'}}>
      <Typography variant="h3" className='text-4xl font-bold text-center mb-8' style={{ backgroundColor: '#FAEEFA' }}>
        {title}
      </Typography>
      <Grid container spacing={2} style={{ backgroundColor: '#FAEEFA', margin: '-20px' }}>
        {sections.map((section, index) => (
          <Grid item xs={12} key={index}>
            <Paper elevation={3} className="section-box" style={{ padding: '16px', borderRadius: '20px' }}>
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
