import {
  AccordionList,
  About,
  Contact,
  Footer,
  Landing,
  Navbar,
  TimeLine,
  Projects,
} from "@/components";
import { TimeLineProps } from "@/components/TimeLine";
import { VStack } from "@chakra-ui/react";
import { AccordionListProps } from "@/components/Accordion";
import { LandingProps } from "@/components/Landing";
import { FooterProps } from "@/components/Footer";
import { NavbarProps } from "@/components/Navbar";
import { ProjectsProps } from "@/components/Projects";
type Body = {
  landing: LandingProps;
  projects: ProjectsProps;
  accordion: AccordionListProps;
  timeline: TimeLineProps;
};
type Data = {
  navbar: NavbarProps;
  body: Body;
  footer: FooterProps;
};
const data: Data = {
  navbar: {
    logo: "Mateo Perez",
    links: [
      { label: "About", to: "#about" },
      { label: "Interests", to: "#interests" },
      { label: "Experience", to: "#experience" },
      { label: "Contact", to: "#contact" },
    ],
  },
  body: {
    landing: {
      message:
        "Hello! I'm Mateo Perez, Senior FDE, reader & investor.",
      image: "/me.png",
    },
    projects: {
      title: "Featured Projects",
      subtitle:
        "Here are some of the projects I've worked on. Each project represents a unique challenge and learning opportunity.",
      items: [
        {
          title: "SpyCloud",
          description:
            "Investigations platform to track and check the exposure of companies' leaked data. We built it from Jupyter notebooks to a production-ready platform serving +250 companies like Amex, PayPal, AWS & governments.",
          image: "/spycloud_logo.jpeg",
          technologies: ["react", "auth0", "go", "terraform", "docker", "aws"],
        },
        {
          title: "Blossom",
          description:
            "Core banking system & CMS to manage credit unions' operations & content in the USA. Started as custom software for 5 credit unions in 2020, now serving +350 with a BaaS model.",
          image: "/blossomfintech_logo.jpeg",
          technologies: ["next", "graphql", "postgres", "docker", "aws"],
        },
        {
          title: "Compleat",
          description:
            "Personal project which I worked on with 2 more teammates. Our goal was to digitize all restaurant operations in Bogotá and LatAm. We applied to the YC Winter 2020 batch and got to the second round.",
          image: "/compleat.jpeg",
          technologies: ["next", "django", "auth0", "postgres", "aws"],
        },
        {
          title: "Auxo",
          description:
            "Developed E2E features for multiple fintech products and KYC services, ensuring seamless integration and compliance throughout the user journey. Using React, Django & Auth0.",
          image: "/auxo_sas_logo.jpeg",
          technologies: ["next", "django", "auth0", "postgres", "aws"],
        },
      ],
    },
    accordion: {
      title: "Book List 📚",
      sortBy: "rating",
      sortOrder: "desc",
      items: [
        {
          title: "Steve Jobs",
          author: "Walter Isaacson",
          year: "2020",
          rating: 4.5,
          genre: "Fiction",
        },
        {
          title: "12 Rules for Life",
          author: "Jordan B. Peterson",
          year: "2021",
          rating: 4.6,
          genre: "Sci-Fi",
        },
        {
          title: "Atomic Habits",
          author: "James Clear",
          year: "2018",
          rating: 4.7,
          genre: "Self-Help",
        },
        {
          title: "The Psychology of Money",
          author: "Morgan Housel",
          year: "2020",
          rating: 5,
          genre: "Finance",
        },
        {
          title: "Thinking, Fast and Slow",
          author: "Daniel Kahneman",
          year: "2020",
          rating: 5,
          genre: "Finance",
        },
        {
          title: "The Second Mountain",
          author: "David Brooks",
          year: "2020",
          rating: 4.9,
          genre: "Personal Development",
        },
        {
          title: "Sapiens",
          author: "Yuval Noah Harari",
          year: "2020",
          rating: 5,
          genre: "History",
        },
        {
          title: "Homo Deus",
          author: "Yuval Noah Harari",
          year: "2020",
          rating: 5,
          genre: "History",
        },
        {
          title: "The Changing World Order",
          author: "Ray Dalio",
          year: "2020",
          rating: 4.8,
          genre: "History",
        },
        {
          title: "1984",
          author: "George Orwell",
          year: "2020",
          rating: 4.1,
          genre: "History",
        },
        {
          title: "Man's Search for Meaning",
          author: "Viktor Frankl",
          year: "2020",
          rating: 4.6,
          genre: "History",
        },
      ],
    },
    timeline: {
      title: "Experience",
      size: "xl",
      items: [
        {
          type: "work",
          title: "SpyCloud",
          period: ["2023-now"],
          children: {
            size: "lg",
            items: [
              {
                type: "growth",
                period: ["2025-now"],
                description: "Senior FDE.",
              },
              {
                type: "startpoint",
                period: ["2023-2025"],
                description: "Mid Fullstack Developer.",
              },
            ],
          },
        },
        {
          type: "work",
          title: "Auxo",
          period: ["2022-2022"],
          description: "Mid Fullstack Developer.",
        },
        {
          type: "work",
          title: "HelloBuild",
          period: ["2021-2022"],
          description: "Mid Fullstack Developer.",
        },
        {
          type: "project",
          title: "Compleat",
          period: ["2021-2022"],
          description: "Co-founder & Jr. Fullstack Developer.",
        },
        {
          type: "work",
          title: "Amcon",
          period: ["2020-2021"],
          description: "Jr. Frontend Developer.",
        },
        {
          type: "education",
          title: "Universidad de los Andes",
          period: ["2019-2020"],
          description:
            "Teaching assistant for Algorithms, Object-Oriented Programming I & II, and Management Control Systems.",
        },
      ],
    },
  },
  footer: {
    socialLinks: [
      {
        name: "linkedin",
        href: "https://www.linkedin.com/in/mateo-perez-4156291b2/",
        color: "#0077B5",
      },
      {
        name: "github",
        href: "https://github.com/Mateo-P",
        color: "#333",
      },
      {
        name: "facebook",
        href: "https://www.facebook.com/cristianmateo.perezmarin/",
        color: "#1877F2",
      },
      {
        name: "twitter",
        href: "https://twitter.com/cmp_0508",
        color: "#1DA1F2",
      },
      {
        name: "instagram",
        href: "https://www.instagram.com/cmp_0508/",
        color: "#E4405F",
      },
    ],
    footerText: "Built with ⚡️ Next.js & ▲ Vercel.",
  },
};
export default function Home() {
  const { navbar, body, footer } = data;
  const { timeline, accordion, landing, projects } = body;
  return (
    <VStack
      margin={"auto"}
      maxW={{ sm: "90%", md: "75%", "2xl": 1280 }}
      w={{ base: "100%", sm: "100%", md: "75%" }}
      m="auto"
      justifyContent="space-between"
      alignItems="center"
      minHeight="100vh"
      gap={20}
      px={{ base: 4, sm: 0, md: 0 }}
    >
      <Navbar {...navbar} />

      <Landing {...landing} />
      <About />
      <Projects {...projects} />
      <TimeLine {...timeline} />
      <AccordionList {...accordion} />

      <Contact />
      <Footer {...footer} />
    </VStack>
  );
}
