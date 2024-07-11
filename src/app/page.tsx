import { ProductCard } from "@/components/tailwindcss/productCard";

export default function Home() {
  const products = [
    {
      name: "Product 1",
      price: "$100",
      image: "/mugs/mug01.jpeg",
    },
    {
      name: "Product 2",
      price: "$200",
      image: "/mugs/mug02.jpeg",
    },
    {
      name: "Product 3",
      price: "$300",
      image: "/mugs/mug03.jpeg",
    },
    {
      name: "Product 4",
      price: "$400",
      image: "/mugs/mug04.jpeg",
    },
    {
      name: "Product 5",
      price: "$500",
      image: "/mugs/mug05.jpeg",
    },
    {
      name: "Product 6",
      price: "$600",
      image: "/mugs/mug06.jpeg",
    },
    {
      name: "Product 7",
      price: "$700",
      image: "/mugs/mug07.jpeg",
    },
    {
      name: "Product 8",
      price: "$800",
      image: "/mugs/mug08.jpeg",
    },
    {
      name: "Product 9",
      price: "$900",
      image: "/mugs/mug09.jpeg",
    },
  ];

  return (
    <main>
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-8 mb-8">
        Explore Our Product Line
      </h2>
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </main>
  );
}
