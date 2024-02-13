import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Rating} from "@mui/material";
import Avatar from "@mui/material/Avatar";

const defaultTheme = createTheme();

const Detail = () => {
    const { id } = useParams();

    const [value, setValue] = React.useState<number | null>(2);

    // 이 부분에서 실제 데이터를 가져오는 로직을 구현하셔야 합니다.
    // 여기서는 임시로 하드코딩한 데이터를 사용합니다.
    const post = {
        id: "8",
        title: 'Post title8',
        date: 'ABCD',
        description: '테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    <Grid item xs={12} sm={6} sx={{ marginBottom: 2 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h4" gutterBottom>
                                    {post.title}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                                    {post.date}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {post.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ marginBottom: 2 }}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="300px"
                                image={post.image}
                                alt={post.imageLabel}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ marginBottom: 2 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h4" gutterBottom>
                                    내용 영역1
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ marginBottom: 2 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h4" gutterBottom>
                                    내용 영역2
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ marginBottom: 2 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h4" gutterBottom>
                                    내용 영역3
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ marginBottom: 2 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h4" gutterBottom>
                                    내용 영역4
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ marginBottom: 2 }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h4" gutterBottom>
                                    내용 영역5
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ marginBottom: 2 }}>
                        <Card>
                            <CardContent>
                                <Grid item sx={{ marginBottom: 2 }}>
                                    <Rating name="read-only" value={value} readOnly />
                                </Grid>
                                {/* 댓글 목록 */}
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item>
                                        <Avatar alt="Remy Sharp"  />
                                    </Grid>
                                    <Grid justifyContent="left" item xs zeroMinWidth>
                                        <h4 style={{ margin: 0, textAlign: "left" }}>닉네임 님</h4>
                                        <p style={{ textAlign: "left" }}>
                                            ~~ 댓글 내용 ~~
                                        </p>
                                        <p style={{ textAlign: "left", color: "gray", fontSize: "small"}}>
                                            2024-01-20 오전 11:02
                                        </p>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ marginBottom: 2 }}>
                        <Card>
                            <CardContent>
                                {/* 댓글 입력 폼 */}
                                <Grid container alignItems="center" justifyContent="space-between">
                                    <Grid item sx={{ width: '90%' }}>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </Grid>
                                    <Grid item sx={{ width: '90%' }}>
                                        <TextField
                                            id="comment"
                                            label="고객님의 평가를 남겨주세요"
                                            variant="standard"
                                            fullWidth
                                            margin="normal"
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="outlined"
                                            color="success"
                                            size="medium"
                                            // onClick={handleCommentSubmit}  // 댓글 제출 버튼 클릭 핸들러
                                        >
                                            등록
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </main>
            </Container>
        </ThemeProvider>
    );
}

export default Detail;
