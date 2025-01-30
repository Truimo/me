import type {Component} from 'solid-js'
import {splitProps} from 'solid-js'
import type {IconProps} from './index'

export const SparkleIcon: Component<IconProps> = (props) => {
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
                d="M4.35 17.4V18.75M4.35 18.75V20.1M4.35 18.75H5.7M4.35 18.75H3M12.9 3L13.2202 5.51971C13.6243 8.69877 16.0808 11.2281 19.2467 11.7249L21 12L19.2467 12.2751C16.0808 12.7719 13.6243 15.3012 13.2202 18.4803L12.9 21L12.5798 18.4803C12.1757 15.3012 9.71919 12.7719 6.5533 12.2751L4.8 12L6.5533 11.7249C9.71919 11.2281 12.1757 8.69877 12.5798 5.51971L12.9 3ZM5.7 3L5.76713 3.40758C5.95525 4.54964 6.85036 5.44475 7.99242 5.63286L8.4 5.7L7.99242 5.76713C6.85036 5.95525 5.95525 6.85036 5.76713 7.99242L5.7 8.4L5.63286 7.99242C5.44475 6.85036 4.54964 5.95525 3.40758 5.76713L3 5.7L3.40758 5.63286C4.54964 5.44475 5.44475 4.54964 5.63286 3.40758L5.7 3Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}
