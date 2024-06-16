import Link from 'next/link'

const Index = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center bg-[url('/images/top.jpg')] bg-cover">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16  lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="text-center bg-white rounded p-10">
                <div>
                  <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                    桃鉄クイズ
                  </h1>
                  <p className="max-w-xl mx-auto mt-8 mb-12 text-base leading-relaxed text-gray-500">
                    桃太郎電鉄ワールドで、貧乏神が出してくる国旗・島・湖に関する四択クイズを練習することができます
                  </p>
                </div>
                <div className="lg:flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  <div className="mt-3 rounded-lg sm:mt-0 mb-10">
                    <Link
                      href="/country"
                      className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      国旗クイズ
                    </Link>
                  </div>
                  <div className="mt-3 rounded-lg sm:mt-0 mb-10">
                    <Link
                      href="/island"
                      className="px-7 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      島クイズ
                    </Link>
                  </div>
                  <div className="mt-3 rounded-lg sm:mt-0">
                    <Link
                      href="/lake"
                      className="px-7 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      湖クイズ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
