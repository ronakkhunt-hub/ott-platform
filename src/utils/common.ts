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
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: tablet,
    slidesToSlide: tablet,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: mobile,
    slidesToSlide: mobile,
  },
});

export const plans = [
  {
    name: "Regular",
    price: "$11.99",
    features: [
      {
        title: "VueTV Originals",
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
        title: "VueTV Originals",
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
        title: "VueTV Originals",
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
  container:
    "xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-5 sm:mx-auto",
};
