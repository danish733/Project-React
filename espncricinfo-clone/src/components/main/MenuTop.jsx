
import { Flex, Box, Text, Image } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useDarkMode } from "../authcontext/DarkModeContext"

const MenuTop = () => {
  const { darkMode } = useDarkMode();
  const menuItems = [
    "India's WC fixtures",
    "India's WC squads",
    'World Cup 2023',
    'Wc-Top wicket-takers',
    'WC-Top-scorers',
    'Ask Cricinfo',
    'ICC players ranking',
    'ICC teams ranking',
    'writers'
  ];

  return (
    <>
      <Box >
        <Flex columnGap={2.9}>
          {menuItems.map((item, index) => (
            <Text
              key={index}
              p="0.1rem 0.8rem"
              mt="0.5rem"
              mb="1rem"
              fontSize="0.8rem"
              border="1px"
              borderColor="gray.200"
              fontWeight="450"
              color={darkMode?"white":"gray.600"}
              borderRadius="18px"
             
              cursor="pointer"
            >
              {item}
              <ChevronRightIcon
                fontSize="1.3rem"
                ml="-0.2rem"
                mt="-0.2rem"
                mr="-0.4rem"
                color="gray.500"
              ></ChevronRightIcon>
            </Text>
          ))}
        </Flex>
        <Box display="flex"
      justifyContent="center"
      alignItems="center"
      m="1.5rem 0rem">
          <Image src="https://tpc.googlesyndication.com/simgad/13184776689336510616?" alt="" />
        </Box>
      </Box>
    </>
  );
};

export default MenuTop;

