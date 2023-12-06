import Image from 'next/image'

import hero from '@/app/assets/hero.svg'

export const Hero: React.FC = () => {
    return (
        <header className="w-full bg-background px-6 py-16">
            <div
                className="container w-fit mx-auto flex flex-col gap-6 sm:w-[550px]
                xl:w-[1216px] xl:flex xl:flex-row-reverse xl:gap-[235px] xl:items-center"
            >
                <div className="flex justify-center">
                    <Image
                        className="sm:w-[330px] lg:w-[400px]"
                        src={hero}
                        alt="Personagem flutuando utilizando notebook."
                    />
                </div>

                <div className="flex flex-col gap-6">
                    <h1
                        className="text-2xl font-semibold text-center leading-7 sm:max-w-[470px] mx-auto
                        xl:max-w-[581px] xl:text-left xl:text-[40px] xl:leading-[120%] xl:mx-0"
                    >
                        Encontre os <span className="text-primary">melhores artigos</span>
                        <br /> de programação em um só lugar
                    </h1>

                    <p className="text-dark text-center leading-6 xl:text-left xl:text-2xl xl:w-[550px]">
                        Explore o topo da programação em um só lugar! Seu destino único para dicas e
                        tendências atuais.
                    </p>

                    <button
                        className="py-4 bg-primary text-white uppercase font-bold rounded sm:w-fit sm:px-9 sm:mx-auto
                        xl:mx-0 hover:bg-indigo-600 transition"
                    >
                        Buscar artigos
                    </button>
                </div>
            </div>
        </header>
    )
}
