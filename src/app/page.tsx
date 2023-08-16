import { Button, Container } from "@mui/material";
import Link from "next/link";

export default function Home() {
  // TODO: if starting wrong app, we should comment anything code line
  return (
    <>
      <Container sx={{ mt: 9 }}>
        <Button variant="contained">Material UIs</Button>
        <Button>Material UIs</Button>
        <Link href="/qoiwjdqowi">Authors</Link>
      </Container>
    </>
  );
}
