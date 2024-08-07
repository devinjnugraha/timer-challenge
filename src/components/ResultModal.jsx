import { forwardRef } from "react";
import { createPortal } from "react-dom";

export default forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {
	const userLost = remainingTime <= 0;
	const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
	const score = Math.floor((1 - remainingTime / (targetTime * 1000)) * 100);

	return createPortal(
		<dialog ref={ref} className="result-modal" onClose={onReset}>
			{userLost ? <h2>You lost!</h2> : <h2>Your score: {score}</h2>}
			<p>
				The target time was{" "}
				<strong>
					{targetTime} second{targetTime > 1 ? "s" : ""}.
				</strong>{" "}
			</p>
			<p>
				You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
			</p>
			<form method="dialog" onSubmit={onReset}>
				<button>Close</button>
			</form>
		</dialog>,
		document.getElementById("modal")
	);
});
