import Dropdown from './dropdown';
import Item from '@/data/item';

export default function Admin() {
  return (
    <>
      <div className='grid grid-cols-1 gap-9 sm:grid-cols-2'>
        <div className='rounded-sm border shadow-default border-strokedark bg-boxdark'>
          <div className='border-b px-6.5 py-4 border-strokedark'>
            <h3 className='font-medium text-white'>Gửi item cho người chơi</h3>
          </div>
          <div className='flex flex-col gap-5.5 p-6.5'>
            <Dropdown name='Weapon' options={Item.map((item) => item.name)} />
            <button className='flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90'>
              Xác nhận
            </button>
          </div>
        </div>
        <div className='rounded-sm border shadow-default border-strokedark bg-boxdark'>
          <div className='border-b px-6.5 py-4 border-strokedark'>
            <h3 className='font-medium text-white'>Hoàn thành nhiệm vụ</h3>
          </div>
          <div className='flex flex-col gap-5.5 p-6.5'>
            {/* Autocomplete */}
            <button className='flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90'>
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
