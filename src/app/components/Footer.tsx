export const Footer: React.FC = () => {
    return (
        <footer className="bg-background px-6 py-16">
            <div className="flex flex-col gap-12 lg:max-w-[600px] mx-auto">
                <div>
                    <h2 className="text-[28px] text-dark font-semibold lg:text-center">
                        Entre em contato
                    </h2>
                </div>

                <div className="flex flex-col gap-10">
                    <form className="flex flex-col gap-6">
                        <input
                            className="px-[18px] py-4 rounded border"
                            type="text"
                            placeholder="Nome"
                        />
                        <input
                            className="px-[18px] py-4 rounded border"
                            type="text"
                            placeholder="Email"
                        />
                        <textarea
                            className="min-h-[150px] px-[18px] py-4 rounded border resize-none"
                            placeholder="Assunto da mensagem"
                        ></textarea>
                    </form>

                    <button className="py-4 bg-primary text-white uppercase font-bold rounded hover:bg-indigo-600 transition">
                        entrar em contato
                    </button>
                </div>
            </div>
        </footer>
    )
}
