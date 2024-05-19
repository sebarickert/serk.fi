"use client";

import { useEffect, useState } from "react";

import { QUERY_TYPE } from "@/constants/types";
import { Article } from "@/layouts/Article";
import { BasicPage } from "@/layouts/BasicPage";

type PageTypeSwitcherContainerProps = {
  type: QUERY_TYPE;
  data: any;
};

export const PageTypeSwitcherContainer = ({
  type,
  data,
}: PageTypeSwitcherContainerProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  switch (type) {
    case QUERY_TYPE.BLOG:
    case QUERY_TYPE.PORTFOLIO:
      return <Article {...data} />;
    default:
      return <BasicPage {...data} />;
  }
};
