import Image from "next/image"


export const Loader = () => {
    return (
        <div className="h-full flex flex-col bg-transparent gap-y-4 items-center justify-center">
            <div className="w-10 h-10 relative animate-spin">
                <Image fill src={"/logo2.png"} alt={"logo"} />
            </div>
            <p className="text-sm text-muted-foreground">
                Jarvis réfléchit...
            </p>
        </div>
    )
}
