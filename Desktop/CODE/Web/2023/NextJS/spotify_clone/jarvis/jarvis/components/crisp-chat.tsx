"use client"

import { useEffect } from "react"
import { Crisp } from 'crisp-sdk-web'

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("27e00f35-d53b-43dd-8ac7-d0ea4fff113e");
    }, []);

    return null;
}