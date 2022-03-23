export default function Bottombar() {
    const yrs = new Date().getFullYear()
  return (
    <div className='flex flex-col py-3 items-center justify-center bg-gray-800 space-y-2 bottom-0'>
        <p className='text-white font-semibold'>me@gmarr.com</p>
        <p className='text-white font-extralight text-xs'>{yrs}</p>
    </div>
  )
}
