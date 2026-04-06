import React from "react";

import { Background } from "@/components/background";
import { Pricing } from "@/components/blocks/pricing";

const Page = () => {
  return (
    <Background>
      <Pricing className="py-28 text-center lg:pt-44 lg:pb-32" />
    </Background>
  );
};

export default Page;
