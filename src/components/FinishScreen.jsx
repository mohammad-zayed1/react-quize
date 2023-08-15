function FinishScreen({ points, questions, highScore , dispatch }) {
  const totalPoints = questions
    .map((question) => question.points)
    .reduce((acc, curr) => acc + curr);
  const percentage = ((points / totalPoints) * 100).toFixed(1);

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji} </span> You Scored <strong>{points}</strong> out of{" "}
        {totalPoints} ({percentage}%)
      </p>
      <p className="highscore">(HighScore : {highScore} points )</p>
      <button className="btn btn-ui" onClick={()=> dispatch({type:"restart"})}>Restart Quiz</button>
    </>
  );
}

export default FinishScreen;
