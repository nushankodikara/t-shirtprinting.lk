"use client";

export const ProductCard = ({
  name,
  price,
  image,
}: {
  name: string;
  price: string;
  image: string;
}) => {
  return (
    <div
      className="bg-gray-200 rounded-lg shadow-lg min-w-12 aspect-square justify-end flex flex-col hover:scale-105 cursor-pointer bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="mt-4 flex flex-col justify-end backdrop-blur-sm pb-4 px-4 pt-2">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="mt-1 text-gray-600">{price}</p>
      </div>
    </div>
  );
};
