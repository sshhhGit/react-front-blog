import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from "@mui/material/Divider";
import {Breadcrumbs} from "@mui/material";

/*function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}*/

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Login() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        로그인
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="아이디"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="비밀번호"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="아이디 저장"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            size="large"
                            color="success"
                        >
                            로그인
                        </Button>
                        <Grid container alignItems="center" justifyContent="center" >
                            <Breadcrumbs separator="|" aria-label="breadcrumb">
                                <Link underline="hover" color="inherit" href="/">
                                    아이디 찾기
                                </Link>
                                <Link underline="hover" color="inherit" href="/">
                                    비밀번호 찾기
                                </Link>
                                <Link underline="hover" color="inherit" href={"/sign-up"}>
                                    회원가입
                                </Link>
                            </Breadcrumbs>
                        </Grid>
                        <Grid item sx={{ mt: 2, mb: 2 }}>
                            <Divider />
                        </Grid>
                        <Grid container alignItems="center" justifyContent="center" sx={{ mt: 2, mb: 1 }}>
                            <Grid item>
                                <Typography variant="button" display="block" align="center" gutterBottom>
                                    간편 로그인
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" justifyContent="center" sx={{ gap: 2 }}>
                            <Grid item>
                                <Avatar alt="kakao" src="/kakako.png" />
                            </Grid>
                            <Grid item>
                                <Avatar alt="naver" src="/naver.png" />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/*<Copyright sx={{ mt: 8, mb: 4 }} />*/}
            </Container>
        </ThemeProvider>
    );
}
