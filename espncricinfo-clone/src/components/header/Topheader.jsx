
import { Box, Flex, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import NavBarCard from './NavBarCard';
import { useDarkMode } from '../authcontext/DarkModeContext';

const Topheader = () => {
  const [selectedItem, setSelectedItem] = useState('Matches');
  const [notificationCounts, setNotificationCounts] = useState({});
  const [menuItems, setMenuItems] = useState([]);
  const { darkMode } = useDarkMode(); 

  useEffect(() => {
    // Fetch initial data for all menu items
    setMenuItems(['Matches', 'World Cup 2023', 'March Cup', 'WBBL 2023', 'HKG-WMN T20']);
  }, []);

  useEffect(() => {
    const fetchNotificationCounts = async () => {
      const counts = {};
      for (const item of menuItems) {
        const encodedItem = encodeURIComponent(item);
        const response = await fetch(`https://cricinfo.onrender.com/${encodedItem}`);
        const data = await response.json();
        counts[item] = data.length;
      }
      setNotificationCounts(counts);
    };

    // Fetch initial counts only after menuItems is populated
    if (menuItems.length > 0) {
      fetchNotificationCounts();
    }
  }, [menuItems]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const updateNotificationCount = (item, count) => {
    setNotificationCounts((prevCounts) => ({
      ...prevCounts,
      [item]: count,
    }));
  };

  return (
    <Box bg={darkMode ? '#1A202C' : '#0398DC'}>
      <Box w="80%" m="auto">
        <Flex as="nav" p={1} ml="0.3rem">
          {menuItems.map((item) => (
            <Text
              mr={6}
              key={item}
              onClick={() => handleItemClick(item)}
              fontWeight={selectedItem === item ? 'bold' : 'normal'}
              fontSize="0.8rem"
              cursor="pointer"
              color="white"
            >
              {item} ({notificationCounts[item] || 0})
            </Text>
          ))}
        </Flex>
        <NavBarCard
          updateNotificationCount={(count) => updateNotificationCount(selectedItem, count)}
          selectedMenu={selectedItem}
        />
      </Box>
    </Box>
  );
};

export default Topheader;




