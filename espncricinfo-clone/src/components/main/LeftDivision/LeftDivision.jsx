
import { Box} from "@chakra-ui/react";
import MatchCoverage from "./MatchCoverage";
import InDepth from './InDepth';
import TopStories from './TopStories';
import HeadingAboveImage from './EditorPicks';


const LeftDivision = () => {

  return (
    <>
      <Box w="72%">
        <MatchCoverage/>
        <InDepth/>
        <TopStories/>
        <HeadingAboveImage/>
      </Box>
    </>
  );
};

export default LeftDivision;
