import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import SearchDrinks from "./Pages/SearchDrinks";
import InfoCoctel from "./Pages/Info/InfoCoctel";
import LetterSearch from "./Pages/LetterSearch";
import Ingrtdent from "./Pages/Ingredients/Ingrtdent";
import CotegoryByalchony from "./Pages/Cotegory/CotegoryByalchony";
import CotegoryByglass from "./Pages/Cotegory/CotegoryByglass";


export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { path: "/", element: <Home/> },
            { path: "search/:text", element: <SearchDrinks/> },
            { path: "coctel/:idDrink", element: <InfoCoctel/> },
            { path: "lettersSearch/:letter", element: <LetterSearch/> },
            { path: "ingredientsSEarch/:name", element: <Ingrtdent/> },
            { path: "cotegoryByAlchony/:strAlcoholic", element: <CotegoryByalchony/> },
            { path: "cotegoryByglass/:strGlass", element: <CotegoryByglass/> },
            
        ]
    }
])