import { FaShareFromSquare } from "react-icons/fa6";

const BUTTON_SIZE = 20;
const COLOR = "gray";

export default function ShareButton() {
  return (
    <div
      className={`flex h-9 w-9 border border-${COLOR}-600 items-center justify-center rounded-full text-${COLOR}-600 transition-colors hover:bg-slate-100 hover:text-${COLOR}-500`}
    >
      {" "}
      <FaShareFromSquare size={BUTTON_SIZE} />
    </div>
  );
}
