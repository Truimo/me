import type {Component} from 'solid-js'
import {splitProps} from 'solid-js'
import type {IconProps} from './index'

export const UserSecurityIcon: Component<IconProps> = (props) => {
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
                d="M10 15H7C4.79086 15 3 16.7909 3 19C3 20.1046 3.89543 21 5 21H11.5M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM17.1132 14.0554L14.8073 14.7852C14.3598 14.9268 14.051 15.3162 14.0314 15.7637L14.0043 16.3814C13.9251 18.1856 14.9474 19.8718 16.6304 20.7128L16.9566 20.8759C17.2805 21.0377 17.6666 21.0415 17.9939 20.8861L18.2783 20.7511C20.079 19.8962 21.1501 18.0865 20.9829 16.1816L20.9432 15.7293C20.9055 15.2993 20.6014 14.932 20.1703 14.7955L17.8318 14.0554C17.5986 13.9815 17.3464 13.9815 17.1132 14.0554Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}
