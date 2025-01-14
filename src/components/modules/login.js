import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Enter() {
  const router = useRouter();
  return (
    <>
      <div className="w-80 py-10 flex">
        <div className="w-full flex items-center flex-col">
          <div>
            <Image
              src="/logo2.png"
              alt="logo"
              className="w-40 h-20"
              width={100}
              height={100}
            />
          </div>
          <div className="w-full pt-16">
            <input
              type="text"
              className="font-semibold bg-white border w-full pr-12 pl-4 py-2 rounded-xl border-gray outline-none"
              placeholder="Бүртгэлтэй И-мэйл хаяг/Утас"
            ></input>
          </div>
          <div className="w-full pt-5">
            <input
              type="password"
              className="font-semibold bg-white border w-full pr-12 pl-4 py-2 rounded-xl border-gray outline-none"
              placeholder="Нууц үг"
            ></input>
          </div>
          <div>
            <button className="w-56 h-10 mt-16 bg-[#EF233C] rounded-xl text-[#EDF2F4] font-[Ubuntu] font-semibold text-sm shadow-md shadow-secondary ">
              Нэвтрэх
            </button>
          </div>
          <div>
            <button
              className="text-secondary font-semibold mt-10"
              onClick={() => router.push("/new")}
            >
              БҮРТГҮҮЛЭХ
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
