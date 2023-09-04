"use client";

import {
  Container,
  Box,
  Grid,
  Typography,
  Divider,
  CircularProgress,
} from "@mui/material";
import { useParams } from "next/navigation";
import useSWR from "swr";
import * as MyAuthorApi from "@/network/authors-api";

export default function Page() {
  const params = useParams();
  const authorId = params.authorId?.toString() || "";

  const { data: authorsDB, isLoading } = useSWR('key', MyAuthorApi.getAuhors)
  const { data: author, isLoading: isAuthor } = useSWR('1', MyAuthorApi.getAuthorByKey)
  
  console.log(authorsDB)
  console.log(author)


  if (isLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );

//   if (author?.bio === undefined)
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
//         <Typography variant="h4">Author not found</Typography>
//       </Box>
//     );

  return (
    <Box sx={{ width: "100%" }}>
      <Container maxWidth="xl">
        <Grid container sx={{ mt: 2 }} columnSpacing={2}>
          <Grid item xs={6}>
            <Typography sx={{ mb: 1.5 }} variant="h1">
              {authorsDB![0].name} 
            </Typography>
            <Divider />
            <Typography sx={{ mt: 1.5 }} variant="body1">
              {/* formatt link wikipedia */}
              {authorsDB![0].email}
            </Typography>
            {/* <Box sx={{ mt: 2 }}>
              <Chip
                color="primary"
                variant="outlined"
                label={author?.birth_date}
              />
            </Box> */}
          </Grid>
          <Grid item xs={6}>
            <img
              src={`https://covers.openlibrary.org/a/olid/OL23919A-M.jpg`}
              style={{ width: "100%", borderRadius: "8px" }}
              alt="author"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
