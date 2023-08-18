'use client';

import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Container,
  Grid,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { useRouter } from "next/navigation";

export const NavBar: React.FC<{}> = () => {
  const navigate = useRouter()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>gguzm4n89</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" onClick={()=> navigate.push('/')}>MyLibrary</Button>
                  <Button variant="outlined">Login</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
