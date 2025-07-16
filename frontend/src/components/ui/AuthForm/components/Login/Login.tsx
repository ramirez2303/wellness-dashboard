import { routes } from "@/app/utils/routes";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useLoginUser } from "@/hooks/useLoginUser";
import { toSnakeCase } from "@/lib/utils";
import Link from "next/link";
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

const Login = () => {
    const { t } = useTranslation("common");
    const { register, handleFormSubmit, errors, submitDisabled } =
        useLoginUser();
    console.log(errors);
    return (
        <Fragment>
            <div className="flex justify-center">
                <h2 className="text-2xl font-bold">{t("login_title")}</h2>
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
                </div>

                <Button
                    variant="primary-filled"
                    type="submit"
                    className="text-white text-lg font-bold w-full py-2 rounded-lg mt-6 cursor-pointer"
                    disabled={submitDisabled}
                >
                    {t("login")}
                </Button>
                <div className="flex flex-col items-center mt-8 gap-1">
                    <Link href={routes.register}>
                        <Button
                            variant="none"
                            className="text-custom-primary hover:text-custom-primary/80 underline cursor-pointer"
                        >
                            {t("register_new_account")}
                        </Button>
                    </Link>
                    <span className="font-regular">{t("or")}</span>
                    <span className="font-regular">
                        {t("need")}{" "}
                        <Button
                            variant="none"
                            className="text-custom-primary hover:text-custom-primary/80 underline cursor-pointer"
                        >
                            {t("recover_password")}
                        </Button>
                        ?
                    </span>
                </div>
            </form>
        </Fragment>
    );
};

export default Login;
