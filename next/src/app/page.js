import Link from "next/link";

const Index = () => {
  return (
    <div className='bg-red-500 min-h-screen flex flex-col items-center justify-center'>
      <div className='text-4xl font-bold mb-6'>桃鉄クイズ</div>
      <div className='bg-white p-6 rounded shadow-md text-center'>
        <div className='flex flex-col space-y-4'>
          <Link href="/country">
            <p className='text-blue-500 hover:underline'>国クイズ</p>
          </Link>
          <Link href="/island">
            <p className='text-blue-500 hover:underline'>島クイズ</p>
          </Link>
          <Link href="/lake">
            <p className='text-blue-500 hover:underline'>湖クイズ</p>
          </Link>
        </div>
      </div>
      <button className="btn btn-primary">Hello daisyUI!</button>
    </div>
  )
}

export default Index