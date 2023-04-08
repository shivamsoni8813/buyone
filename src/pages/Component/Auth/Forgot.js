import Link from 'next/link'
import React from 'react'
const Forgot = () => {
  return (
    <div>
      <section className="gradient-form h-full bg-orange dark:bg-black">
        <div className="container h-full p-10">
          <div
            className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-orange-500">
            <div className="w-full">
              <div
                className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <img
                          className="mx-auto w-24 mt-10"
                          src="https://dypdvfcjkqkg2.cloudfront.net/large/3884306-3406.png" width="20" alt=""
                        />
                        <h4 className="mt-4 mb-8 pb-1 text-xl font-semibold">
                          We are The E-shopper Team
                        </h4>
                      </div>
                      <form>
                        <p className="mb-4">Forgot Password</p>
                        <div className="relative mb-4" data-te-input-wrapper-init>
                          <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-orange [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                            id="exampleFormControlInput1"
                            placeholder="Email" />

                        </div>
                       
                        <div className="mb-12 pt-1 pb-1 text-center">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            style={{
                              background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"
                            }}>
                            Continue
                          </button>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <Link href={'/Component/Auth/Login'}>
                            <button
                              type="button"
                              className="inline-block rounded border-2 border-danger px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                              data-te-ripple-init
                              data-te-ripple-color="light">
                              Login
                            </button></Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Forgot
