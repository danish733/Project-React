
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

const FooterTop = () => {
  return (
    <Box bg="#1D1E1F">
        
    <Box w="80.2%" m="auto">
      <Box>
        <Flex m="auto" pt="3rem" justifyContent="space-between">
          <Heading fontSize="1.2rem" p="0.8rem" color="white">
            Photos
          </Heading>
          <Heading cursor='pointer' fontSize="1rem" mt="0.2rem" color="#0FADF5" p="0.8rem">
            See All
          </Heading>
        </Flex>
      </Box>
      <Box pb="4rem">
        <Flex justifyContent={"space-around"}>
          <Grid templateColumns="repeat(4, 1fr)" gap={3}>
            <GridItem
              bg="tomato"
              w="150px"
              h="150px"
              borderRadius="8px"
              overflow="hidden"
            >
              <Box>
                <Image
                  src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_480,q_50/lsci/db/PICTURES/CMS/371400/371439.jpg"
                  alt=""
                  srcset=""
                  borderRadius="8px"
                  cursor="pointer"
                  transition="transform 0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Box>
            </GridItem>
            <GridItem
              bg="lightblue"
              colSpan={3}
              rowSpan={2}
              borderRadius="8px"
              overflow="hidden"
            >
              <Image
                borderRadius="8px"
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_960,q_50/lsci/db/PICTURES/CMS/371400/371437.jpg"
                alt=""
                srcset=""
                h="312px"
                cursor="pointer"
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </GridItem>
            <GridItem
              bg="lightgreen"
              w="150px"
              h="150px"
              borderRadius="8px"
              overflow="hidden"
            >
              <Image
                borderRadius="8px"
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_480,q_50/lsci/db/PICTURES/CMS/371400/371438.jpg"
                alt=""
                srcset=""
                cursor="pointer"
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </GridItem>
          </Grid>

          <Grid templateColumns="repeat(4, 1fr)" gap={3} ml="0.8rem">
            <GridItem
              bg="tomato"
              w="150px"
              h="150px"
              borderRadius="8px"
              overflow="hidden"
            >
              <Image
                borderRadius="8px"
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_480,q_50/lsci/db/PICTURES/CMS/371400/371436.jpg"
                alt=""
                srcset=""
                cursor="pointer"
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </GridItem>
            <GridItem
              bg="lightblue"
              colSpan={3}
              rowSpan={2}
              borderRadius="8px"
              overflow="hidden"
            >
              <Image
                borderRadius="8px"
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_960,q_50/lsci/db/PICTURES/CMS/371400/371434.jpg"
                alt=""
                srcset=""
                h="312px"
                cursor="pointer"
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </GridItem>
            <GridItem
              bg="lightgreen"
              w="150px"
              h="150px"
              borderRadius="8px"
              overflow="hidden"
            >
              <Image
                borderRadius="8px"
                src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_480,q_50/lsci/db/PICTURES/CMS/371400/371435.jpg"
                alt=""
                srcset=""
                cursor="pointer"
                transition="transform 0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </GridItem>
          </Grid>
        </Flex>
      </Box>
    </Box>
    </Box>
  );
};

export default FooterTop;
