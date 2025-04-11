import React from "react";
import Image from "next/image";

export default async function FetchAPI() {
  try {
    const res = await fetch("https://api.github.com/users/shinebo", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch");

    const data = await res.json();

    return (
      <div className="flex flex-col items-center p-6 bg-slate-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">GitHub Profile</h1>

        <Image
          className="w-48 h-48 object-cover rounded-full mb-4 transition-transform duration-300 ease-in-out hover:scale-105"
          src={data.avatar_url}
          alt={`${data.login}'s avatar`}
          width={192}
          height={192}
        />

        <div className="text-center">
          <p className="text-lg font-semibold">Username: {data.login}</p>
          <p className="text-gray-600">User ID: {data.id}</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching profile:", error);
    return <div className="text-red-500 text-center mt-4">Failed to load profile</div>;
  }
}