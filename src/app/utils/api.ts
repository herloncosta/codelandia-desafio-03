import { ArticleProps } from '../interfaces'

import article01 from '@/app/assets/article01.svg'
import article02 from '@/app/assets/article02.svg'
import article03 from '@/app/assets/article03.svg'
import article04 from '@/app/assets/article04.svg'
import article05 from '@/app/assets/article05.svg'
import article06 from '@/app/assets/article06.svg'

export const api: ArticleProps[] = [
    {
        id: 1,
        title: 'O que é linguagem de programação? Conheça as principais',
        content:
            'Uma das mais populares vertentes da tecnologia da informação, a área de desenvolvimento de software',
        imagePath: article01,
        imageSrc: 'image article 01',
    },
    {
        id: 2,
        title: 'Python: por que a linguagem é tão usada para Data Science e finanças?',
        content:
            'O mundo da programação conta com algumas opções de linguagem para automatizar processos financeiros',
        imagePath: article02,
        imageSrc: 'image article 02',
    },
    {
        id: 3,
        title: 'GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários',
        content: 'O popular serviço de repositório de código GitHub foi adquirido pela...',
        imagePath: article03,
        imageSrc: 'image article 03',
    },
    {
        id: 4,
        title: '15 comandos no GIT que os desenvolvedores precisam saber',
        content: 'Dominar os comandos GIT é uma habilidade que se conquista com...',
        imagePath: article04,
        imageSrc: 'image article 04',
    },
    {
        id: 5,
        title: 'GIT e GitHub: o que são e quais as diferenças entre eles?',
        content: 'Git e GibHub são dois softwares de controle de versão essenciais para...',
        imagePath: article05,
        imageSrc: 'image article 05',
    },
    {
        id: 6,
        title: 'GitHub Copilot ganha integração com GPT-4 e interface conversacional',
        content: 'O GitHub Copilot, ferramenta de desenvolvimento baseada em IA...',
        imagePath: article06,
        imageSrc: 'image article 06',
    },
]
