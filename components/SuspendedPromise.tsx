import { Suspense } from "react"

interface Props {
    suspenseKey?: string
}

async function SuspendedPromiseContent() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return <div>promise resolved</div>
}

export function SuspendedPromise(props:Props) {
    return (
        <Suspense key={props.suspenseKey} fallback={<div>loading...</div>}>
            <SuspendedPromiseContent />
        </Suspense>
    )
}