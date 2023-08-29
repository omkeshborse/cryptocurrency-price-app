/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Badge, Box, Container, HStack, Image, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from "@chakra-ui/react";
import Loader from "./Loader";
import { server } from "../index.js";
import axios from "axios";
import { useParams } from "react-router-dom";
import Error from "./Error";
const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currency, setCurrency] = useState("inr");
   const currencySymbol =
     currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const params = useParams() ;
    useEffect(() => {
      const fetchCoin = async () => {
        try {
          const { data } = await axios.get(
            `${server}/coins/${params.id}`
          );
          console.log(data)
          setCoin(data);
          setLoading(false);
        } catch (error) {
          setIsError(true);
          setLoading(false);
        }
      };
      fetchCoin();
    }, [params.id]);

    if (isError) {
      return <Error message={"error while fetching Coin"} />;
    }

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box width={"full"} borderWidth={"1"}></Box>
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>₹(INR)</Radio>
              <Radio value={"eur"}>€(EUR)</Radio>
              <Radio value={"usd"}>$(USD)</Radio>
            </HStack>
          </RadioGroup>
          <VStack spacing={"4"} p="16" alignItems={"flex-start"}>
            <Text fontSize={"small"} alignSelf={"center"} opacity={0.7}>
              Last Updated On{" "}
              {Date(coin.market_data.last_updated).split("G")[0]}
            </Text>
            <Image
              src={coin.image.large}
              w={"16"}
              h={"16"}
              objectFit={"contain "}
            />
            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>
                {currencySymbol}
                {coin.market_data.current_price[currency]}
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    coin.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                />{" "}
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>
            <Badge fontSize={'2xl'} bgColor={"blackAlpha.900"} color={'white'}>{`#${coin.market_cap_rank}`}</Badge>
            <CustomBar  high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}/>
            <Box w={'full'} p="4"> 
                 <Item  title={'Max Supply'} value={coin.market_data.max_supply}/>   
                 <Item  title={'Circulating Supply'} value={coin.market_data.circulating_supply}/>   
                 <Item  title={'Market Capital'} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`} />   
                 <Item  title={'All time Low'} value={`${currencySymbol}${coin.market_data.atl[currency]}`} />   
                 <Item  title={'All time high'} value={`${currencySymbol}${coin.market_data.ath[currency]}`} />   
            </Box>
          </VStack>
        </>
      )}
    </Container>
  );
};
const Item =({title ,value}) =>{
  return (
    <HStack justifyContent={"space-between"} w={'full'} my={'4'}>
       <Text fontFamily ={'Bebas Neue'} letterSpacing={'widest'}>{title}</Text>
       <Text>{value}</Text>
    </HStack>
  )
} 

const CustomBar = ({ high, low }) => {
 return ( 
 <VStack w={"full"}>
    <Progress value={"50"} colorScheme={"teal"} w={"full"} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme="red" />
      <Text fontSize={"sm"}>24Hr range</Text>
      <Badge children={high} colorScheme="green" />
    </HStack>
  </VStack>)
};
export default CoinDetails;