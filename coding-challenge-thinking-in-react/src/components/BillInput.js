/** @format */
export default function BillInput({bill,onSetBill}) {
  return (
    <div>
      <label for='bill'>How much was the bill?</label>
      <input
        type='text'
        placeholder='Bill value'
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
