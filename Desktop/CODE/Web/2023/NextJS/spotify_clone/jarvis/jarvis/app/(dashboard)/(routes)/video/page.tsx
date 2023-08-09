"use client"


import * as z from 'zod';
import axios from 'axios';
import { Heading } from "@/components/heading";

import { VideoIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

import { formSchema } from '../conversation/constants';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Empty } from '@/components/empty';
import { Loader } from '@/components/loader';
import { useProModal } from '@/hooks/use-pro-modal';
import toast from 'react-hot-toast';

const VideoPage = () => {

    const proModal = useProModal();

    const router = useRouter();

    const [video, setVideo] = useState<string>();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setVideo(undefined);

            const response = await axios.post("/api/video", values);

            setVideo(response.data[0]);
            form.reset();

        } catch (error: any) {
            if (error?.response?.status === 403) {
                proModal.onOpen();
            } else {
                toast.error("Oups... je n'ai pas pu générer une réponse")
            }
        } finally {
            router.refresh();
        }
    };

    return (
        <div>
            <Heading
                title={"Générer une vidéo"}
                description={"Génère une vidéo à partir d'une description !"}
                icon={VideoIcon}
                iconColor="text-pink-500"
                bgColor="bg-pink-500/10" />
            <div className="px-4 lg:px-8">
                <div className="">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}
                            className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 '>
                            <FormField
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className='col-span-12 lg:col-span-10'>
                                        <FormControl className='m-0 p-0'>
                                            <Input className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                                                disabled={isLoading}
                                                placeholder='Décris moi la vidéo que tu aimerais que je créer !'
                                                {...field} />
                                        </FormControl>
                                    </FormItem>
                                )} />
                            <Button className='col-span-12 lg:col-span-2 w-full' disabled={isLoading}>
                                Générer
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4">
                    {isLoading && (
                        <div className="p-8 rounded-lg w-full flex items-center justify-center">
                            <Loader />
                        </div>
                    )}
                    {!video && !isLoading && (
                        <Empty label={"Aucune vidéo générée pour l'instant."} />
                    )}
                    {video && (
                        <video controls className='w-full aspect-video mt-8 rounded-lg border bg-black'>
                            <source src={video} />
                        </video>
                    )}
                </div>
            </div>
        </div>

    )
}

export default VideoPage;