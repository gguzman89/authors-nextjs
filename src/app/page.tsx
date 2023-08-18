import { CardComponent } from "@/components/Card/cardComponent";
import { HeaderComponent } from "@/components/Header/headerComponent";
import { Button, Container } from "@mui/material";

export default function Home() {
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title="Hola mundo"
        description="Any description!"
        element={<Button variant="contained">Press here...</Button>}
      />
      <CardComponent />
    </Container>
  );
}
