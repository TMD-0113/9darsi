import React from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
const products = [
  {
    id: 1,
    title: "iPhone 14 Pro Max",
    price: 1299,
    image:
      "https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/6319b7299f7366618df5c529_iPhone%2014%20Pro%20Mockups2.jpeg",
  },
  {
    id: 2,
    title: "Galaxy S23 Ultra",
    price: 1199,
    image: "https://m.media-amazon.com/images/I/61QG4hK+xFL.jpg",
  },
  {
    id: 3,
    title: "Sony WH-1000XM5",
    price: 399,
    image: "https://m.media-amazon.com/images/I/61btVtQISjL.jpg",
  },
  {
    id: 4,
    title: "MacBook Pro 16 M2",
    price: 2499,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202110_GEO_US?wid=1808&hei=1680&fmt=png-alpha&.v=1632788574000",
  },
  {
    id: 5,
    title: "Dell XPS 15",
    price: 1799,
    image:
      "https://i.dell.com/sites/imagecontent/products/PublishingImages/xps-15-9520-laptop/spi/ng/xps-15-9520-laptop-spi-ng-gallery-504x350.jpg",
  },
  {
    id: 6,
    title: "Logitech MX Master 3S",
    price: 99,
    image: "https://m.media-amazon.com/images/I/61bK6PMOC3L.jpg",
  },
  {
    id: 7,
    title: "Apple Watch Series 8",
    price: 399,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MNU93_VW_34FR+watch-44-alum-midnight-cell-8s_VW_34FR_WF_CO_GEO_US?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1660771803186",
  },
  {
    id: 8,
    title: "Samsung Galaxy Buds 2",
    price: 149,
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/levant/galaxy-buds2/gallery/levant-galaxy-buds2-r177-sm-r177nzkamea-481295128?$650_519_PNG$",
  },
  {
    id: 9,
    title: "Kindle Paperwhite",
    price: 139,
    image: "https://m.media-amazon.com/images/I/61xA4fGkXlL.jpg",
  },
  {
    id: 10,
    title: "GoPro HERO11",
    price: 499,
    image: "https://m.media-amazon.com/images/I/71JNm1bQfDL.jpg",
  },
  {
    id: 11,
    title: "Canon EOS R5",
    price: 3899,
    image: "https://m.media-amazon.com/images/I/81U6L0aEMzL.jpg",
  },
  {
    id: 12,
    title: "DJI Mini 3 Pro",
    price: 759,
    image: "https://m.media-amazon.com/images/I/71z3jpz0OLL.jpg",
  },
  {
    id: 13,
    title: "Xbox Series X",
    price: 499,
    image: "https://m.media-amazon.com/images/I/61JGKhqxHxL.jpg",
  },
  {
    id: 14,
    title: "PS5",
    price: 499,
    image: "https://m.media-amazon.com/images/I/61UNZTWnJSL.jpg",
  },
  {
    id: 15,
    title: "ASUS ROG Zephyrus G14",
    price: 1649,
    image: "https://m.media-amazon.com/images/I/71MiXG4x7eL.jpg",
  },
  {
    id: 16,
    title: "Apple AirPods Pro 2",
    price: 249,
    image: "https://m.media-amazon.com/images/I/61f1YfTkTDL.jpg",
  },
  {
    id: 17,
    title: "Samsung T7 SSD 1TB",
    price: 99,
    image: "https://m.media-amazon.com/images/I/81WcnNQ-TBL.jpg",
  },
  {
    id: 18,
    title: "Fitbit Charge 5",
    price: 149,
    image: "https://m.media-amazon.com/images/I/71G+6vU2T3L.jpg",
  },
  {
    id: 19,
    title: "Razer BlackWidow V3",
    price: 139,
    image: "https://m.media-amazon.com/images/I/81mgi1l1u0L.jpg",
  },
  {
    id: 20,
    title: "BenQ 27” 4K Monitor",
    price: 329,
    image: "https://m.media-amazon.com/images/I/71BSn0M+jVL.jpg",
  },
];

const Home = () => {
  const { totalItems, totalPrice, clearCart } = useCart();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">ContextStore</h1>
        <div className="flex items-center gap-4">
          <p className="font-semibold">Total Price: ${totalPrice}</p>
          <button className="btn btn-sm btn-error" onClick={clearCart}>
            Clear
          </button>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">
              {totalItems}
            </span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 7h12.8L17 13M7 13l1.4-7h8.2l1.4 7"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
