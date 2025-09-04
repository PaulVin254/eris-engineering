"use client";

import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

// Real diaspora clients who built homes through Eris Engineering
const diasporaClients = [
  {
    id: 1,
    name: "Benedict Wanderi",
    designation: "Built in Kiambu • UK Diaspora",
    image: "benedict-wanderi.jpg",
  },
  {
    id: 2,
    name: "Benson Omwenga",
    designation: "Built in Kiambu • UK Diaspora",
    image: "benson-omwenga.jpg",
  },
  {
    id: 3,
    name: "Lavina Cheptoo",
    designation: "Built in Machakos • UAE Diaspora",
    image: "lavina-cheptoo.jpg",
  },
  {
    id: 4,
    name: "MaryAnn Jelagat",
    designation: "Built in Nakuru • Germany Diaspora",
    image: "maryann-jelagat.jpg",
  },
  {
    id: 5,
    name: "Patricia Jeruto",
    designation: "Built in Thika • Australia Diaspora",
    image: "patricia-jeruto.jpg",
  },
  {
    id: 6,
    name: "Peter Mbitu",
    designation: "Built in Kisumu • USA Diaspora",
    image: "peter-mbitu.jpg",
  },
  {
    id: 7,
    name: "Paul Wakoli",
    designation: "Built in Nyeri • Canada Diaspora",
    image: "paul-wakoli.jpg",
  },
  {
    id: 8,
    name: "Brian Kibet",
    designation: "Built in Eldoret • Netherlands Diaspora",
    image: "brian-kibet.jpg",
  },
];

function DiasporaClientsTooltip() {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <AnimatedTooltip items={diasporaClients} />
    </div>
  );
}

export { DiasporaClientsTooltip };
