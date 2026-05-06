import { CtaData } from "@/types/block";

export default function CtaBlock(props: CtaData) {
  const { href, label } = props;
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
      <a href={href} className="p-4 text-center">
        <div className="border p-4 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-colors">
          {label}
        </div>
      </a>
    </div>
  );
}
