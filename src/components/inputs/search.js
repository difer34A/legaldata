import React from "react";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();

  return (
    <>
      <div className="w-full px-2 pb-16 pt-32 md:px-20 sm:pt-32 sm:pb-12 lg:px-32 lg:pt-12 h-28 flex justify-between items-center gap-10 bg-white1">
        <div className="w-1/4 h-0.5 bg-gradient-to-r from-white1 to-primary"></div>
        <div className=" font-bold text-primary text-lg gap-3 text-center ">
          Танд тохирох
          <span className=" text-secondary text-lg mx-2">
            ХУУЛЬЧ,ХУУЛИЙН ФИРМИЙГ
          </span>
          олоорой
        </div>
        <div className=" w-1/4  h-0.5 bg-gradient-to-l from-white1 to-primary "></div>
      </div>
      {/* search section */}
      <div className="lg:w-screen w-full h-full sticky top-20 z-10 flex justify-center bg-white1 rounded-xl">
        <div className="flex justify-center w-full px-2 md:px-20 lg:px-32 rounded-lg">
          <div className=" w-full h-14 border-2 border-gray border-r-0 rounded-xl gap-4 flex items-center font-semibold bg-white">
            <input
              type="text"
              className=" w-[50rem] h-[3.2rem]  bg-white pl-4 outline-none rounded-xl"
              placeholder="Нэрээр хайх"
            ></input>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 lg:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
              />
            </svg>
            <div className="hidden lg:flex gap-1 h-full items-center">
              <div className="h-2/3 w-[1px] bg-primary z-20"></div>
              <select className="bg-white w-48 h-10 outline-none">
                <option>Байршил</option>
                <option>Улаанбаатар</option>
                <option>Сүхбаатар аймаг</option>
              </select>
              <div className="h-2/3 w-[1px] bg-primary"></div>
              <select className="bg-white w-60 h-10  outline-none ">
                <option>Мэргэшсэн салбар</option>
                <option>Өмгөөлөгч</option>
                <option>Шүүгч</option>
              </select>
              <div className="h-2/3 w-[1px] bg-primary"></div>
              <select className="w-52 h-10  outline-none ">
                <option>Төрөл</option>
                <option>Эрүү</option>
                <option>Залилан</option>
              </select>
            </div>

            <button
              onClick={() => {
                router.push("/search");
              }}
              className="h-[32] px-4 bg-secondary rounded-xl py-4 lg:px-[4.8rem] text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 lg:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <span className="hidden lg:block">Хайх</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
