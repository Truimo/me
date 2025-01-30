import type {Component} from 'solid-js'
import {splitProps} from 'solid-js'
import type {IconProps} from './index'

export const XSquareIcon: Component<IconProps> = (props) => {
    const [local, others] = splitProps(props, ['class'])

    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class={local.class}
            {...others}
        >
            <path
                d="M9.00004 15L12 12M12 12L15 8.99998M12 12L9.00004 8.99998M12 12L15 15M12 20.9999C9.20435 20.9999 7.80653 20.9999 6.7039 20.5432C5.23373 19.9342 4.06569 18.7661 3.45672 17.296C3 16.1934 3 14.7955 3 11.9999C3 9.20423 3 7.8064 3.45672 6.70378C4.06569 5.23361 5.23373 4.06556 6.7039 3.4566C7.80653 2.99988 9.20435 2.99988 12 2.99988C14.7956 2.99988 16.1935 2.99988 17.2961 3.4566C18.7663 4.06556 19.9343 5.23361 20.5433 6.70378C21 7.8064 21 9.20423 21 11.9999C21 14.7955 21 16.1934 20.5433 17.296C19.9343 18.7661 18.7663 19.9342 17.2961 20.5432C16.1935 20.9999 14.7956 20.9999 12 20.9999Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}
