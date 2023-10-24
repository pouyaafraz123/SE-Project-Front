export const path = {
  test1: {
    route: '/test/test1',
    link: () => path.test1.route
  },
  test2: {
    route: '/test/test2',
    link: () => path.test2.route
  },
  'test-dynamic': {
    route: '/test/test-dynamic/:id',
    link: (id: number) => `/test/test-dynamic/${id}`
  },
  login: {
    route: '/test/login',
    link: () => path.login.route
  },
  modal: {
    route: '/test/modal-page',
    link: () => path.modal.route
  },
  alert: {
    route: '/test/alert-page',
    link: () => path.alert.route
  },
  'date-picker-page': {
    route: '/test/date-picker-page',
    link: () => path['date-picker-page'].route
  },
  notif: {
    route: '/test/notif-page',
    link: () => path.notif.route
  },
  swiper: {
    route: '/test/swiper-page',
    link: () => path.swiper.route
  }
}
