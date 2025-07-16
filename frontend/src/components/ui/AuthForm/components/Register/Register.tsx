import { routes } from "@/app/utils/routes";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useRegisterUser } from "@/hooks/useRegisterUser";
import { toSnakeCase } from "@/lib/utils";
import Link from "next/link";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

const Register = () => {
    const { t } = useTranslation("common");
    const { register, handleFormSubmit, errors, submitDisabled } =
        useRegisterUser();

    return (
        <Fragment>
            <div className="flex justify-center">
                <h2 className="text-2xl font-bold">{t("register_title")}</h2>
            </div>
            <form onSubmit={handleFormSubmit}>
                <div className="flex flex-col gap-1">
                    <Input
                        id="email"
                        type="email"
                        label={{ text: t("email") }}
                        required
                        placeholder={t("mail_placeholder")}
                        {...register("email")}
                        error={toSnakeCase(errors.email?.message ?? "")}
                    />
                    <Input
                        id="password"
                        type="password"
                        label={{ text: t("password") }}
                        required
                        placeholder={t("password_placeholder")}
                        {...register("password")}
                        error={errors.password?.message}
                    />
                    <Input
                        id="firstname"
                        type="text"
                        label={{ text: t("first_name") }}
                        required
                        placeholder={t("first_name_placeholder")}
                        {...register("firstname")}
                        error={errors.firstname?.message}
                    />
                    <Input
                        id="lastname"
                        type="text"
                        label={{ text: t("last_name") }}
                        required
                        placeholder={t("last_name_placeholder")}
                        {...register("lastname")}
                        error={errors.lastname?.message}
                    />
                </div>
                <Button
                    variant="primary-filled"
                    type="submit"
                    className="text-white text-lg font-bold w-full py-2 rounded-lg mt-8 cursor-pointer"
                    disabled={submitDisabled}
                >
                    {t("register")}
                </Button>
                <div className="flex flex-col items-center mt-6">
                    <span className="font-regular">
                        {t("already_have_account")}.{" "}
                        <Link href={routes.login}>
                            <Button
                                variant="none"
                                className="text-custom-primary hover:text-custom-primary/80 underline cursor-pointer"
                            >
                                {t("log_in")}
                            </Button>
                        </Link>
                    </span>
                </div>
            </form>
        </Fragment>
    );
};

export default Register;
