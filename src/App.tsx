import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import MonstersPage from "./routes/MonstersPage";
import MonsterDetailsPage from "./routes/MonsterDetailsPage";
import AnimalPage from "./routes/AnimalPage";
import ListPage from "./routes/ListPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/about",
		element: <AboutPage />,
	},
	{
		path: "/List",
		element: <ListPage />,
		children: [
			{
				path: "/List/:animalsid", 
				element: <AnimalPage />
			},
		],
	},
	{
		path: "/monsters",
		element: <MonstersPage />,
		children: [
			{
				path: "/monsters/:monsterid",
				element: <MonsterDetailsPage />,
			},
		],
	},

]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
