
import { Box, Image, Text, Flex, Heading } from "@chakra-ui/react";
import { useDarkMode } from "../../authcontext/DarkModeContext"

const EditorPicks = () => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <Box
        borderRadius="8px"
        mt="2rem"
        p="1rem"
        pb="3rem"
        bg={darkMode?"#1D1E1F":"#FFFFFF"}
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.10) 0px 0px 0px 1px",
        }}
      >
        <Flex justifyContent="space-between">
          <Heading fontSize="1rem" p="0.8rem" color={darkMode?"white":"black"}>
            Editor's Picks
          </Heading>
          <Heading
            cursor="pointer"
            fontSize="0.8rem"
            mt="0.2rem"
            color="#0FADF5"
            p="0.8rem"
          >
            See All
          </Heading>
        </Flex>
        <hr />

        <Flex justifyContent="space-evenly">
          <Box w="31%" mt="1rem">
            <Box overflow="hidden" borderRadius="8px 8px 0px 0px">
              <Image
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/301500/301593.6.jpg"
                alt=""
                srcset=""
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
                cursor="pointer"
              />
            </Box>
            <Box bg="black" color="white" borderRadius="0px 0px 8px 8px">
              <Heading cursor="pointer" fontSize="0.9rem" p="0.7rem">
                Mag Lening leaves a legacy of generational change and success
              </Heading>
              <Text fontSize="0.8rem" pl="0.6rem" pb="1rem">
                Alex Malcolm
              </Text>
            </Box>
          </Box>
          <Box w="31%" mt="1rem">
            <Box overflow="hidden" borderRadius="8px 8px 0px 0px">
              <Image
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/369400/369478.6.jpg"
                alt=""
                srcset=""
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
                cursor="pointer"
              />
            </Box>
            <Box bg="black" color="white" borderRadius="0px 0px 8px 8px">
              <Heading cursor="pointer" fontSize="0.9rem" p="0.7rem">
                There's no denying David Warner's an ODI GOAT
              </Heading>
              <Text fontSize="0.8rem" pl="0.6rem" pb="1rem">
                Alex Malcolm
              </Text>
            </Box>
          </Box>
          <Box w="31%" mt="1rem">
            <Box overflow="hidden" borderRadius="8px 8px 0px 0px">
              <Image
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/370900/370969.6.jpg"
                alt=""
                srcset=""
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
                cursor="pointer"
              />
            </Box>
            <Box bg="black" color="white" borderRadius="0px 0px 8px 8px">
              <Heading cursor="pointer" fontSize="0.9rem" p="0.7rem">
                How Mandeep and Salvi ended Punjab's 30-year trophy drought
              </Heading>
              <Text fontSize="0.8rem" pl="0.6rem" pb="1rem">
                Hermant Brer
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default EditorPicks;
