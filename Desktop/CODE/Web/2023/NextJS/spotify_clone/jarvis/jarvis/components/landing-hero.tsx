"use client"

import { useAuth } from "@clerk/nextjs"
import { Link } from "lucide-react";
import TypeWriterComponent from "typewriter-effect"
import { Button } from "@/components/ui/button";

export const LandingHero = () => {

    const isSignedIn = useAuth();

    return (
        <div className="text-white font-bold pt-36 pb-20 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                <h1>
                    La plateforme d&apos;IA pour
                </h1>
                <div className="text-transparent text-center bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                    <TypeWriterComponent
                        options={{
                            strings: [
                                "Discuter.",
                                "Générer des images.",
                                "Générer des musiques.",
                                "Générer des vidéos.",
                                "Générer du code.",
                            ],
                            autoStart: true,
                            loop: true
                        }} />
                </div>
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400 pt-10">
                Créer du contenu 10x plus rapidement grâce à l&apos;IA.
            </div>
            <div className="text-zinc-400 text-xs md:text-sm font-normal">
                Pas besoin de carte de crédit !
            </div>
        </div >
    )
}