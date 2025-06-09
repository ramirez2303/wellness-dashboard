import Button from "@/components/common/Button";
import Image from "next/image";
import landingPageImage from "@/assets/landing-page.jpg";

export default function Home() {
    return (
        <div className="flex justify-center items-start md:items-center h-full pt-[160px] md:pt-0">
            <main className="flex flex-col md:grid md:grid-cols-2 gap-12 w-full max-w-[85%] lg:max-w-[1200px]">
                <div className="flex flex-col justify-center items-start gap-4">
                    <h1 className="text-4xl font-bold">
                        Track your wellness journey and achieve health goals
                    </h1>
                    <h3 className="text-xl font-medium">
                        Gain insights into your mood, sleep, and habits , and
                        take control of your overall well-being with
                        personalized recommendations
                    </h3>
                    <Button
                        variant="primary-filled"
                        className="text-lg font-semibold text-white px-4 py-2 rounded-xl cursor-pointer"
                    >
                        Get Started
                    </Button>
                </div>
                <div className="flex justify-center items-center">
                    <Image
                        src={landingPageImage}
                        alt="Landing Page Image"
                        className="w-[400px] md:w-auto"
                    />
                </div>
            </main>
        </div>
    );
}
