import Image from 'next/image'

interface ArticleProps {
    title: string
    content: string
    imagePath: string
    imageSrc: string
}

export const Article = ({ title, content, imagePath, imageSrc }: ArticleProps) => {
    return (
        <article className="border-2 rounded-md overflow-hidden">
            <div>
                <div className="object-cover">
                    <Image src={imagePath} alt={imageSrc} />
                </div>

                <div className="px-6 py-4 flex flex-col gap-3">
                    <h3 className="text-dark font-semibold text-[18px] line-clamp-2 leading-6">
                        {title}
                    </h3>
                    <p className="line-clamp-2">{content}</p>
                </div>
            </div>
        </article>
    )
}
