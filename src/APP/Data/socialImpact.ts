const pageData = [
  {
    title: "(Social) business for the win",
    content:
      "With a young dynamic population that is eager to contribute to the global economy, East Africa has a lot to offer to the world. Now is the time to nurture sustainable, inclusive and scalable business. The rest will take care of itself.",
    image:
      "https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg",
    imageSide: "left",
    customClasses: {
      slideContainer: "bg-black z-30", // Customize the container background
      // You can customize other properties here if needed
      title: "text-white",
      content: "text-white",
    },
  },
  {
    title: "A cooperative mindset",
    content:
      "Elewa has one shared objective; To unlock the true potential of individuals, teams, and the community. We believe strongly in the power of sharing ideas and continuously strive to grow each other and ourselves. Internally, but also within the larger communities in which we are active.",
    image:
      "https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg",
    imageSide: "right",
    customClasses: {
      slideContainer: "bg-gray-200 z-20", // Customize the container background
    },
  },
  {
    title: "Beyond business",
    content:
      "We channel a good amount of our resources into giving back. Through projects such as our coding school in Kakuma refugee camp, training teachers in pastoral Samburu, and our open-source coding initiatives providing entry-level opportunities to hundreds of junior engineers. These projects don't necessarily have an immediate financial return, but their impact can be tangibly measured in the long-term.",
    image:
      "https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/unnamed_1_m3dvll.png",
    imageSide: "right",
    customClasses: {
      slideContainer: "bg-white z-10", // Customize the container background
    },
  },
  {
    title: "Open knowledge",
    content:
      "What we learn, we share. Through community events, open knowledge repositories, regular teaching moments (everyone a teacher) and academic partnerships. We build for today, with a lens on tomorrow.",
    image:
      "https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png",
    imageSide: "left",
    customClasses: {
      slideContainer: "bg-black z-1", // Customize the container background
      title: "text-white",
      content: "text-white",
    },
  },
];

const heroData = {
  backgroundImageUrl:
    "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679910469/elewa-group-website/hero-Images/pexels-bg-edit_bb4znx.jpg",
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

const ctaData = {
  text: "Become part of our mission and",
  linkText: "join elewa",
  linkUrl: "#", // Replace with the actual URL
};

const carouselData: string[] = [
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/Enabel-logo_afiel7.png",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/vvob-logo_qyvjbp.jpg",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380405/elewa-group-website/client-logos/Enabel-logo_afiel7.png",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/vvob-logo_qyvjbp.jpg",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380443/elewa-group-website/client-logos/ms-adc_y96dms.jpg",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380412/elewa-group-website/client-logos/Spotlights_7_pplnvm.jpg",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/Kenya_Scouts_Association_kcoka5.svg",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/wwf-4-logo-png-transparent_tbkfcq.png",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/vvob-logo_qyvjbp.jpg",
  "https://res.cloudinary.com/dyl3rncv3/image/upload/e_grayscale/v1681380406/elewa-group-website/client-logos/farmbetter-logo_x2acda.png",
];

export { pageData, heroData, ctaData, carouselData };
