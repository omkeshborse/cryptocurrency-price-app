import { Heading, Img, Text, VStack } from "@chakra-ui/react";

const ExchangeCard = ({name ,  image , url  ,rank}) => {
  return <a href={url} target="blank" rel="noreferrer">
    <VStack w={'52'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0.3s '} m={'4'} css={{"&:hover" : {
        transform  :"scale(1.1)"
    }}}>
        <Img src = {image} w={'10'} h={'10'} objectFit={'contain'} alt={name}/>
        <Heading size={'md'} noOfLines={'1'}>
            {rank}
        </Heading>
        <Text >{name}</Text>
    </VStack>
  </a>;
}
export default ExchangeCard