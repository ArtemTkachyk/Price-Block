import Head from "next/head";
import { Tongle } from "../components/Tongle";
import { useState, useEffect } from "react";
import PricingTable from "./PricingTable";

export default function Home() {
  const [isChecked, setIsChecked] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/getData")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API error");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData.data);
      })
      .catch((error) => {
        console.error("get data error:", error);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Pricing Table</title>
      </Head>
      <main>
        <h1 className="my-6 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Our Pricing
        </h1>
        <Tongle isChecked={isChecked} setIsChecked={setIsChecked} />
        {data && (
          <PricingTable
            priceList={isChecked ? data.LIST_YEARLY : data.LIST_MONTHLY}
            descriptionList={data.DESCRIPTION_LIST}
          />
        )}
      </main>
    </div>
  );
}
