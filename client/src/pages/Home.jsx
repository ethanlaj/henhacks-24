import {Flex, Image, Spacer, Text, useMediaQuery } from '@chakra-ui/react';

export default function Home() {
  const [isLargeScreen] = useMediaQuery("(min-width: 1000px)");

  return (
    <Flex w="100%" h="100%">
      <Spacer />
      {isLargeScreen && <Image src="lefthome.png" h="80vh" style={{ opacity: 0.75 }}/>}
      <Spacer />
      <Flex direction="column" alignItems="center" w="500px" h="75%">
        <Image src="VVicon.png" h="50vh" w="50vh"/>
        <Text as="b" fontSize="3xl" textAlign="center" mt="-10">Volunteer Village</Text>
        <Text fontSize="xl" textAlign="center">
          Get assistance from community members in running your event. 
          Create an account now to get connected with the larger community.
        </Text>
      </Flex>
      <Spacer />
      {isLargeScreen && <Image src="righthome.png" h="80vh" style={{ opacity: 0.75 }}/>}
      <Spacer />
    </Flex>
  );
}