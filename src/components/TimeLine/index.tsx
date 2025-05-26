"use client";
import { Box, Timeline, Heading, Badge, Text } from "@chakra-ui/react";
import { LuPackage, LuHeartHandshake, LuSchool } from "react-icons/lu";
import { MdWork } from "react-icons/md";
import { IconType } from "react-icons";

type TimelineItem = {
  type: "work" | "project" | "education" | "volunteer" | "other";
  title?: string;
  period: string[];
  description: string;
  icon?: IconType;
};

export type TimeLineProps = {
  title?: string;
  items: TimelineItem[];
};

const icons = {
  work: <MdWork size={15} />,
  project: <LuPackage size={15} />,
  education: <LuSchool size={15} />,
  volunteer: <LuHeartHandshake size={15} />,
  other: <LuPackage size={15} />,
};

const TimeLine = ({ title, items }: TimeLineProps) => {
  return (
    <Box id="experience" mx="auto" p={2}>
      <Heading size="xl" mb={4} textAlign="center">
        {title}
      </Heading>
      <Timeline.Root size="lg">
        {items.map((item, index) => (
          <Timeline.Item key={index}>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator>{icons[item.type]}</Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content>
              <Timeline.Title>{item.title}</Timeline.Title>
              <Timeline.Description>
                {item.period.map((period, index) => (
                  <Badge mr={2} key={index} variant="subtle">
                    {period}
                  </Badge>
                ))}
              </Timeline.Description>
              <Box textStyle="sm" mb={2}>
                <Text color="gray.500" maxW="2xl" mx="auto">
                  {item.description}
                </Text>
              </Box>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline.Root>
    </Box>
  );
};

export default TimeLine;
