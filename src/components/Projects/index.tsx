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
} from "@chakra-ui/react";

type Project = {
  title: string;
  description: string;
  domain: string;
  technologies: string[];
  image?: string;
};
export type ProjectsProps = {
  title: string;
  subtitle: string;
  items: Project[];
};

const Projects = ({ title, subtitle, items }: ProjectsProps) => {
  return (
    <VStack align="stretch" id="projects">
      <Heading size="xl" textAlign="center">
        {title}
      </Heading>
      <Text textAlign="center" color="gray.500" maxW="2xl" mx="auto">
        {subtitle}
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8} mt={8}>
        {items.map(async (project, index) => {
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
                <Text color="gray.500" mb={4}>
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
