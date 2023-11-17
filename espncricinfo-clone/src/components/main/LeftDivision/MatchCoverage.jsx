import  { useState } from "react";
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Circle,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { GiTrophyCup } from "react-icons/gi";
import { BsPlayCircle } from "react-icons/bs";
import { useDarkMode } from "../../authcontext/DarkModeContext"

const MatchTab = ({ title, subtitle }) => (
  <Tab
    _selected={{ color: "black", fontWeight: "600", borderBottomColor: "blue" }}
  >
    <Text fontSize="1rem">
      {title}
      <Text mt="-0.3rem" fontSize="0.7rem">
        {subtitle}
      </Text>
    </Text>
  </Tab>
);

const MatchCoverage = () => {
  const { darkMode } = useDarkMode();
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;

  // Match Tabs Data
  const matchTabs = [
    { title: "Ind vs Ned", subtitle: "WC, Bengaluru" },
    { title: "Aus vs SA", subtitle: "WC semis, Kolkata" },
    { title: "Eng vs Pak", subtitle: "WC, Kolkata" },
    { title: "WBBL", subtitle: "2023-2024" },
    { title: "Aus vs Ban", subtitle: "WC, Pune" },
  ];

  // Match Cards Data
  const matchCards = [
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1112/dm_231112_INET_CRIC_wc23indned_rahul_marutiqatar_global/dm_231112_INET_CRIC_wc23indned_rahul_marutiqatar_global.jpg",
      text: "Kumble: India need to watch Swing if they case",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1112/dm_231112_cwc2023_branded_dpworldv2/dm_231112_cwc2023_branded_dpworldv2.jpg",
      text: "DP World beyond going off the boundaries",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1112/dm_231112_cwc2023_branded_MOP/dm_231112_cwc2023_branded_MOP.jpg",
      text: "Man of platinum of the day become powerfull",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1112/dm_231112_cwc2023_branded_TVS/dm_231112_cwc2023_branded_TVS.jpg",
      text: "TVS Euro group tires times in the world",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1112/dm_231112_cwc2023_safehands/dm_231112_cwc2023_safehands.jpg",
      text: "Rohit on part time wanted achieve definetly",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1112/dm_231112_INET_CRIC_wc23indned_nedchat_marutiqatar_global/dm_231112_INET_CRIC_wc23indned_nedchat_marutiqatar_global.jpg",
      text: "Late montol return for Bangladesh soon",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1112/dm_231112_INET_CRIC_wc23indned_teamoftournament_marutiqatar_global/dm_231112_INET_CRIC_wc23indned_teamoftournament_marutiqatar_global.jpg",
      text: "Healy and brown named for india tour recalled",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1112/dm_231112_cwc2023_dilipc/dm_231112_cwc2023_dilipc.jpg",
      text: "Gleen Maxwell will come with her family soon",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1112/dm_231112_INET_CRIC_wc23indned_shreyas_marutiqatar_global/dm_231112_INET_CRIC_wc23indned_shreyas_marutiqatar_global.jpg",
      text: "Emits not fit to play because of his problems",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1112/dm_231112_cwc2023_branded_bluecheer_BangaloreRoss/dm_231112_cwc2023_branded_bluecheer_BangaloreRoss.jpg",
      text: "Borovec give coachs to austrlia for india",
    },
  ];

  const matchCards2 = [
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1111/dm_231111_INET_CRIC_WC23_MATCH44_HARISCHAT_GLOBAL/dm_231111_INET_CRIC_WC23_MATCH44_HARISCHAT_GLOBAL.jpg",
      text: "Stocks to decide ODI will be quit soon just wait",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1111/dm_231111_INET_CRIC_MATCH44_SHAHEEN_CHAT_GLOBAL/dm_231111_INET_CRIC_MATCH44_SHAHEEN_CHAT_GLOBAL.jpg",
      text: "Willey considedred that they will do it further",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1111/dm_231111_INET_CRIC_wc23engpak_buttler_marutiqatar_global/dm_231111_INET_CRIC_wc23engpak_buttler_marutiqatar_global.jpg",
      text: "Arther back to take revenge in this matches",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1111/dm_231111_INET_CRIC_wc23engpak_engfuture_marutiqatar_global/dm_231111_INET_CRIC_wc23engpak_engfuture_marutiqatar_global.jpg",
      text: "Malicom should be great bolwer of his time ",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1111/dm_231111_cwc2023_branded_MOP_Willwyv2/dm_231111_cwc2023_branded_MOP_Willwyv2.jpg",
      text: "Logan wan will welcome to team very soon ",
    },

    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1111/dm_231111_INET_CRIC_WC23_MATCH44_PAKvsENG_PLAN_GLOBAL/dm_231111_INET_CRIC_WC23_MATCH44_PAKvsENG_PLAN_GLOBAL.jpg",
      text: "Teams in this situation are going to scared",
    },
  ];

  const matchCards3 = [
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1112/dm_231112_INET_CRIC_WBBL23_MATCH36_PRSWVSSYTW_INDIANSUB/dm_231112_INET_CRIC_WBBL23_MATCH36_PRSWVSSYTW_INDIANSUB.jpg",
      text: "Marious hits hard to get in full backup",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1112/dm_231112_INET_CRIC_WBBL23_MATCH35_ADSWVSBRHW_INDIANSUB/dm_231112_INET_CRIC_WBBL23_MATCH35_ADSWVSBRHW_INDIANSUB.jpg",
      text: "Bates help sixers to three win in row  is great",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1112/dm_231112_INET_CRIC_WBBL23_MATCH34_RE_MLRWVSPRSW__INDIANSUB/dm_231112_INET_CRIC_WBBL23_MATCH34_RE_MLRWVSPRSW__INDIANSUB.jpg",
      text: "Darlington takes 5 for 10 as thunder in the field",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1112/dm_231112_INET_CRIC_WBBL23_MATCH33_RE_SYSWVSHBHW_INDIANSUB/dm_231112_INET_CRIC_WBBL23_MATCH33_RE_SYSWVSHBHW_INDIANSUB.jpg",
      text: "Chlorios make the record in the field of masters",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1112/dm_231112_INET_CRIC_WBBL23_MATCH32__SYTWVSMLSW_INDIANSUB/dm_231112_INET_CRIC_WBBL23_MATCH32__SYTWVSMLSW_INDIANSUB.jpg",
      text: "Devine hits 70 of 36 as sochochars the fever",
    },
  ];

  const matchCards4 = [
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1111/dm_231111_cwc2023_marshpc/dm_231111_cwc2023_marshpc.jpg",
      text: "Highlights moon hits it very fast century",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1111/dm_231111_cwc2023_shantopc/dm_231111_cwc2023_shantopc.jpg",
      text: "Du preez leads to  the threning by good",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1111/dm_231111_INET_CRIC_wc23banaus_ban-future_marutiqatar_global/dm_231111_INET_CRIC_wc23banaus_ban-future_marutiqatar_global.jpg",
      text: "Devine hits 70 of 36 as sochochars the fever",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1111/dm_231111_cwc2023_branded_maruti_safehands_marnus/dm_231111_cwc2023_branded_maruti_safehands_marnus.jpg",
      text: "Bates help sixers to three win in row  is great",
    },
    {
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_480,q_50/esci/media/motion/2023/1111/dm_231111_cwc2023_branded_DP_marsh/dm_231111_cwc2023_branded_DP_marsh.jpg",
      text: "Darlington takes 5 for 10 as thunder in the field",
    },
  ];

  const handleNext = () => {
    if (currentPage * cardsPerPage < matchCards.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const showPrev = currentPage > 1;
  const showNext = currentPage * cardsPerPage < matchCards.length;
  const showNext2 = currentPage * cardsPerPage < matchCards2.length;
  return (
    <div>
      <Box
        borderRadius="8px"
        bg={darkMode?"#1D1E1F":"#FFFFFF"}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.10) 0px 0px 0px 1px',
        }}
      
      >
        <Heading fontSize="1.3rem" p="0.8rem" color={darkMode?"white":"black"}>
          Match Coverage
        </Heading>
        <Tabs color={darkMode?"white":"gray"}>
          <TabList >
            {matchTabs.map((tab, index) => (
              <MatchTab   key={index} title={tab.title} subtitle={tab.subtitle} />
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <Flex>
                <Box w="50%">
                  <Box overflow="hidden" borderRadius="16px">
                    <Image
                      transition="transform 0.3s ease-in-out"
                      _hover={{
                        transform: "scale(1.05)",
                      }}
                      cursor="pointer"
                      borderRadius="16px"
                      src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_960,q_50/lsci/db/PICTURES/CMS/371100/371184.6.jpg"
                      alt=""
                    />
                  </Box>
                </Box>

                <Box ml="1rem" w="48%">
                  <Heading color={darkMode?"white":"black"} fontSize="1.8rem">
                    Kishore: When Chinnaswamy swayed to Kohli's beat
                  </Heading>

                  <Box cursor="pointer" m="1rem 0rem" bg="#E5F6FE">
                    <Flex alignItems="center" p="0.5rem">
                      <GiTrophyCup color="#0DADF4" />
                      <Text ml="0.5rem" fontSize="0.8rem" color="gray">
                        IND vs NED:{" "}
                      </Text>
                      <Text
                        fontSize="0.8rem"
                        fontWeight="500"
                        color="gray"
                        ml="0.1rem"
                      >
                        India won by 160 runs
                      </Text>
                      <ChevronRightIcon ml="9rem" color="#0DADF4" />
                    </Flex>
                  </Box>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.9rem"
                      fontWeight="500"
                    >
                      Report: India go 9-0 after Shreyas and Rahul hundreds
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.9rem"
                      fontWeight="500"
                    >
                      Rohit on part-timers: 'Wanted to see what we can achieve'
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.9rem"
                      fontWeight="500"
                    >
                      Nidamanuru: 'Was trying to study Kuldeep, even on bus'
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.9rem"
                      fontWeight="500"
                    >
                      Stats - India's year of sixes and big totals
                    </Text>
                  </Flex>
                </Box>
              </Flex>
              <Flex m="0.2rem 0rem" fontSize="0.68rem" fontWeight="bold">
                <Text _hover={{ color: "#0DADF4" }}>
                  As it happened Netherlands Bow out &bull; &nbsp;
                </Text>
                <Text _hover={{ color: "#0DADF4" }}>
                  {" "}
                  Vote: The best Kohli ODI ton &bull;
                </Text>
                <Text _hover={{ color: "#0DADF4" }}> &nbsp; Points table</Text>
              </Flex>

              {/* Match Card List */}
              <Flex mt="1.5rem">
                {/* Navigation Arrows */}
                <Circle
                  position="absolute"
                  left="-1%"
                  onClick={handlePrev}
                  top="79%"
                  transform="translateY(-50%)"
                  colorScheme="teal"
                  ml="2"
                  bg={"white"}
                  boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                  opacity={showPrev ? 1 : 0}
                  cursor={showPrev ? "pointer" : "default"}
                >
                  <ChevronLeftIcon color={"black"} boxSize={7} />
                </Circle>

                {matchCards
                  .slice(
                    (currentPage - 1) * cardsPerPage,
                    currentPage * cardsPerPage
                  )
                  .map((card, index) => (
                    <Box key={index} w="18%" ml="0.7rem" mr="0.1rem">
                      <Box overflow="hidden" borderRadius="14px">
                        <Image
                          cursor="pointer"
                          transition="transform 0.3s ease-in-out"
                          _hover={{
                            transform: "scale(1.05)",
                          }}
                          src={card.image}
                          alt=""
                        />
                      </Box>
                      <Text fontSize="0.85rem" color={darkMode?"white":"black"} fontWeight="400">
                        {card.text}
                      </Text>
                    </Box>
                  ))}

                <Circle
                  position="absolute"
                  right="1%"
                  onClick={handleNext}
                  top="24.2rem"
                  transform="translateY(-50%)"
                  colorScheme="teal"
                  ml="2"
                  bg={"white"}
                  boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                  opacity={showNext ? 1 : 0}
                  cursor={showNext ? "pointer" : "default"}
                >
                  <ChevronRightIcon color={"black"} boxSize={7} />
                </Circle>
              </Flex>
            </TabPanel>

            {/* ---------------------tab2---------- */}
            <TabPanel>
              <Flex>
                <Box w="50%">
                  <Box overflow="hidden" borderRadius="16px">
                    <Image
                      transition="transform 0.3s ease-in-out"
                      _hover={{
                        transform: "scale(1.05)",
                      }}
                      cursor="pointer"
                      borderRadius="16px"
                      src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_960,q_50/esci/media/motion/2023/1113/dm_231113_INET_CRIC_bavuma_update_GLOBAL/dm_231113_INET_CRIC_bavuma_update_GLOBAL.jpg"
                      alt=""
                    />
                  </Box>

                  <Box>
                    <Flex m="0.2rem 0rem" fontSize="0.64rem" fontWeight="bold">
                      <Text _hover={{ color: "#0DADF4" }}>
                        As it happened Netherlands Bow out &bull; &nbsp;
                      </Text>
                      <Text _hover={{ color: "#0DADF4" }}>
                        {" "}
                        Vote: The best Kohli ODI ton &bull;
                      </Text>
                      <Text _hover={{ color: "#0DADF4" }}>
                        {" "}
                        &nbsp; Points table
                      </Text>
                    </Flex>
                  </Box>
                </Box>

                <Box ml="1rem" w="48%">
                  <Heading mb="1rem"color={darkMode?"white":"black"} fontSize="1.8rem">
                    Nicholas: No room for ghosts of the past in South Africa's
                    quest
                  </Heading>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.85rem"
                      fontWeight="500"
                    >
                      Starc contrast between the Mitch of then and now
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.85rem"
                      fontWeight="500"
                    >
                      Starc doesn't see World Cup as his ODI swansong
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.85rem"
                      fontWeight="500"
                    >
                      Bavuma takes part in optional training session
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.85rem"
                      fontWeight="500"
                    >
                      All eyes on the weather in Kolkata
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.85rem"
                      fontWeight="500"
                    >
                      'Artistic hunters' SA draw inspiration from tiki-tika
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.85rem"
                      fontWeight="500"
                    >
                      'We didn't speak about it' - Steyn on 2015 semis
                      heartbreak
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.85rem"
                      fontWeight="500"
                    >
                      Labuschagne vs Stoinis - Australia's big call
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <BsPlayCircle
                      color="#0DADF4"
                      tt="0.2rem"
                      fontSize="0.9rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.85rem"
                      fontWeight="500"
                      ml="0.3rem"
                      mt="-0.2rem"
                    >
                      Steyn: If SA win the semi-final, they can dominate the
                      final
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </TabPanel>

            {/* ------------------Tab3--------------- */}

            <TabPanel>
              <Flex>
                <Box w="50%">
                  <Box overflow="hidden" borderRadius="16px">
                    <Image
                      transition="transform 0.3s ease-in-out"
                      _hover={{
                        transform: "scale(1.05)",
                      }}
                      cursor="pointer"
                      borderRadius="16px"
                      src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/lsci/db/PICTURES/CMS/371100/371118.6.jpg"
                      alt=""
                    />
                  </Box>
                </Box>

                <Box ml="1rem" w="48%">
                  <Heading color={darkMode?"white":"black"} fontSize="1.8rem">
                    Stokes and Willey fashion a last hurrah for England
                  </Heading>

                  <Box cursor="pointer" m="1rem 0rem" bg="#E5F6FE">
                    <Flex alignItems="center" p="0.5rem">
                      <GiTrophyCup color="#0DADF4" />
                      <Text ml="0.5rem" fontSize="0.7rem" color="gray">
                        ENG vs PAK:{" "}
                      </Text>
                      <Text
                        fontSize="0.7rem"
                        fontWeight="500"
                        color="gray"
                        ml="0.1rem"
                      >
                        England won by 93 runs
                      </Text>
                      <ChevronRightIcon ml="9rem" color="#0DADF4" />
                    </Flex>
                  </Box>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.9rem"
                      fontWeight="500"
                    >
                      Mott 'more determined than ever' to coach England
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.9rem"
                      fontWeight="500"
                    >
                      Willey considered missing World Cup
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.9rem"
                      fontWeight="500"
                    >
                      Stokes to decide ODI future after knee surgery
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.9rem"
                      fontWeight="500"
                    >
                      Arthur backs Babar to stay as Pakistan captain
                    </Text>
                  </Flex>
                </Box>
              </Flex>
              <Flex m="0.2rem 0rem" fontSize="0.68rem" fontWeight="bold">
                <Text _hover={{ color: "#0DADF4" }}>
                  As it happened - Pakistan slip up &bull; &nbsp;
                </Text>

                <Text _hover={{ color: "#0DADF4" }}> &nbsp; Points table</Text>
              </Flex>

              {/* Match Card List */}
              <Flex mt="1.5rem">
                {/* Navigation Arrows */}
                <Circle
                  position="absolute"
                  left="-1%"
                  onClick={handlePrev}
                  top="79%"
                  transform="translateY(-50%)"
                  colorScheme="teal"
                  ml="2"
                  bg={"white"}
                  boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                  opacity={showPrev ? 1 : 0}
                  cursor={showPrev ? "pointer" : "default"}
                >
                  <ChevronLeftIcon color={"black"} boxSize={7} />
                </Circle>

                {matchCards2
                  .slice(
                    (currentPage - 1) * cardsPerPage,
                    currentPage * cardsPerPage
                  )
                  .map((card, index) => (
                    <Box key={index} w="18%" ml="0.7rem" mr="0.1rem">
                      <Box overflow="hidden" borderRadius="14px">
                        <Image
                          cursor="pointer"
                          transition="transform 0.3s ease-in-out"
                          _hover={{
                            transform: "scale(1.05)",
                          }}
                          src={card.image}
                          alt=""
                        />
                      </Box>
                      <Text fontSize="0.85rem" color={darkMode?"white":"black"} fontWeight="400">
                        {card.text}
                      </Text>
                    </Box>
                  ))}

                <Circle
                  position="absolute"
                  right="1%"
                  onClick={handleNext}
                  top="24.2rem"
                  transform="translateY(-50%)"
                  colorScheme="teal"
                  ml="2"
                  bg={"white"}
                  boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
                  opacity={showNext2 ? 1 : 0}
                  cursor={showNext2 ? "pointer" : "default"}
                >
                  <ChevronRightIcon color={"black"} boxSize={7} />
                </Circle>
              </Flex>
            </TabPanel>

            {/* -------------------------tab4------------------- */}

            <TabPanel>
              <Flex>
                <Box w="50%">
                  <Box overflow="hidden" borderRadius="16px">
                    <Image
                      transition="transform 0.3s ease-in-out"
                      _hover={{
                        transform: "scale(1.05)",
                      }}
                      cursor="pointer"
                      borderRadius="16px"
                      src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/lsci/db/PICTURES/CMS/371200/371208.6.jpg"
                      alt=""
                    />
                  </Box>
                  <Box>
                    <Flex m="0.2rem 0rem" fontSize="0.68rem" fontWeight="bold">
                      <Text _hover={{ color: "#0DADF4" }}> Points table</Text>
                    </Flex>
                  </Box>
                </Box>

                <Box ml="1rem" w="48%">
                  <Heading color={darkMode?"white":"black"} fontSize="1.8rem">
                    Carmichael cameo gives Sixers last-ball WBBL win
                  </Heading>

                  <Box cursor="pointer" m="1rem 0rem" bg="#E5F6FE">
                    <Flex alignItems="center" p="0.5rem">
                      <GiTrophyCup color="#0DADF4" />
                      <Text ml="0.5rem" fontSize="0.8rem" color="gray">
                        HH-W vs SS-W:{" "}
                      </Text>
                      <Text
                        fontSize="0.8rem"
                        fontWeight="500"
                        color="gray"
                        ml="0.1rem"
                      >
                        sixers won by 3 wickets
                      </Text>
                      <ChevronRightIcon ml="6.5rem" color="#0DADF4" />
                    </Flex>
                  </Box>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.9rem"
                      fontWeight="500"
                    >
                      Mooney smashes ton as Scorchers topple ladder-leading
                      Thunder
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.9rem"
                      fontWeight="500"
                    >
                      Sutherland, Lanning shine as Melbourne Stars take derby
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.9rem"
                      fontWeight="500"
                    >
                      Inspired by Thommo, teenage quick Illingworth eyes record
                      WBBL speeds
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.9rem"
                      fontWeight="500"
                    >
                      English players could miss WBBL final for India trip
                    </Text>
                  </Flex>
                </Box>
              </Flex>

              {/* Match Card List */}
              <Flex mt="1.5rem">
                {matchCards3
                  .slice(
                    (currentPage - 1) * cardsPerPage,
                    currentPage * cardsPerPage
                  )
                  .map((card, index) => (
                    <Box key={index} w="18%" ml="0.7rem" mr="0.1rem">
                      <Box overflow="hidden" borderRadius="14px">
                        <Image
                          cursor="pointer"
                          transition="transform 0.3s ease-in-out"
                          _hover={{
                            transform: "scale(1.05)",
                          }}
                          src={card.image}
                          alt=""
                        />
                      </Box>
                      <Text fontSize="0.85rem"color={darkMode?"white":"black"} fontWeight="400">
                        {card.text}
                      </Text>
                    </Box>
                  ))}
              </Flex>
            </TabPanel>

            {/* ------------------Tab5------------------- */}

            <TabPanel>
              <Flex>
                <Box w="50%">
                  <Box overflow="hidden" borderRadius="16px">
                    <Image
                      transition="transform 0.3s ease-in-out"
                      _hover={{
                        transform: "scale(1.05)",
                      }}
                      cursor="pointer"
                      borderRadius="16px"
                      src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_960,q_50/esci/media/motion/2023/1111/dm_231111_INET_CRIC_wc23ausban_review_marutiqatar_global/dm_231111_INET_CRIC_wc23ausban_review_marutiqatar_global.jpg"
                      alt=""
                    />
                  </Box>
                  <Box>
                    <Flex m="0.2rem 0rem" fontSize="0.68rem" fontWeight="bold">
                      <Text _hover={{ color: "#0DADF4" }}>
                        {" "}
                        Points table &nbsp; &bull; &nbsp;{" "}
                      </Text>
                      <Text _hover={{ color: "#0DADF4" }}>
                        As it happened hridoy 74 in ven
                      </Text>
                    </Flex>
                  </Box>
                </Box>

                <Box ml="1rem" w="48%">
                  <Heading color={darkMode?"white":"black"} fontSize="1.8rem">
                    Labuschagne vs Stoinis: Australia's big call for the
                    semi-final
                  </Heading>

                  <Box cursor="pointer" m="1rem 0rem" bg="#E5F6FE">
                    <Flex alignItems="center" p="0.5rem">
                      <GiTrophyCup color="#0DADF4" />
                      <Text ml="0.5rem" fontSize="0.8rem" color="gray">
                        AUS vs BAN:{" "}
                      </Text>
                      <Text
                        fontSize="0.8rem"
                        fontWeight="500"
                        color="gray"
                        ml="0.1rem"
                      >
                        Australia won by 8 wickets
                      </Text>
                      <ChevronRightIcon ml="7rem" color="#0DADF4" />
                    </Flex>
                  </Box>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.9rem"
                      fontWeight="500"
                    >
                      Marsh 177* powers Australia to seventh straight win
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.9rem"
                      fontWeight="500"
                    >
                      Monga: Marsh owns the No. 3 spot with hitting
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.9rem"
                      fontWeight="500"
                    >
                      Batting order shuffle didn't help, admits Shanto
                    </Text>
                  </Flex>

                  <Flex mt="0.2rem" cursor="pointer">
                    <ChevronRightIcon
                      color="#0DADF4"
                      mt="0.2rem"
                      fontSize="1.1rem"
                    />
                    <Text
                      _hover={{ color: "#0DADF4" }}
                      fontSize="0.9rem"
                      fontWeight="700"
                      color="black"
                    >
                      Top wicket-takers: Zampa goes to No. 1
                    </Text>
                  </Flex>
                </Box>
              </Flex>

              {/* Match Card List */}
              <Flex mt="1.5rem">
                {matchCards4
                  .slice(
                    (currentPage - 1) * cardsPerPage,
                    currentPage * cardsPerPage
                  )
                  .map((card, index) => (
                    <Box key={index} w="18%" ml="0.7rem" mr="0.1rem">
                      <Box overflow="hidden" borderRadius="14px">
                        <Image
                          cursor="pointer"
                          transition="transform 0.3s ease-in-out"
                          _hover={{
                            transform: "scale(1.05)",
                          }}
                          src={card.image}
                          alt=""
                        />
                      </Box>
                      <Text fontSize="0.85rem" color={darkMode?"white":"black"} fontWeight="400">
                        {card.text}
                      </Text>
                    </Box>
                  ))}
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
};

export default MatchCoverage;
