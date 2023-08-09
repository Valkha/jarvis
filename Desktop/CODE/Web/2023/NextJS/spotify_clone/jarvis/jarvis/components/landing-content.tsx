"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
    {
        name: "Nicolas D.",
        avatar: "DZ",
        title: "Ministre de la pelade",
        description: "Tellement incroyable que mes cheveux ont repoussé"

    },
    {
        name: "Redha D.",
        avatar: "Mec violet",
        title: "J'aime le violet",
        description: "ca manque de violet"

    },
    {
        name: "Mathieu M.",
        avatar: "AFK",
        title: "Chef étoilé chez Boom Burger",
        description: "Pas testé mais c'est bien"

    },
    {
        name: "Nicolas R.",
        avatar: "S",
        title: "Suricate à mi-temps",
        description: "Ca promène même le chien de ma copine !"

    },

]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Avis
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-slate-700 border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div className="">
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-sm text-zinc-400">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}