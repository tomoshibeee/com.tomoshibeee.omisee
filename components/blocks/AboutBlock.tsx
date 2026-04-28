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
    <section className="p-6 text-gray-800">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-6 space-y-4">
        <h2 className="text-xl font-bold text-center md:text-left">About</h2>

        <div
          className="
          flex flex-col items-center text-center
          md:flex-row md:items-start md:text-left
          gap-4
        "
        >
          <img
            src="https://i.pravatar.cc/150"
            // src={block.image}
            alt={block.name}
            className="w-24 h-24 rounded-full object-cover"
          />

          <div className="space-y-2">
            <p className="font-semibold text-lg text-gray-900">
              {block.name}
              <span className="text-sm text-gray-500 ml-2">{block.role}</span>
            </p>
            <p className="text-left">{block.bio}</p>

            <p className="text-left">{block.message}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
