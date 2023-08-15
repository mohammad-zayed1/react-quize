function Progress({ index, numOfQuestions, points, questions, answer }) {
  const totalPoints = questions
    .map((question) => question.points)
    .reduce((acc, curr) => acc + curr);
  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={numOfQuestions}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}

export default Progress;
