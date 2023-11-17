
import { Flex, Box, Heading, Grid, Image, Text } from "@chakra-ui/react";
import { useDarkMode } from "../../authcontext/DarkModeContext"

const TopStories = () => {
  const { darkMode } = useDarkMode();
  return (
    <>
      <Box
        borderRadius="10px"
        bg={darkMode?"#1D1E1F":"#FFFFFF"}
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.10) 0px 0px 0px 1px",
        }}
        mt="2rem"
      >
        <Flex justifyContent="space-between">
          <Heading fontSize="1rem" p="0.8rem" color={darkMode?"white":"black"}>
            Top Stories
          </Heading>
          <Heading fontSize="0.8rem" mt="0.2rem" color="#0FADF5" p="0.8rem">
            See All
          </Heading>
        </Flex>
        <hr />

        <Box>
          <Grid templateColumns="repeat(2, 1fr)">
            <Box
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.10) 0px 0px 0px 1px",
              }}
            >
              <Box>
                <Flex>
                  <Box w="50%" p="1rem" borderRadius="8px" overflow="hidden">
                    <Box overflow="hidden" borderRadius="8px">
                      <Image
                        borderRadius="8px"
                        transition="transform 0.3s ease-in-out"
                        _hover={{
                          transform: "scale(1.05)",
                        }}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320,q_50/lsci/db/PICTURES/CMS/370000/370074.6.jpg"
                        alt=""
                        srcset=""
                        cursor="pointer"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Heading _hover={{ color: "#05AAF5" }} cursor="pointer" fontSize="0.8rem" mt="1.1rem" color={darkMode?"white":"black"}>
                      The complex reality of bavumas world cup semi final
                    </Heading>
                    <Text fontSize="0.8rem" color="gray" m="0.2rem 0rem">
                      20 hours ago &nbsp; &bull; &nbsp; Firdose Moonda
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>

            <Box
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.10) 0px 0px 0px 1px",
              }}
            >
              <Box>
                <Flex>
                  <Box w="50%" p="1rem" borderRadius="8px" overflow="hidden">
                    <Box overflow="hidden" borderRadius="8px">
                      <Image
                        borderRadius="8px"
                        transition="transform 0.3s ease-in-out"
                        _hover={{
                          transform: "scale(1.05)",
                        }}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320,q_50/lsci/db/PICTURES/CMS/369300/369396.6.jpg"
                        alt=""
                        srcset=""
                        cursor="pointer"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Heading _hover={{ color: "#05AAF5" }} cursor="pointer" fontSize="0.8rem" mt="1.1rem" color={darkMode?"white":"black"}>
                      Hardik pandya not fit to paly T20's against Australia
                    </Heading>
                    <Text fontSize="0.8rem" color="gray" m="0.2rem 0rem">
                      19 hours ago &nbsp; &bull; &nbsp; Nagraj Gullapodi
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>

            <Box
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.10) 0px 0px 0px 1px",
              }}
            >
              <Box>
                <Flex>
                  <Box w="55%" p="1rem" borderRadius="8px" overflow="hidden">
                    <Box overflow="hidden" borderRadius="8px">
                      <Image
                        borderRadius="8px"
                        transition="transform 0.3s ease-in-out"
                        _hover={{
                          transform: "scale(1.05)",
                        }}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320,q_50/lsci/db/PICTURES/CMS/369500/369522.6.jpg"
                        alt=""
                        srcset=""
                        cursor="pointer"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Heading _hover={{ color: "#05AAF5" }} cursor="pointer" fontSize="0.8rem" mt="1.1rem" color={darkMode?"white":"black"}>
                      Adam Zampa: The self-aware non alpha on top of his game
                    </Heading>
                    <Text fontSize="0.8rem" color="gray" m="0.2rem 0rem">
                      17 hours ago &nbsp; &bull; &nbsp; Andrew fidel fernado
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>

            <Box
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.10) 0px 0px 0px 1px",
              }}
            >
              <Box>
                <Flex>
                  <Box w="55%" p="1rem" borderRadius="8px" overflow="hidden">
                    <Box overflow="hidden" borderRadius="8px">
                      <Image
                        borderRadius="8px"
                        transition="transform 0.3s ease-in-out"
                        _hover={{
                          transform: "scale(1.05)",
                        }}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320,q_50/lsci/db/PICTURES/CMS/366800/366878.6.jpg"
                        alt=""
                        srcset=""
                        cursor="pointer"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Heading _hover={{ color: "#05AAF5" }} cursor="pointer" fontSize="0.8rem" mt="1.1rem" color={darkMode?"white":"black"}>
                      Flintop of coach Northern supercharger in mens hundred
                    </Heading>
                    <Text fontSize="0.8rem" color="gray" m="0.2rem 0rem">
                      4 hours ago &nbsp; &bull; &nbsp; Vitushan Ethanrajah
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>

            <Box
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.10) 0px 0px 0px 1px",
              }}
            >
              <Box>
                <Flex>
                  <Box w="65%" p="1rem" borderRadius="8px" overflow="hidden">
                    <Box overflow="hidden" borderRadius="8px">
                      <Image
                        borderRadius="8px"
                        transition="transform 0.3s ease-in-out"
                        _hover={{
                          transform: "scale(1.05)",
                        }}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320,q_50/lsci/db/PICTURES/CMS/370800/370814.6.jpg"
                        alt=""
                        srcset=""
                        cursor="pointer"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Heading  cursor="pointer" fontSize="0.8rem" mt="1.1rem" _hover={{ color: "#05AAF5" }} color={darkMode?"white":"black"}>
                      If you're tired of the Mathews timed-out controversy,
                      you're tired of life
                    </Heading>
                    <Text  fontSize="0.8rem" color="gray" m="0.2rem 0rem">
                      6 hours ago &nbsp; &bull; &nbsp; Alan Gardner
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>

            <Box
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.10) 0px 0px 0px 1px",
              }}
            >
              <Box>
                <Flex>
                  <Box w="42%" p="1rem" borderRadius="8px" overflow="hidden">
                    <Box overflow="hidden" borderRadius="8px" color={darkMode?"white":"black"}>
                      <Image
                        borderRadius="8px"
                        transition="transform 0.3s ease-in-out"
                        _hover={{
                          transform: "scale(1.05)",
                        }}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320,q_50/lsci/db/PICTURES/CMS/371200/371260.6.jpg"
                        alt=""
                        srcset=""
                        cursor="pointer"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Heading _hover={{ color: "#05AAF5" }} cursor="pointer" fontSize="0.8rem" mt="1.1rem" color={darkMode?"white":"black"}>
                      cheatle Feard her australia career was over
                    </Heading>
                    <Text fontSize="0.8rem" color="gray" m="0.2rem 0rem">
                      6 hours ago &nbsp; &bull; &nbsp; Andrew Mc Glashan
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>

            <Box
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.10) 0px 0px 0px 1px",
              }}
            >
              <Box>
                <Flex>
                  <Box w="55%" p="1rem" borderRadius="8px" overflow="hidden">
                    <Box overflow="hidden" borderRadius="8px" color={darkMode?"white":"black"}>
                      <Image
                        borderRadius="8px"
                        transition="transform 0.3s ease-in-out"
                        _hover={{
                          transform: "scale(1.05)",
                        }}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320,q_50/lsci/db/PICTURES/CMS/370300/370327.6.jpg"
                        alt=""
                        srcset=""
                        cursor="pointer"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Heading _hover={{ color: "#05AAF5" }} cursor="pointer" fontSize="0.8rem" mt="1.1rem" color={darkMode?"white":"black"}>
                      Bangladeshi Baters too easily Satisfied, say consult s
                      sriram
                    </Heading>
                    <Text fontSize="0.8rem" color="gray" m="0.2rem 0rem">
                      17 hours ago &nbsp; &bull; &nbsp; Mohammad isam
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>

            <Box
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.10) 0px 0px 0px 1px",
              }}
            >
              <Box>
                <Flex>
                  <Box w="65%" p="1rem" borderRadius="8px" overflow="hidden">
                    <Box overflow="hidden" borderRadius="8px" color={darkMode?"white":"black"}>
                      <Image
                        borderRadius="8px"
                        transition="transform 0.3s ease-in-out"
                        _hover={{
                          transform: "scale(1.05)",
                        }}
                        src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320,q_50/lsci/db/PICTURES/CMS/370200/370250.6.jpg"
                        alt=""
                        srcset=""
                        cursor="pointer"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Heading _hover={{ color: "#05AAF5" }} cursor="pointer" fontSize="0.8rem" mt="1.1rem" color={darkMode?"white":"black"}>
                      ODI world cup digest are india unstoppable in quest for
                      home title?
                    </Heading>
                    <Text fontSize="0.8rem" color="gray" m="0.2rem 0rem">
                      4 hours ago &nbsp; &bull; &nbsp; Espncricinfo Staff
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default TopStories;
