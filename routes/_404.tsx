import { Head } from '$fresh/runtime.ts'

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class='flex justify-center items-center bg-[#86efac] mx-auto px-4 py-8 min-h-dvh'>
        <div class='flex flex-col justify-center items-center mx-auto max-w-screen-md'>
          <img
            class='my-6'
            src='/logo.svg'
            width='128'
            height='128'
            alt='the Fresh logo: a sliced lemon dripping with juice'
          />
          <h1 class='font-bold text-4xl'>404 - Page not found</h1>
          <p class='my-4'>The page you were looking for doesn't exist.</p>
          <a href='/' class='underline'>
            Go back home
          </a>
        </div>
      </div>
    </>
  )
}
