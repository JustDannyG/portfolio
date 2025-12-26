import { Injectable, computed, signal } from '@angular/core';

export type Language = 'DE' | 'EN';

export type ProjectButton = Readonly<{
  label: string;
  href: string;
  target?: '_self' | '_blank';
  variant?: 'primary' | 'secondary';
}>;

export type ProjectInfo = Readonly<{
  title?: string;
  description: string;
}>;

export type ProjectTechnology = Readonly<{
  name: string;
  icon: string;
}>;

export type Project = Readonly<{
  id: number;
  tabLabel: string;
  name: string;
  duration?: string;
  infoItems: ReadonlyArray<ProjectInfo>;
  technologies: ReadonlyArray<ProjectTechnology>;
  image: string;
  buttons: ReadonlyArray<ProjectButton>;
}>;

export type Review = Readonly<{
  name: string;
  projectAccent: string;
  quote: string;
  linkLabel: string;
  linkHref: string;
}>;

type AppTranslations = (typeof TRANSLATIONS)['EN'];

const TRANSLATIONS = {
  EN: {
    navigation: {
      logoAria: 'Back to landing page',
      mobileHeaderAria: 'Mobile navigation',
      primaryNavAria: 'Primary navigation',
      languageToggleAria: 'Language selection',
      toggleMenuAria: 'Toggle navigation menu',
      links: {
        why: 'Why me',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact'
      }
    },
    landing: {
      role: 'FRONTEND DEVELOPER',
      scrollLabel: 'Scroll down',
      socialsAria: 'Social media',
      socials: {
        mail: 'E-Mail',
        github: 'GitHub',
        linkedin: 'LinkedIn'
      }
    },
    whyMe: {
      title: 'Why me',
      headlineAccent: 'I work',
      headlineText: 'remote',
      headlineSuffix: '..|',
      description:
        'I love translating complex ideas into clean, friendly interfaces. Tackling tricky bugs energizes me, and I thrive when collaboration, curiosity, and persistence come together to solve real problems.',
      cta: "Let's talk"
    },
    mySkills: {
      title: 'My Skills',
      headingMobile: 'What',
      heading: 'I am currently learning',
      learningText:
        'I’m highly motivated to keep improving my skills, build practical solutions, and stay up to date with modern web technologies.',
      cta: "Let's talk"
    },
    myProjects: {
      title: 'My Projects',
      mobileTabLabel: 'Project',
      labels: {
        technologies: 'Technologies',
        duration: 'Duration'
      },
      projects: [
        {
          id: 1,
          tabLabel: '1. El Pollo Loco',
          name: 'El Pollo Loco',
          duration: 'duration: 4 weeks',
          infoItems: [
            {
              title: 'About the project',
              description:
                'An energetic jump-and-run adventure starring Pepé in the Mexican desert. The game features animated enemies, parallax backgrounds, and hidden collectibles scattered across handcrafted levels.'
            },
            {
              title: 'How I have organised my work process',
              description:
                'I separated rendering, physics, and state management so I could iterate quickly on gameplay tweaks. Reusable helpers handled collision logic, level scripting, sound triggers, and UI states which kept the repo tidy and review-friendly.'
            },
            {
              title: 'What I have learnt',
              description:
                'Shipping El Pollo Loco improved my sprite animation workflow, timing of attack patterns, and performance profiling. I dug deeper into modern JavaScript patterns to optimize loops and add delightful micro interactions.'
            }
          ],
          technologies: [
            { name: 'HTML', icon: 'assets/img/my-projects/Frame 500.svg' },
            { name: 'JavaScript', icon: 'assets/img/my-projects/Javascript.svg' },
            { name: 'CSS', icon: 'assets/img/my-projects/Frame 501.svg' }
          ],
          image: 'assets/img/my-projects/Bildschirmfoto 2025-12-07 um 11.18.25.png',
          buttons: [
            { label: 'Live Test', href: 'http://danny-gruchmann.de/el-pollo-loco/index.html', target: '_blank', variant: 'primary' },
            { label: 'GitHub', href: 'https://github.com/JustDannyG/El-Pollo-Loco', target: '_blank', variant: 'secondary' }
          ]
        },
        {
          id: 2,
          tabLabel: '2. Join',
          name: 'Join',
          duration: '5 weeks',
          infoItems: [
            {
              title: 'About the project',
              description:
                'A collaborative Kanban board inspired by modern productivity tools. Drag-and-drop lets teammates track tasks across columns, assign priorities, and add contacts all in one view.'
            },
            {
              title: 'How I have organised my work process',
              description:
                'We split the board logic, contact management, and UI polish into reusable modules. Shared TypeScript interfaces and naming conventions kept the codebase consistent and made reviews effortless.'
            },
            {
              title: 'My group work experience',
              description:
                'Join was built in a three-person crew. We paired on bigger features like drag-and-drop and auth so everyone learned together, and we regularly swapped tasks to balance workload and unblock each other.'
            }
          ],
          technologies: [
            { name: 'HTML', icon: 'assets/img/my-projects/Frame 500.svg' },
            { name: 'JavaScript', icon: 'assets/img/my-projects/Javascript.svg' },
            { name: 'CSS', icon: 'assets/img/my-projects/Frame 501.svg' }
          ],
          image: 'assets/img/my-projects/Bildschirmfoto 2025-12-07 um 12.46.22.png',
          buttons: [
            { label: 'Live Test', href: 'http://danny-gruchmann.de/join/index.html', target: '_blank', variant: 'primary' },
            { label: 'GitHub', href: 'https://github.com/JustDannyG/Join', target: '_blank', variant: 'secondary' }
          ]
        },
        /* {
          id: 3,
          tabLabel: '3. Comming soon',
          name: 'Comming soon',
          infoItems: [
            {
              title: 'About the project',
              description:
                'I’m currently working on DA Bubble, a modern text messenger focused on a clean UI and a smooth chat experience. I’m implementing features like user authentication, real-time messaging, and better usability with online status, typing indicators, and improved message handling.'
            },
            {
              description:
                'The key to success in my projects is a mix of good planning, clean maintainable code, and consistent execution. I break tasks into small steps, test early, and iterate quickly to sharpen both my workflow and technical skills.'
            }
          ],
          technologies: [
            { name: 'Angular', icon: 'assets/img/my-projects/Frame 498.svg' },
            { name: 'TypeScript', icon: 'assets/img/my-projects/Frame 499.svg' },
            { name: 'HTML', icon: 'assets/img/my-projects/Frame 500.svg' },
            { name: 'CSS', icon: 'assets/img/my-projects/Frame 501.svg' },
            { name: 'Vue.js', icon: 'assets/img/my-projects/Vue Js.svg' },
            { name: 'React', icon: 'assets/img/my-projects/React.svg' }
          ],
          image: 'assets/img/my-projects/coming-soon-project.svg',
          buttons: [
            { label: 'Live Test', href: '#', target: '_blank', variant: 'primary' },
            { label: 'GitHub', href: '#', target: '_blank', variant: 'secondary' }
          ]
        } */
      ]
    },
    reviewTeam: {
      title: 'Need a teamplayer? Here is what my colleagues said about me',
      mobileTitle: 'Need a teamplayer?',
      mobileSubtitle: 'Here what my colleagues said about me',
      projectLabel: 'Project',
      reviews: [
        {
          name: 'Sahra Mueller',
          projectAccent: 'Comming soon',
          quote: 'Comming soon...',
          linkLabel: 'LinkedIn Profile',
          linkHref: 'https://www.linkedin.com/feed/'
        },
        {
          name: 'James Rugman',
          projectAccent: 'Join',
          quote: 'Comming soon...',
          linkLabel: 'LinkedIn Profile',
          linkHref: 'https://www.linkedin.com/feed/'
        },
        {
          name: 'Evelyn Marx',
          projectAccent: 'Join',
          quote: 'Comming soon...',
          linkLabel: 'LinkedIn Profile',
          linkHref: 'https://www.linkedin.com/feed/'
        }
      ]
    },
    contact: {
      title: 'Contact me',
      intro:
        'Tell me about the ideas you want to bring to life. Whether you need a frontend specialist, a design partner, or simply want to explore what’s possible, I’m ready to collaborate and add value to your projects.',
      details: {
        emailLabel: 'E-mail:',
        phoneLabel: 'Tel:'
      },
      form: {
        nameLabel: 'Your name',
        nameError: 'Please enter your name.',
        emailLabel: 'Your email',
        emailError: 'Please enter a valid email address.',
        messageLabel: 'Your message',
        messagePlaceholder: 'Write something...',
        messageError: 'Please enter a message.',
        consent: {
          textBeforeLink: 'I’ve read the ',
          linkLabel: 'privacy policy',
          textAfterLink: ' and agree to the processing of my data as outlined.'
        },
        submitLabel: 'Send',
        scrollTopLabel: 'Back to top',
        success: {
          title: 'Email successfully sent',
          message: "Thanks! I'll get back to you shortly."
        }
      }
    },
    footer: {
      legalNotice: 'Legal notice'
    },
    legalNotice: {
      title: 'Legal Notice',
      sections: [
        {
          heading: 'Imprint',
          list: ['Danny Gruchmann', 'Pleißenweg 7, Altenburg 04600', 'Email: danny.grmn@icloud.com']
        },
        {
          heading: 'Acceptance of terms',
          body:
            'By accessing and using this portfolio, you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments that may be presented to you from time to time. I may update or change the terms and conditions without notice.'
        },
        {
          heading: 'Scope and ownership of the product',
          body:
            'This product has been developed as part of an advanced frontend curriculum at the Developer Akademie GmbH. It has an educational focus and is not intended for extensive personal or business use. The design of the portfolio is owned by the Developer Akademie GmbH. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.'
        },
        {
          heading: 'Proprietary rights',
          body:
            'Aside from the design owned by Developer Akademie GmbH, I retain all proprietary rights to this portfolio, including copyrighted material, trademarks, and all proprietary information associated with it.'
        },
        {
          heading: 'Use of the product',
          body:
            'This portfolio is intended to be used for lawful purposes in accordance with all applicable laws and regulations. Any use of the portfolio for unlawful activities, to harass, harm, threaten, or intimidate another person is strictly prohibited. You are solely responsible for your interactions with other users of the portfolio.'
        },
        {
          heading: 'Disclaimer of warranties and limitation of liability',
          body:
            'The portfolio is provided “as is” without warranty of any kind, whether express or implied. In no event will I, the listed students, or the Developer Akademie be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages.'
        },
        {
          heading: 'Indemnity',
          body:
            'You agree to indemnify and hold harmless the listed students, the Developer Akademie, and our affiliates, partners, representatives, agents, and employees from any claim or demand, including reasonable attorneys’ fees, arising out of your use of this portfolio or your breach of this legal notice.'
        }
      ],
      dateLabel: 'Date: December 10, 2025'
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      sections: [
        {
          heading: '1. Controller',
          body: 'The controller within the meaning of the General Data Protection Regulation (GDPR) is:',
          list: ['Danny Gruchmann', 'Pleißenweg 7', '04600 Altenburg', 'E-mail: danny.grmn@icloud.com']
        },
        {
          heading: '2. General information on data processing',
          body: [
            'I only process personal data insofar as this is necessary to provide a functional website as well as my content and services, or when you actively share this data with me (e.g. via the contact form).',
            'This website currently uses:'
          ],
          list: [
            'no tracking / reach measurement (e.g. Google Analytics)',
            'no tag manager',
            'no advertising or affiliate programs',
            'no cookies that require consent (according to the current state)'
          ]
        },
        {
          heading: '3. Hosting',
          body: [
            'This website is hosted by: ALL-INKL.COM – Neue Medien Münnich, Hauptstraße 68, 02742 Friedersdorf, Germany.',
            'When the website is accessed, the hosting provider processes the technical data required to deliver the site (see server log files). The legal basis is Art. 6(1)(f) GDPR (legitimate interest in the secure and stable operation of the website).'
          ]
        },
        {
          heading: '4. Server log files',
          body: ['When you visit this website, the hosting provider usually processes the following data in so-called server log files:'],
          list: [
            'IP address (possibly shortened/truncated depending on the hosting setup)',
            'Date and time of access',
            'Page/file accessed',
            'Transferred data volume',
            'Referrer URL (previously visited page)',
            'Browser type/version and operating system',
            'Host name of the accessing computer'
          ],
          afterList: [
            'Processing is carried out to ensure technical operation, error analysis, and to ward off attacks. Legal basis: Art. 6(1)(f) GDPR.',
            "Retention: Log files are usually stored for a limited period of time and are then deleted. The exact duration depends on the hoster's settings/standards."
          ]
        },
        {
          heading: '5. Contact (email and contact form)',
          body: [
            'If you contact me (e.g. by email or via the contact form), the data you provide (e.g. name, email address, message text) are processed in order to handle your request.',
            'Submissions from the contact form are sent to my email address: danny.grmn@icloud.com.',
            'There is no additional external storage (e.g. CRM/newsletter tool/database) through this website—the data remains in my email inbox as part of the communication.'
          ],
          list: [
            'Art. 6(1)(b) GDPR, if the request relates to pre-contractual measures or an existing contract,',
            'otherwise Art. 6(1)(f) GDPR (legitimate interest in processing inquiries).'
          ],
          afterList: [
            'Retention: I store inquiry content for as long as necessary to process it and/or for as long as legal retention requirements apply.'
          ]
        },
        {
          heading: '6. Integration of GitHub and LinkedIn (third-party content)',
          body: [
            'This website embeds content from GitHub and LinkedIn (e.g. profiles, widgets, badges, or embedded content).',
            'When these contents load, your browser may technically connect to the servers of the respective providers. This can involve processing the IP address, technical device/browser data, and potentially additional information.'
          ],
          list: [
            'GitHub: GitHub, Inc., USA (for EU users sometimes GitHub B.V., Netherlands, depending on the service/processing)',
            'LinkedIn: LinkedIn Ireland Unlimited Company, Ireland (processing can also take place in third countries depending on the service)'
          ],
          afterList: [
            'Legal basis: The integration is carried out on the basis of Art. 6(1)(f) GDPR (legitimate interest in an appealing presentation of my portfolio and projects/profiles).',
            'If a provider requires consent (e.g. due to extensive tracking), embedding would only make sense after consent (e.g. via a two-click solution/consent banner).',
            'Note: If you do not want third-party providers to receive data, use the website without activating/clicking the embedded content or block third-party content through browser settings/plugins.'
          ]
        },
        {
          heading: '7. Cookies',
          body: [
            'According to the current state, this website does not use cookies for analytics, marketing, or tracking purposes.',
            'If this changes in the future (e.g. through analytics, YouTube, Maps, consent tools), this privacy policy will be updated accordingly and any required consent will be obtained.'
          ]
        },
        {
          heading: '8. SSL/TLS encryption (HTTPS)',
          body: [
            'I recommend using the website only via an encrypted connection (HTTPS) as this protects data transfers.',
            'Current note: HTTPS is still being set up. As long as the website (partially) runs unencrypted via HTTP, transmitted data could theoretically be read by third parties. Please do not send sensitive information via the contact form in that case.'
          ]
        },
        {
          heading: '9. Your rights as a data subject',
          body: ['Under the GDPR you have the following rights:'],
          list: [
            'Access (Art. 15 GDPR) to your processed data',
            'Rectification (Art. 16 GDPR) of inaccurate data',
            'Erasure (Art. 17 GDPR) (“right to be forgotten”)',
            'Restriction of processing (Art. 18 GDPR)',
            'Data portability (Art. 20 GDPR)',
            'Objecting to processing based on legitimate interests (Art. 21 GDPR)'
          ],
          afterList: ['To exercise your rights, simply send an email to: danny.grmn@icloud.com.']
        },
        {
          heading: '10. Right to lodge a complaint with the supervisory authority',
          body: [
            'You also have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR), in particular in the EU member state of your habitual residence, place of work, or the place of the alleged infringement.'
          ]
        },
        {
          heading: '11. Updates and changes',
          body: ['I may adapt this privacy policy if the website, the tools used, or legal requirements change.']
        }
      ],
      dateLabel: 'Last updated: December 26, 2025'
    }
  },
  DE: {
    navigation: {
      logoAria: 'Zurück zur Startseite',
      mobileHeaderAria: 'Mobile Navigation',
      primaryNavAria: 'Hauptnavigation',
      languageToggleAria: 'Sprachauswahl',
      toggleMenuAria: 'Navigation ein- oder ausblenden',
      links: {
        why: 'Warum ich',
        skills: 'Fähigkeiten',
        projects: 'Projekte',
        contact: 'Kontakt'
      }
    },
    landing: {
      role: 'FRONTEND-ENTWICKLER',
      scrollLabel: 'Nach unten scrollen',
      socialsAria: 'Soziale Medien',
      socials: {
        mail: 'E-Mail',
        github: 'GitHub',
        linkedin: 'LinkedIn'
      }
    },
    whyMe: {
      title: 'Warum ich',
      headlineAccent: 'Ich arbeite',
      headlineText: 'remote.',
      headlineSuffix: '..|',
      description:
        'Ich übertrage komplexe Ideen in klare, einladende Interfaces. Knifflige Bugs motivieren mich, und ich blühe auf, wenn Zusammenarbeit, Neugier und Beharrlichkeit zusammenkommen, um echte Probleme zu lösen.',
      cta: 'Jetzt anfragen'
    },
    mySkills: {
      title: 'Meine Fähigkeiten',
      headingMobile: 'Was',
      heading: 'ich lerne gerade',
      learningText:
        'Ich will meine Fähigkeiten stetig ausbauen, praxisnahe Lösungen entwickeln und technisch immer auf dem neuesten Stand bleiben.',
      cta: 'Jetzt anfragen'
    },
    myProjects: {
      title: 'Meine Projekte',
      mobileTabLabel: 'Projekt',
      labels: {
        technologies: 'Technologien',
        duration: 'Dauer'
      },
      projects: [
        {
          id: 1,
          tabLabel: '1. El Pollo Loco',
          name: 'El Pollo Loco',
          duration: 'Dauer: 4 Wochen',
          infoItems: [
            {
              title: 'Über das Projekt',
              description:
                'Ein energiegeladenes Jump-and-Run-Abenteuer mit Pepé in der mexikanischen Wüste. Animierte Gegner, Parallax-Hintergründe und versteckte Sammelobjekte bringen jedes Level zum Leben.'
            },
            {
              title: 'So habe ich gearbeitet',
              description:
                'Rendering, Physik und State-Management habe ich getrennt, um Gameplay-Anpassungen schnell testen zu können. Wiederverwendbare Helfer kümmerten sich um Kollisionen, Level-Skripte, Soundeffekte und UI-Zustände – so blieb das Repo sauber und gut reviewbar.'
            },
            {
              title: 'Das habe ich gelernt',
              description:
                'El Pollo Loco hat meinen Workflow für Sprite-Animationen, Gegner-Pattern und Performance-Checks verbessert. Ich habe moderne JavaScript-Muster genutzt, um Loops zu optimieren und kleine, verspielte Details einzubauen.'
            }
          ],
          technologies: [
            { name: 'HTML', icon: 'assets/img/my-projects/Frame 500.svg' },
            { name: 'JavaScript', icon: 'assets/img/my-projects/Javascript.svg' },
            { name: 'CSS', icon: 'assets/img/my-projects/Frame 501.svg' }
          ],
          image: 'assets/img/my-projects/Bildschirmfoto 2025-12-07 um 11.18.25.png',
          buttons: [
            { label: 'Live-Demo', href: 'http://danny-gruchmann.de/el-pollo-loco/index.html', target: '_blank', variant: 'primary' },
            { label: 'GitHub', href: 'https://github.com/JustDannyG/El-Pollo-Loco', target: '_blank', variant: 'secondary' }
          ]
        },
        {
          id: 2,
          tabLabel: '2. Join',
          name: 'Join',
          duration: '5 Wochen',
          infoItems: [
            {
              title: 'Über das Projekt',
              description:
                'Ein kollaboratives Kanban-Board, inspiriert von modernen Productivity-Tools. Mit Drag-and-drop behalten Teams Aufgaben, Prioritäten und Kontakte im Blick.'
            },
            {
              title: 'So habe ich gearbeitet',
              description:
                'Board-Logik, Kontaktverwaltung und UI-Polish wurden als wiederverwendbare Module aufgebaut. Gemeinsame TypeScript-Interfaces und Benennungen hielten den Code konsistent und Reviews unkompliziert.'
            },
            {
              title: 'Teamwork-Erfahrungen',
              description:
                'Join entstand in einem Dreierteam. Wir haben größere Features wie Drag-and-drop und Auth gemeinsam gebaut, Aufgaben regelmäßig getauscht und uns gegenseitig entblockt.'
            }
          ],
          technologies: [
            { name: 'HTML', icon: 'assets/img/my-projects/Frame 500.svg' },
            { name: 'JavaScript', icon: 'assets/img/my-projects/Javascript.svg' },
            { name: 'CSS', icon: 'assets/img/my-projects/Frame 501.svg' }
          ],
          image: 'assets/img/my-projects/Bildschirmfoto 2025-12-07 um 12.46.22.png',
          buttons: [
            { label: 'Live-Demo', href: 'http://danny-gruchmann.de/join/index.html', target: '_blank', variant: 'primary' },
            { label: 'GitHub', href: 'https://github.com/JustDannyG/Join', target: '_blank', variant: 'secondary' }
          ]
        },
        {
          id: 3,
          tabLabel: '3. Comming soon',
          name: 'Comming soon',
          infoItems: [
            {
              title: 'Über das Projekt',
              description:
                'Ich arbeite aktuell an DA Bubble, einem modernen Messenger mit klarer Oberfläche und flüssigem Chat-Erlebnis. Gerade entstehen Login, Echtzeit-Nachrichten sowie Komfortfunktionen wie Online-Status, Tipp-Indikatoren und optimiertes Message-Handling.'
            },
            {
              description:
                'Erfolg bedeutet für mich: gute Planung, sauberer Code und konsequente Umsetzung. Ich teile Aufgaben in kleine Schritte, teste früh und verbessere stetig – so bleiben Workflow und Skills in Bewegung.'
            }
          ],
          technologies: [
            { name: 'Angular', icon: 'assets/img/my-projects/Frame 498.svg' },
            { name: 'TypeScript', icon: 'assets/img/my-projects/Frame 499.svg' },
            { name: 'HTML', icon: 'assets/img/my-projects/Frame 500.svg' },
            { name: 'CSS', icon: 'assets/img/my-projects/Frame 501.svg' },
                { name: 'Vue.js', icon: 'assets/img/my-projects/Vue Js.svg' },
            { name: 'React', icon: 'assets/img/my-projects/React.svg' }
          ],
          image: 'assets/img/my-projects/coming-soon-project.svg',
          buttons: [
            { label: 'Live-Demo', href: '#', target: '_blank', variant: 'primary' },
            { label: 'GitHub', href: 'https://github.com/JustDannyG/Join', target: '_blank', variant: 'secondary' }
          ]
        }
      ]
    },
    reviewTeam: {
      title: 'Braucht ihr einen Teamplayer? Das sagen Kolleg:innen über mich',
      mobileTitle: 'Teamplayer gesucht?',
      mobileSubtitle: 'Das sagen Kolleg:innen über mich',
      projectLabel: 'Projekt',
      reviews: [
        {
          name: 'Sahra Mueller',
          projectAccent: 'Comming soon',
          quote: 'Folgt in Kürze...',
          linkLabel: 'LinkedIn-Profil',
          linkHref: 'https://www.linkedin.com/feed/'
        },
        {
          name: 'James Rugman',
          projectAccent: 'Join',
          quote: 'Folgt in Kürze...',
          linkLabel: 'LinkedIn-Profil',
          linkHref: 'https://www.linkedin.com/feed/'
        },
        {
          name: 'Evelyn Marx',
          projectAccent: 'Join',
          quote: 'Folgt in Kürze...',
          linkLabel: 'LinkedIn-Profil',
          linkHref: 'https://www.linkedin.com/feed/'
        }
      ]
    },
    contact: {
      title: 'Kontaktiere mich',
      intro:
        'Erzähl mir von deinen Ideen. Ob du einen Frontend-Spezialisten, einen Design-Partner oder einfach Inspiration suchst – ich unterstütze dich gern und bringe echten Mehrwert in deine Projekte.',
      details: {
        emailLabel: 'E-Mail:',
        phoneLabel: 'Tel:'
      },
      form: {
        nameLabel: 'Dein Name',
        nameError: 'Bitte gib deinen Namen ein.',
        emailLabel: 'Deine E-Mail',
        emailError: 'Bitte gib eine gültige E-Mail-Adresse ein.',
        messageLabel: 'Deine Nachricht',
        messagePlaceholder: 'Schreib mir etwas...',
        messageError: 'Bitte verfasse eine Nachricht.',
        consent: {
          textBeforeLink: 'Ich habe die ',
          linkLabel: 'Datenschutzerklärung',
          textAfterLink: ' gelesen und stimme der Verarbeitung meiner Daten zu.'
        },
        submitLabel: 'Senden',
        scrollTopLabel: 'Zurück nach oben',
        success: {
          title: 'E-Mail erfolgreich versendet',
          message: 'Vielen Dank! Ich melde mich in Kürze bei dir.'
        }
      }
    },
    footer: {
      legalNotice: 'Impressum'
    },
    legalNotice: {
      title: 'Impressum',
      sections: [
        {
          heading: 'Angaben gemäß § 5 TMG',
          list: ['Danny Gruchmann', 'Pleißenweg 7, 04600 Altenburg', 'E-Mail: danny.grmn@icloud.com']
        },
        {
          heading: 'Geltung der Bedingungen',
          body:
            'Mit dem Zugriff auf dieses Portfolio erkennst du die folgenden Bedingungen sowie ergänzende Richtlinien an. Ich kann diese Bedingungen jederzeit und ohne Ankündigung aktualisieren oder ändern.'
        },
        {
          heading: 'Umfang und Eigentum',
          body:
            'Dieses Projekt entstand im Rahmen des Advanced-Frontend-Lehrplans der Developer Akademie GmbH. Es dient ausschließlich Ausbildungszwecken und ist nicht für eine umfangreiche private oder geschäftliche Nutzung bestimmt. Das Design des Portfolios gehört der Developer Akademie GmbH. Unbefugte Nutzung, Vervielfältigung, Änderung oder Verbreitung ist untersagt.'
        },
        {
          heading: 'Schutzrechte',
          body:
            'Unabhängig vom Design der Developer Akademie GmbH liegen alle übrigen Schutzrechte an diesem Portfolio bei mir. Dazu gehören urheberrechtliche Inhalte, Marken sowie sonstige vertrauliche Informationen.'
        },
        {
          heading: 'Zulässige Nutzung',
          body:
            'Dieses Portfolio darf nur zu rechtmäßigen Zwecken und im Einklang mit den geltenden Gesetzen verwendet werden. Jegliche Nutzung zur Belästigung, Schädigung, Bedrohung oder Einschüchterung anderer Personen ist streng untersagt. Für deine Interaktionen mit anderen Nutzenden bist du selbst verantwortlich.'
        },
        {
          heading: 'Haftungsausschluss',
          body:
            'Das Portfolio wird „wie gesehen“ ohne Gewährleistung bereitgestellt. Weder ich, die genannten Studierenden noch die Developer Akademie haften für direkte oder indirekte Schäden, entgangenen Gewinn, Goodwill, Datenverluste oder sonstige immaterielle Schäden – auch dann nicht, wenn wir auf die Möglichkeit solcher Schäden hingewiesen wurden.'
        },
        {
          heading: 'Freistellung',
          body:
            'Du hältst mich, die aufgeführten Studierenden und die Developer Akademie einschließlich aller Partner, Vertreter und Mitarbeitenden schadlos von Ansprüchen Dritter – einschließlich angemessener Anwaltskosten –, die aus deiner Nutzung dieses Portfolios oder einem Verstoß gegen dieses Impressum entstehen.'
        }
      ],
      dateLabel: 'Stand: 10. Dezember 2025'
    },
    privacyPolicy: {
      title: 'Datenschutzerklärung',
      sections: [
        {
          heading: '1. Verantwortlicher',
          body: 'Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:',
          list: ['Danny Gruchmann', 'Pleißenweg 7', '04600 Altenburg', 'E-Mail: danny.grmn@icloud.com']
        },
        {
          heading: '2. Allgemeine Hinweise zur Datenverarbeitung',
          body: [
            'Ich verarbeite personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie meiner Inhalte und Leistungen erforderlich ist oder du mir diese Daten aktiv mitteilst (z. B. über das Kontaktformular).',
            'Diese Website nutzt derzeit:'
          ],
          list: [
            'kein Tracking / keine Reichweitenmessung (z. B. Google Analytics)',
            'keinen Tag Manager',
            'keine Werbe- oder Affiliate-Programme',
            'nach aktuellem Stand keine Cookies, die eine Einwilligung erfordern'
          ]
        },
        {
          heading: '3. Hosting',
          body: [
            'Diese Website wird bei folgendem Anbieter gehostet: ALL-INKL.COM – Neue Medien Münnich, Hauptstraße 68, 02742 Friedersdorf, Deutschland.',
            'Beim Aufruf der Website verarbeitet der Hosting-Anbieter technisch notwendige Daten, um die Website auszuliefern (siehe Server-Logfiles). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem und stabilem Betrieb der Website).'
          ]
        },
        {
          heading: '4. Server-Logfiles',
          body: ['Beim Besuch dieser Website werden durch den Hosting-Anbieter in der Regel folgende Daten in sogenannten Server-Logfiles verarbeitet:'],
          list: [
            'IP-Adresse (ggf. in gekürzter/gekappter Form – abhängig vom Hosting-Setup)',
            'Datum und Uhrzeit des Zugriffs',
            'aufgerufene Seite/Datei',
            'übertragene Datenmenge',
            'Referrer-URL (zuvor besuchte Seite)',
            'Browsertyp/-version und Betriebssystem',
            'Hostname des zugreifenden Rechners'
          ],
          afterList: [
            'Die Verarbeitung erfolgt zur Sicherstellung des technischen Betriebs, zur Fehleranalyse sowie zur Abwehr von Angriffen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.',
            'Speicherdauer: Logfiles werden in der Regel für einen begrenzten Zeitraum gespeichert und anschließend gelöscht. Die konkrete Dauer hängt von den Einstellungen/Standards des Hosters ab.'
          ]
        },
        {
          heading: '5. Kontaktaufnahme (E-Mail und Kontaktformular)',
          body: [
            'Wenn du mich kontaktierst (z. B. per E-Mail oder über das Kontaktformular), werden die von dir übermittelten Daten verarbeitet (z. B. Name, E-Mail-Adresse, Nachrichtentext), um deine Anfrage zu bearbeiten.',
            'Die Übermittlung aus dem Kontaktformular erfolgt an meine E-Mail-Adresse: danny.grmn@icloud.com',
            'Es erfolgt keine zusätzliche externe Speicherung (z. B. CRM/Newsletter-Tool/Datenbank) durch diese Website – die Daten liegen in meinem E-Mail-Postfach im Rahmen der Kommunikation.'
          ],
          list: [
            'Art. 6 Abs. 1 lit. b DSGVO, sofern die Anfrage der Durchführung vorvertraglicher Maßnahmen dient oder einen Vertrag betrifft,',
            'ansonsten Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).'
          ],
          afterList: [
            'Speicherdauer: Ich speichere die Inhalte der Anfragen so lange, wie es zur Bearbeitung erforderlich ist und/oder gesetzliche Aufbewahrungspflichten bestehen.'
          ]
        },
        {
          heading: '6. Einbindung von GitHub und LinkedIn (Drittanbieter-Inhalte)',
          body: [
            'Auf dieser Website sind Inhalte von GitHub und LinkedIn eingebunden (z. B. Profile, Widgets, Badges oder eingebettete Inhalte).',
            'Beim Laden dieser Inhalte kann es technisch bedingt dazu kommen, dass dein Browser eine Verbindung zu Servern der jeweiligen Anbieter herstellt. Dabei können insbesondere IP-Adresse, technische Geräte-/Browserdaten sowie ggf. weitere Daten verarbeitet werden.'
          ],
          list: [
            'GitHub: GitHub, Inc., USA (bei EU-Nutzern teils auch GitHub B.V., Niederlande, je nach Dienst/Verarbeitung)',
            'LinkedIn: LinkedIn Ireland Unlimited Company, Irland (Datenverarbeitung kann auch in Drittländern stattfinden, abhängig vom Dienst)'
          ],
          afterList: [
            'Rechtsgrundlage: Die Einbindung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer ansprechenden Darstellung meines Portfolios und meiner Projekte/Profiles).',
            'Sofern ein Anbieter eine Einwilligung erfordern würde (z. B. bei umfangreichem Tracking durch eingebettete Inhalte), wäre eine Einbindung erst nach Einwilligung sinnvoll (z. B. über eine „2-Klick-Lösung“/Consent-Banner).',
            'Hinweis: Wenn du nicht möchtest, dass Drittanbieter Daten erhalten, nutze die Website ohne das Aktivieren/Anklicken der eingebetteten Inhalte oder blockiere Drittanbieter-Inhalte über Browser-Einstellungen/Plugins.'
          ]
        },
        {
          heading: '7. Cookies',
          body: [
            'Nach aktuellem Stand setzt diese Website keine Cookies zu Analyse-, Marketing- oder Trackingzwecken ein.',
            'Sollte sich das in Zukunft ändern (z. B. durch Analytics, YouTube, Maps, Consent-Tool), wird diese Datenschutzerklärung entsprechend angepasst und ggf. eine Einwilligung eingeholt.'
          ]
        },
        {
          heading: '8. SSL-/TLS-Verschlüsselung (HTTPS)',
          body: [
            'Ich empfehle, die Website nur über eine verschlüsselte Verbindung (HTTPS) zu nutzen, da dadurch Datenübertragungen geschützt werden.',
            'Aktueller Hinweis: HTTPS ist noch in Einrichtung. Solange die Website (teilweise) unverschlüsselt über HTTP erreichbar ist, können übermittelte Daten theoretisch von Dritten mitgelesen werden. Bitte sende in diesem Fall keine sensiblen Informationen über das Kontaktformular.'
          ]
        },
        {
          heading: '9. Deine Rechte als betroffene Person',
          body: ['Du hast nach DSGVO folgende Rechte:'],
          list: [
            'Auskunft (Art. 15 DSGVO) über deine verarbeiteten Daten',
            'Berichtigung (Art. 16 DSGVO) unrichtiger Daten',
            'Löschung (Art. 17 DSGVO) („Recht auf Vergessenwerden“)',
            'Einschränkung der Verarbeitung (Art. 18 DSGVO)',
            'Datenübertragbarkeit (Art. 20 DSGVO)',
            'Widerspruch gegen Verarbeitung auf Grundlage berechtigter Interessen (Art. 21 DSGVO)'
          ],
          afterList: ['Zur Ausübung deiner Rechte genügt eine E-Mail an: danny.grmn@icloud.com']
        },
        {
          heading: '10. Beschwerderecht bei der Aufsichtsbehörde',
          body: [
            'Du hast zudem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO), insbesondere in dem EU-Mitgliedstaat deines gewöhnlichen Aufenthaltsorts, Arbeitsplatzes oder des mutmaßlichen Verstoßes.'
          ]
        },
        {
          heading: '11. Aktualität und Änderungen',
          body: ['Ich kann diese Datenschutzerklärung anpassen, wenn sich die Website, eingesetzte Tools oder rechtliche Anforderungen ändern.']
        }
      ],
      dateLabel: 'Stand: 26.12.2025'
    }
  }
} as const;

const LANGUAGE_STORAGE_KEY = 'portfolio.language';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly language = signal<Language>(loadLanguageFromStorage());
  private readonly translations = TRANSLATIONS;

  readonly languageSignal = this.language.asReadonly();

  setLanguage(language: Language) {
    this.language.set(language);
    saveLanguageToStorage(language);
  }

  get currentLanguage(): Language {
    return this.language();
  }

  selectSection<K extends keyof AppTranslations>(section: K) {
    return computed(() => this.translations[this.language()][section]);
  }
}

function loadLanguageFromStorage(): Language {
  if (typeof window === 'undefined' || !window.localStorage) {
    return 'DE';
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return storedLanguage === 'EN' ? 'EN' : 'DE';
}

function saveLanguageToStorage(language: Language) {
  if (typeof window === 'undefined' || !window.localStorage) {
    return;
  }

  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    console.warn('localStorage is unavailable.', error);
  }
}
