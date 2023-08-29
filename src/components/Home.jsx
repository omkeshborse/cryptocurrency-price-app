import {Box, Image, Text} from '@chakra-ui/react'
import btc from '../assets/btc.png'
const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} w={'full'}  h={"80vh"}>
    <Image src={btc} w={'full'} h={'full'} objectFit={'contain'} filter={'grayScale(1)'}/>
    <Text  fontSize={'6xl'} textAlign={'center'} fontWeight={'thin'} color={'whiteAlpha.700'} mt={"-20"}>
      GeekCrypto
    </Text>
    </Box>
  )
}
export default Home