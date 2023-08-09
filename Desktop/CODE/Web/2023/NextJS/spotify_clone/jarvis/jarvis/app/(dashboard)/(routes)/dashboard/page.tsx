"use client"

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, CodeIcon, ImageIcon, MessageSquare, MusicIcon, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/30",
        href: "/conversation"
    },
    {
        label: "Générer une image",
        icon: ImageIcon,
        color: "text-amber-500",
        bgColor: "bg-amber-500/30",
        href: "/image"
    },
    {
        label: "Générer une vidéo",
        icon: VideoIcon,
        color: "text-pink-500",
        bgColor: "bg-pink-500/30",
        href: "/video"
    },
    {
        label: "Générer une musique",
        icon: MusicIcon,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/30",
        href: "/music"
    },
    {
        label: "Générer du code",
        icon: CodeIcon,
        color: "text-green-500",
        bgColor: "bg-green-700/30",
        href: "/code"
    },
]

const DashboardPage = () => {

    const router = useRouter();

    return (
        <div className="">
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center bg-clip-text bg-gradient-to-r text-transparent from-teal-500 to-cyan-500">
                    Toute la puissance de l&apos;IA
                </h2>
                <p className="font-light text-sm md:text-lg text-center mx-2">
                    Jarvis peut générer tes images, vidéos, musiques, ton code, ou simplement répondre à tes questions.
                </p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4 flex flex-col  ">
                {tools.map((tool) => (
                    <Card
                        onClick={() => router.push(tool.href)}
                        key={tool.href}
                        className="p-4 border-black/5 bg-neutral-600 lg:w-2/3 w-full self-center text-white flex items-center justify-between hover:shadow-md transition cursor-pointer shadow-lg">
                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                <tool.icon className={cn("w-8 h-8", tool.color)} />
                            </div>
                            <div className="font-semibold">
                                {tool.label}
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5" />
                    </Card>
                ))}
            </div>
        </div>

    )
}

export default DashboardPage;