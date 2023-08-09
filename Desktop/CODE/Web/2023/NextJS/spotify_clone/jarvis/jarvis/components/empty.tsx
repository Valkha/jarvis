import Image from "next/image";

interface EmptyProps {
    label: string;
}

export const Empty = ({
    label
}: EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative h-80 w-64">
                <Image
                    alt="Empty"
                    fill
                    src="/jarvis.png"
                />
            </div>
            <p className="text-muted-foreground text-sm text-center my-4">
                {label}
            </p>
        </div>
    )
}
