
import { Flex, Box } from "@chakra-ui/react";
import MenuTop from "./MenuTop";
import LeftDivision from './LeftDivision/LeftDivision';
import RightDivision from './RightDivision/RightDivision';
import { useDarkMode } from "../authcontext/DarkModeContext"

const MainDiv = () => {
  const { darkMode } = useDarkMode();

  return(
  <>
    <Box bg={darkMode?"black":"#F9F9FB"} width="100%">
      <Box margin="auto" w="80%">
        <MenuTop />
        <Flex>
            <LeftDivision/>
            <RightDivision/>

        </Flex>
       
       
      </Box>
     
    </Box>
  </>
);
}

export default MainDiv;
