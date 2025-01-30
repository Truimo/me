import type {Component} from 'solid-js'
import {splitProps} from 'solid-js'
import type {IconProps} from './index'

export const NewCommentIcon: Component<IconProps> = (props) => {
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
                d="M9 12H12M12 12H15M12 12V9M12 12V15M21 12C21 16.9706 16.9706 21 12 21C11.5683 21 11.1437 20.9696 10.7283 20.9108C9.52459 20.7406 8.92273 20.6555 8.76429 20.6433C8.5069 20.6234 8.59919 20.6266 8.34105 20.6286C8.18217 20.6298 8.00106 20.6428 7.6393 20.6686L5.48597 20.8224C4.62856 20.8837 4.19982 20.9143 3.87922 20.7623C3.59778 20.6289 3.37113 20.4022 3.2377 20.1208C3.0857 19.8002 3.11632 19.3715 3.17757 18.514L3.33138 16.3607C3.35723 15.9988 3.37015 15.8179 3.37139 15.6589C3.37339 15.4008 3.37659 15.4931 3.35674 15.2357C3.34452 15.0773 3.2594 14.4754 3.08915 13.2717C3.03039 12.8563 3 12.4317 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}
