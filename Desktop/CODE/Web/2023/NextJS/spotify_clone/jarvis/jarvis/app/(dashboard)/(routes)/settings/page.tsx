import { Heading } from "@/components/heading"
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription"
import { Settings } from "lucide-react"


const Settingspage = async () => {

    const isPro = await checkSubscription();

    return (
        <div className="">
            <Heading title={"Paramètres"} description={"Gérer les paramètres du compte"} icon={Settings} iconColor="text-gray-300" bgColor="bg-gray-400/10" />
            <div className="px-4 lg:px-8 space-y-4">
                <div className="text-sm text-white text-muted-foreground">
                    {isPro ? "Vous bénéficiez actuellement de Jarvis Pro" : "Vous bénéficiez actuellement de la version d'essai gratuite de Jarvis"}
                </div>
                <SubscriptionButton isPro={isPro} />
            </div>
        </div>
    )
}

export default Settingspage;