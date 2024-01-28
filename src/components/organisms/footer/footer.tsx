export function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='grid-container'>
          <div className='footer-cols'>
            <img
              className='img-h'
              src='/placeholder.svg'
              alt='Company logo'
              width='160'
              height='40'
            />
            <p className='footer-paragraph'>
              :مارا در شبکه های اجتماعی نیز دنبال کنید
            </p>
            <div className='flex-container'>
              <a href='#' className='flex-link-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='svg-footer'
                >
                  <rect width='14' height='20' x='5' y='2' rx='2' ry='2'></rect>
                  <path d='M12 18h.01'></path>
                </svg>
              </a>
              <a href='#' className='text-[#1f2937] hover:text-[#6b7280]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='svg-footer'
                >
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'></path>
                  <line x1='17.5' x2='17.51' y1='6.5' y2='6.5'></line>
                </svg>
              </a>
              <a href='#' className='text-[#1f2937] hover:text-[#6b7280]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='svg-footer'
                >
                  <path d='M2 20h.01'></path>
                  <path d='M7 20v-4'></path>
                  <path d='M12 20v-8'></path>
                  <path d='M17 20V8'></path>
                  <path d='M22 4v16'></path>
                </svg>
              </a>
              <a href='#' className='flex-link-item'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='svg-footer'
                >
                  <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                  <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                </svg>
              </a>
            </div>
          </div>
          <div className='grid-footer-col'>
            <div className=''>
              <div>
                <h4 className='text-sm font-semibold tracking-wider text-[#6b7280] uppercase'>
                  خدمات مشتریان
                </h4>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <a
                      href='#'
                      className='text-base leading-6 text-[#1f2937] hover:text-[#6b7280]'
                    >
                      نقشه سایت
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-base leading-6 text-[#1f2937] hover:text-[#6b7280]'
                    >
                      تنظیمات حساب
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-base leading-6 text-[#1f2937] hover:text-[#6b7280]'
                    >
                      پرسش های متداول
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-base leading-6 text-[#1f2937] hover:text-[#6b7280]'
                    >
                      قوانین و مقررات
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h4 className='text-sm font-semibold tracking-wider text-[#6b7280] uppercase'>
                  خدمات پس از فروش
                </h4>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <a
                      href='#'
                      className='text-base leading-6 text-[#1f2937] hover:text-[#6b7280]'
                    >
                      نحوه ارسال سفارش
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-base leading-6 text-[#1f2937] hover:text-[#6b7280]'
                    >
                      روش های پرداخت
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-base leading-6 text-[#1f2937] hover:text-[#6b7280]'
                    >
                      پیگیری سفارش
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      className='text-base leading-6 text-[#1f2937] hover:text-[#6b7280]'
                    >
                      شرایط استرداد کالا
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='mt-12 xl:mt-0 xl:col-span-1 text-end'>
            <h4 className='text-sm font-semibold tracking-wider text-[#6b7280] uppercase'>
              تماس با ما
            </h4>
            <ul className='mt-4 space-y-4'>
              <li>
                <a
                  href='#'
                  className='flex items-center justify-between text-base leading-6 text-[#1f2937] hover:text-[#6b7280]'
                >
                  <span>تهران - خیابان توحید، پلاک ۴۲، دانشگاه تهران</span>

                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='flex-shrink-0 w-6 h-6 mr-3'
                  >
                    <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'></path>
                    <circle cx='12' cy='10' r='3'></circle>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center text-base leading-6 text-[#1f2937] hover:text-[#6b7280]'
                >
                  تلفن: ۰۲۱-۶۶۵۴۳۲۱۰
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='flex-shrink-0 w-6 h-6 mr-3'
                  >
                    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center text-base leading-6 text-[#1f2937] hover:text-[#6b7280]'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='flex-shrink-0 w-6 h-6 mr-3'
                  >
                    <polyline points='6 9 6 2 18 2 18 9'></polyline>
                    <path d='M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2'></path>
                    <rect width='12' height='8' x='6' y='14'></rect>
                  </svg>
                  فکس: ۰۲۱-۶۶۵۴۳۲۱۱
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='flex items-center text-base leading-6 text-[#1f2937] hover:text-[#6b7280]'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='flex-shrink-0 w-6 h-6 mr-3'
                  >
                    <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                    <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                  </svg>
                  ایمیل: OnlineShop@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
