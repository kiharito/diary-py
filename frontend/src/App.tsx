import { useState } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";

const baseUrl = "http://127.0.0.1:8000";

function App() {
  const [message, setMessage] = useState("?");

  function getMessage() {
    axios.get(`${baseUrl}/hello`).then((res) => {
      setMessage(res.data.message);
    });
  }

  return (
    <>
      <Button colorScheme="blue" onClick={getMessage}>
        Message is {message}
      </Button>
    </>
  );
}

export default App;
