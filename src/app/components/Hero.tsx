import Image from 'next/image'

import hero from '@/app/assets/hero.svg'

export const Hero: React.FC = () => {
    return (
        <header className="bg-background px-6 py-16">
            <div className="w-fit mx-auto flex flex-col gap-6 sm:w-[550px]">
                <div className="flex justify-center">
                    <Image
                        className="sm:w-[330px]"
                        src={hero}
                        alt="Personagem flutuando utilizando notebook."
                    />
                </div>

                <div className="flex flex-col gap-6">
                    <h1 className="text-2xl font-semibold text-center leading-7 sm:max-w-[470px] mx-auto">
                        Encontre os <span className="text-primary">melhores artigos</span>
                        <br /> de programação em um só lugar
                    </h1>

                    <p className="text-dark text-center leading-6">
                        Explore o topo da programação em um só lugar! Seu destino único para dicas e
                        tendências atuais.
                    </p>

                    <button className="py-4 bg-primary text-white uppercase font-bold rounded sm:w-fit sm:px-9 sm:mx-auto">
                        Buscar artigos
                    </button>
                </div>
            </div>
        </header>
    )
}
