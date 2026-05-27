import { FaShareFromSquare } from "react-icons/fa6";

export default function ShareButton() {
  const COLOR = "gray";
  const SIZE = 20;
  return (
    <div
      className={`flex h-9 w-9 items-center justify-center rounded-full text-${COLOR}-600 transition hover:bg-slate-100 hover:text-${COLOR}-900`}
    >
      {" "}
      <FaShareFromSquare size={SIZE} />
    </div>
  );
}
