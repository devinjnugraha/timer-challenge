import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
	const dialog = useRef();
	const timer = useRef();

	const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
	const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

	if (timeRemaining <= 0) {
		clearInterval(timer.current);
		dialog.current.showModal();
	}

	function handleReset() {
		setTimeRemaining(targetTime * 1000);
	}

	function handleStart() {
		timer.current = setInterval(() => {
			setTimeRemaining((timeRemaining) => timeRemaining - 10);
		}, 10);
	}

	function handleStop() {
		clearInterval(timer.current);
		dialog.current.showModal();
	}

	return (
		<>
			<ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? "s" : ""}
				</p>
				<p>
					<button onClick={timerActive ? handleStop : handleStart}>
						{timerActive ? "Stop" : "Start"} Challenge
					</button>
				</p>
				<p className={timerActive ? "active" : ""}>{timerActive ? "Time is running..." : "Timer inactive"}</p>
			</section>
		</>
	);
}
