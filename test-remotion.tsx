import React from "react"
import { interpolateColors, registerRoot } from "remotion"
import { AbsoluteFill, Composition } from "remotion"

import { RootView } from './RootView'
import { TextView } from './TextView'


function Root() {
    return (
        <Composition
            id="Empty"
            component={MyComposition}
            durationInFrames={60}
            fps={30}
            width={1280}
            height={720}
        />
    )
}

registerRoot(Root)


import { interpolate, Img, useCurrentFrame, staticFile } from "remotion"

const MyComposition = () => {
    const frame = useCurrentFrame()
    const color = interpolateColors(frame, [0, 20], ['#ff000000','#ff888888'])

    return (
        <AbsoluteFill
            style={{
                justifyContent: "center",
                alignItems: "center",
                fontSize: 100,
                color: {color},
                backgroundColor: {color}
            }}
        >
            The current frame is {frame}.
            {llyx}
        </AbsoluteFill>
    )
}


const llyx = (
    <RootView id="root">
        <TextView style={{ content: 'Hello World' }}/>
    </RootView>
)

console.log(llyx)
