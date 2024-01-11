import {
  Folder,
  Home,
  PeopleAlt,
  Window,
  Comment,
  Reviews,
  KeyboardBackspace,
} from "@mui/icons-material";

export const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

export const genreList = [
  "Action/Adventure",
  "Animals",
  "Animation",
  "Biography",
  "Comedy",
  "Cooking",
  "Dance",
  "Documentary",
  "Drama",
  "Education",
  "Entertainment",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Independent",
  "International",
  "Kids & Family",
  "Medical",
  "Military/War",
  "Music",
  "Mystery/Crime",
  "Nature",
  "Paranormal",
  "Politics",
  "Racing",
  "Romance",
  "Sci-Fi/Horror",
  "Science",
  "Science Fiction",
  "Science/Nature",
  "Travel",
  "Western",
];

export const yearList = [
  "'50s",
  "'60s",
  "'70s",
  "'80s",
  "'90s",
  "2000-10",
  "2010-20",
  "2021",
];

export const carouselConfig = (desktop = 3, tablet = 2, mobile = 1) => ({
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: desktop,
    slidesToSlide: desktop,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: tablet,
    slidesToSlide: tablet,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: mobile,
    slidesToSlide: mobile,
    paritialVisibilityGutter: 30,
  },
});

export const plans = [
  {
    name: "Regular",
    price: "$11.99",
    features: [
      {
        title: "ProTV Originals",
        available: true,
      },
      { title: "Switch plans or cancel anytime", available: true },
      {
        title: "Stream 65+ top Live",
        available: false,
      },
      {
        title: "TV channels",
        available: false,
      },
    ],
    highlight: false,
  },
  {
    name: "Premium",
    price: "$34.99",
    features: [
      {
        title: "ProTV Originals",
        available: true,
      },
      { title: "Switch plans or cancel anytime", available: true },
      {
        title: "Stream 65+ top Live",
        available: true,
      },
      {
        title: "TV channels",
        available: false,
      },
    ],
    highlight: true,
  },
  {
    name: "Premium + TV channels",
    price: "$49.99",
    features: [
      {
        title: "ProTV Originals",
        available: true,
      },
      { title: "Switch plans or cancel anytime", available: true },
      {
        title: "Stream 65+ top Live",
        available: true,
      },
      {
        title: "TV channels",
        available: true,
      },
    ],
    highlight: false,
  },
];

export const classNames = {
  // container: "mx-auto lg:max-w-7xl max-w-8xl px-4 sm:px-6 lg:px-8 py-8",
  container: "mx-auto w-full lg:w-11/12 xl:w-10/12 px-4 sm:px-6 lg:px-8 py-8",
  customContainer: "mx-auto w-full lg:w-3/4 xl:w-3/5 px-4 sm:px-6 lg:px-8",
};

export const scrollTo = (element: string) => {
  const ele = document.getElementById(element) as HTMLAnchorElement;
  if (ele) {
    ele.scrollIntoView({
      behavior: "smooth",
    });
  }
};

export const colors = {
  bg: (custom?: boolean) => ({
    darkBlue: custom ? "#131720" : "bg-[#131720]",
    lightBlue: "bg-[#151f30ff]",
    blue500: "bg-blue-500",
  }),
  divider: (custom?: boolean) => ({
    lightBlue: custom ? "#2f80ed1a" : "border-[#2f80ed1a]",
    darkBlue: "border-[#151f3033]",
  }),
  text: {
    white: "text-white",
    blue600: "text-blue-500",
  },
};

export const sideBarMenu = [
  { title: "Home", icon: Home },
  { title: "Catalog", icon: Window },
  {
    title: "Pages",
    icon: Folder,
    nestedMenu: [
      { title: "Add item" },
      { title: "Edit user" },
      { title: "Sign In" },
      { title: "Sign Up" },
      { title: "Forgot password" },
      { title: "404 page" },
    ],
  },
  { title: "Users", icon: PeopleAlt },
  { title: "Comments", icon: Comment },
  { title: "Reviews", icon: Reviews },
  { title: "Back to ProTV", icon: KeyboardBackspace },
];
