
import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { MdOutlineCopyright } from "react-icons/md";

const FooterLast = () => {
  return (
    <>
      <Box bg="#2B2C2D" color="gray" fontSize="0.8rem" fontWeight="500">
       <Box w="85%"  m="auto">
       <Flex justifyContent={"space-between"} alignItems={"center"} h="60px">
          <Box>
                <Flex  >
                    <Link>Terms of use </Link> &nbsp; &bull; &nbsp;
                    
                    <Link>Privacy Policy</Link>  &nbsp; &bull; &nbsp;
                    <Link>Internet-Based Ads </Link> &nbsp; &bull; &nbsp;
                    <Link>Addendum to the Global Privacy Policy</Link> &nbsp; &bull; &nbsp;
                    <Link>Feedback</Link>
                </Flex>
            </Box> 
          <Box display="flex">
            <MdOutlineCopyright  /> 
           <Text mt="-0.2rem" ml="0.2rem">2023 ESPN Sports Media Ltd. All rights reserved</Text>
          </Box>
            </Flex>
       </Box>
      </Box>
    </>
  )
}

export default FooterLast
