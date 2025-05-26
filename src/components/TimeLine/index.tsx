"use client";
import { Box, Timeline, Heading, Badge, Text } from "@chakra-ui/react";
import { LuPackage, LuHeartHandshake, LuSchool } from "react-icons/lu";
import { MdWork } from "react-icons/md";
import { IconType } from "react-icons";
import { FaArrowTrendUp } from "react-icons/fa6";

type Size = "xl" | "lg" | "md" | "sm";
type TimelineItem = {
  type: "work" | "startpoint" | "growth" | "project" | "education" | "volunteer" | "other";
  title?: string;
  period: string[];
  description?: string;
  icon?: IconType;
  children?: {
    size: Size;
    items: TimelineItem[];
  };
};

export type TimeLineProps = {
  title?: string;
  items: TimelineItem[];
  size?: "xl" | "lg" | "md" | "sm";
};

const icons = (size: number) => {
  return {
    work: <MdWork size={size} />,
    startpoint: null,
    growth: <FaArrowTrendUp size={size} />,
    project: <LuPackage size={size} />,
    education: <LuSchool size={size} />,
    volunteer: <LuHeartHandshake size={size} />,
    other: <LuPackage size={size} />,
  };
};
const sizeMap = {
  xl: 20,
  lg: 15,
  md: 10,
  sm: 5,
};
const TimelineItem = ({ item, size = "xl" }: { item: TimelineItem, size?: Size }) => {
  return (
    <Timeline.Item>
      <Timeline.Connector>
        <Timeline.Separator />
        <Timeline.Indicator>{icons(sizeMap[size])[item.type]}</Timeline.Indicator>
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
          {item.children && item.children.items.length > 0 && (
            <Box mt={4} ml={4}>
              <Timeline.Root size={item.children.size} variant="outline">
                {item.children.items.map((child, index) => (
                  <TimelineItem size={item.children?.size} key={index} item={child} />
                ))}
              </Timeline.Root>
            </Box>
          )}
        </Box>
      </Timeline.Content>
    </Timeline.Item>
  );
};

const TimeLine = ({ title, items, size = "xl" }: TimeLineProps) => {
  return (
    <Box id="experience" mx="auto" p={2}>
      <Heading size="xl" mb={4} textAlign="center">
        {title}
      </Heading>
      <Timeline.Root size={size} variant="outline">
        {items.map((item, index) => (
          <TimelineItem size={size} key={index} item={item} />
        ))}
      </Timeline.Root>
    </Box>
  );
};

export default TimeLine;
