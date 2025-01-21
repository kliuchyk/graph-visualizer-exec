"use client";

import React from "react";
import { ReactFlowContainer } from "@/components";

import "@xyflow/react/dist/style.css";
import { Paper } from "@/components/ui";
import { Sidebar } from "@/components/Sidebar";

export default function HomePage() {
  return (
    <main className="flex min-h-screen justify-center bg-gradient-to-b py-10">
      <div className="mx-auto flex max-w-[1240px] items-start justify-between">
        <Sidebar />
        <Paper>
          <ReactFlowContainer />
        </Paper>
      </div>
    </main>
  );
}
