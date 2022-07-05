import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { WatchListContextProvider } from "./context/watchListContext";
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import Header from "./components/Header";
import BgVideo from "./components/BgVideo";
import "./App.css";

const App = () => {
	return (
		<div className="container">
			<WatchListContextProvider>
				<BrowserRouter>
					<BgVideo />
					<Header />
					<Route exact path="/" component={CoinSummaryPage} />
					<Route path="/coins/:id" component={CoinDetailPage} />
				</BrowserRouter>
			</WatchListContextProvider>
		</div>
	);
};

export default App;
