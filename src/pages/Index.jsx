import { useState, useEffect } from "react";
import { Container, Text, VStack, HStack, Button, IconButton, useToast, Input } from "@chakra-ui/react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

const Index = () => {
  const [seconds, setSeconds] = useState(1500); // 25 minutes
  const [isActive, setIsActive] = useState(false);
  const toast = useToast();

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      setIsActive(false);
      toast({
        title: "Time's up!",
        description: "Take a short break.",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, toast]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(1500);
    setIsActive(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">
          Pomodoro Timer
        </Text>
        <Text fontSize="6xl" fontWeight="bold">
          {formatTime(seconds)}
        </Text>
        <HStack spacing={4}>
          <IconButton aria-label={isActive ? "Pause" : "Start"} icon={isActive ? <FaPause /> : <FaPlay />} size="lg" onClick={toggle} />
          <IconButton aria-label="Reset" icon={<FaRedo />} size="lg" onClick={reset} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
