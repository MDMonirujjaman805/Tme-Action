import data from "./../../public/Data.json";

const PriceOption = () => {
  return (
    <div className="max-w-10/12 mx-auto my-8  ">
      <h1 className="text-5xl text-center font-bold">Best Price in the Town</h1>
      <div className="grid md:grid-cols-2 bg-gray-400 rounded-2xl mt-5 gap-2.5 ">
        {data.map((data) => (
          <div
            key={data.id}
            className=" shadow-lg rounded-xl p-5  flex flex-col "
          >
            <h1 className="text-3xl my-5 font-bold">{data.name}</h1>
            <div className="flex-grow">
              {data.features.map((features, i) => (
                <li key={i}>{features}</li>
              ))}
            </div>
            <button className="w-full py-2 font-bold bg-gray-300 rounded-md hover:bg-gray-800 hover:text-white shadow-2xl my-5 cursor-pointer">
              Access Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceOption;
