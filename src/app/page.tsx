import Image from 'next/image'
import { Button, Container } from '@mui/material'

export default function Home() {
  // TODO: if starting wrong app, we should comment anything code line 
  return (
    <>
      <Container>
        <Button variant='contained'>Material UIs</Button>
        <Button>Material UIs</Button>
        <Button variant='contained'>Material UIs</Button>
      </Container>
    </>
  )
}
