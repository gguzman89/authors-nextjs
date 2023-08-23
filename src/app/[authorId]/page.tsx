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
import useSWR from "swr";
import * as AuthorApi from "@/network/library-api";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const authorId = params.authorId;

  const { data: author, isLoading: authorLoading } = useSWR(
    ["getAuthorByKey", authorId],
    () => AuthorApi.getAuthorByKey(authorId)
  );

  if (authorLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );

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
              src="https://covers.openlibrary.org/a/olid/OL229501A-M.jpg"
              style={{ width: "100%", borderRadius: "8px" }}
              alt="author"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
