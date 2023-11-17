
import {
  Box,
  Flex,
  Image,
  Badge,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { useDarkMode } from "../../authcontext/DarkModeContext"

const InDepthBox = ({
  imageSrc,
  category,
  articles,
  currentPage,
  itemsPerPage,
  handlePageChange,
}) => {
  const { darkMode } = useDarkMode();
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleArticles = articles.slice(startIndex, endIndex);

  return (
    <Box w="33.3%" p="1rem">
      <Box overflow="hidden" borderRadius="16px">
        <Image
          transition="transform 0.3s ease-in-out"
          _hover={{
            transform: "scale(1.05)",
          }}
          cursor="pointer"
          borderRadius="16px"
          src={imageSrc}
          alt=""
        />
      </Box>

      <Badge
        color="#48494A"
        bg="#E5F6FE"
        p="0.1rem 0.3rem"
        m="0.5rem"
        fontSize="0.7rem"
      >
        {category}
      </Badge>

      <Box>
        {visibleArticles.map((article, index) => (
          <Flex key={index} mt="0.3rem" mb="0.2rem" cursor="pointer">
            <ChevronRightIcon color="#0DADF4" mt="0.2rem" fontSize="1.1rem" />
            <Text
              _hover={{ color: "#0DADF4" }}
              fontSize="0.9rem"
              fontWeight="500"
              color={darkMode?"white":"black"}
            >
              {article}
            </Text>
          </Flex>
        ))}
      </Box>

      {/* Pagination controls */}
      <Flex mt="5rem" fontSize="1.5rem" justifyContent={"center"}>
        <FaChevronCircleLeft color={darkMode?"white":"black"}
          onClick={() => {
            if (currentPage > 1) {
              handlePageChange(currentPage - 1);
            }
          }}
          cursor={"pointer"}
        />
        &nbsp; &nbsp; &nbsp;
        <FaChevronCircleRight color={darkMode?"white":"black"}
          onClick={() => {
            if (endIndex < articles.length) {
              handlePageChange(currentPage + 1);
            }
          }}
          cursor={"pointer"}
        />
      </Flex>
    </Box>
  );
};

export default InDepthBox;
