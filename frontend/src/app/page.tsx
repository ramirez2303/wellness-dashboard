import Image from "next/image";
import landingPageImage from "@/assets/landing-page.jpg";
import LandingPageContent from "@/components/ui/LandingPageInformation";

export default function Home() {
    return (
        <div className="flex justify-center items-start md:items-center h-full pt-[160px] md:pt-0">
            <main className="flex flex-col md:grid md:grid-cols-2 gap-12 w-full max-w-[85%] lg:max-w-[1200px]">
                <LandingPageContent />
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
