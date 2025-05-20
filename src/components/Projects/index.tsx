import { getDomainLogo } from "@/utils/domainLogo";
import {
  Box,
  SimpleGrid,
  Heading,
  Text,
  Image,
  Badge,
  HStack,
  VStack,
  Link,
} from "@chakra-ui/react";

const projects = {
  title: "featured projects",
  items: [
    {
      title: "spycloud",
      description:
        "investigations platform to track and check the exposure of companies leacked data. we build from  jupyter notebooks to a production ready platform serving +250 companies like amex, paypal, aws & goverments",
      domain: "https://spycloud.com",
      technologies: ["react", "auth0", "go", "terraform", "docker", "aws"],
      featured: true,
    },
    {
      title: "blossom",
      description:
        "core banking system & cms to manage credit unions operations & content in usa. started as custom software for 5 credit unions in 2020, now serving +350 with a baas model",
      domain: "https://blossom.net",
      technologies: ["next", "graphql", "postgres", "docker", "aws"],
      featured: true,
    },
    {
      title: "compleat",
      description:
        "personal project which i worked on with 2 more teammates. our goal was to digitize all restaurant operations in Bogota and Latam.We applied to the yc-2020 Winter batch and got to the second round.",
      domain: "https://compleat.com.co",
      image:
        "https://media.licdn.com/dms/image/v2/D4E2DAQF_CqJyC8BZyA/profile-treasury-image-shrink_1920_1920/B4EZbLmSKDHcAg-/0/1747172533212?e=1747857600&v=beta&t=r2iwVslfeesqA3TdWtLH7VmFJS1SWGynixg4hwqy8AA",
      technologies: ["next", "django", "auth0", "postgres", "aws"],
      featured: false,
    },
    {
      title: "auxo",
      description:
        "developed e2e features for multiple fintech products and kyc services, ensuring seamless integration and compliance throughout the user journey. using react, django & auth0.",
      domain: "https://auxo.co",
      technologies: ["next", "django", "auth0", "postgres", "aws"],
      featured: false,
    },
  ],
};

const Projects = () => {
  return (
    <VStack align="stretch" id="projects">
      <Heading size="xl" textAlign="center">
        {projects.title}
      </Heading>
      <Text textAlign="center" color="gray.500" maxW="2xl" mx="auto">
        here are some of the projects i've worked on. each project represents a
        unique challenge and learning opportunity.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8} mt={8}>
        {projects.items.map(async (project, index) => {
          const logo = await getDomainLogo(project.domain, "medium");
          return (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Box position="relative" height="125px">
                <Image
                  src={logo ? logo : project.image}
                  alt={project.title}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Box>

              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  {project.title}
                </Heading>
                <Text color="gray.600" mb={4}>
                  {project.description}
                </Text>

                <HStack gap={2} flexWrap="wrap">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant={"subtle"}>
                      {tech}
                    </Badge>
                  ))}
                </HStack>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
};

export default Projects;
