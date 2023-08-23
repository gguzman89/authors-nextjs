"use client";

import { CardComponent } from "@/components/Card/cardComponent";
import { HeaderComponent } from "@/components/Header/headerComponent";
import * as AuthorApi from "@/network/library-api";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import useSWR from "swr";

export default function Home() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const search = "rowling";

  const { data: authorResults, isLoading: authorLoading } = useSWR(
    ["getAuthorSearch", search],
    () => AuthorApi.getAuthorSearch(search)
  );

  if (authorLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title="Hola mundo"
        description="Any description!"
        element={<Button variant="contained">Press here...</Button>}
      />
      {authorResults?.docs.length !== 0 ? (
        <Grid container spacing={2} direction="row" sx={{ my: 2 }}>
          {authorResults?.docs.map((author) => (
            <Grid item key={author.key} xs={3}>
              <CardComponent
                key={author.key}
                name={author.name}
                top_work={author.top_work}
                type={author.type}
                image="https://covers.openlibrary.org/a/olid/OL229501A-M.jpg"
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        "No data available"
      )}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Pagination
          count={10}
          page={page}
          onChange={handleChange}
          variant="outlined"
          color="primary"
          size="large"
          sx={{ mb: 3 }}
        />
      </Box>
    </Container>
  );
}
