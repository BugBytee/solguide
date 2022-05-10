import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Contributecontainer from "../Components/ContributeSection/Contributecontainer";
import Dashboard from "../Components/Dashboard";
import Createissue from "../Components/IssuePostingcontainer/Createissue";
const RouteMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/createIssue" element={<Createissue />}></Route>
        <Route path="/Contribute" element={<Contributecontainer/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouteMain;
