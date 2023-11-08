import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Home />} index />
      </Route>
    </Routes>
  );
};

export default App;
