'use strict'

export const model = [
  {
    tag: 'div',
    id: 'header',
    class: 'header p-fix w-100p h-100 z-index-100',
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
                    class: 'nav__link m-l-xs c-white',
                    option: {
                      list: ['Home','Projects','solutions','blog','contact'],
                    },
                  },
                ]
              },
            ]
          },
        ]
      },
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
                class: 'top__title title c-white font-w-light',
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
              },
            ]
          },
        ]
      },
    ]
  },
  {
    tag: 'div',
    id: 'cards',
    class: 'cards flex text-center',
    css: {
      marginTop: '-200px',
    },
    children: [
      {
        tag: 'div',
        class: 'container flex flex-jc-sb z-index-100',
        children: [
          {
            tag: 'div',
            class: 'card flex flex-column flex-jc-sb bc-white p-t-m p-b-s p-lr-xs',
            children: [
              {
                tag: 'img',
                class: 'card__img',
                src: 'img/cards/card_1.png',
                alt: 'Architecture Design',
                css: {
                  width: '70px',
                  color: '#0169b4',
                },
              },
              {
                tag: 'h3',
                class: 'card__title font-w-bold m-t-s',
                text: 'Architecture Design',
              },
              {
                tag: 'p',
                class: 'card__text font-w-medium m-t-m',
                text: 'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
                css: {
                  color: '#878787',
                },
              },
              {
                tag: 'button',
                class: 'btn font-w-semi-bold m-t-m',
                text: 'Read More',
              },
            ]
          },
          {
            tag: 'div',
            class: 'card flex flex-column flex-jc-sb bc-white p-t-m p-b-s p-lr-xs',
            children: [
              {
                tag: 'img',
                class: 'card__img',
                src: 'img/cards/card_2.png',
                alt: 'Constructions Work',
                css: {
                  width: '70px',
                  color: '#0169b4',
                },
              },
              {
                tag: 'h3',
                class: 'card__title font-w-bold m-t-s',
                text: 'Constructions Work',
              },
              {
                tag: 'p',
                class: 'card__text font-w-medium m-t-m',
                text: 'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
                css: {
                  color: '#878787',
                },
              },
              {
                tag: 'button',
                class: 'btn font-w-semi-bold m-t-m',
                text: 'Read More',
              },
            ]
          },
          {
            tag: 'div',
            class: 'card flex flex-column flex-jc-sb bc-white p-t-m p-b-s p-lr-xs',
            children: [
              {
                tag: 'img',
                class: 'card__img',
                src: 'img/cards/card_3.png',
                alt: 'Building Assessment',
                css: {
                  width: '70px',
                  color: '#0169b4',
                },
              },
              {
                tag: 'h3',
                class: 'card__title font-w-bold m-t-s',
                text: 'Building Assessment',
              },
              {
                tag: 'p',
                class: 'card__text font-w-medium m-t-m',
                text: 'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
                css: {
                  color: '#878787',
                },
              },
              {
                tag: 'button',
                class: 'btn font-w-semi-bold m-t-m',
                text: 'Read More',
              },
            ]
          },
        ]
      },
    ]
  },
];