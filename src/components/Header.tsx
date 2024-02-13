import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from "@mui/material/Container";

/*interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}*/

const sections = [
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
];

const title = "사이트로고";

/*export default function Header(props: HeaderProps) {*/
  /*const { sections, title } = props;*/
export default function Header() {

  return (
    <React.Fragment>
    <Container maxWidth="lg">
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button
          variant="outlined"
          size="small"
          href={"/register"}
        >
            등록
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          <Link href={"/"}>
            {title}
          </Link>
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button
            variant="outlined"
            size="small"
            href={"/login"}
        >
            로그인
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto', borderColor: 'divider', marginBottom: 4 }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </Container>
    </React.Fragment>
  );
}
