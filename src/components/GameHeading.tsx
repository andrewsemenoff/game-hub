import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props{
    gameQuery: GameQuery;
}
const GameHeading = ({gameQuery}: Props) => {
const {selectedGenre, selectedPlatform} = gameQuery;
const heading = ` ${selectedPlatform?.name??''} ${selectedGenre?.name??''} Games`
  return (
    <Heading as='h1' mb='.5em' fontSize='5xl'>
       {heading}
    </Heading>
  )
}

export default GameHeading