
import { Box } from '@chakra-ui/react';
import FooterTop from './FooterTop';
import FooterMid from './FooterMid';
import FooterLast from './FooterLast';

const FootetDiv = () => {
  return (
    <div>
      <Box>
        <FooterTop/>
        <FooterMid/>
        <FooterLast/>
      </Box>
    </div>
  )
}

export default FootetDiv
