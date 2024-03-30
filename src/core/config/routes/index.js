import Home from "presentation/container/pages/Home";
import Partner from "presentation/container/pages/Partner";
import Careers from "../../../presentation/container/pages/Careers";

const routeConfig = [
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Halaman tidak ditemukan</h1>,
  },
  {
    path: "/partner",
    element: <Partner />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
];

export default routeConfig;