import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "..";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(102).fill(1);
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
       
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setIsError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (isError) {
    return <Error message={"error while fetching Coins"} />;
  }

  return (
    <>
      {" "}
      <Container maxW={"container.xl"}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
              <HStack spacing={"4"}>
                <Radio value={"inr"}>₹(INR)</Radio>
                <Radio value={"eur"}>€(EUR)</Radio>
                <Radio value={"usd"}>$(USD)</Radio>
              </HStack>
            </RadioGroup>
            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
              {coins.map((i,index) => {
                return (
                  <CoinCard
                    key={`coin-${index}`}
                    id={i.id}
                    current_price={i.current_price}
                    name={i.name}
                    currencySymbol={currencySymbol}
                    image={i.image}
                    symbol={i.symbol}
                  />
                );
              })}
            </HStack>
            <HStack w={"full"} overflow={"auto"} p="8">
              {btns.map((items, index) => {
                return (
                  <Button
                    key={`button-${index}`}
                    bgColor={"blackAlpha.900"}
                    color={"white"}
                    onClick={() => changePage(index + 1)}
                  >
                    {index + 1}
                  </Button>
                );
              })}
            </HStack>
          </>
        )}
      </Container>
    </>
  );
};
export default Coins;
