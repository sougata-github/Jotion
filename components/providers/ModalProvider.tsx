"use client";

import { useEffect, useState } from "react";

import SettingsModal from "../modals/SettingsModal";
import CoverImageModal from "../modals/CoverImageModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  //none of the modals will be rendered unless we are fully on the
  //client side.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
};
