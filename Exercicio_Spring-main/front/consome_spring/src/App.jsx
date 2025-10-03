import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import routes from "../routes";
import Header from "./components/patterns/Header";

const App = () => {
  return (
    <Box h={"100%"} w={"100%"}>
      <Header />
      <Box overflowX={"hidden"}>
        <Routes>
          {routes.map((x, index) => (
            <Route path={x.path} element={x.component} key={`Rota-${index}`} />
          ))}
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
