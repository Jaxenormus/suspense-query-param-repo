import { SuspendedPromise } from '../../../components/SuspendedPromise'
import Link from 'next/link'

export const dynamicParams = true;
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Props {
  searchParams: Record<string, string>
}

export default function Mixed(props: Props) {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        MIXED
        <div className='flex flex-row gap-4'>
            <SuspendedPromise />
            <SuspendedPromise suspenseKey={Object.values(props.searchParams).join('-')} />
        </div>
        <Link href="/">Go to Normal</Link>
        <div className='flex flex-row gap-4'>
            <Link href="/mixed?mixedPage=1">Mixed 1</Link>
            <Link href="/mixed?mixedPage=2">Mixed 2</Link>
            <Link href="/mixed?mixedPage=3">Mixed 3</Link>
        </div>
    </main>
  )
}
