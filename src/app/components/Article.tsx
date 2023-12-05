import Image from 'next/image'
import { ArticleProps } from '../interfaces'

export const Article: React.FC<ArticleProps> = ({ title, content, imagePath, imageSrc }) => {
    return (
        <article className="border-2 rounded-md overflow-hidden">
            <div>
                <div className="object-cover">
                    <Image className="w-full" src={imagePath} alt={imageSrc} />
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
