import type {Metadata} from 'next'
import {notFound} from 'next/navigation'
import {queryDiary, queryDiaryList} from '@/libs/notion'
import DiaryDetail from '@/components/diary/DiaryDetail'

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
    const response = await queryDiaryList()
    return response.filter((diary) => {
        // todo only words support
        return diary.type === 'words'
    }).map((diary) => ({
        slug: diary.name,
    }))
}

export const generateMetadata = async (props: {
    params: Params
}): Promise<Metadata> => {
    const {slug} = await props.params
    const diary = await queryDiary(slug)

    if (null === diary) {
        return {}
    }

    const title = `Diary #${diary.title.length > 0 ? diary.title : diary.name}`

    return {
        title,
        description: 'There are my diary.',
        alternates: {
            canonical: `https://www.qxm.me/diary/${slug}`,
        }
    }
}

export default async function Page(props: {
    params: Params
}) {
    const params = await props.params
    const diary = await queryDiary(params.slug)

    if (null === diary) {
        return notFound()
    }

    return (
        <div className="mx-auto max-w-3xl">
            <div className="select-none mx-4">
                <DiaryDetail diary={diary} />
            </div>
        </div>
    )
}
