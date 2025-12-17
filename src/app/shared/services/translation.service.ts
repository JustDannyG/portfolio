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
            { label: 'Live Test', href: 'https://danny-gruchmann.developerakademie.net/el-pollo-loco/index.html', target: '_blank', variant: 'primary' },
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
            { label: 'Live Test', href: 'https://danny-gruchmann.developerakademie.net/join_projekt_abschlussversion/index.html', target: '_blank', variant: 'primary' },
            { label: 'GitHub', href: 'https://github.com/JustDannyG/Join', target: '_blank', variant: 'secondary' }
          ]
        },
        {
          id: 3,
          tabLabel: '3. DA Bubble',
          name: 'DA Bubble',
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
        }
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
          projectAccent: 'DA Bubble',
          quote: 'Coming soon...',
          linkLabel: 'LinkedIn Profile',
          linkHref: 'https://www.linkedin.com/feed/'
        },
        {
          name: 'James Rugman',
          projectAccent: 'Join',
          quote: 'Coming soon...',
          linkLabel: 'LinkedIn Profile',
          linkHref: 'https://www.linkedin.com/feed/'
        },
        {
          name: 'Evelyn Marx',
          projectAccent: 'Join',
          quote: 'Coming soon...',
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
        namePlaceholder: 'Your name',
        nameError: 'Please enter your name.',
        emailLabel: 'Your email',
        emailPlaceholder: 'Your email',
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
        scrollTopLabel: 'Back to top'
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
      heading: 'ich gerade lerne',
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
            { label: 'Live-Demo', href: 'https://danny-gruchmann.developerakademie.net/el-pollo-loco/index.html', target: '_blank', variant: 'primary' },
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
            { label: 'Live-Demo', href: 'https://danny-gruchmann.developerakademie.net/join_projekt_abschlussversion/index.html', target: '_blank', variant: 'primary' },
            { label: 'GitHub', href: 'https://github.com/JustDannyG/Join', target: '_blank', variant: 'secondary' }
          ]
        },
        {
          id: 3,
          tabLabel: '3. DA Bubble',
          name: 'DA Bubble',
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
          projectAccent: 'DA Bubble',
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
        namePlaceholder: 'Dein Name',
        nameError: 'Bitte gib deinen Namen ein.',
        emailLabel: 'Deine E-Mail',
        emailPlaceholder: 'Deine E-Mail',
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
        scrollTopLabel: 'Zurück nach oben'
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
