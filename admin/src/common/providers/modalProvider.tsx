"use client";

import { StoreModal } from "@/components/custom/modals";
import { useEffect, useState } from "react";

const modalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};

export default modalProvider;
