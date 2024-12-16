"use client";

import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

function NewsletterForm({ data }) {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form className="lg:max-w-[720px]" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="mb-6 max-w-lg text-lg font-medium text-primary-800 lg:text-3xl">
        {data.title}
      </h2>
      <div className="flex flex-col bg-light-300 p-2 text-[#76848F]">
        <label className="mb-6 text-xs uppercase lg:text-base">
          {data.labelText}
        </label>
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-4">
            <input
              type="email"
              placeholder={
                errors.email ? errors.email.message : data.placeholderText
              }
              className={`flex-1 bg-light-300 text-lg font-medium ${
                errors.email
                  ? "placeholder:text-[#FF0000]"
                  : "text-[#222] placeholder:text-gray-400"
              } focus:outline-none lg:text-xl lg:placeholder:text-2xl`}
              {...register("email", { required: t("errors:newsletter") })}
              aria-invalid={errors.email ? "true" : "false"}
            />

            <Button
              type="submit"
              className="h-auto rounded-custom bg-[#97CAFE] p-1 text-xs text-primary-700 hover:bg-primary-800 hover:text-primary-400 lg:p-1 lg:text-lg"
            >
              {data.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default NewsletterForm;
