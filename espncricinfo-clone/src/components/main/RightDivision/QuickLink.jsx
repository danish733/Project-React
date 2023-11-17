import { useState } from "react";
import { SimpleGrid, Link, Text, Box, Heading, Image } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useDarkMode } from "../../authcontext/DarkModeContext";

const QuickLink = () => {
  const { darkMode } = useDarkMode();
  const initialItemsToShow = 5;
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  const itemList = [
    "Matchday",
    "Matchday Hindi",
    "Road to the World Cup",
    "Safe Hands",
    "Tame the Turns",
    "Cheer for Greatness",
    "Men Of Platinum",
    "Blue Cheer Squads",
    "Below Boundries",
    "Ravi & Raunak",
    "ICC Rankings",
  ];

  const handleShowMore = () => {
    setItemsToShow(itemList.length);
  };

  const handleShowLess = () => {
    setItemsToShow(initialItemsToShow);
  };

  return (
    <>
      <Box
        mt="3rem"
        w="100%"
        borderRadius="8px"
        bg={darkMode ? "#1D1E1F" : "#FFFFFF"}
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.10) 0px 0px 0px 1px",
        }}
      >
        <Heading fontSize="1.2rem" p="1rem" color={darkMode?"white":"black"}>
          Quick Links
        </Heading>{" "}
        <hr /> <br />
        <SimpleGrid spacing={2}>
          {itemList.slice(0, itemsToShow).map((item, index) => (
            <Link key={index} color={darkMode?"white":"black"}>
              {" "}
              <Box ml="2rem">
                {" "}
                <ChevronRightIcon color="#19B0F6" fontSize="1.3rem" /> {item}
              </Box>{" "}
            </Link>
          ))}
        </SimpleGrid>
        {itemsToShow === initialItemsToShow ? (
          <Text
            onClick={handleShowMore}
            color="#19B0F6"
            fontWeight="700"
            fontSize="0.9rem"
            ml="2.1rem"
            mt="0.6rem"
            pb="1.2rem"
            cursor="pointer"
            
          >
            + Show More
          </Text>
        ) : (
          <Text
            onClick={handleShowLess}
            color="#19B0F6"
            fontWeight="700"
            fontSize="0.9rem"
            ml="2.1rem"
            mt="0.6rem"
            pb="1.2rem"
            cursor="pointer"
          >
            - Show Less
          </Text>
        )}
      </Box>

      <Box mt="2rem" w="100%">
        <Image
          w="100%"
          objectFit="fill"
          src="https://tpc.googlesyndication.com/simgad/3115844102206031651?"
          alt=""
          srcset=""
        />
      </Box>
    </>
  );
};

export default QuickLink;
