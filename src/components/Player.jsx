import { useRef } from "react";
import { useState } from "react";

export default function Player() {
	const inputPlayer = useRef();
	const [playerName, setPlayerName] = useState(null);

	function handleClick() {
		setPlayerName(inputPlayer.current.value);
		inputPlayer.current.value = "";
	}

	return (
		<section id="player">
			<h2>Welcome {playerName ?? "Guest"}!</h2>
			<p>
				<input ref={inputPlayer} type="text" />
				<button onClick={handleClick}>Change Name</button>
			</p>
		</section>
	);
}
