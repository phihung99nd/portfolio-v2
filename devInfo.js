
export default {
  app_name: 'Teri_portfolio_v2',
  name: 'Trần Phi Hùng',
  engName: 'Hung Phi Tran',
  // Role should not be longer than 25 character
  role: 'Front-end Developer',
  // Intro should breal line by \n, each line should not be longer than 35 character
  intro: '/**\n *  Introduction\n *  > 2 YOE front-end developer\n *  > Specialized in VueJS, NuxtJS,\n *  Angular, React\n */',
  contact: {
    social: {
      facebook: {
        name: 'Trần Phi Hùng',
        url: 'https://www.facebook.com/tranphi.hung.1238/'
      },
      github: {
        name: 'phihung99nd',
        url: 'https://github.com/phihung99nd'
      }
    },
    contact: {
      gmail: 'phihung99nd@gmail.com',
      phone: '0947170199'
    }
  },
  about: {
    sections: {
      "expertise-info": {
        title: 'expertise-info',
        shortcut: '0',
        icon: 'icons/icon-terminal.svg',
        folder: [
          {
            key: '0-0',
            label: 'framework',
            data: 'framework',
            icon: 'pi pi-folder',
            selectable: false,
            children: [
              {
                key: '0-0-0',
                label: 'vue.js',
                data: 'vue',
                description: 'My main framework is VueJS <br/> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec in consequat ipsum. Vivamus feugiat ex sit amet enim iaculis lacinia. Vestibulum et nisl quis elit mollis rhoncus. In non porttitor mauris. Nullam sit amet tortor luctus, tempor risus id, feugiat purus. Phasellus sed porta est. Nam ut nunc mi. Nullam massa nulla, convallis nec risus sit amet, elementum imperdiet velit. Ut efficitur, nunc id aliquam molestie, purus dolor aliquet nulla, vitae sagittis massa ex at metus. Aliquam tempus enim non bibendum tristique.',
                projects: [
                  {
                    id: 1,
                    shortTitle: 'BESA',
                    longTitle: 'BESA - Online Beauty & Healthcare Booking',
                    date: '01/2023 - 01/2024',
                    demoLink: 'https://besa.vn/',
                    thumbnail: 'besa-thumbnail.png',
                    tech: ['VueJS', 'ViewUI'],
                    detail: 'Besa.vn is a great choice for anyone looking for beauty and healthcare services. Besa is an online booking site that allows users and service providers to interact and easily exchange information about services and promotions. Therefore, searching and booking on Besa becomes faster and simpler.'
                  },
                  {
                    id: 2,
                    shortTitle: 'Portfolio v1',
                    longTitle: 'Portfolio version 1 using VueJS',
                    date: '02/2024',
                    demoLink: 'https://phihungtran.vercel.app/',
                    thumbnail: 'dummy-img.png',
                    tech: ['VueJS', 'Vuetify', 'VueKinesis'],
                    detail: 'A personal portfolio to briefly present my information to recruiter. ' +
                        'The website is compilation of academic and professional materials that exemplifies my education, skills, experiences and work ethics. '
                  }
                ]
              },
              {
                key: '0-0-1',
                label: 'nuxt.js',
                data: 'nuxt',
                description: 'I learn NuxtJs for SSR website Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus mattis purus in venenatis. Etiam condimentum dolor eu magna suscipit mattis. Aliquam erat volutpat. Integer ac tellus eu risus malesuada suscipit. Aenean fringilla vitae tortor ut rhoncus. Quisque laoreet sed augue sed facilisis. In lacinia faucibus turpis. Fusce pulvinar nibh porttitor, congue neque non, scelerisque urna. Maecenas condimentum iaculis erat. Duis bibendum convallis efficitur. Nulla eleifend, mauris at mattis congue, lacus tortor porttitor ex, at rhoncus tellus quam rhoncus ex.'
              },
              {
                key: '0-0-2',
                label: 'react.js',
                data: 'react',
                description: 'I have done a small project with React Aliquam viverra vestibulum tincidunt. In in fringilla odio, sed mollis urna. Quisque finibus quis ante at laoreet. Phasellus aliquet sem ante, in hendrerit nisi ornare ut. Nulla sed lacus nulla. Integer commodo risus nisi, ac blandit sapien eleifend pellentesque. Cras sodales est id massa varius blandit. Sed ullamcorper sem at facilisis malesuada.'
              },
              {
                key: '0-0-3',
                label: 'angular.js',
                data: 'angular',
                description: 'I just finished an outsourcing project with Canada client Nunc tristique ultrices nibh sed fringilla. Cras rutrum, est et consequat dapibus, quam ante lobortis orci, vitae elementum lectus quam eu ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque vitae semper erat. Cras imperdiet vestibulum aliquam. Etiam at risus posuere, porta lectus semper, posuere ipsum.'
              },
            ]
          },
          {
            key: '0-1',
            label: 'ui-kit',
            data: 'ui-kit',
            icon: 'pi pi-folder',
            selectable: false,
            children: [
              {
                key: '0-1-0',
                label: 'ViewUI.lib',
                data: 'viewui',
                description: 'I used ViewUI for BESA webapp',
                projects: [
                  {
                    id: 1,
                    shortTitle: 'BESA',
                    longTitle: 'BESA - Online Beauty & Healthcare Booking',
                    date: '01/2023 - 01/2024',
                    demoLink: 'https://besa.vn/',
                    thumbnail: 'besa-thumbnail.png',
                    tech: ['VueJS', 'ViewUI'],
                    detail: 'Besa.vn is a great choice for anyone looking for beauty and healthcare services. Besa is an online booking site that allows users and service providers to interact and easily exchange information about services and promotions. Therefore, searching and booking on Besa becomes faster and simpler.'
                  },
                ]
              },
              {
                key: '0-1-1',
                label: 'Vuetify.lib',
                data: 'vuetify',
                projects: [
                  {
                    id: 2,
                    shortTitle: 'Portfolio v1',
                    longTitle: 'Portfolio version 1 using VueJS',
                    date: '02/2024',
                    demoLink: 'https://phihungtran.vercel.app/',
                    thumbnail: 'dummy-img.png',
                    tech: ['VueJS', 'Vuetify', 'VueKinesis'],
                    detail: 'A personal portfolio to briefly present my information to recruiter. ' +
                        'The website is compilation of academic and professional materials that exemplifies my education, skills, experiences and work ethics. '
                  }
                ]
              }
            ]
          },
          {
            key: '0-2',
            label: 'figma.txt',
            data: 'figma'
          }
        ]
      },
      "personal-info": {
        title: 'personal-info',
        shortcut: '1',
        icon: 'icons/icon-info.svg',
        folder: [
          {
            key: '1-0',
            label: 'bio',
            data: 'bio',
            icon: 'pi pi-folder',
            selectable: false,
            children: [
              {
                key: '1-0-0',
                label: 'personal-info.txt',
                data: 'personal-info'
              },
              {
                key: '1-0-1',
                label: 'education.txt',
                data: 'education'
              }
            ]
          }
        ]
      },
      "hobbies-info": {
        title: 'hobbies-info',
        shortcut: '2',
        icon: 'icons/icon-play.svg',
        folder: [
          {
            key: '2-0',
            label: 'favourite-games.txt',
            data: 'game'
          },
          {
            key: '2-1',
            label: 'watching-films.txt',
            data: 'film'
          }
        ]
      }
    }
  },
  projects: {
    techList: ['Vue', 'React', 'Angular'],
    items: {
      "1": {
        title: 'TV360 Jobs Management',
        img: 'tv360-thumbnail.png',
        tech: ['React'],
        tag: 'admin_page',
        detail: {
          date: '',
          description: '',
          members: '',
          responsibility: ''
        }
      },
      "2": {
        title: 'SInvoice Report',
        img: 'sinvoice-thumbnail.png',
        tech: ['Angular'],
        tag: 'invoicing',
        detail: {
          date: '',
          description: '',
          members: '',
          responsibility: ''
        }
      },
      "3": {
        title: 'BESA',
        img: 'besa-thumbnail.png',
        tech: ['Vue'],
        tag: 'ecommerce',
        detail: {
          date: '01/2023 - 01/2024',
          description: 'Lorem Ipsum',
          members: '5 members (2 FE, 2 BE, 1 Tester)',
          responsibility: 'Lead FE'
        }
      },
      "4": {
        title: 'AgMission',
        img: 'agnav-thumbnail.png',
        tech: ['Angular'],
        tag: 'invoicing',
        detail: {
          date: '',
          description: '',
          members: '',
          responsibility: ''
        }
      }
    }
  },
}
