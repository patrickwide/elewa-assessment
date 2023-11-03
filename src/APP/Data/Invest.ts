// Define your functions
const onButtonClick1 = () => {
  alert("Button 1 Clicked!");
};

const buttons = [
  {
    label: "Button 1",
    onClick: onButtonClick1,
  },
];

const heroData = {
  backgroundImageUrl:
    "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679982347/elewa-group-website/hero-Images/dark-to-light_xrat5g.jpg",
  logoUrl:
    "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690297/elewa-group-website/Icons/SVG/_Logo/Logo_White_arvoyx.svg",
  logoLinkUrl: "https://elewa.ke/",
  navigationLinks: [
    {
      name: "Social impact",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Invest",
      to: "/invest",
    },
  ],
  title: "Scaling impact. Beyond the norm",
  subtitle: "Human and Environmental Impact through Social Enterprise",
};

const pageData = [
  {
    title: "Elewa NV, a multi-stakeholder cooperation",
    content:
      "At the heart of Elewa lies the structure Elewa NV. Based in Brussels, Belgium, Elewa NV is a private holding company which controls the assets of all Elewa activities.\nElewa NV is owned and controlled by Elewa's founder, a small community of investors which share in the vision of Elewa and Elewa employees based throughout the activities of the group.",
    image:
      "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png",
    imageSide: "left",
    customClasses: {
      slideContainer: "bg-white z-30", // Customize the container background
      title: "text-black",
      content: "text-black",
    },
  },
  {
    title: "The Elewa Creative Hub",
    content:
      "Coming soon; The Elewa Creative Hub Lies at the heart of our organization. A two-acre property at the center of Nairobi's creative district, the hub connects all Elewa's Activities under a single banner.\nThrough partnerships with creative community, the Elewa Hub will organize vibrant activites that bring talents from different fields (tech, business, art, fashion) together to nurture continuous innovation.",
    image:
      "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983012/elewa-group-website/Images/creative-hub-image_dd6o8o.jpg",
    imageSide: "right",
    customClasses: {
      slideContainer: "bg-white z-30", // Customize the container background
      title: "text-black",
      content: "text-black",
    },
  },
  {
    title: "Investing in Elewa NV",
    content:
      "From time to time, we offer investment opportunities (private equity & debt) to out community of investors. Interested to take part when this opportunity arrives?",
    image:
      "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983082/elewa-group-website/Images/invest-now_ftxg4z.jpg",
    imageSide: "left",
    customClasses: {
      slideContainer: "bg-white z-30", // Customize the container background
      title: "text-black",
      content: "text-black",
    },
    buttons: buttons,
  },
];

const ctaData = {
  text: "Become part of our mission and",
  linkText: "join elewa",
  linkUrl: "#", // Replace with the actual URL
};

const diverseData = {
  title: "How we see it differently",
  description:
    "The global South is rapidly catching up with the 'developed' world. It's time for you to get to know the rapid development, innovation and drive going on in this part of the world (East-Africa, South Asia and beyond).",
  imageUrl:
    "https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png",
};

const keyFiguresData = [
  {
    value: "1.3M",
    description:
      "Approx. number of Kenyan talents reaching the age of 18 in 2022",
  },
  {
    value: "5M",
    description: "Number of East-Africans (EAC) reaching the age of 18 in 2022",
  },
  {
    value: "2022",
    description:
      "Democratic Republic of Congo joins the East African Community",
  },
  {
    value: "1.5M",
    description: "The number of unfilled IT vacancies in the US and EU markets",
  },
  {
    value: "10M",
    description: "Number of technical vacancies by 2030",
  },
  {
    value: "2050",
    description: "Africa holds the world's largest workforce",
  },
  {
    value: "$4.6M",
    description: "Startup funding raised by African startups in 2022",
  },
  {
    value: "310%",
    description: "Increase in startup funding for companies with HQ in Kenya",
  },
];

export { heroData, ctaData, pageData, diverseData, keyFiguresData };
