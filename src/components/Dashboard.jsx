import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, Paper } from '@mui/material';

const Dashboard = () => {
  const metricas = [
    { id: 1, titulo: "Total de Proyectos", valor: "12", color: "#1976d2" },
    { id: 2, titulo: "Proyectos en Curso", valor: "5", color: "#2e7d32" }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Dashboard del Sistema
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Bienvenido al sistema de gestión de proyectos. A continuación, se detallan las métricas clave del estado de nuestros trabajos.
        </Typography>

        <Grid container spacing={3} sx={{ mt: 1 }}>
          {metricas.map((metrica) => (
            <Grid item xs={12} sm={6} key={metrica.id}>
              <Card component={Paper} elevation={3} sx={{ borderLeft: `6px solid ${metrica.color}` }}>
                <CardContent>
                  <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                    {metrica.titulo}
                  </Typography>
                  <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', color: metrica.color }}>
                    {metrica.valor}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;