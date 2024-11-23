import type {BlockObjectResponse, TextRichTextItemResponse} from '@notionhq/client/build/src/api-endpoints'

export interface BlockRenderProps {
    block: BlockObjectResponse
}

function getAnnotationsClass(annotations: TextRichTextItemResponse['annotations']) {
    const classes: string[] = []
    if (annotations.bold) {
        classes.push('font-bold')
    }
    if (annotations.italic) {
        classes.push('italic')
    }
    if (annotations.strikethrough) {
        classes.push('line-through')
    }
    if (annotations.underline) {
        classes.push('underline')
    }
    if (annotations.code) {
        classes.push('font-mono')
        classes.push('bg-gray-100')
        classes.push('p-1')
    }
    if (annotations.color) {
        classes.push(getAnnotationsColor(annotations.color))
    }
    return classes.join(' ')
}

function getAnnotationsColor(color: string): string {
    switch (color) {
    case 'default':
        return 'text-gray-900 dark:text-gray-100'
    case 'gray':
        return 'text-gray-500'
    case 'brown':
        return 'text-yellow-500'
    case 'orange':
        return 'text-yellow-500'
    case 'yellow':
        return 'text-yellow-500'
    case 'green':
        return 'text-green-500'
    case 'blue':
        return 'text-blue-500'
    case 'purple':
        return 'text-purple-500'
    case 'pink':
        return 'text-pink-500'
    case 'red':
        return 'text-red-500'
    case 'gray_background':
        return 'bg-gray-100'
    case 'brown_background':
        return 'bg-yellow-100'
    case 'orange_background':
        return 'bg-yellow-100'
    case 'yellow_background':
        return 'bg-yellow-100'
    case 'green_background':
        return 'bg-green-100'
    case 'blue_background':
        return 'bg-blue-100'
    case 'purple_background':
        return 'bg-purple-100'
    case 'pink_background':
        return 'bg-pink-100'
    case 'red_background':
        return 'bg-red-100'
    default:
        return ''
    }
}

export {
    getAnnotationsColor, getAnnotationsClass
}