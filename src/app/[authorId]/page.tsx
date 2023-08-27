"use client";

import {
  Container,
  Box,
  Grid,
  Typography,
  Divider,
  Chip,
  CircularProgress,
} from "@mui/material";
import { useParams } from "next/navigation";
import useAuthor from "@/hooks/useAuthor";

export default function Page() {
  const params = useParams();
  const authorId = params.authorId?.toString() || "";

  const { author, authorLoading } = useAuthor(authorId);

  if (authorLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );

  if (author === null) return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <Typography variant="h4">Author not found</Typography>
    </Box>
  )

  return (
    <Box sx={{ width: "100%" }}>
      <Container maxWidth="xl">
        <Grid container sx={{ mt: 2 }} columnSpacing={2}>
          <Grid item xs={6}>
            <Typography sx={{ mb: 1.5 }} variant="h1">
              {author?.name}
            </Typography>
            <Divider />
            <Typography sx={{ mt: 1.5 }} variant="body1">
              {author?.bio?.value}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Chip
                color="primary"
                variant="outlined"
                label={author?.birth_date}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <img
              src={`https://covers.openlibrary.org/a/olid/${authorId}-M.jpg`}
              style={{ width: "100%", borderRadius: "8px" }}
              alt="author"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
