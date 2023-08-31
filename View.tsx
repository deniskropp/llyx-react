import React from 'react'

import { EventInfo, useEvent } from './Event'


interface PositionChanged extends EventInfo {
    x: number
    y: number
}

let events = {
    PositionChanged: Symbol()
}

export function View(props) {
    const positionChanged = useEvent<PositionChanged>({ key: events.PositionChanged })

    return <div className={props.className}>
        {props.element}
    </div>
}
