import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

/*const sections = [
  { title: '메뉴1', url: '#' },
  { title: '메뉴2', url: '#' },
  { title: '메뉴3', url: '#' },
  { title: '메뉴4', url: '#' },
  { title: '메뉴5', url: '#' },
  { title: '메뉴6', url: '#' },
  { title: '메뉴7', url: '#' },
  { title: '메뉴8', url: '#' },
  { title: '메뉴9', url: '#' },
  { title: '메뉴10', url: '#' },
];*/

const mainFeaturedPost = {
  title: '메뉴1',
  description:
    "~~~~~~메뉴의 대한 설명~~~~~",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    id: "1",
    title: 'Post title',
    date: 'ABCD',
    description:
      '테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    id: "2",
    title: 'Post title2',
    date: 'ABCD',
    description:
      '테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    id: "3",
    title: 'Post title3',
    date: 'ABCD',
    description:
      '테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    id: "4",
    title: 'Post title4',
    date: 'ABCD',
    description:
      '테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    id: "5",
    title: 'Post title5',
    date: 'ABCD',
    description:
      '테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    id: "6",
    title: 'Post title6',
    date: 'ABCD',
    description:
      '테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    id: "7",
    title: 'Post title7',
    date: 'ABCD',
    description:
      '테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    id: "8",
    title: 'Post title8',
    date: 'ABCD',
    description:
      '테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        {/*<Header title="사이트 로고" sections={sections} />*/}
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      {/*<Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />*/}
    </ThemeProvider>
  );
}
