import { GreetingBlockData } from "@/features/block";

export default function GreetingBlock(data: GreetingBlockData) {
  return (
    data.name.trim() && (
      <div className="p-6 text-gray-800">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-bold text-center md:text-left">
            Greeting
          </h2>

          <div
            className="
            flex flex-col items-center text-center
            md:flex-row md:items-start md:text-left
            gap-4
          "
          >
            <img
              src={data.image}
              alt={data.name}
              className="w-24 h-24 rounded-full object-cover"
            />

            <div className="space-y-2">
              <p className="font-semibold text-lg text-gray-900">
                {data.name}
                {data.role && (
                  <span className="text-sm text-gray-500 ml-2">
                    {data.role}
                  </span>
                )}
              </p>

              {data.bio && <p className="text-left">{data.bio}</p>}
              {data.message && <p className="text-left">{data.message}</p>}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
