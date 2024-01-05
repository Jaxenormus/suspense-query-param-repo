import { SuspendedPromise } from '../../components/SuspendedPromise'
import Link from 'next/link'

export const dynamicParams = true;
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Props {
  searchParams: Record<string, string>
}

export default function Home(props: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        NORMAL
        <SuspendedPromise suspenseKey={Object.values(props.searchParams).join('-')} />
        <Link href="/mixed">Go to Mixed</Link>
        <div className='flex flex-row gap-4'>
          <Link href="/?page=1">Normal 1</Link>
          <Link href="/?page=2">Normal 2</Link>
          <Link href="/?page=3">Normal 3</Link>
        </div>
    </main>
  )
}
