import LinearChart from "@/components/charts/LinearChart";
import React from "react";

const page = () => {
    return (
        <div className={`w-full p-8 flex flex-col`}>
            <div className="w-full">
                <h2 className="text-3xl font-semibold">Welcome back Rodrigo</h2>
            </div>
            <div className="w-full grid grid-cols-4 mt-8 gap-4">
                {Array(6)
                    .fill({})
                    .map((_, ix) => (
                        <LinearChart
                            key={ix}
                            className={ix === 0 || ix === 1 ? "col-span-2" : ""}
                        />
                    ))}
            </div>
        </div>
    );
};

export default page;
