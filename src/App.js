import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import PropertiesDetails from "./pages/PropertiesDetails";
import ShresDetailsTable from "./Components/SharesDetailsTable";
import Filter from "./pages/Filter";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<MainLayout />} >
            <Route index element={<Home />} />
            <Route path="details" element={ <PropertiesDetails /> } />
            <Route path="filter" element={ <Filter /> } />
            <Route path="user/profile" element={ <UserProfile /> } />
          </Route>
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
