// components
import {Book, Home, LocalLibrary, School} from "@mui/icons-material";
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{width: 1, height: 1}}/>;

const ICONS = {
  edu: <School/>,
  home: <Home/>,
  book: <Book/>,
  novel: <LocalLibrary/>
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    items: [
      {title: 'Home', path: '/', icon: ICONS.home},
      {title: 'Books', path: '/books', icon: ICONS.book},
      {title: 'Novels', path: '/novels', icon: ICONS.novel},
    ],
  },

  // Education
  // ----------------------------------------------------------------------
  {
    items: [
      {
        title: 'Education',
        path: "/edu",
        icon: ICONS.edu,
        children: [
          {title: 'Kindergarten', path: '/edu/kindergarten'},
          {title: 'Primary', path: '/edu/primary'},
          {title: 'Secondary', path: '/edu/secondary'},
        ],
      },
    ],
  },
];

export default sidebarConfig;
