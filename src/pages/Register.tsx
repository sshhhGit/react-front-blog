import { useState } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as React from "react";
import Grid from "@mui/material/Grid";

const defaultTheme = createTheme();

const Register = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // const handleTitleChange = (event) => {
    //     setTitle(event.target.value);
    // };

    // const handleContentChange = (event) => {
    //     setContent(event.target.value);
    // };

    const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            title: data.get('title'),
            content: data.get('content'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            id="title"
                            label="제목"
                            variant="outlined"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            id="content"
                            label="내용"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={content}
                            onChange={(event) => setContent(event.target.value)}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} xl={6} justifyContent="flex-end" alignItems="flex-end">
                        <Button
                            variant="outlined"
                            // onClick={handleSave}
                        >
                            저장
                        </Button>
                    </Grid>
                </main>
            </Container>
        </ThemeProvider>
    );
}

export default Register;
