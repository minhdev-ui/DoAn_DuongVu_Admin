import { Stack } from "@mui/system";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./header";
import "react-quill/dist/quill.snow.css";
import "react-toastify/dist/ReactToastify.css";
import SideMenu from "./components/sidemenu/SideMenu";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
function App() {
  const [selectionValue, setSelectionValue] = useState(0);
  const handleSelection = (value) => {
    setSelectionValue(value);
  };
  return (
    <Stack className="App" sx={{ gap: 2 }}>
      <Stack
        width="100%"
        height="7vh"
        direction="row"
        alignItems="center"
        sx={{ backgroundColor: "#AAC4FF" }}
      >
        <Header />
      </Stack>
      <Stack width="100%" height="93vh" direction="row">
        <Stack padding={"0 10px"}>
          <SideMenu value={selectionValue} onChange={handleSelection} />
        </Stack>
        <Stack flex={1}>
          <Content value={selectionValue} />
        </Stack>
      </Stack>
      <ToastContainer />
    </Stack>
  );
}

const Content = (value) => {
  return (
    <Stack>
      { value === 0 ? (<div>No Comment</div>) : <Cart /> }
    </Stack>
  )
};

export default App;
