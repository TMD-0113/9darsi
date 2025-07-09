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
    image:
      "https://avatars.mds.yandex.net/get-mpic/3609127/2a00000190a6867b62e9ad0e2a0f37ca273b/orig",
  },
  {
    id: 3,
    title: "Sony WH-1000XM5",
    price: 399,
    image: "https://cdn1.ozone.ru/s3/multimedia-1-o/c600/6928484388.jpg",
  },
  {
    id: 4,
    title: "MacBook Pro 16 M2",
    price: 2499,
    image:
      "https://avatars.mds.yandex.net/i?id=835cda6343ab6a833a451acce52caf88_l-5886727-images-thumbs&n=13",
  },
  {
    id: 5,
    title: "Dell XPS 15",
    price: 1799,
    image:
      "https://avatars.mds.yandex.net/i?id=acbfbe909262f1b87336794adeabf125_l-5255540-images-thumbs&n=13",
  },
  {
    id: 6,
    title: "Logitech MX Master 3S",
    price: 99,
    image: "https://img.mvideo.ru/Pdb/small_pic/480/50175521b3.jpg",
  },
  {
    id: 7,
    title: "Apple Watch Series 8",
    price: 399,
    image:
      "https://www.knsneva.ru/linkpics/apple-watch-series-8-41-mm-mnu83ll-a_kod_824304-small.jpg",
  },
  {
    id: 8,
    title: "Samsung Galaxy Buds 2",
    price: 149,
    image:
      "https://avatars.mds.yandex.net/i?id=980fbd463d9a17e304d559754145dd31_l-6377202-images-thumbs&n=13",
  },
  {
    id: 9,
    title: "Kindle Paperwhite",
    price: 139,
    image:
      "https://m.media-amazon.com/images/G/01/kindle/journeys/5xlDnKG94P0ryVnD8MqFmnIhMKBXE2F2BxyzUQHa63Hhs3D/YTY2NDRkMWQt._CB600254662_.jpg",
  },
  {
    id: 10,
    title: "GoPro HERO11",
    price: 499,
    image: "https://static.baza.farpost.ru/v/1676421885492_bulletin",
  },
  {
    id: 11,
    title: "Canon EOS R5",
    price: 3899,
    image:
      "https://avatars.mds.yandex.net/i?id=23e19b07d4a9a862542efd2b594cba03_l-4907535-images-thumbs&n=13",
  },
  {
    id: 12,
    title: "DJI Mini 3 Pro",
    price: 759,
    image:
      "https://diskontshop.eu/wa-data/public/shop/products/39/89/298939/images/492586/492586.0x460.jpeg",
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
    image: "https://cdn1.ozone.ru/s3/multimedia-1-u/7371992550.jpg",
  },
  {
    id: 15,
    title: "ASUS ROG Zephyrus G14",
    price: 1649,
    image:
      "https://avatars.mds.yandex.net/i?id=0c53ba24f29e68c02f772fde62c25cfac2a0b25a133a5097-12420867-images-thumbs&n=13",
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
    image:
      "https://avatars.mds.yandex.net/i?id=661396597edede1e84b7dc734c39e7f3bb29c021-5686193-images-thumbs&n=13",
  },
  {
    id: 19,
    title: "Razer BlackWidow V3",
    price: 139,
    image: "https://razer.syntes.io/231048/razer-blackwidow-v3-gallery-03.jpg",
  },
  {
    id: 20,
    title: "BenQ 27” 4K Monitor",
    price: 329,
    image:
      "https://img.2bit.ru/images/items/761/760556-item-3969580-8760416.jpg",
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
