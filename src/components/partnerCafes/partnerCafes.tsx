"use client";
import React, { Suspense, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import LoadingTopbar from "../progressBar/loadingTopBar";


export default function PartnerCafes() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <Suspense fallback={<LoadingTopbar/>}>
    <div className="flex md:flex-row flex-col min-h-[calc(100vh-60px)] items-center justify-start container md:pt-0 pt-[72px]">
      <div className="text-center text-2xl pt-5">
        <span className="italic">Partner</span>{" "}
        <span className="font-semibold">
          Cafés <br /> and offers
        </span>
      </div>
      <button onClick={() => {}}>yoo</button>
    </div>
    </Suspense>
  );
}

const partnerCafes = [
    {
        shopName: "Culture Café",
        id: "669952b8aea37e04c4f36b8c",
        packageDetails: {
            drinksAllowance: 6,
            drinksIncluded: ["matcha, espresso, americano"],
            price: 15,
        },
        featureSRC: "https://raw.githubusercontent.com/reannab16/coffeepassmvp/main/public/coffee.png",
        logoSRC: "",
    }
]
