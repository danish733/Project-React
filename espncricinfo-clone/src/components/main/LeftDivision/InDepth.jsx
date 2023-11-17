
import React, { useState } from "react";
import { Heading, Box, Flex, Divider, } from "@chakra-ui/react";
import InDepthBox from "./InDepthBox";
import { useDarkMode } from "../../authcontext/DarkModeContext"

const InDepth = () => {
  const itemsPerPage = 5;
  const { darkMode } = useDarkMode();

  const data = [
    {
      imageSrc:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2023/1107/dm_231107_INET_CRIC_Virat_Kohli_Believe_GLOBAL/dm_231107_INET_CRIC_Virat_Kohli_Believe_GLOBAL.jpg",
      category: "KOHLI'S 49TH HUNDRED",
      articles: [
        "Sydney Thunder enjoy a Lankan feast",
        "Maxwell made the reverse sweep legal?",
        "Cricket charadas with Hasan Ali",
        "Ravi Shstri to coach England?",
        "Logan Van Beek welcomes family with teeka",
        "Glenn Phlips 2.0 takes centre stage for New zealand",
        "Roller:Santner needs to be more Santner than jadeja",
        "world cup diary-Killing time with captain kane",
        "Feguson: will be nice to bowl under lights in mumbai",
      ],
    },
    {
      imageSrc:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2023/1114/dm_231114_INET_CRIC_finch_on_aus_winning_mentality_GLOBAL/dm_231114_INET_CRIC_finch_on_aus_winning_mentality_GLOBAL.jpg",
      category: "IND vs NZ",
      articles: [
        "Malcolm: There's no denying waners's a GOAT",
        "Tactics:why starc.jsansen firig line",
        "Labuschange vs Stolis: Australia call",
        "Finch: march and smith form good sign",
        "Logan Van Beek welcomes family with teeka",
        "Glenn Phlips 2.0 takes centre stage for New zealand",
        "Roller:Santner needs to be more Santner than jadeja",
        "world cup diary-Killing time with captain kane",
        "Nidamanguru: was trying to study kuldeep",
      ],
    },
    {
      imageSrc:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/esci/media/motion/2023/1114/dm_231114_cwc2023_kanepc/dm_231114_cwc2023_kanepc.jpg",
      category: "IND vs NED",
      articles: [
        "Kishore when swayed to Kphi's beat",
        "Rohit on part-times wanted achieve",
        "Nidamanguru: was trying to study kuldeep",
        "Stats-india's year of sixes and big goals",
        "Hyden: No obvious weaknes in Rahul's game",
        "Sydney Thunder enjoy a Lankan feast",
        "Maxwell made the reverse sweep legal?",
        "Cricket charadas with Hasan Ali",
        "Ravi Shstri to coach England?",
        "Logan Van Beek welcomes family with teeka",
      ],
    },
  ];
  const [currentPageArray, setCurrentPageArray] = useState(data.map(() => 1));

  const handlePageChange = (index, page) => {
    const newCurrentPageArray = [...currentPageArray];
    newCurrentPageArray[index] = page;
    setCurrentPageArray(newCurrentPageArray);
  };

  return (
    <>
      <Box
        mt="2rem"
        borderRadius="8px"
        bg={darkMode?"#1D1E1F":"#FFFFFF"}
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.10) 0px 0px 0px 1px",
        }}
        h="auto"
      >
        <Heading  color={darkMode?"white":"black"} fontSize="1.3rem" p="0.8rem">
          In Depth
        </Heading>
        <hr />
        <Flex>
          {data.map((boxData, index) => (
            <React.Fragment key={index}>
              <InDepthBox
                imageSrc={boxData.imageSrc}
                category={boxData.category}
                articles={boxData.articles}
                currentPage={currentPageArray[index]}
                itemsPerPage={itemsPerPage}
                handlePageChange={(page) => handlePageChange(index, page)}
                
              />
              {index < data.length - 1 && (
                <Divider
                  orientation="vertical"
                  h="auto"
                  borderColor="gray.300"
                />
              )}
            </React.Fragment>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default InDepth;
