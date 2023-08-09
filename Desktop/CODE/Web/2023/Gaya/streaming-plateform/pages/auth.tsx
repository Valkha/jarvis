import axios from 'axios';
import { useState, useCallback } from "react";
import Input from "@/components/Input";
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';



const Auth = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, []);


    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                callbackUrl: '/profiles'
            });
        } catch (error) {
            console.log(error);
        }
    }, [email, password]);

    const register = useCallback(async () => {
        try {
            await axios.post('api/register', {
                email,
                name,
                password
            });

            login();
        } catch (error) {
            console.log(error)
        }
    }, [email, name, password, login]);





    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-fixed bg-center bg-no-repeat bg-cover">
            <div className="bg-black w-full h-full bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 rounded-lg px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant == 'login' ? 'Se connecter' : "Créer un compte"}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant == 'register' && (
                                <Input label="Nom d'utilisateur" onChange={(ev: any) => setName(ev.target.value)} id="name" type="name" value={name} />
                            )}
                            <Input label="Email" onChange={(ev: any) => setEmail(ev.target.value)} id="email" type="email" value={email} />
                            <Input label="Mot de passe" onChange={(ev: any) => setPassword(ev.target.value)} id="password" type="password" value={password} />
                            <button onClick={variant === 'login' ? login : register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700">
                                {variant == 'login' ? "Login" : 'Sign up'}
                            </button>
                            <div className='flex flex-row items-center gap-4 mt-8 justify-center'>
                                <div onClick={() => signIn('google', { callbackUrl: '/profiles' })} className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 hover:scale-105 transition'>
                                    <FcGoogle size={30} />
                                </div>
                                <div onClick={() => signIn('github', { callbackUrl: '/profiles' })} className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 hover:scale-105 transition'>
                                    <FaGithub size={30} />
                                </div>
                            </div>
                            <p className="text-neutral-500 self-center mt-12">
                                {variant == 'login' ? 'Nouveau sur Netflix?' : "J'ai déjà un compte,"}
                                <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                    {variant == 'login' ? 'Créer un compte' : 'je me connecte'}
                                </span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;