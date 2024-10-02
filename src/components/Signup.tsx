"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import React from "react";

const Signup = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="max-w-screen-sm md:max-w-screen-2xl">
        <iframe
          width="100%"
          height="600"
          src="https://app.deform.cc/form/d46ccff4-2f95-49b0-a7d4-5b18d5956f24/?page_number=0"
          title="Signup"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default Signup;
