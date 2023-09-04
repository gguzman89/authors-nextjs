"use client";

import { CardComponent } from "@/components/Card/cardComponent";
import { HeaderComponent } from "@/components/Header/headerComponent";
import * as AuthorApi from "@/network/library-api";
import {
  Autocomplete,
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination,
  TextField,
} from "@mui/material";
import React from "react";
import { AuthorResults } from "./author";

export default function Home() {
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(1);

  const [allAuthors, setAllAuthors] = React.useState<AuthorResults>();
  const [loading, setLoading] = React.useState<boolean>(true);

  const top100Films = ["Rowling", "Julio Cortázar", "Gabriel García Márquez"];

  const [inputValue, setInputValue] = React.useState<string | null>(
    top100Films[0]
  );

  React.useEffect(() => {
    setLoading(true);

    AuthorApi.getAuthorSearch(inputValue!, { page }).then((result) => {
      let integer = Math.trunc(result.numFound / AuthorApi.pageSize);
      let offset = result.numFound % AuthorApi.pageSize === 0 ? 0 : 1;

      setCount(integer + offset);
      setAllAuthors(result);
      setTimeout(() => setLoading(false), 1000);
    });
  }, [page, inputValue]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const inputChange = (
    event: React.ChangeEvent<unknown>,
    value: string | null
  ) => {
    setInputValue(value);
    setPage(1);
  };

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title="Hola mundo"
        description="Searching for Authors..."
        key="searchHeader"
        element={
          <Autocomplete
            size="small"
            id="controllable-states"
            disablePortal
            options={top100Films}
            // https://stackoverflow.com/questions/75818761/material-ui-autocomplete-warning-a-props-object-containing-a-key-prop-is-be
            renderOption={(props, option) => {
              return (
                <li {...props} key={option}>
                  {option}
                </li>
              );
            }}
            value={inputValue}
            onChange={inputChange}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Search..." />
            )}
          />
        }
      />
      {allAuthors?.docs.length !== 0 ? (
        <>
          <Grid container spacing={2} direction="row" sx={{ my: 2 }}>
            {allAuthors?.docs.map((author) => (
              <Grid item key={author.key} xs={3}>
                <CardComponent
                  key={author.key}
                  name={author.name}
                  top_work={author.top_work}
                  type={author.type}
                  image={`https://covers.openlibrary.org/a/olid/${author.key}-M.jpg`}
                  id={author.key}
                />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Pagination
              count={count}
              page={page}
              onChange={handleChange}
              variant="outlined"
              color="primary"
              size="large"
              sx={{ mb: 3 }}
            />
          </Box>
        </>
      ) : (
        "No data available"
      )}
    </Container>
  );
}
