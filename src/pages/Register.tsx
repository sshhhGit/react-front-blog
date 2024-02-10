import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";


const defaultTheme = createTheme();
const Register = () => {
    return(
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <Container maxWidth="lg">
            <main>

            </main>
          </Container>
          {/*<Footer
            title="Footer"
            description="Something here to give the footer a purpose!"
          />*/}
        </ThemeProvider>
    );
}

export default Register;
