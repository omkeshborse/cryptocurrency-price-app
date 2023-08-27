import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "..";
import { Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import Error from "./Error";

const Exchange = () => {
  const [exchange, setExchange] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchExchanges = async () => {
    try {
        const { data } = await axios.get(`${server}/exchanges`);
        
        setExchange(data);
        setLoading(false);
      }
     catch (error) {
      setIsError(true) ; 
      setLoading(false)
      
    }
  }
    fetchExchanges();
  }, []) ;

  if (isError) {
    return <Error message={'error while fetching exchanges'}/>;
  }

  return (
    <>
      {" "}
      <Container maxW={"container.xl"}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
              {exchange.map((i) => {
                return (
                  <ExchangeCard
                    key={i.id}
                    name={i.name}
                    url={i.url}
                    rank={i.trust_score_rank}
                    image={i.image}
                  />
                );
              })}
            </HStack>
          </>
        )}
      </Container>
    </>
  );
};
export default Exchange;
