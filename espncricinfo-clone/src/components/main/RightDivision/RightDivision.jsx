import { Box } from "@chakra-ui/react";
import MustWatch from './MustWatch';
import QuickLink from './QuickLink';

const RightDivision = () => {
  return (
    <>
      <Box ml="1.2rem" w="28%" >
        <MustWatch/>
        <QuickLink/>
      </Box>
    </>
  );
};

export default RightDivision;
