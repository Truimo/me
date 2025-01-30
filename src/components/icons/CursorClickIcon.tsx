import type {Component} from 'solid-js'
import {splitProps} from 'solid-js'
import type {IconProps} from './index'

export const CursorClickIcon: Component<IconProps> = (props) => {
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
                d="M10.9984 4.87876V2.3042M15.8855 6.14698L17.4029 4.7401M4.87486 11.0023H2.30029M6.66833 6.6723L4.50335 4.50732M4.73619 17.4068L6.14307 15.8894M17.8689 16.1194C17.592 16.211 17.4535 16.2568 17.3285 16.3168C16.8842 16.5299 16.526 16.8881 16.3129 17.3324C16.2529 17.4574 16.2071 17.5959 16.1155 17.8728C15.6055 19.4151 15.3505 20.1863 15.1093 20.4888C14.2009 21.6281 12.4492 21.563 11.628 20.3593C11.41 20.0397 11.213 19.2517 10.819 17.6757L9.93491 14.1395C9.47306 12.2921 9.24214 11.3684 9.49424 10.7246C9.71428 10.1627 10.1588 9.71818 10.7207 9.49815C11.3645 9.24604 12.2882 9.47696 14.1356 9.93881L17.6718 10.8229C19.2478 11.2169 20.0358 11.4138 20.3554 11.6319C21.5591 12.4531 21.6242 14.2048 20.4849 15.1132C20.1824 15.3544 19.4112 15.6094 17.8689 16.1194Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}
