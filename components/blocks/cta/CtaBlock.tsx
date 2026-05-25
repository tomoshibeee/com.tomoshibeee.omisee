import { CtaBlockData } from "@/features/block";

export default function CtaBlock(props: CtaBlockData) {
  const buttons = props.buttons || [];
  if (buttons.length === 0) return null;
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
      <div className="flex flex-col sm:flex-row gap-4">
        {buttons.map((b, i) => (
          <a key={i} href={b.href} className="text-center w-full sm:w-auto">
            <div className="border px-6 py-3 min-w-[180px] bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-colors">
              {b.label}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
