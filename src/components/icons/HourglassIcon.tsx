import type {Component} from 'solid-js'
import {splitProps} from 'solid-js'
import type {IconProps} from './index'

export const HourglassIcon: Component<IconProps> = (props) => {
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
                d="M10.1912 12.5508C10.3071 12.1942 10.3071 11.8058 10.1912 11.4492C9.22165 8.46673 4.40272 8.00546 4.01443 4.48436C3.93458 3.76031 4.18955 3.04013 4.69671 2.55723C5.28193 2 6.62415 2 9.30861 2H14.6914C17.3759 2 18.7181 2 19.3033 2.55723C19.8104 3.04013 20.0654 3.76031 19.9856 4.48436C19.5973 8.00546 14.7784 8.46673 13.8088 11.4492C13.6929 11.8058 13.6929 12.1942 13.8088 12.5508C14.7784 15.5333 19.5973 15.9945 19.9856 19.5156C20.0654 20.2397 19.8104 20.9599 19.3033 21.4428C18.7181 22 17.3758 22 14.6914 22L9.3086 22C6.62415 22 5.28192 22 4.69671 21.4428C4.18955 20.9599 3.93458 20.2397 4.01442 19.5156C4.40272 15.9945 9.22164 15.5333 10.1912 12.5508Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}
