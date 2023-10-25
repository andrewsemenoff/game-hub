import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  const { name, id, background_image } = game;
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={background_image} />
      <CardBody>
        <Heading fontSize={'2xl'}>{name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
