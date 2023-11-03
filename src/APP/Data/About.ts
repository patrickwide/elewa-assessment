const heroData = {
  backgroundImageUrl:
    "https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg",
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

const mapSectionData = {
  title: "How to get there",
  content:
    "Based in the heart of Westlands, Nairobi, Kenya, we are easily accessible from all parts of the city.\n\nNot in town? Teams, Meets or Zoom are our second name. Book an appointment today via contact@elewa.ke!",
  image:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.75518282404!2d36.76689011738386!3d-1.2560106727708462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1773beea5e27%3A0x8a3f7edb44f2a175!2sElewa%20Company%20Ltd.!5e0!3m2!1sen!2ske!4v1699018682366!5m2!1sen!2ske",
  imageSide: "left",
  customClasses: {
    slideContainer: "bg-gray-200 z-30", // Customize the container background
    // You can customize other properties here if needed
    title: "text-black",
    content: "text-black",
  },
};

export { heroData, ctaData, mapSectionData };
