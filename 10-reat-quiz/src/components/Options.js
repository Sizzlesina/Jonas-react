/** @format */

function Options({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className='options'>
      {questions.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === questions.correctOption
                ? "correct"
                : "wrong" // else of index
              : "" // else of hasAnswered
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
