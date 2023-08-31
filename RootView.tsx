import React from 'react'

import { View } from './View'


export function RootView(props) {
    return <View className={props.className} element={props.children} />
}
