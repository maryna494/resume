// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяц',
  address: 'London',
}

var footer = {
  social: {
    email: {
      text: 'Ivanov@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'Linkedin',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume / Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies,with 1 yars of experience in development.Whenever I start to work o a new project I learn the domain and try to understand the idea of project.Good team player,every colleague is a friend to me.',
      },

      experience: {
        title: 'Othen experience',
        text: 'Pet project for parsing sport betting data from different platforms (odds)and sport statistics (tournament position,goals ets),analyzing by simple mathematics models and preparing probability for such events like:money linefirst win /draw/ second win,totals etc.',
      },
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume / Skills',
    },

    header,
    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 8,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 9,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 8,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Camping',
          isMain: true,
        },
        {
          name: 'Yoga',
          isMain: true,
        },
        {
          name: 'Magic',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume / Education',
    },

    header,

    main: {
      educations: [
        { name: 'Kelly College', isEnd: true },
        { name: 'The Island Camp Beaumont', isEnd: true },
        {
          name: 'Kaplan International Centers',
          isEnd: false,
        },
      ],
      certificates: [
        { name: 'document', id: 35366 },
        { name: 'PDF', id: 13334 },
        { name: 'file', id: 47859 },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume / Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'null',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'http://resume.com.ua/',
              about:
                'We want to know about dynamic things going around.',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Node js',
                },
              ],
              awards: [
                {
                  name: 'Associazione Backstage English RC',
                },
                {
                  name: 'Backstage English is your Best Choice!',
                },
              ],
              stackAmount: 3,
              awardsAmount: 3,
            },
          ],
        },
      ],
    },

    footer,
  })
})
