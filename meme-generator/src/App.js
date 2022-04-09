import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

// export default function App() {
// 	return (
// 		<div>
// 			<Header />
// 			<Meme />
// 		</div>
// 	);
// }

export default function App() {
	const thingsArray = ["Thing 1", "Thing 2"];

	const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

	return (
		<div>
			<button>Add Item</button>
			{thingsElements}
		</div>
	);
}
