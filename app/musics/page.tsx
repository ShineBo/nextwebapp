import React from "react";
import MusicItem from "../components/MusicItem";

const instruments = [
    {
      id: 1,
      name: "Acoustic Guitar",
      description: "A classic instrument for all styles of music.",
      price: 1000,
      likes: 300,
      img: "https://images.unsplash.com/photo-1588449668365-d15e397f6787?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWNvdXN0aWMlMjBHdWl0YXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Electric Guitar",
      description: "Perfect for rock, blues, and metal.",
      price: 1500,
      likes: 150,
      img: "https://images.unsplash.com/photo-1568193755668-aae18714a9f1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWxlY3RyaWMlMjBHdWl0YXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      name: "Violin",
      description: "A beautiful string instrument used in orchestras and solo performances.",
      price: 1300,
      likes: 120,
      img: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VmlvbGlufGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Piano",
      description: "A versatile instrument great for solo or accompaniment.",
      price: 3000,
      likes: 90,
      img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGlhbm98ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      name: "Drum Set",
      description: "The backbone of any band rhythm section.",
      price: 4000,
      likes: 10,
      img: "https://images.unsplash.com/photo-1543443258-92b04ad5ec6b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RHJ1bSUyMFNldHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      name: "Saxophone",
      description: "A jazzy wind instrument known for its expressive sound.",
      price: 4000,
      likes: 50,
      img: "https://images.unsplash.com/photo-1623123776919-e5208e9b0b47?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2F4b3Bob25lfGVufDB8fDB8fHww",
    },
    {
      id: 7,
      name: "Flute",
      description: "A soft and soothing wind instrument, often used in orchestras.",
      price: 2600,
      likes: 30,
      img: "https://images.unsplash.com/photo-1710075554684-88f369e05e99?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Rmx1dGV8ZW58MHx8MHx8fDA%3D",
    },
  ];

const Products = () => {
  return (
    <div className="bg-gradient-to-r from-slate-200 to-sky-700">
      <div className=" flex flex-col justify-center items-center">
        <h1 className="mt-16 text-3xl font-bold text-slate-100">Musical Instruments</h1>
        <div className="flex flex-wrap w-[80%] m-auto justify-center  bg-slate-100 my-10 p-5 border-2 border-gray-300 rounded-lg">
          {instruments.map((instrument) => (
            <MusicItem
              key={instrument.id}
              id={instrument.id}
              name={instrument.name}
              description={instrument.description}
              img={instrument.img}
              price={instrument.price}
              likes={instrument.likes}
            />
          ))}
        </div>
      </div>
      <footer className=" bg-slate-300 text-center p-4">
        --- Product footer ---
      </footer>
    </div>
  );
};

export default Products;
