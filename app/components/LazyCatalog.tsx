"use client";

import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

const Catalog = dynamic(() => import("./Catalog"), {
  ssr: false,
});

export default function LazyCatalog() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "500px",
  });

  return (
    <div ref={ref}>
      {inView ? (
        <Catalog />
      ) : (
        <div className="h-[500px] animate-pulse rounded-lg bg-gray-100" />
      )}
    </div>
  );
}