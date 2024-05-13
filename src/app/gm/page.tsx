import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
} from '@nextui-org/autocomplete';
import { useInfiniteScroll } from '@nextui-org/use-infinite-scroll';

export default function Item() {
  return (
    <>
      <div className='grid grid-cols-1 gap-9 sm:grid-cols-2'>
        <div className='rounded-sm border shadow-default border-strokedark bg-boxdark'>
          <div className='border-b px-6.5 py-4 border-strokedark'>
            <h3 className='font-medium text-white'>Gửi item cho người chơi</h3>
          </div>
          <div className='flex flex-col gap-5.5 p-6.5'>
            <div className='relative z-50'>
              <label className='mb-3 block text-sm font-medium text-white'>
                Vật phẩm
              </label>
              <div>
                <select className='hidden' id='multiSelect'>
                  <option value={1}>Option 2</option>
                  <option value={2}>Option 3</option>
                  <option value={3}>Option 4</option>
                  <option value={4}>Option 5</option>
                </select>
                <div className='flex flex-col items-center'>
                  <input type='hidden' defaultValue='' name='values' />
                  <div className='relative z-20 inline-block w-full'>
                    <div className='relative flex flex-col items-center'>
                      <div className='w-full'>
                        <div className='mb-5 flex rounded border py-2 pl-3 pr-3 outline-none transition focus:border-primary active:border-primary border-form-strokedark bg-form-input'>
                          <div className='flex flex-auto flex-wrap gap-3'>
                            <div className='flex-1'>
                              <input
                                placeholder='Nhập keyword để tìm vật phẩm'
                                className='h-full w-full appearance-none bg-transparent p-1 px-2 outline-none'
                                defaultValue=''
                              />
                            </div>
                          </div>
                          <div className='flex w-8 items-center py-1 pl-1 pr-1'>
                            <button
                              type='button'
                              className='h-6 w-6 cursor-pointer outline-none focus:outline-none'
                            >
                              <svg
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <g opacity='0.8'>
                                  <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z'
                                    fill='#637381'
                                  />
                                </g>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className='mb-5.5 flex flex-col gap-6 xl:flex-row'>
                          <div className='w-full xl:w-1/3'>
                            <label className='mb-3 block text-sm font-medium text-black dark:text-white'>
                              Số lượng
                            </label>
                            <input
                              min='1'
                              className='w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                              type='number'
                            />
                          </div>
                          <div className='w-full xl:w-1/3'>
                            <label className='mb-3 block text-sm font-medium text-black dark:text-white'>
                              Cấp
                            </label>
                            <input
                              min='1'
                              max='90'
                              className='w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                              type='number'
                            />
                          </div>
                          <div className='w-full xl:w-1/3'>
                            <label className='mb-3 block text-sm font-medium text-black dark:text-white'>
                              Tinh luyện
                            </label>
                            <input
                              min='1'
                              max='5'
                              className='w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                              type='number'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='w-full px-4'>
                        <div className='max-h-select absolute left-0 top-full z-40 w-full overflow-y-auto rounded shadow bg-form-input hidden'>
                          <div className='flex w-full flex-col'>
                            <div>
                              <div className='w-full cursor-pointer rounded-t border-b hover:bg-primary/5 border-form-strokedark'>
                                <div className='relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 '>
                                  <div className='flex w-full items-center'>
                                    <div className='mx-2 leading-6'>
                                      Option 2
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className='w-full cursor-pointer rounded-t border-b hover:bg-primary/5 border-form-strokedark'>
                                <div className='relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 '>
                                  <div className='flex w-full items-center'>
                                    <div className='mx-2 leading-6'>
                                      Option 3
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className='w-full cursor-pointer rounded-t border-b hover:bg-primary/5 border-form-strokedark'>
                                <div className='relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 '>
                                  <div className='flex w-full items-center'>
                                    <div className='mx-2 leading-6'>
                                      Option 4
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className='w-full cursor-pointer rounded-t border-b hover:bg-primary/5 border-form-strokedark'>
                                <div className='relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 '>
                                  <div className='flex w-full items-center'>
                                    <div className='mx-2 leading-6'>
                                      Option 5
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <div className='relative z-50'>
              <label className='mb-3 block text-sm font-medium text-white'>
                Nhiệm vụ
              </label>
              <div>
                <select className='hidden' id='multiSelect'>
                  <option value={1}>Option 2</option>
                  <option value={2}>Option 3</option>
                  <option value={3}>Option 4</option>
                  <option value={4}>Option 5</option>
                </select>
                <div className='flex flex-col items-center'>
                  <input type='hidden' defaultValue='' name='values' />
                  <div className='relative z-20 inline-block w-full'>
                    <div className='relative flex flex-col items-center'>
                      <div className='w-full'>
                        <div className='mb-2 flex rounded border py-2 pl-3 pr-3 outline-none transition focus:border-primary active:border-primary border-form-strokedark bg-form-input'>
                          <div className='flex flex-auto flex-wrap gap-3'>
                            <div className='flex-1'>
                              <input
                                placeholder='Nhập keyword để tìm tên nhiệm vụ'
                                className='h-full w-full appearance-none bg-transparent p-1 px-2 outline-none'
                                defaultValue=''
                              />
                            </div>
                          </div>
                          <div className='flex w-8 items-center py-1 pl-1 pr-1'>
                            <button
                              type='button'
                              className='h-6 w-6 cursor-pointer outline-none focus:outline-none'
                            >
                              <svg
                                width={24}
                                height={24}
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <g opacity='0.8'>
                                  <path
                                    fillRule='evenodd'
                                    clipRule='evenodd'
                                    d='M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z'
                                    fill='#637381'
                                  />
                                </g>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className='w-full px-4'>
                        <div className='max-h-select absolute left-0 top-full z-40 w-full overflow-y-auto rounded shadow bg-form-input hidden'>
                          <div className='flex w-full flex-col'>
                            <div>
                              <div className='w-full cursor-pointer rounded-t border-b hover:bg-primary/5 border-form-strokedark'>
                                <div className='relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 '>
                                  <div className='flex w-full items-center'>
                                    <div className='mx-2 leading-6'>
                                      Option 2
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className='w-full cursor-pointer rounded-t border-b hover:bg-primary/5 border-form-strokedark'>
                                <div className='relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 '>
                                  <div className='flex w-full items-center'>
                                    <div className='mx-2 leading-6'>
                                      Option 3
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className='w-full cursor-pointer rounded-t border-b hover:bg-primary/5 border-form-strokedark'>
                                <div className='relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 '>
                                  <div className='flex w-full items-center'>
                                    <div className='mx-2 leading-6'>
                                      Option 4
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className='w-full cursor-pointer rounded-t border-b hover:bg-primary/5 border-form-strokedark'>
                                <div className='relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 '>
                                  <div className='flex w-full items-center'>
                                    <div className='mx-2 leading-6'>
                                      Option 5
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className='flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90'>
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
