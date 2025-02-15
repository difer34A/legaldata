import Desc from "@/components/modules/desc";
import Layout from "@/components/layouts/layout";
import RateMe from "@/components/modules/rateMe";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Star from "@/components/inputs/stars";

export default function Profile() {
  const [showRate, setShowRate] = useState(false);
  return (
    <>
      <Head>
        <title>Legal Data</title>
        <meta name="description" content="Хуулийн зөвлөгөө" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/next.svg" />
      </Head>

      <Layout>
        <RateMe setShow={setShowRate} show={showRate} />
        <div className="flex gap-10 h-full w-full ">
          <div className="w-full lg:w-[28rem] my-8 sticky top-28 self-start ">
            <div>
              <div>
                <Image
                  src="/images/social/farm-cover.jpg"
                  className=" w-full"
                  alt="facebook"
                  width={100}
                  height={80}
                />
              </div>
              <div className="flex pl-2 pt-3 gap-5">
                <div className=" w-28 h-20 relative">
                  <Image
                    src="/images/social/company-profile.svg"
                    className=" w-full absolute -translate-y-1/2"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="font-bold font-[Ubuntu]">Company Name </div>
                <div>
                  <Image
                    src="/images/icons/verified.svg"
                    className=" w-5 h-5"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="flex gap-2">
                  <Image
                    src="/images/social/url_facebook.svg"
                    className=" w-5 h-5"
                    alt="facebook"
                    width={100}
                    height={80}
                  />
                  <Image
                    src="/images/social/url_instagram.svg"
                    className=" w-5 h-5"
                    alt="instagram"
                    width={100}
                    height={80}
                  />
                  <Image
                    src="/images/social/url_linkedin.svg"
                    className=" w-5 h-5"
                    alt="linkedin"
                    width={100}
                    height={80}
                  />
                  <Image
                    src="/images/social/url_youtube.svg"
                    className=" w-5 h-5"
                    alt="youtube"
                    width={100}
                    height={80}
                  />
                  <Image
                    src="/images/social/url_twitter.svg"
                    className=" w-5 h-5"
                    alt="twitter"
                    width={100}
                    height={80}
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-60 border-2 border-gray rounded-2xl mb-10 bg-white">
              <div className="pl-5 pt-3">
                <div className="font-bold font-[Ubuntu]">Холбоо барих</div>
                <div className="flex">
                  <div>
                    <Image
                      src="/images/icons/map.svg"
                      className=" w-40 h-40 mt-3"
                      alt="twitter"
                      width={100}
                      height={80}
                    />
                  </div>
                  <div className=" flex flex-col pl-4 pt-3 font-bold">
                    <div className="w-60">
                      <div className="text-primary opacity-70">Хаяг</div>
                      <div className="font-semibold text-xs">
                        Монгол Улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 8-хороо
                        Амарын гудамж-29 Сан Бизнес Центр, 402 тоот.
                      </div>
                    </div>
                    <div className="pt-5">
                      <div className="text-primary opacity-70">Утас</div>
                      <div className="font-semibold text-xs flex gap-5">
                        <div> +976 8996 3336 </div>
                        <div> +976 8996 3336 </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex gap-3 items-center">
                <div className="font-bold font-[Ubuntu]">3.5</div>
                <Star value={3.5} />
              </div>
              <div className="pl-6">
                <button
                  onClick={() => setShowRate(true)}
                  className="w-60 h-10 bg-[#EF233C] rounded-xl text-[#EDF2F4] font-[Ubuntu] font-semibold text-sm drop-shadow-md hover:drop-shadow-xl"
                >
                  Үнэлгээ өгөх
                </button>
              </div>
            </div>
          </div>
          <Desc />
        </div>
      </Layout>
    </>
  );
}
