import { FaShareFromSquare } from "react-icons/fa6";

function ShareButton({ className }: { className?: string }) {
  const SIZE = 20;
  return (
    <div
      className={className}
    >
      {" "}
      <FaShareFromSquare size={SIZE} />
    </div>
  );
}

export function ShareButtonHeader() {
  const COLOR = "gray";
  return (
    <ShareButton
      className={`flex h-9 w-9 items-center justify-center rounded-full text-${COLOR}-600 transition hover:bg-slate-100 hover:text-${COLOR}-900`}
    />
  );
}

export function ShareButtonFooter() {
  const COLOR = "gray";
  return (
    <ShareButton
      className={`flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-${COLOR}-200 transition hover:bg-${COLOR}-600 hover:text-white`}
    />
  );
}
