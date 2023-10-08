/** @format */

export default function MovieDetails({ selectedId, onCloseMovie }) {
  return (
    <div className='detail'>
      <button className='btn-back' onClick={onCloseMovie}>&larr;</button>
      {selectedId}
    </div>
  );
}
