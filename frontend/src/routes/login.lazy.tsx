import { useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});

function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box p={4}>
      <form>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <InputGroup>
            <Input
              id="password"
              type={show ? "text" : "password"}
              pr="4.5rem"
            />
            <InputRightElement width="4.5rem">
              <Button onClick={handleClick} h="1.75rem" size="sm">
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button mt={4} type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}
