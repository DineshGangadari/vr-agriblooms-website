"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
      offset: 80,
    });
  }, []);

  return null;
}