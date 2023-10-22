/** @format */

function Options({questions}) {
  return (
    <div className='options'>
      {questions.options.map((option) => (
        <button className='btn btn-option' key={option}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
