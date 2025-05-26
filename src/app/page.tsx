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
    logo: "cmp",
    links: [
      { label: "about", to: "#about" },
      { label: "interests", to: "#interests" },
      { label: "experience", to: "#experience" },
      { label: "contact", to: "#contact" },
    ],
  },
  body: {
    landing: {
      message:
        "hello! im mateo pérez. senior software engineer, reader & investor",
      image: "/me.png",
    },
    projects: {
      title: "featured projects",
      subtitle:
        "here are some of the projects i've worked on. each project represents a unique challenge and learning opportunity.",
      items: [
        {
          title: "spycloud",
          description:
            "investigations platform to track and check the exposure of companies leacked data. we build from  jupyter notebooks to a production ready platform serving +250 companies like amex, paypal, aws & goverments",
          domain: "https://spycloud.com",
          technologies: ["react", "auth0", "go", "terraform", "docker", "aws"],
        },
        {
          title: "blossom",
          description:
            "core banking system & cms to manage credit unions operations & content in usa. started as custom software for 5 credit unions in 2020, now serving +350 with a baas model",
          domain: "https://blossom.net",
          technologies: ["next", "graphql", "postgres", "docker", "aws"],
        },
        {
          title: "compleat",
          description:
            "personal project which i worked on with 2 more teammates. our goal was to digitize all restaurant operations in Bogota and Latam.We applied to the yc-2020 Winter batch and got to the second round.",
          domain: "https://compleat.com.co",
          image: "/compleat.jpeg",
          technologies: ["next", "django", "auth0", "postgres", "aws"],
        },
        {
          title: "auxo",
          description:
            "developed e2e features for multiple fintech products and kyc services, ensuring seamless integration and compliance throughout the user journey. using react, django & auth0.",
          domain: "https://auxo.co",
          technologies: ["next", "django", "auth0", "postgres", "aws"],
        },
      ],
    },
    accordion: {
      title: "book list 📚",
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
          title: "thinking fast and slow",
          author: "Daniel Kahneman",
          year: "2020",
          rating: 5,
          genre: "Finance",
        },
        {
          title: "the second mountain",
          author: "david brooks",
          year: "2020",
          rating: 4.9,
          genre: "personal development",
        },
        {
          title: "sapiens",
          author: "yuval noah harari",
          year: "2020",
          rating: 5,
          genre: "history",
        },
        {
          title: "homo deus",
          author: "yuval noah harari",
          year: "2020",
          rating: 5,
          genre: "history",
        },
        {
          title: "the changing world order",
          author: "ray dalio",
          year: "2020",
          rating: 4.8,
          genre: "history",
        },
        {
          title: "1984",
          author: "george orwell",
          year: "2020",
          rating: 4.1,
          genre: "history",
        },
        {
          title: "man's search for meaning",
          author: "viktor frankl",
          year: "2020",
          rating: 4.6,
          genre: "history",
        },
      ],
    },
    timeline: {
      title: "experience",
      size: "xl",
      items: [
        {
          type: "work",
          title: "praxent",
          period: ["2023-now"],
          children: {
            size: "lg",
            items: [
              {
                type: "growth",
                period: ["2025-now"],
                description: "sr fullstack developer.",
              },
              {
                type: "startpoint",
                period: ["2023-2025"],
                description: "mid fullstack developer.",
              },
            ],
          },
        },
        {
          type: "work",
          title: "auxo",
          period: ["2022-2022"],
          description: "mid fullstack developer.",
        },
        {
          type: "work",
          title: "hellobuild",
          period: ["2021-2022"],
          description: "mid fullstack developer.",
        },
        {
          type: "project",
          title: "compleat",
          period: ["2021-2022"],
          description: "co-founder & jr fullstack developer.",
        },
        {
          type: "work",
          title: "amcon",
          period: ["2020-2021"],
          description: "jr fronted developer.",
        },
        {
          type: "education",
          title: "universidad de los andes",
          period: ["2019-2020"],
          description:
            "teaching assistant for algorithms & object-oriented programming I & II, & management control systems.",
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
    footerText: "built with ⚡️ nextjs & ▲ vercel.",
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
