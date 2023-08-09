"use client"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useProModal } from "@/hooks/use-pro-modal"
import { Badge } from "@/components/ui/badge";
import { Check, CodeIcon, ImageIcon, MessageSquare, MusicIcon, VideoIcon, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
    },
    {
        label: "Générer une image",
        icon: ImageIcon,
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
    },
    {
        label: "Générer une vidéo",
        icon: VideoIcon,
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
    },
    {
        label: "Générer une musique",
        icon: MusicIcon,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
    },
    {
        label: "Générer du code",
        icon: CodeIcon,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
    },
]

export const ProModal = () => {

    const proModal = useProModal();
    const [loading, setLoading] = useState(false);


    const onSubscribe = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/stripe");

            window.location.href = response.data.url;
        } catch (error) {
            toast.error("Oups... j'ai rencontré un problème")
        } finally {
            setLoading(false);
        }
    }

    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center gap-y-4 pb-2">
                        Génére encore plus avec Jarvis
                        <div className="flex items-center gap-x-2 font-bold py-1 ml-1">
                            <Badge className="uppercase text-sm py-1" variant="premium">
                                pro
                            </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-900 font-medium pt-2 space-y-2 ">
                        {tools.map((tool) => (
                            <Card key={tool.label} className="p-3 border-black/5 flex items-center justify-between">
                                <div className="flex items-center gap-x-4">
                                    <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                        <tool.icon className={cn("w-6 h-6", tool.color)} />
                                    </div>
                                    <div className="font-semibold text-sm">
                                        {tool.label}
                                    </div>
                                </div>
                                <Check className="text-primary w-6 h-6" />
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={onSubscribe} disabled={loading} size="lg" variant="premium" className="w-full">
                        Devenir PRO
                        <Zap className="w-4 h-4 ml-2 fill-white" />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}