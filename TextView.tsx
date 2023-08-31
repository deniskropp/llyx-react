import React from 'react'

import { BaseStyle, BaseView } from './BaseView'


export interface TextStyle {
    base: BaseStyle
    content: string //FIXME: move out content (source?)
    size: number
    font: {
        family: string
        weight: number
    }
}


export function TextView(props) {
    const style: TextStyle = props.style

    const text = <span className="TextView.Content">{style.content}</span>

    return <BaseView className={props.className} element={text} />
}
