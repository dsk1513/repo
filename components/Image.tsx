'use client'
import React from "react";
import { Image } from "@nextui-org/react";

export default function image() {
  const reducedExposureStyle = {
    filter: "brightness(10%) contrast(7%) saturate(7%)", // Adjust the percentages to control the exposure
  };

  return (
    <Image
      style={reducedExposureStyle}
      width={2700}
      alt="NextUI hero Image"
      src="/Users/dineshchalla/Desktop/maeve/maeve/deluxe.jpeg"
    />
  );
}
