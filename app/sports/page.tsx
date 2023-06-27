"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
type Props = {};
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "stripe-pricing-table": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
export default function page({}: Props) {
  const searchParams = useSearchParams();

  const search = searchParams.get("priceTableId");
  return (
    <div style={{ marginTop: "3rem" }}>
      <stripe-pricing-table
        pricing-table-id={search}
        publishable-key="pk_test_51NLmAfEcnrVHBPNpLnBnnRtnFFSJdPmLY1o4lTBVs2WpaoIeRVmMIXPAb4iS9dPxdzE9m6eDfCa9iiXYDoH2DRkX00KTWodxii"
      ></stripe-pricing-table>
    </div>
  );
}
