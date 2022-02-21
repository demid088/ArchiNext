'use strict'

export const model = [
  {
    tag: 'div',
    id: 'header',
    class: 'header p-fix w-100p h-100 z-index',
    children: [
      {
        tag: 'div',
        class: 'container h-100p',
        children: [
          {
            tag: 'div',
            class: 'header__content flex flex-jc-sb flex-ai-fe h-100p',
            children: [
              {
                tag: 'div',
                id: 'header__logo',
                class: 'header__logo',
                children: [
                  {
                    tag: 'img',
                    class: 'header__logo_img',
                    src: 'img/header/logo.jpg',
                    alt: 'ArchiNext',
                    css: {
                      width: '300px',
                    },
                  },
                ]
              },
              {
                tag: 'nav',
                id: 'nav',
                class: 'nav header__menu flex flex-jc-fe font-sub font-w-regular',
                children: [
                  {
                    tag: 'a',
                    class: 'nav__link m-l-xs white',
                    option: {
                      list: ['Home','Projects','solutions','blog','contact'],
                    },
                  },
                ]
              },
            ]
          },
        ]
      }
    ]
  },
  {
    tag: 'div',
    id: 'top',
    class: 'top w-100p flex p-rel',
    css: {
      minHeight: '850px',
    },
    children: [
      {
        tag: 'div',
        id: 'top-gradient',
        class: 'top-gradient w-100p h-100p p-abs',
        children: [
          {
            tag: 'div',
            class: 'container h-100p flex flex-jc-fs',
            children: [
              {
                tag: 'h1',
                class: 'top__title title white font-w-light',
                text: 'We Have a passion in creating new and ',
                css: {
                  fontSize: '48px',
                  maxWidth: '500px',
                },
                children: [
                  {
                    tag: 'span',
                    class: 'font-w-extra-bold',
                    text: 'unique spaces',
                  },
                ]
              }
            ]
          },
        ]
      }
    ]
  },
];