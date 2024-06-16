import Link from 'next/link'

const Index = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center bg-[url('/images/top.jpg')] bg-cover">
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16  lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="text-center bg-white rounded p-10 lg:p-20">
              <p className='text-black mb-10'>クイズ集はそれぞれ10問です</p>
                <div className="w-full max-w-2xl gap-2 mx-auto mt-6">
                  <div className="mt-3 rounded-lg sm:mt-0 mb-10">
                    <Link
                      href="/country/1"
                      className="px-2 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      クイズ集①を解く
                    </Link>
                  </div>
                  <div className="mt-3 rounded-lg sm:mt-0 mb-10">
                    <Link
                      href="/country/2"
                      className="px-2 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      クイズ集②を解く
                    </Link>
                  </div>
                  <div className="mt-3 rounded-lg sm:mt-0">
                    <Link
                      href="/country/3"
                      className="px-2 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      クイズ集③を解く
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
