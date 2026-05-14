import { CtaData } from "@/types/block";

export default function CtaBlock(props: CtaData) {
  const buttons = props.buttons || [];
  if (buttons.length === 0) return null;
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
      <div className="flex gap-4">
        {buttons.map((b, i) => (
          <a key={i} href={b.href} className="text-center">
            <div className="border px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-colors">
              {b.label}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
