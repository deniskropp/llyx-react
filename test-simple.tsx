import React from 'react'
import JSX from 'react-jsx'

import { RootView } from './RootView'
import { TextView } from './TextView'


async function useRoot(root: JSX.Element) {
    console.log(root)
}


const root = (
    <RootView id="root">
        <TextView style={{ content: 'Hello World' }}/>
    </RootView>
)

useRoot(root)
