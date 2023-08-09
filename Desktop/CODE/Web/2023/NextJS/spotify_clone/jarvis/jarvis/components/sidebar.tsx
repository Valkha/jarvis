"use client";

import Image from "next/image";
import Link from "next/link";

import { Audiowide } from "next/font/google"
import { cn } from "@/lib/utils";
import { CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, SettingsIcon, VideoIcon } from "lucide-react";
import { usePathname } from 'next/navigation'
import { FreeCounter } from "@/components/free-counter";

const audiowide = Audiowide({
    weight: "400",
    subsets: ["latin"]
});

const routes = [
    {
        label: "Tableau de bord",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500"
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500"
    },
    {
        label: "Générer une image",
        icon: ImageIcon,
        href: "/image",
        color: "text-amber-500"
    },
    {
        label: "Générer une vidéo",
        icon: VideoIcon,
        href: "/video",
        color: "text-pink-500"
    },
    {
        label: "Générer une musique",
        icon: MusicIcon,
        href: "/music",
        color: "text-emerald-500"
    },
    {
        label: "Générer du code",
        icon: CodeIcon,
        href: "/code",
        color: "text-green-700"
    },
    {
        label: "Paramètres",
        icon: SettingsIcon,
        href: "/settings",
    },
];

interface SidebarProps {
    apiLimitCount: number;
    isPro: boolean;
};

const Sidebar = ({
    apiLimitCount = 0,
    isPro = false
}: SidebarProps) => {

    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-neutral-900 text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-4">
                        <Image fill alt="logo" src="/logo2.png" />
                    </div>
                    <h1 className={cn("text-2xl font-bold", audiowide.className)}>
                        JARVIS
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            href={route.href}
                            key={route.href}
                            className={cn("group text-sm flex p-3 w-full justify-start font-medium cursor pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400")}>
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
        </div >
    )
}

export default Sidebar;