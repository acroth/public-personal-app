"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useForm } from "react-hook-form";

function ContactForm() {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("submit");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form onSubmit={submit} className="grid grid-cols-2 m-5 md:m-20 gap-4">
        <Input {...register("name")} label="Name" variant="underlined" />
        <Input {...register("email")} label="Email" variant="underlined" />
        <Textarea
          {...register("body")}
          className="col-span-2"
          label="Message"
          variant="underlined"
        />
        <Button variant="flat" type="submit" radius="sm">
          Send
        </Button>
      </form>
    </>
  );
}

export default ContactForm;
