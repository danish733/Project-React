
import { Box, Text, Heading, Flex, SimpleGrid, Link } from "@chakra-ui/react";
import { BiSolidQuoteLeft } from "react-icons/bi";

const FooterMid = () => {
  return (
    <>
      <Box bg="black" pb="4rem">
        <Box w="60%" m="auto" pt="3rem" pb="2.5rem">
          <Box
            color={"white"}
            display="flex"
            justifyContent={"center"}
            fontSize="2rem"
          >
            <BiSolidQuoteLeft />
          </Box>

          <Heading
            style={{ fontSize: "1.8rem", textAlign: "center", color: "white" }}
          >
            We did a fashion show there, but no one knows about that. It's a
            good thing no one knows about that
          </Heading>

          <Heading
            style={{
              fontSize: "1.3rem",
              textAlign: "center",
              marginTop: "0.8rem",
              color: "#D8D8D8",
            }}
          >
            Rohit Sharma on the unspeakable things the Indian team has been
            doing behind the scenes at the World Cup
          </Heading>

          <Text textAlign="center" mt="3" fontSize="0.7rem" color="grey">
            Share &nbsp; &bull; &nbsp; See all
          </Text>
        </Box>

        <hr />

        <Box pt="4rem">
          <Flex m="auto" w="82%">
            <Box w="40%">
              <Heading mb="1rem" fontSize="1rem" color="white">
                Keys Series
              </Heading>
              <SimpleGrid columns={2} spacing={2} color={"#7B7B7B"}>
                <Link>World Cup 2023</Link>
                <Link>Women's Championship</Link>
                <Link>Vijay Hazare Trophy</Link>
                <Link>World Test Championship</Link>
                <Link>WBBL 2023</Link>
                <Link>World Cup Super League</Link>
                <Link>The Marsh Cup</Link>
              </SimpleGrid>
            </Box>

            <Box w="20%">
              <Heading mb="1rem" fontSize="1rem" color="white">
                Quick Links
              </Heading>
              <SimpleGrid spacing={2} color={"#7B7B7B"}>
                <Link>Matchday</Link>
                <Link>Matchday Hindi</Link>
                <Link>Road To The World Cup</Link>
                <Link>Safe Hands</Link>
                <Link>Tame the Turns</Link>
                <Link>Cheer For Greatness</Link>
                <Link>Men of Platinum</Link>
                <Link>Blue Cheer Squad</Link>
                <Link>Beyond Boundaries</Link>
                <Link>Naya Sher</Link>
                <Link>Hindi Videos</Link>
                <Link>Haan Ya Naa</Link>
                <Link>Ravi & Raunak</Link>
                <Link>ICC Rankings</Link>
              </SimpleGrid>
            </Box>

            <Box w="20%">
              <Heading mb="1rem" fontSize="1rem" color="white">
                Follow ESPNcricinfo
              </Heading>
              <SimpleGrid spacing={2} color={"#7B7B7B"}>
                <Link>Intagram</Link>
                <Link>Whatsapp</Link>
                <Link>Twitter</Link>
                <Link>Facebook</Link>
                <Link>You Tube</Link>
              </SimpleGrid>
            </Box>

            <Box w="20%">
              <Heading mb="1rem" fontSize="1rem" color="white">
                ESPNcricinfo Apps
              </Heading>
              <SimpleGrid spacing={2} color={"#7B7B7B"}>
                <Link>Android App</Link>
                <Link>ios App</Link>
              </SimpleGrid>

              <Heading m="1.2rem 0rem" fontSize="1rem" color="white">
                ESPN Sites
              </Heading>
              <SimpleGrid spacing={2} color={"#7B7B7B"}>
                <Link>The Cricket Monthly</Link>
                <Link>ESPN</Link>
              </SimpleGrid>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default FooterMid;
