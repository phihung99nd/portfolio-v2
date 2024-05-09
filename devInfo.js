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
                                description: 'My main framework is VueJS. <br/> I\'ve started learning and building UI with VueJS in my university years.<br/> Starting out with Vue 2, now I am gradually transitioning to Vue 3. I have roughly 1.5 years of experience in Vue',
                                projects: [
                                    {
                                        id: 1,
                                        shortTitle: 'Portfolio v1',
                                        longTitle: 'Portfolio version 1 using VueJS',
                                        date: '02/2024',
                                        demoLink: 'https://v1-phihungtran.vercel.app/',
                                        thumbnail: 'portfolio-v1.png',
                                        tech: ['VueJS', 'Vuetify', 'VueKinesis'],
                                        detail: 'A personal portfolio to briefly present my information to recruiter. ' +
                                            'The website is compilation of academic and professional materials that exemplifies my education, skills, experiences and work ethics. '
                                    },
                                    {
                                        id: 2,
                                        shortTitle: 'BESA',
                                        longTitle: 'BESA - Online Beauty & Healthcare Booking',
                                        date: '01/2023 - 01/2024',
                                        demoLink: 'https://besa.vn/',
                                        thumbnail: 'besa-thumbnail.png',
                                        tech: ['VueJS', 'ViewUI'],
                                        detail: 'Besa.vn is a great choice for anyone looking for beauty and healthcare services. Besa is an online booking site that allows users and service providers to interact and easily exchange information about services and promotions. Therefore, searching and booking on Besa becomes faster and simpler.'
                                    }
                                ]
                            },
                            {
                                key: '0-0-1',
                                label: 'nuxt.js',
                                data: 'nuxt',
                                description: 'I started using NuxtJS recently. Since I already had a foundation of knowledge in Vue, I quickly became acquainted with NuxtJS and learned more interesting techniques from online demonstration projects.<br/> I used NuxtJS to create a personal portfolio version, leveraging its high performance and interactivity.',
                                projects: [
                                    {
                                        id: 1,
                                        shortTitle: 'Portfolio v2',
                                        longTitle: 'Personal Portfolio using NuxtJS',
                                        date: '04/2024',
                                        demoLink: 'https://phihungtran.vercel.app/',
                                        thumbnail: 'portfolio-v2.png',
                                        tech: ['NuxtJS', 'PrimeVue'],
                                        detail: 'A personal portfolio to briefly present my information to recruiter. ' +
                                            'The website is compilation of academic and professional materials that exemplifies my education, skills, experiences and work ethics. '
                                    }
                                ]
                            },
                            {
                                key: '0-0-2',
                                label: 'react.js',
                                data: 'react',
                                description: 'I have done a small project with React. That is an outsource project that I collaborate with TV360 team.<br/> For more information, please feel free to explore my work at projects page.',
                                projects: [
                                    {
                                        id: 1,
                                        shortTitle: 'TV360 job admin',
                                        longTitle: 'TV360 Job management web application',
                                        date: ' 04/2022 - 06/2022',
                                        thumbnail: 'dummy-img.png',
                                        tech: ['ReactJS', 'MUI'],
                                        detail: 'This is an admin webapp that help managing jobs in the internal system of the TV360 team.'
                                    }
                                ]
                            },
                            {
                                key: '0-0-3',
                                label: 'angular.js',
                                data: 'angular',
                                description: 'I have been involved in projects to upgrade/add features to legacy systems using Angular. I\'ve worked in both the design and development phases.',
                                projects: [
                                    {
                                        id: 1,
                                        shortTitle: 'AgMission',
                                        longTitle: 'AgMission - Jobs Invoicing Module',
                                        date: '02/2024 - Present',
                                        thumbnail: 'agnav-thumbnail.png',
                                        tech: ['Angular', 'PrimeNG'],
                                        detail: 'AgMission is a webapp developed by AGNAV Inc. to centralize all data related to aerial applications.'
                                    },
                                    {
                                        id: 2,
                                        shortTitle: 'SInvoice',
                                        longTitle: 'SInvoice - Asynchronous Report Management',
                                        date: '09/2022 - 11/2022',
                                        thumbnail: 'sinvoice.png',
                                        tech: ['Angular', 'Bootstrap'],
                                        detail: ' Front-end development for asynchronous report functionality of SInvoice system, allow user to request multiple reports without waiting time.'
                                    }
                                ]
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
                                    }
                                ]
                            },
                            {
                                key: '0-1-1',
                                label: 'Vuetify.lib',
                                data: 'vuetify',
                                description: 'Vuetify is a powerful Vue Component Framework built from the ground up to be easy to learn and rewarding to master.<br/> Its collection of UI components maintain a consistent style throughout your application with enough customization options to meet any use-case.<br/>And it\'s free ^^',
                                projects: [
                                    {
                                        id: 1,
                                        shortTitle: 'Portfolio v1',
                                        longTitle: 'Portfolio version 1 using VueJS',
                                        date: '02/2024',
                                        demoLink: 'https://v1-phihungtran.vercel.app/',
                                        thumbnail: 'portfolio-v1.png',
                                        tech: ['VueJS', 'Vuetify', 'VueKinesis'],
                                        detail: 'A personal portfolio to briefly present my information to recruiter. ' +
                                            'The website is compilation of academic and professional materials that exemplifies my education, skills, experiences and work ethics. '
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        key: '0-2',
                        label: 'figma.txt',
                        data: 'figma',
                        description: 'I used Figma to practice design concept and some of those design are used for my web projects.'
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
                                data: 'personal-info',
                                description: 'Fullname: Trần Phi Hùng<br/>Birthday: 17/01/1999<br/>Location: Hà Nội, Việt Nam<br/><br/>' +
                                    'I have over 2 years of experience in web development. My strong aspect - also my favorite one - is front-end development. ' +
                                    'I specialized in SPA frameworks and can be flexibly use Vue, React or Angular depending on the company\'s needs.<br/><br/> ' +
                                    'Though not being participated in any design course, I personally like to learn about designing UI and be able to create practical web UI. Some projects I\'ve worked on are using my design',
                                projects: [
                                    {
                                        id: 1,
                                        shortTitle: 'Portrait',
                                        longTitle: 'Portrait',
                                        date: '17/01/1999 - Present',
                                        thumbnail: 'avatar.jpg',
                                        tech: ['Avatar'],
                                        detail: 'This is my portrait ^^'
                                    }
                                ]
                            },
                            {
                                key: '1-0-1',
                                label: 'education.txt',
                                data: 'education',
                                description: '- Degree:<br/>&nbsp;&nbsp;Hanoi University of Science and Technology (HUST)<br/>&nbsp;&nbsp;Engineer degree in Information Technology<br/><br/>' +
                                    '- Foreign language:<br/>&nbsp;&nbsp;TOEIC format - 880 point'
                            },
                            {
                                key: '1-0-2',
                                label: 'work-experience.txt',
                                data: 'work-experience',
                                description: 'Micro Tech (front-end developer)<br/>MISA (fresher)',
                                projects: [
                                    {
                                        id: 1,
                                        shortTitle: 'Micro Tech',
                                        longTitle: 'Micro Tech',
                                        date: '01/2022 - 01/2024',
                                        demoLink: 'https://micro-tech.com.vn/',
                                        thumbnail: 'micro-tech.png',
                                        tech: ['Front-end dev', 'Designer'],
                                        detail: ' Leading all UI-related tasks in company:<br/>' +
                                            '- UI/UX design<br/>' +
                                            '- Front end developer for company\'s product<br/>' +
                                            '- Onsite or remote developer for partner companies such as Viettel Telecom and Biplus'
                                    },
                                    {
                                        id: 2,
                                        shortTitle: 'MISA',
                                        longTitle: 'MISA Fresher Program',
                                        date: '06/2021 - 08/2021',
                                        demoLink: 'https://www.misa.vn/',
                                        thumbnail: 'misa.png',
                                        tech: ['Fresher'],
                                        detail: 'Participated in the Fullstack fresher program and approached practical productions such as AMIS, CukCuk.'
                                    }
                                ]
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
        techList: ['Vue', 'Nuxt', 'React', 'Angular'],
        items: {
            "1": {
                title: 'TV360 Jobs Management',
                img: 'dummy-img.png',
                tech: ['React'],
                tag: 'admin_page',
                detail: {
                    date: '04/2022 - 06/2022',
                    description: 'This is an admin webapp that help managing jobs in the internal system of the TV360 team.<br/> Unfortunately, I cannot show more demonstration here because of copyright and security concern.',
                    members: '5 members (2 FE, 2 BE, 1 Tester)',
                    responsibility: 'FE developer'
                }
            },
            "2": {
                title: 'SInvoice Report',
                img: 'sinvoice.png',
                tech: ['Angular'],
                tag: 'invoicing',
                detail: {
                    date: '09/2022 - 11/2022',
                    description: 'SInvoice is Viettel\'s system for e-invoice management. Due to its huge data stored in a relational database, querying invoice data to export report takes a lots time. That lead to this project to propose a way for exporting report asynchronously, allow user to request multiple reports without waiting time.',
                    members: '4 members (1 FE, 4 BE) + tester team',
                    responsibility: 'FE developer'
                }
            },
            "3": {
                title: 'BESA',
                img: 'besa-thumbnail.png',
                tech: ['Vue'],
                tag: 'ecommerce',
                detail: {
                    date: '01/2023 - 01/2024',
                    description: '<p>I worked as lead front end developer for all system:</p>\n' +
                        '<ul>\n' +
                        '    <li><u>Customer website</u>: customers can gather information about beauty and healthcare services, book services and doctors online.</li>\n' +
                        '    <li><u>Service provider website</u>: service provider like spa, clinic can access dashboard for revenue report, create and publish services, vouchers or promotions, manage booking and customize store page to be appear on customer website.</li>\n' +
                        '    <li><u>Admin website</u>: admin can access dashboard to manage various entities in the system includes members, customers, booking and many other system settings.</li>\n' +
                        '</ul>',
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
                    date: '02/2024 - Present',
                    description: ' AGNAV is a corporation đeicated to the development and enhancement of GPS-based products for a range of applications, including tracking wildlife and agricultural spraying.<br/> ' +
                        'AgMission is a web app developed by AGNAV Inc. to centralize all data related to aerial applications.<br/> ' +
                        'In this project, our team takes responsibility for developing invoice-related features for AgMission. The functionalities include:<br/>' +
                        '<ul>' +
                        '<li>Create, edit invoices after a job finished</li>' +
                        '<li>Search, view and download invoice</li>' +
                        '<li>Invoice payment logging</li>' +
                        '</ul>',
                    members: '9 (1 PM, 2 BA, 1 Designer, 2 FE, 2 BE, 1 QC',
                    responsibility: 'FE developer'
                }
            },
            "5": {
                title: 'Portfolio v1',
                img: 'portfolio-v1.png',
                tech: ['Vue'],
                tag: 'portfolio',
                detail: {
                    date: '02/2024',
                    description: 'Welcome to my portfolio website, a dynamic testament to my skills and passion for web development.<br/>' +
                        'Crafted with Vue framework and Vuetify component library, this light-themed digital showcase is more than just a collection of information—it\'s an interactive journey through my education, skills, experience, and work ethos.<br/>' +
                        'Through the seamless integration of CSS and JavaScript animations, visitors are treated to an engaging experience as they navigate through my accomplishments and aspirations.<br/>' +
                        'Whether it\'s the sleek design, the intuitive user experience, or the attention to detail in every line of code, this website reflects not only my technical proficiency but also my commitment to excellence. Take a glimpse into my work, and let this website demonstrate why I am the ideal candidate for your team.',
                    members: '1 member',
                    responsibility: 'Personal work'
                }
            },
            "6": {
                title: 'Portfolio v2',
                img: 'portfolio-v2.png',
                tech: ['Nuxt'],
                tag: 'portfolio',
                detail: {
                    date: '04/2024',
                    description: 'Step into the digital realm of my second portfolio version—an innovative, dark-themed website designed to evoke the familiarity of an integrated development environment (IDE).<br/>' +
                        'Built with the power and versatility of NuxtJS, this rendition of my portfolio showcases a unique aesthetic that aligns with my affinity for coding and UI problem solving.' +
                        ' With its sleek layout reminiscent of an IDE, visitors are invited to explore my education, skills, experience and work ethos in a setting that feels right at home to any developer.' +
                        ' From the seamless transitions to the meticulous attention to detail, every aspect of this website speaks about my dedication to the craft.' +
                        ' Enjoy my work, and discover why I am the perfect fit for your team in this digital arena.',
                    members: '1 member',
                    responsibility: 'Personal work'
                }
            }
        }
    },
}
