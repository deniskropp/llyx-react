import React from 'react'

import { View } from './View'


export interface BaseStyle {
    border: {
        width: number
        color: string
    }
    background: {
        opacity: number
        color: string
    }
}


function useStyle<T extends BaseStyle>(style) {
    if (style === undefined) {
        style = {}
    }

    style.border = { width: 1 }

    return style
}

export function BaseView(props) {
    const style = useStyle<BaseStyle>(props.style)
    const bg = (
        <div className="BaseView.Background" style={{ borderWidth: `${style.border.width}px` }}>
            {props.element}
        </div>
    )

    return <View className={props.className} element={bg} />
}
