import { Box } from "@mui/material";
import { Sidebar, Navbar } from "../components/index";

function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, p: 3 }}>{children}</Box>
      </Box>
    </>
  );
}

export default DefaultLayout;
