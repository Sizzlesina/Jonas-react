/** @format */
import { useState } from "react";
export default function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [isPaying, setIsPaying] = useState("user");
  return (
    <form className='form-split-bill'>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰Bill value</label>
      <input
        type='number'
        value={bill > 0 ? bill : ""}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍Your expense</label>
      <input
        type='number'
        value={paidByUser > 0 ? paidByUser : ""}
        onChange={(e) =>
          setPaidByUser(Number(e.target.value)) > bill
            ? bill
            : setPaidByUser(Number(e.target.value))
        }
      />

      <label>🧑‍🤝‍🧑{selectedFriend.name}'s expense</label>
      <input type='text' disabled value={paidByFriend} />

      <label>🤑Who's paying the bill?</label>
      <select value={isPaying} onChange={(e) => setIsPaying(e.target.value)}>
        <option value='user'>You</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>
    </form>
  );
}
