type Props = {
  block: {
    name: string;
    role: string;
    image: string;
    bio: string;
    message: string;
  };
};

export default function AboutBlock({ block }: Props) {
  return (
    <section className="p-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-6 space-y-4">
        <h2 className="text-xl font-bold">About</h2>

        {/* 上段：画像 + 名前・役職 */}
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/150"
            // src={block.image}
            alt={block.name}
            className="w-24 h-24 rounded-full object-cover"
          />

          <div>
            <p className="font-semibold text-lg">{block.name} {block.role}</p>
            <p className="text-gray-700 text-sm">{block.bio}</p>
            <p className="text-gray-600 leading-relaxed">
              {block.message}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
