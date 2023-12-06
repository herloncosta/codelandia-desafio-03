import { api } from '../utils/api'
import { Article } from './Article'

export const ArticlesContainer: React.FC = () => {
    return (
        <section className="container mx-auto px-6 py-16 sm:px-8 xl:px-[10rem]">
            <div className="flex flex-col gap-10 lg:mx-w[70%] lg:mx-auto">
                <div>
                    <h2 className="text-dark text-2xl font-semibold">Artigos recomendados</h2>
                </div>

                <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3">
                    {api.map(article => (
                        <Article
                            key={article.title}
                            title={article.title}
                            content={article.content}
                            imagePath={article.imagePath}
                            imageSrc={article.imageSrc}
                            id={article.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
