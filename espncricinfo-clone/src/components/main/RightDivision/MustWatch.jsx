import  { useState, useEffect } from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Flex,
  Circle,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useDarkMode } from "../../authcontext/DarkModeContext"

const MustWatch = () => {
  const { darkMode } = useDarkMode();
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2023/1114/dm_231114_cwc2023_rohitpc2/dm_231114_cwc2023_rohitpc2.jpg",
      heading: "Rohit : Kulddep is not afraid of the batting for hit",
    },
    {
      url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2023/1114/dm_231114_INET_CRIC_finch_on_aus_winning_mentality_GLOBAL/dm_231114_INET_CRIC_finch_on_aus_winning_mentality_GLOBAL.jpg",
      heading: "Fin on Austalia champion menitanity in wc knoclout",
    },
    {
      url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2023/1114/dm_231114_cwc2023_kanepc/dm_231114_cwc2023_kanepc.jpg",
      heading: "williamsion on ravindra : to get stuck out of the match",
    },
    {
      url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2023/1113/dm_231113_Miller_Buttler_looked_lost_in_Englands_World_Cup_calamity/dm_231113_Miller_Buttler_looked_lost_in_Englands_World_Cup_calamity.jpg",
      heading: "Miller : Buttler looked lost in england'sworld cup",
    },
    {
      url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2023/1113/dm_231113_INET_CRIC_rachin_interview_GLOBAL/dm_231113_INET_CRIC_rachin_interview_GLOBAL.jpg",
      heading: "Ravindra: Playing against india at wankhede is like a dream",
    },
    {
      url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2023/1112/dm_231112_INET_CRIC_WC23_MATCH45_INDvsNED_GLOBAL/dm_231112_INET_CRIC_WC23_MATCH45_INDvsNED_GLOBAL.jpg",
      heading: "Any concern for india heading into the into semis ? say no",
    },
    {
      url: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2023/1110/dm_231110_IENT_CRIC_wcafgsa_afgodi_marutiqatar_global/dm_231110_IENT_CRIC_wcafgsa_afgodi_marutiqatar_global.jpg",
      heading: "How can Afgansitan can even better in ODI's",
    },
    // ... (other images)
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 2500); // Auto-play every 3 seconds

    return () => clearInterval(intervalId);
  }, [currentImage]);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  const selectImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <>
      <Box
        borderRadius="10px"
        bg={darkMode?"#1D1E1F":"#FFFFFF"}
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.10) 0px 0px 0px 1px",
        }}
      >
        <Flex justifyContent="space-between">
          <Heading fontSize="1rem" p="0.8rem"  color={darkMode?"white":"black"}>
            Must Watch
          </Heading>
          <Heading cursor='pointer' fontSize="0.8rem" mt="0.2rem" color="#0FADF5" p="0.8rem">
            See All
          </Heading>
        </Flex>
        <hr />

        <Box w="85%" margin="auto" mt="1.5rem" borderRadius="8px">
          <Box
            overflow="hidden"
            position="relative"
            borderRadius="8px"
            textAlign="center"
          >
            <Image
              src={images[currentImage].url}
              alt={`Slide ${currentImage + 1}`}
              w="100%"
              borderRadius="8px"
              transition="transform 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
            />

            <Box
              position="absolute"
              top="50%"
              transform="translateY(-50%)"
              left="0"
            >
              <Circle
                fontSize="1.8rem"
                cursor="pointer"
                bg="white"
                onClick={prevImage}
                mr="2"
              >
                <ChevronLeftIcon />
              </Circle>
            </Box>

            <Box
              position="absolute"
              top="50%"
              transform="translateY(-50%)"
              right="0"
            >
              <Circle
                cursor="pointer"
                fontSize="1.8rem"
                bg="white"
                onClick={nextImage}
                ml="2"
              >
                <ChevronRightIcon />
              </Circle>
            </Box>
          </Box>
          <Text p="0.4rem" mt="0.3rem" fontWeight="bold" fontSize="1rem"  color={darkMode?"white":"black"}>
            {images[currentImage].heading}
          </Text>

          <Box display="flex" justifyContent="center" mt="1rem">
            {images.map((_, index) => (
              <Box
                key={index}
                w="10px"
                h="10px"
                borderRadius="50%"
                bg={index === currentImage ? "blue.500" : "gray.300"}
                mx="2"
                cursor="pointer"
                onClick={() => selectImage(index)}
                transition="transform 0.3s ease-in-out"
                mb="1.5rem"
              />
            ))}
          </Box>
        </Box>
      </Box>

      <Box mt="2rem" w="100%">
        <Image
          w="100%"
          objectFit="fill"
          src="https://tpc.googlesyndication.com/simgad/10144474680580910872?"
          alt=""
          srcset=""
        />
      </Box>
    </>
  );
};

export default MustWatch;
