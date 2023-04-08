import freshBread from '../images/projects/projectScreens/freshBreadcreen.png';
import burgerClub from '../images/projects/projectScreens/burgerClubScreen.jpg';
import fastCompany from '../images/projects/projectScreens/fastCompanyScreen.jpg';

export const projects = [
  {
    _id: 1,
    title: 'Fresh Bread online shop',
    description:
      'This is online shop Fresh Bread. This project is one page web site with block of goods create with slick slider. Each item has description on own popup. Create a basket with localStorage, you can add each item in basket or remove it. And than you can fill the form, each field has a form validation. This web site has pc, tablet and mobile version.',
    link: 'https://vladislavromashko.github.io/fresh-bread/',
    img: freshBread,
  },
  {
    _id: 2,
    title: 'BurgerClub',
    description:
      'Web site of cafe BURGERCLUB. One page web site. Block with goods and comments create with slick slider. Web site has pc, tablet and mobile version. You can reserve a table in cafe, this function create with Ajax request',
    link: 'https://vladislavromashko.github.io/layout_burger/',
    img: burgerClub,
  },
  {
    _id: 3,
    title: 'Fast Company. Social network',
    description:
      'This is a mini project of a social network. The project was developed in React. Using Redux. The server part is developed on NodeJS and the Express framework. The visual component is made on Bootstrap. The project implements user registration and authorization. The ability to filter users by profession, leave comments on the pages of other users, configure and change user information.',
    link: 'https://github.com/vladislavRomashko/jfd-fast-company',
    img: fastCompany,
  },
];
