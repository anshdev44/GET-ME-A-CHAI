import React from "react";
import PaymentPage from "../components/pay";

const Page = ({ params }) => {
  return <PaymentPage username={params.username} />;
};

export default Page;
 