
import { useState, useEffect } from 'react';
import { Box, Text, Flex, Circle, Image, Divider ,Tooltip} from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { useDarkMode } from '../authcontext/DarkModeContext';

const Card = ({ match }) => {
  const {matchno,cup,categoery,city,team1,team1Url,team2,team2Url,date, time,  } = match;
  const { darkMode } = useDarkMode();

  return (
    <Box bg={darkMode ? 'gray.700' : 'white'} pl="2" pr="2" borderWidth="1px" borderRadius="0.9rem" m="2" maxW="400px" cursor={'pointer'}>
      <Box  pt={1} color={darkMode ? "gray.500" : "#48494A"} noOfLines={1} fontSize="0.7rem" fontWeight="500" whiteSpace="nowrap">
        {matchno}&bull;{cup}&bull;{categoery}&bull;{city}
      </Box>
                      {/* ---------------Team1------------------------- */}
      <Flex minW="275px" mt="0.5" justify={'space-between'}>
        <Flex >
        <Tooltip  label={team1} bg="white" color="black" border="1px solid black" whiteSpace="nowrap" fontSize="10px" borderRadius="none" fontWeight="400" openDelay={400} >
        <Image src={team1Url} alt="Team 1 Logo" boxSize="22px" mr="2" mt="0.4" />
        </Tooltip>
        <Text color={darkMode ? "white" : "black"} fontWeight={'bold'} fontSize="12px" mt="0.1rem">
         <Tooltip label={team1} bg="white" color="black" border="1px solid black" maxW="100px" maxH="50px" fontSize="10px" borderRadius="none" fontWeight="400" openDelay={400}>{team1}</Tooltip> 
        </Text>
        </Flex>
        <Flex >
          <Text fontSize="12px" fontWeight="medium" color={darkMode ? "gray.500" : "gray.600"} mt="1.5">{date}</Text>
        </Flex>
      </Flex>
                       {/* -------------------Team2---------------------- */}
        <Flex  mt="0.5" justify={'space-between'}>
        <Flex >
        <Tooltip  label={team2} bg="white" color="black" border="1px solid black" maxW="100px" maxH="50px" fontSize="10px" borderRadius="none" fontWeight="400" openDelay={400}>
        <Image src={team2Url} alt="Team 1 Logo" boxSize="22px" mr="2" mt="0.4" />
        </Tooltip>
        <Text color={darkMode ? "white" : "black"} fontWeight={'bold'} fontSize="12px" mt="0.14rem">
        <Tooltip label={team2} bg="white" color="black" border="1px solid black"  maxW="100px" maxH="50px" fontSize="10px" borderRadius="none" fontWeight="400" openDelay={400}>{team2}</Tooltip>
        </Text>
        </Flex>
        <Flex >
          <Text fontSize="15px" fontWeight="bold" color={darkMode ? "gray.300" : "black"} mt="-1.5" >{time}</Text>
        </Flex>
      </Flex>     


      <Text mt="1" fontSize="11px" color={darkMode ? "white" : "#2b2c2d"} fontWeight="450">
        Match yet to begin
      </Text>
      <Divider borderColor= 'gray.300' mt="2" />
      <Flex fontSize="12px" color={darkMode ? "white" : "#2b2c2d"} fontWeight="500"gap="4" mb="2" mt="1">
        <Text _hover={{ textDecoration: 'underline' }}>Schedule</Text>
        <Text _hover={{ textDecoration: 'underline' }}>Table</Text>
        <Text _hover={{ textDecoration: 'underline' }}>Videos</Text>
        <Text _hover={{ textDecoration: 'underline' }}>Series</Text>
      </Flex>
      
      
    </Box>
  );
};

const NavBarCard = ({ updateNotificationCount, selectedMenu }) => {
  const [matches, setMatches] = useState([]);
  const [cardCount, setCardCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { darkMode } = useDarkMode();

  const handleMenuClick = async (item) => {
    // Update the matches state with the data from the JSON server
    const response = await fetch(`https://cricinfo.onrender.com/${item}`);
    const data = await response.json();
    setMatches(data);
    setCardCount(data.length);
    updateNotificationCount(data.length);
  };

  useEffect(() => {
    // Handle the initial load
    handleMenuClick(selectedMenu);
  }, [selectedMenu]);

  const handleNext = () => {
    if (currentPage + 1 <= Math.ceil(cardCount / 4)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const showPrev = currentPage > 1;
  const showNext = currentPage < Math.ceil(cardCount / 4);

  return (
    <>
     <Box >
      <Flex mt="-0.4rem" pb="1rem">
        {showPrev && (
          <Circle
            position="absolute"
            left="9%"
            top="6rem"
            transform="translateY(-50%)"
            onClick={handlePrev}
            colorScheme="teal"
            ml="2"
            bg={darkMode ? "black" : "white"}
            cursor={"pointer"}
            boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
          >
            <ChevronLeftIcon color={darkMode ? "white" : "black"} boxSize={8} />
          </Circle>
        )}

        {matches.slice((currentPage - 1) * 4, currentPage * 4).map((match, index) => (
          <Card key={index} match={match} />
        ))}

        {showNext && (
          <Circle
            onClick={handleNext}
            colorScheme="teal"
            ml="2"
            position="absolute"
            right="8%"
            top="6rem"
            transform="translateY(-50%)"
            bg={darkMode ? "black" : "white"}
            cursor={"pointer"}
            boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
          >
            <ChevronRightIcon color={darkMode ? "white" : "black"} boxSize={8} />
          </Circle>
        )}
      </Flex>
      </Box>
    </>
  );
};

export default NavBarCard;

