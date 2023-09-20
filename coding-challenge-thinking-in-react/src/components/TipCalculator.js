/** @format */

import BillInput from "./BillInput";
import Output from "./Output";
import SelectPercentage from "./SelectPercentage";
import Reset from "./Reset";

export default function TipCalculator() {
  return (
    <div>
      <BillInput />
      <SelectPercentage>How did you like the service?</SelectPercentage>
      <SelectPercentage>
        How did your friend like the service?
      </SelectPercentage>
      <Output />
      <Reset />
    </div>
  );
}
