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
  technologies: string[];
  image: string;
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

      {/* phones: horizontal swipe row; md+: grid */}
      <SimpleGrid
        columns={{ md: 2, xl: 4 }}
        gridAutoFlow={{ base: "column", md: "row" }}
        gridAutoColumns={{ base: "80%", md: "auto" }}
        overflowX={{ base: "auto", md: "visible" }}
        scrollSnapType="x mandatory"
        gap={{ base: 4, md: 6 }}
        mt={8}
        pb={{ base: 2, md: 0 }}
      >
        {items.map((project, index) => {
          return (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              scrollSnapAlign="start"
            >
              <Box position="relative" aspectRatio={1}>
                <Image
                  src={project.image}
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
