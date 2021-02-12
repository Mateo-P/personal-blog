import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import Interest from './interest';
function Interests() {
  return (
    <SimpleGrid p={4} borderWidth="1px" borderRadius="lg" minChildWidth="320px" spacing="40px">
      <Box>
        <Interest title="Science" src="https://www.youtube.com/embed/VNqNnUJVcVs" />
      </Box>
      <Box>
        <Interest title="Tech" src="https://www.youtube.com/embed/DHvkyrey3JE" />
      </Box>
      <Box>
        <Interest title="Travel" src="https://www.youtube.com/embed/Cq_KA3VVN-4" />
      </Box>
      <Box>
        <Interest title="Politics" src="https://www.youtube.com/embed/p-O7q_n15Bo" />
      </Box>
      <Box>
        <Interest title="Style" src="https://www.youtube.com/embed/0vLnCwJk3rM" />
      </Box>
    </SimpleGrid>
  );
}

export default Interests;
