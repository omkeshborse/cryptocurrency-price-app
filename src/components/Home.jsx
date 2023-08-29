import {Box, Image, Text} from '@chakra-ui/react'
import btc from '../assets/btc.png'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"80vh"}>
      <motion.div
        style={{ height: "80vh" }}
        animate={{ translateY: "15px" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src={btc}
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          filter={"grayScale(1)"}
        />
      </motion.div>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        GeekCrypto
      </Text>
    </Box>
  );
}
export default Home