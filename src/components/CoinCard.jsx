import { Heading, Img, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CoinCard = ({
  id,
  name,
  image,
  current_price,
  symbol,
  currencySymbol = "₹",
}) => {
  return (
    <Link to={`/coins/${id}`} rel="noreferrer">
      <VStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.3s "}
        m={"4"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Img src={image} w={"10"} h={"10"} objectFit={"contain"} alt={name} />
        <Heading size={"md"} noOfLines={"1"}>
          {symbol}
        </Heading>
        <Text noOfLines={"1"}>{name}</Text>
        <Text noOfLines={"1"}>
          {current_price ? `${currencySymbol} ${current_price}` : "NA"}
        </Text>
      </VStack>
    </Link>
  );
};
export default CoinCard;

