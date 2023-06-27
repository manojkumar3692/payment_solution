"use client";
import React from "react";

type Props = {};

export default function Admin({}: Props) {
  const makeapi = async (e: any) => {
    e.preventDefault();
    await fetch("/api/users", {
      method: "GET",
    });
  };
  return (
    <div>
      <button onClick={makeapi}>submit</button>
    </div>
  );
}
