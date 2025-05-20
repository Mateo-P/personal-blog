import { Landing } from "@/components";
import { About, Contact, TimeLine, AccordionList, Projects } from "@/components";
import { VStack } from "@chakra-ui/react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/data`,
    {
      cache: "no-store", // Or other caching strategies like 'force-cache', revalidate options
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data from API");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  const { navbar, body, footer } = data;
  const { timeline, accordion, landing } = body;
  return (

      <VStack
        margin={"auto"}
        maxW={{ sm: "90%", md: "75%", "2xl": 1280 }}
         w={{base:'100%',sm:'100%',md:'75%'}}
      m="auto"
        justifyContent="space-between"
        alignItems="center"
        minHeight="100vh"
        gap={20}
        px={{base:4,sm:0,md:0}}
      >
        <Navbar {...navbar} />


          <Landing {...landing}/>
          <About />
          <Projects />
          <TimeLine {...timeline} />
          <AccordionList {...accordion} />
          
          <Contact />
        <Footer {...footer} />
      </VStack>

     

  );
}
