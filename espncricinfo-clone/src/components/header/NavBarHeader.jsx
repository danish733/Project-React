
import React, { useState, useEffect} from "react";
import { FiGlobe, FiSun } from "react-icons/fi";
import { CgMenuGridR } from "react-icons/cg";
import { BellIcon, CloseIcon } from "@chakra-ui/icons";
import { useDisclosure, Button, Link, Input } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import {
  Box,
  Flex,
  Image,
  Text,
  IconButton,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { MoonIcon, SearchIcon } from "@chakra-ui/icons";
import { useDarkMode } from "../authcontext/DarkModeContext";

const NavBarHeader = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isSticky, setSticky] = useState(false);

// stick navar fucntion
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const editions = [
    "Africa",
    "Australia",
    "Bangladesh",
    "India",
    "India-hindi",
    "India-Tamil",
    "New Zealand",
    "Pakistan",
    "Sri Lanka",
    "United Kingdom",
    "United States",
    "Global",
  ];
  const languages = [
    "English",
    "Español",
    "हिन्दी",
    "বাংলা",
    "ਪੰਜਾਬੀ",
    "தமிழ்",
  ];

  const menuItems = {
    "Live Scores": [
      "Live Score Home",
      "Schedule",
      "Results",
      "Month view",
      "Seasons View",
      "International score",
      "Desktop Scoreboard",
    ],
    Series: [
      "World Cup 2023",
      "Vijay Hazare",
      "Bangladesh v Pakistan (W)",
      "WBBL 2023",
      "Shiffiled Shield",
      "WTC 2023-2025",
      "Womens Championship",
      "CWC Super League",
      "CWC League 2",
      "-Future Siries-",
      "-Archieves-",
    ],
    Teams: [
      "Australia",
      "Afganistan",
      "Bangladesh",
      "Ireland",
      "Englamd",
      "Namibia",
      "India",
      "Nepal",
      "New Zealand",
      "Netherlands",
      "Pakistan",
      "Oman",
      "South Africa",
      "PNG",
      "Sri Lanka",
      "Scotland",
      "West Indies",
      "UAE",
      "Zimbabwe",
      "USA",
    ],
    News: [
      "News Home",
      "Future Of ODIs",
      "Ball-temparing",
      "Technology In Cricket",
      "Racism",
      "Run-out controversy",
      "Corruption",
      "Item H",
    ],
    Features: [
      "Features Home",
      "On This Day",
      "Writers",
      "Web Stories",
      "Photo Gallries",
      "Cricinfo 30 years",
      "The Cricket Monthly",
    ],
    Videos: [
      "Match Day",
      "Match Day Hindi",
      "Safe Hands",
      "Tame The Turn",
      "Men Of Platinum",
      "Blue Cheer Squads",
      "Highlights",
    ],
    Stats: [
      "Stats Home",
      "AskCricinfo",
      "Statsguru",
      "SuperStats",
      "Players",
      "grounds",
      "Rankings",
    ],
    "World Cup 2023": [
      "Tour Diary",
      "Fixtures and Results",
      "Points Table",
      "Squads",
      "Videos",
      "Teams",
      "Photos",
      "Records",
    ],
  };

  function handleNotification() {
    onOpen();
  }

  function onAlertCancel() {
    const notNowButton = document.querySelector(".not-now-button");
    notNowButton.style.backgroundColor = "green";
    setTimeout(() => {
      onClose();
    }, [50]);
  }

  function onAlertOK() {
    onClose();

    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification("Notification Title", {
          body: "Notification Body",
        });
      } else {
        console.log("Notification permission denied");
      }
    });
  }

  const handleSearchIconClick = () => {
    setSearchOpen(true);
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  const handleExist = () => {
    setSearchValue("");
    handleSearchClose();
  };

  const handleSearchSubmit = () => {
    alert("under progress");

    setSearchValue("");
    setSearchOpen(false);
    handleSearchClose();
  };

  return (
    <>
      <Box
        bg={darkMode ? "#1A202C" : "#03A9F4"}
        p={4}
        h="3rem"
        position={isSticky ? "fixed" : "relative"}
        top="0"
        width="100%"
        zIndex={1000}
      >
        {/* <--------------------Menu left side -------------------------> */}
        
        <Flex align="center">

          {/* <-----------------------Menu logo-------------------------> */}

          <Flex mt="-4" ml="9rem">
            <Image
              w="40"
              src="https://wassets.hscicdn.com/static/images/logo.png"
              alt=""
              backgroundColor="none"
            />
          </Flex>

          {/* <-----------------------Menu middle-------------------------> */}

          <Flex mt="-2" ml="3rem">

            {/* <-----------------------List of menu item-----------------> */}

            {Object.keys(menuItems).map((item) => (
              <Popover
                key={item}
                trigger="hover"
                placement="bottom"
                offset={[170, -2]}
                gutter={20}
              >
                <PopoverTrigger>
                  <Text
                    mt="-0.5rem"
                    p="0.8rem 0.8rem 0.7rem 0.8rem"
                    color="white"
                    _hover={{ bg: "#0398DC", cursor: "pointer" }}
                  >
                    {item}
                  </Text>
                </PopoverTrigger>
                <PopoverContent
                  style={{
                    borderRadius: 10,
                    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                    backgroundColor: darkMode ? "#1A202C" : "white",
                  }}
                  cursor="pointer"
                  w="auto"
                >
                  <PopoverArrow />
                  <PopoverBody color={darkMode ? "white" : "black"} m="4">
                    <SimpleGrid columns={2} spacing={5}>
                      {menuItems[item].map((menuItem) => (
                        <Box key={menuItem}>
                          <Box
                            _hover={{
                              color: "black",
                              backgroundColor: "blue.50",
                              borderRadius: "4px",
                            }}
                            ml="-0.7rem"
                            mr="-0.7rem"
                            mt="-0.5rem"
                            p="0.4rem 0.7rem"
                            mb="-0.9rem"
                            pr="4rem"
                          >
                            <List>
                              <ListItem whiteSpace="nowrap">
                                {menuItem}
                              </ListItem>
                            </List>
                          </Box>
                        </Box>
                      ))}
                    </SimpleGrid>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            ))}
          </Flex>

          {/* ----------------Menu right side----------------------> */}

          <Flex ml="4rem" mt="-2">


            {/* ----------------Edition in icon----------------------> */}


            <Popover trigger="hover" placement="bottom" offset={[0, -2]}>
              <PopoverTrigger>
                <Text
                  mt="-0.5rem"
                  p="0.8rem 0.8rem 0.7rem 0.8rem"
                  color="white"
                  _hover={{ bg: "#0398DC", cursor: "pointer" }}
                >
                  Edition In
                </Text>
              </PopoverTrigger>
              <PopoverContent
                style={{
                  borderRadius: 10,
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                  backgroundColor: darkMode ? "#1A202C" : "white",
                }}
                cursor="pointer"
                w="auto"
              >
                <PopoverArrow />
                <PopoverBody color={darkMode ? "white" : "black"} m="4">
                  <SimpleGrid columns={2} spacing={5} columnGap={10}>
                    {editions.map((edition) => (
                      <Box key={edition}>
                        <Box
                          _hover={{
                            color: "black",
                            backgroundColor: "blue.50",
                            borderRadius: "4px",
                          }}
                          ml="-0.7rem"
                          mr="-0.7rem"
                          mt="-0.5rem"
                          p="0.4rem 0.7rem"
                          mb="-0.9rem"
                          pr="6rem"
                        >
                          <List>
                            <ListItem whiteSpace="nowrap">
                              {edition === "India" ? (
                                <>
                                  <b>India</b>
                                </>
                              ) : (
                                edition
                              )}
                            </ListItem>
                          </List>
                        </Box>
                      </Box>
                    ))}
                  </SimpleGrid>
                </PopoverBody>
              </PopoverContent>
            </Popover>

            {/* -----------------Dark Mode icon---------------------> */}

            <IconButton
              icon={darkMode ? <FiSun /> : <MoonIcon />}
              fontSize="2xl"
              color="white"
              backgroundColor="transparent"
              _hover={{ bg: "#0398DC", cursor: "pointer", borderRadius: "0" }}
              mt="-0.5rem"
              p="1.5rem 0rem 1.5rem 0rem"
              onClick={toggleDarkMode}
            />

            {/* ----------------- language icon---------------------> */}

            <Popover trigger="hover" placement="bottom" offset={[-50, -2]}>
              <PopoverTrigger>
                <IconButton
                  icon={<FiGlobe />}
                  fontSize="2xl"
                  color="white"
                  backgroundColor="transparent"
                  _hover={{
                    bg: "#0398DC",
                    cursor: "pointer",
                    borderRadius: "0",
                  }}
                  mt="-0.5rem"
                  p="1.5rem 0rem 1.5rem 0rem"
                />
              </PopoverTrigger>
              <PopoverContent
                style={{
                  borderRadius: 10,
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                  backgroundColor: darkMode ? "#1A202C" : "white",
                }}
                cursor="pointer"
                w="auto"
              >
                <PopoverArrow />
                <PopoverBody color={darkMode ? "white" : "black"} m="4">
                  <SimpleGrid columns={1} spacing={5}>
                    {languages.map((language) => (
                      <Box key={language}>
                        <Box
                          _hover={{
                            color: "black",
                            backgroundColor: "blue.50",
                            borderRadius: "4px",
                          }}
                          ml="-0.7rem"
                          mr="-0.7rem"
                          mt="-0.5rem"
                          p="0.4rem 0.7rem"
                          mb="-0.9rem"
                          pr="6rem"
                        >
                          <List>
                            <ListItem whiteSpace="nowrap">
                              {language === "English" ? (
                                <>
                                  <b>English</b>
                                </>
                              ) : (
                                language
                              )}
                            </ListItem>
                          </List>
                        </Box>
                      </Box>
                    ))}
                  </SimpleGrid>
                </PopoverBody>
              </PopoverContent>
            </Popover>

            {/* -----------------Bell icon ---------------------> */}

            <IconButton
              icon={<BellIcon />}
              fontSize="2xl"
              color="white"
              backgroundColor="transparent"
              _hover={{ bg: "#0398DC", cursor: "pointer", borderRadius: "0" }}
              mt="-0.5rem"
              p="1.5rem 0rem 1.5rem 0rem"
              onClick={handleNotification}
            />

            {/* -----------------Grid icon---------------------> */}

            <Popover trigger="hover" placement="bottom" offset={[-50, -2]}>
              <PopoverTrigger>
                <IconButton
                  icon={<CgMenuGridR />}
                  fontSize="3xl"
                  color="white"
                  backgroundColor="transparent"
                  _hover={{
                    bg: "#0398DC",
                    cursor: "pointer",
                    borderRadius: "0",
                  }}
                  mt="-0.5rem"
                  p="1.5rem 0rem 1.5rem 0rem"
                />
              </PopoverTrigger>
              <PopoverContent
                style={{
                  borderRadius: 0,
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                  backgroundColor: darkMode ? "#1A202C" : "white",
                }}
                cursor="pointer"
                w="auto"
              >
                <PopoverArrow />
                <PopoverBody color={darkMode ? "white" : "black"} m="0">
                  <SimpleGrid columns={1} spacing={5}>
                    <Box>
                      <Flex p="0.7rem 0rem">
                        <img
                          src="https://a.espncdn.com/redesign/assets/img/logos/wisden.png"
                          alt=""
                        />
                        <Text ml="1rem" mt="0.3rem">
                          {" "}
                          Wisdem Almanac
                        </Text>
                        <Link
                          ml="7rem"
                          mt="0.3rem"
                          href="https://www.espncricinfo.com/wisdenalmanack/content/story/almanack"
                          isExternal
                        >
                          <ExternalLinkIcon mx="5px" />
                        </Link>
                      </Flex>
                      <hr />

                      <Flex p="0.7rem 0rem">
                        <img
                          src="https://a.espncdn.com/redesign/assets/img/logos/espn-logo-cric.png"
                          alt=""
                        />
                        <Text ml="1rem" mt="0.3rem">
                          {" "}
                          ESPN.in
                        </Text>
                        <Link
                          ml="11.2rem"
                          mt="0.3rem"
                          href="https://www.espn.in/"
                          isExternal
                        >
                          <ExternalLinkIcon mx="5px" />
                        </Link>
                      </Flex>
                      <hr />

                      <Flex
                        mt="1rem"
                        gap="1rem"
                        justifyContent={"space-evenly"}
                        fontSize="0.8rem"
                      >
                        <Text _hover={{ color: "#03A9F4" }}>Feedback</Text>
                        <Text _hover={{ color: "#03A9F4" }}>Sitemap</Text>
                        <Text _hover={{ color: "#03A9F4" }}>About Us</Text>
                        <Text _hover={{ color: "#03A9F4" }}>Contact Us</Text>
                        <Text _hover={{ color: "#03A9F4" }}>Careers</Text>
                      </Flex>
                      <Box mb="1rem">
                        <Text
                          fontSize="0.8rem"
                          ml="5rem"
                          _hover={{ color: "blue" }}
                        >
                          About Neilson measurement
                        </Text>
                      </Box>
                    </Box>
                  </SimpleGrid>
                </PopoverBody>
              </PopoverContent>
            </Popover>

            {/* -----------------Search Icon---------------------> */}

            {/* Search Icon */}
            <IconButton
              icon={<SearchIcon />}
              fontSize="2xl"
              color="white"
              backgroundColor="transparent"
              _hover={{ bg: "#0398DC", cursor: "pointer", borderRadius: "0" }}
              mt="-0.5rem"
              p="1.5rem 0rem 1.5rem 0rem"
              onClick={handleSearchIconClick}
            />

            {/* Search Input Popup */}
            {searchOpen && (
              <Box
                position="absolute"
                top="50%"
                left="80.22%"
                transform="translate(-50%, -50%)"
                zIndex="10"
                bg="white"
                borderRadius="md"
                boxShadow="md"
              >
                <Flex>
                  <IconButton
                    color="gray.500"
                    backgroundColor="white"
                    _hover={{ backgroundColor: "white" }}
                    icon={<SearchIcon />}
                  />

                  <Input
                    ml="-1rem"
                    mt="-0.1rem"
                    border={0}
                    _hover={{ borderColor: "none" }}
                    width="250px"
                    placeholder="Search Players, Teams or Series"
                    value={searchValue}
                    onChange={handleSearchInputChange}
                    onBlur={handleSearchClose}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSearchSubmit();
                      }
                    }}
                    focusBorderColor="transparent"
                  />
                  <Tooltip
                    label="close search Bar"
                    placement="top"
                    bg="white"
                    color="black"
                    border="1px solid black"
                    w=" 113px"
                    h="25px"
                    fontSize="13px"
                    borderRadius="none"
                    fontWeight="400"
                    openDelay={100}
                  >
                    <IconButton
                      ml="-1rem"
                      onClick={handleExist}
                      color="gray.500"
                      backgroundColor="white"
                      _hover={{ backgroundColor: "white" }}
                      icon={<CloseIcon />}
                    />
                  </Tooltip>
                </Flex>
              </Box>
            )}
          </Flex>
        </Flex>
      </Box>

      {/* -----------------Alert dialoge for bell icon---------------------> */}

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent top="-6%" left="35%" w="340px">
            <AlertDialogHeader
              textAlign="center"
              fontSize="lg"
              fontWeight="bold"
              color="gray.500"
            >
              Latest Cricket Updates
            </AlertDialogHeader>

            <AlertDialogBody mt="-1rem" textAlign="center" fontSize="0.9rem">
              Get notified on all the cricket events, its more than just Scores
            </AlertDialogBody>

            <AlertDialogFooter pt="-2rem" margin="auto" display="block">
              <Flex justifyContent="center">
                <Button
                  p=" 0rem 2rem"
                  color="white"
                  bg="gray.200"
                  ref={cancelRef}
                  onClick={onAlertCancel}
                  textAlign="center"
                  className="not-now-button"
                >
                  Not Now
                </Button>
                <Button
                  p=" 0rem 2rem"
                  color="white"
                  bg="#0398DC"
                  borderRadius="4px"
                  onClick={onAlertOK}
                  _hover={{ backgroundColor: "#0398DC" }}
                  ml={3}
                >
                  Yes! I'm in
                </Button>
              </Flex>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default NavBarHeader;
