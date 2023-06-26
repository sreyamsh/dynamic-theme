import Image from "next/image";

export default function Home() {
  return (
    <div className="m-8">
      <h2 className="text-lg font-semibold text-slate-900">Color shades</h2>
      <div className="mt-2 flex flex-col gap-4">
        <p className="text-primary-500 font-bold capitalize">primary</p>
        <div className="inline-flex overflow-hidden rounded-md">
          <div className="bg-primary-50 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            50
          </div>
          <div className="bg-primary-100 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            100
          </div>
          <div className="bg-primary-200 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            200
          </div>
          <div className="bg-primary-300 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            300
          </div>
          <div className="bg-primary-400 text-primary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            400
          </div>
          <div className="bg-primary-500 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            500
          </div>
          <div className="bg-primary-600 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            600
          </div>
          <div className="bg-primary-700 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            700
          </div>
          <div className="bg-primary-800 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            800
          </div>
          <div className="bg-primary-900 text-primary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            900
          </div>
        </div>
        <p className="text-secondary-500 font-bold capitalize">secondary</p>
        <div className="inline-flex overflow-hidden rounded-md">
          <div className="bg-secondary-50 text-secondary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            50
          </div>
          <div className="bg-secondary-100 text-secondary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            100
          </div>
          <div className="bg-secondary-200 text-secondary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            200
          </div>
          <div className="bg-secondary-300 text-secondary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            300
          </div>
          <div className="bg-secondary-400 text-secondary-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            400
          </div>
          <div className="bg-secondary-500 text-secondary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            500
          </div>
          <div className="bg-secondary-600 text-secondary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            600
          </div>
          <div className="bg-secondary-700 text-secondary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            700
          </div>
          <div className="bg-secondary-800 text-secondary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            800
          </div>
          <div className="bg-secondary-900 text-secondary-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            900
          </div>
        </div>
        <p className="text-nuetral-500 font-bold capitalize">nuetral</p>
        <div className="inline-flex overflow-hidden rounded-md">
          <div className="bg-nuetral-50 text-nuetral-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            50
          </div>
          <div className="bg-nuetral-100 text-nuetral-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            100
          </div>
          <div className="bg-nuetral-200 text-nuetral-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            200
          </div>
          <div className="bg-nuetral-300 text-nuetral-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            300
          </div>
          <div className="bg-nuetral-400 text-nuetral-900 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            400
          </div>
          <div className="bg-nuetral-500 text-nuetral-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            500
          </div>
          <div className="bg-nuetral-600 text-nuetral-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            600
          </div>
          <div className="bg-nuetral-700 text-nuetral-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            700
          </div>
          <div className="bg-nuetral-800 text-nuetral-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            800
          </div>
          <div className="bg-nuetral-900 text-nuetral-50 grid h-16 w-16 place-items-end p-1 font-semibold leading-none">
            900
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-lg font-semibold text-slate-900">Color opacity</h2>
        <div className="mt-2 grid gap-6">
          <div className="flex gap-4" data-theme="rose">
            <div className="bg-primary-600 text-primary-50 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              100%
            </div>
            <div className="bg-primary-600 text-primary-50 grid h-16 w-16 place-items-end rounded-md bg-opacity-70 p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              70%
            </div>
            <div className="bg-primary-600/50 text-primary-900 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              50%
            </div>
            <div className="bg-primary-600 text-primary-900 grid h-16 w-16 place-items-end rounded-md bg-opacity-30 p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              30%
            </div>
            <div className="bg-primary-600/[0.1] text-primary-900 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              10%
            </div>
          </div>
          <div className="flex gap-4" data-theme="rainforest">
            <div className="bg-secondary-600 text-secondary-50 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              100%
            </div>
            <div className="bg-secondary-600 text-secondary-50 grid h-16 w-16 place-items-end rounded-md bg-opacity-70 p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              70%
            </div>
            <div className="bg-secondary-600/50 text-secondary-900 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              50%
            </div>
            <div className="bg-secondary-600 text-secondary-900 grid h-16 w-16 place-items-end rounded-md bg-opacity-30 p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              30%
            </div>
            <div className="bg-secondary-600/[0.1] text-secondary-900 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              10%
            </div>
          </div>
          <div className="flex gap-4" data-theme="candy">
            <div className="bg-nuetral-600 text-nuetral-50 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              100%
            </div>
            <div className="bg-nuetral-600 text-nuetral-50 grid h-16 w-16 place-items-end rounded-md bg-opacity-70 p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              70%
            </div>
            <div className="bg-nuetral-600/50 text-nuetral-900 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              50%
            </div>
            <div className="bg-nuetral-600 text-nuetral-900 grid h-16 w-16 place-items-end rounded-md bg-opacity-30 p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              30%
            </div>
            <div className="bg-nuetral-600/[0.1] text-nuetral-900 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none ring-2 ring-inset ring-black/10">
              10%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
