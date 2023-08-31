import Emittery from 'emittery'


let ctxs: Map<any,Emittery> = new Map()

function lookupEmittery(ctx: any): Emittery {
    let emittery = ctxs.get(ctx)

    if (emittery !== undefined)
        return emittery

    emittery = new Emittery()

    ctxs.set(ctx, emittery)

    return emittery
}




export interface EventInfo {
    type: string

}


export type EventHandler<Info extends EventInfo> = (info: Info) => void


export class EventLink<Info extends EventInfo> {
    private emittery: Emittery
    private key: symbol

    constructor(emittery, key) {
        this.emittery = emittery
        this.key = key
    }

    attach(handler: EventHandler<Info>) {
        const off = this.emittery.on(this.key, handler)

        return () => {
            off()
        }
    }

    detach(handler: EventHandler<Info>) {
        return this.emittery.on(this.key, handler)
    }

    dispatch(info: Info) {
        this.emittery.emit(this.key, info)
    }
}

export function useEvent<Info extends EventInfo>({ ctx, key }: { ctx?: any, key: symbol }): EventLink<Info> {
    const emittery = lookupEmittery(ctx)

    return new EventLink<Info>(emittery, key)
}
