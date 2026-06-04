import React from 'react';
import { Container, Box, Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';

const PerfilUsuario = () => {
  const datosAlumno = {
    nombre: "Mauricio Josue Virreira",
    rol: "Alumno - Desarrollador Frontend",
    institucion: "Facultad de Ingeniería - UNJu"
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 2 }}>
        <Paper elevation={4} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 1 }}>
            Perfil del Alumno
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Información del integrante del equipo asignado al desarrollo del módulo visual.
          </Typography>
          
          <Divider />

          <List aria-label="informacion academica">
            <ListItem disableGutters>
              <ListItemText 
                primary="Nombre Completo" 
                secondary={datosAlumno.nombre} 
              />
            </ListItem>
            <Divider />
            <ListItem disableGutters>
              <ListItemText 
                primary="Rol" 
                secondary={datosAlumno.rol} 
              />
            </ListItem>
            <Divider />
            <ListItem disableGutters>
              <ListItemText 
                primary="Institución" 
                secondary={datosAlumno.institucion} 
              />
            </ListItem>
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default PerfilUsuario;