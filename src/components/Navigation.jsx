import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box>
      <Button as={Link} to="/">
        Home
      </Button>
      <Button as={Link} to="/pomodoro">
        Pomodoro
      </Button>
      <Button as={Link} to="/short-break">
        Short Break
      </Button>
      <Button as={Link} to="/long-break">
        Long Break
      </Button>
      <Button as={Link} to="/custom">
        Custom
      </Button>
    </Box>
  );
}

export default Navigation;
