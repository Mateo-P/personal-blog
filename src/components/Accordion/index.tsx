"use client";
import { useState } from "react";
import {
  Accordion,
  Avatar,
  Badge,
  HStack,
  Box,
  Heading,
  Stack,
  Pagination,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight, LuTrophy } from "react-icons/lu";

type Items = {
  title: string;
  author: string;
  coverUrl: string;
  year: string;
  rating: number;
  genre: string;
};
type Props = {
  title: string;
  sortBy: string;
  sortOrder: "asc" | "desc";
  items: Items[];
};

const ITEMS_PER_PAGE = 5;

const colorRating = (rating: number) => {
  if (rating >= 4.5) {
    return "green";
  } else if (rating >= 3.5) {
    return "orange";
  } else if (rating >= 2.5) {
    return "yellow";
  } else {
    return "red";
  }
};
const AccordionList = ({ title, sortBy, sortOrder, items }: Props) => {
  const [page, setPage] = useState(0);
  const paginatedItems = items.sort((a, b) => {
    if (sortBy === "rating") {
      return sortOrder === "desc" ? b.rating - a.rating : a.rating - b.rating;
    }
    return 0;
  }).slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );

  return (
    <Box id="interests"  mt="1rem" w={{base: "100%",sm: "100%", md: "75%"}} mb="1rem">
      <Heading size="xl" mb={4} textAlign="center">
        {title}
      </Heading>
      <Accordion.Root collapsible defaultValue={[paginatedItems[0]?.title]}>
        {paginatedItems.map((item, index) => (
          <Accordion.Item key={index} value={item.title}>
            <Accordion.ItemTrigger>
              <Avatar.Root shape="rounded">
                <Avatar.Image src={item.coverUrl} />
                <Avatar.Fallback>{item.title[0]}</Avatar.Fallback>
              </Avatar.Root>
              <HStack flex="1">
                {item.title}
                <Badge colorPalette={colorRating(item.rating)}>
                {item.rating}/5
                </Badge>
              </HStack>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>
                <HStack gap={4}>
                  <Badge colorPalette="blue">{item.genre}</Badge>
                  <Badge colorPalette="purple">{item.year}</Badge>
                </HStack>
                <Box mt={2}>
                  <strong>Author:</strong> {item.author}
                </Box>
              </Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
      {/* Pagination Controls */}
      <Stack direction="row" justify="center" mt={4} gap={4}>
        <Pagination.Root
          count={items.length}
          pageSize={ITEMS_PER_PAGE}
          defaultPage={1}
          siblingCount={2}
        >
          <ButtonGroup variant="ghost" size="sm">
            <Pagination.PrevTrigger asChild>
              <IconButton onClick={() => setPage(page - 1)}>
                <LuChevronLeft />
              </IconButton>
            </Pagination.PrevTrigger>

            <Pagination.Items
              render={(page) => (
                <IconButton
                  onClick={() => setPage(page.value - 1)}
                  variant={{ base: "ghost", _selected: "outline" }}
                >
                  {page.value}
                </IconButton>
              )}
            />

            <Pagination.NextTrigger asChild>
              <IconButton onClick={() => setPage(page + 1)}>
                <LuChevronRight />
              </IconButton>
            </Pagination.NextTrigger>
          </ButtonGroup>
        </Pagination.Root>
      </Stack>
    </Box>
  );
};

export default AccordionList;
