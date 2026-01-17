export type Language = 'de' | 'en';

type Translations = {
  de: {
    header: {
      position: string;
      intro1: string;
      intro2: string;
      mail: string;
      telefon: string;
      copied: string;
      tooltipMail: string;
      tooltipPhone: string;
      tooltipCV: string;
      tooltipLinkedIn: string;
      tooltipLanguage: string;
      tooltipTheme: string;
    };
    home: {
      projects: string;
    };
    login: {
      password: string;
      login: string;
      checking: string;
      wrongPassword: string;
      error: string;
      rateLimit: string;
    };
    project: {
      context: string;
      role: string;
      outcome: string;
      goal: string;
      previousProject: string;
      nextProject: string;
      backHome: string;
    };
    footer: {
      builtWith: string;
      and: string;
      typeface: string;
      designedIn: string;
      developedWith: string;
      hostedOn: string;
      noCookies: string;
      lastChange: string;
      impressum: string;
      datenschutz: string;
    };
    impressum: {
      title: string;
      backToHome: string;
      tmgTitle: string;
      responsibleTitle: string;
      email: string;
    };
    datenschutz: {
      title: string;
      backToHome: string;
      section1Title: string;
      section1Text1: string;
      section1Text2: string;
      section1Text3: string;
      section2Title: string;
      section2Text: string;
      section2MoreInfo: string;
      section3Title: string;
      section3Text1: string;
      section3Text2: string;
      section3List1: string;
      section3List2: string;
      section3List3: string;
      section3List4: string;
      section3List5: string;
      section3Text3: string;
      section3Text4: string;
      section3Text5: string;
      section3Text6: string;
      section3Link: string;
      section4Title: string;
      section4Text1: string;
      section4Text2: string;
      section4Text3: string;
      section5Title: string;
      section5Text1: string;
      section5Text2: string;
      section6Title: string;
      section6Text1: string;
      section6Text2: string;
      section7Title: string;
      section7Text1: string;
      section7Text2: string;
      section8Title: string;
      section8Text1: string;
      section8Text2: string;
      section9Title: string;
      section9Text1: string;
      section9List1: string;
      section9List2: string;
      section9List3: string;
      section9List4: string;
      section9List5: string;
      section9List6: string;
      section9Text2: string;
      section10Title: string;
      section10Text: string;
    };
  };
  en: {
    header: {
      position: string;
      intro1: string;
      intro2: string;
      mail: string;
      telefon: string;
      copied: string;
      tooltipMail: string;
      tooltipPhone: string;
      tooltipCV: string;
      tooltipLinkedIn: string;
      tooltipLanguage: string;
      tooltipTheme: string;
    };
    home: {
      projects: string;
    };
    login: {
      password: string;
      login: string;
      checking: string;
      wrongPassword: string;
      error: string;
      rateLimit: string;
    };
    project: {
      context: string;
      role: string;
      outcome: string;
      goal: string;
      previousProject: string;
      nextProject: string;
      backHome: string;
    };
    footer: {
      builtWith: string;
      and: string;
      typeface: string;
      designedIn: string;
      developedWith: string;
      hostedOn: string;
      noCookies: string;
      lastChange: string;
      impressum: string;
      datenschutz: string;
    };
    impressum: {
      title: string;
      backToHome: string;
      tmgTitle: string;
      responsibleTitle: string;
      email: string;
    };
    datenschutz: {
      title: string;
      backToHome: string;
      section1Title: string;
      section1Text1: string;
      section1Text2: string;
      section1Text3: string;
      section2Title: string;
      section2Text: string;
      section2MoreInfo: string;
      section3Title: string;
      section3Text1: string;
      section3Text2: string;
      section3List1: string;
      section3List2: string;
      section3List3: string;
      section3List4: string;
      section3List5: string;
      section3Text3: string;
      section3Text4: string;
      section3Text5: string;
      section3Text6: string;
      section3Link: string;
      section4Title: string;
      section4Text1: string;
      section4Text2: string;
      section4Text3: string;
      section5Title: string;
      section5Text1: string;
      section5Text2: string;
      section6Title: string;
      section6Text1: string;
      section6Text2: string;
      section7Title: string;
      section7Text1: string;
      section7Text2: string;
      section8Title: string;
      section8Text1: string;
      section8Text2: string;
      section9Title: string;
      section9Text1: string;
      section9List1: string;
      section9List2: string;
      section9List3: string;
      section9List4: string;
      section9List5: string;
      section9List6: string;
      section9Text2: string;
      section10Title: string;
      section10Text: string;
    };
  };
};

export const translations: Translations = {
  de: {
    header: {
      position: 'Senior Product Designer',
      intro1:
        'Ich liebe es, vor komplexen, gewachsenen Systemen zu sitzen, alles zu durchdringen und aufzuräumen. <span class="font-medium text-stone-900 dark:text-stone-100">Design Systems</span> <span class="font-medium text-stone-900 dark:text-stone-100">und</span> <span class="font-medium text-stone-900 dark:text-stone-100">Component Libraries</span> <span class="font-medium text-stone-900 dark:text-stone-100">sind mein Steckenpferd</span> – je nerdiger, desto besser.',
      intro2:
        'Am meisten Energie gibt es mir, wenn ich nah mit Development zusammenarbeite. <span class="font-medium text-stone-900 dark:text-stone-100">Ich designe gerne in <svg class="inline-block h-3.5 w-3.5 -translate-y-0.5 align-middle mr-1" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 300c27.614 0 50-22.386 50-50v-50H50c-27.614 0-50 22.386-50 50s22.386 50 50 50z" fill="#0ACF83"/><path d="M0 150c0-27.614 22.386-50 50-50h50v100H50c-27.614 0-50-22.386-50-50z" fill="#A259FF"/><path d="M0 50C0 22.386 22.386 0 50 0h50v100H50C22.386 100 0 77.614 0 50z" fill="#F24E1E"/><path d="M100 0h50c27.614 0 50 22.386 50 50s-22.386 50-50 50h-50V0z" fill="#FF7262"/><path d="M200 150c0 27.614-22.386 50-50 50s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50z" fill="#1ABCFE"/></svg>Figma, bin aber genauso gerne am Code in <span class="whitespace-nowrap"><img src="/images/CUBE_2D_LIGHT.svg" alt="Cursor" class="inline-block h-3.5 w-3.5 -translate-y-0.5 align-middle mr-1 dark:hidden" /><img src="/images/CUBE_2D_DARK.svg" alt="Cursor" class="hidden h-3.5 w-3.5 -translate-y-0.5 align-middle mr-1 dark:inline-block" />Cursor</span></span>. Tagelange Design-Sessions sind mir zu zäh. Ich gehe lieber früher ins Prototyping und setze Ideen direkt in Production um.',
      mail: 'Mail',
      telefon: 'Telefon',
      copied: 'Kopiert!',
      tooltipMail: 'E-Mail-Adresse kopieren',
      tooltipPhone: 'Telefonnummer kopieren',
      tooltipCV: 'Lebenslauf herunterladen',
      tooltipLinkedIn: 'LinkedIn-Profil öffnen',
      tooltipLanguage: 'Sprache wechseln',
      tooltipTheme: 'Theme wechseln',
    },
    home: {
      projects: 'Projekte',
    },
    login: {
      password: 'Passwort',
      login: 'Anmelden',
      checking: 'Wird geprüft...',
      wrongPassword: 'Falsches Passwort',
      error: 'Ein Fehler ist aufgetreten',
      rateLimit: 'Zu viele Versuche. Bitte versuchen Sie es später erneut.',
    },
    project: {
      context: 'Kontext',
      role: 'Rolle',
      outcome: 'Outcome',
      goal: 'Das Ziel:',
      previousProject: 'Zurück',
      nextProject: 'Weiter',
      backHome: 'Zurück zur Startseite',
    },
    footer: {
      builtWith: 'Gebaut mit',
      and: 'und',
      typeface: 'Typeface: Instrument.',
      designedIn: 'Designed in',
      developedWith: 'Entwickelt mit',
      hostedOn: 'Gehosted auf',
      noCookies: 'Kein Tracking :)',
      lastChange: 'Letzte Änderung:',
      impressum: 'Impressum',
      datenschutz: 'Datenschutz',
    },
    impressum: {
      title: 'Impressum',
      backToHome: 'Zurück zur Startseite',
      tmgTitle: 'Angaben gemäß § 5 TMG',
      responsibleTitle: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
      email: 'E-Mail:',
    },
    datenschutz: {
      title: 'Datenschutzerklärung',
      backToHome: 'Zurück zur Startseite',
      section1Title: '1. Allgemeine Hinweise',
      section1Text1:
        'Der Schutz deiner personenbezogenen Daten ist mir wichtig.',
      section1Text2:
        'Diese Datenschutzerklärung informiert darüber, welche personenbezogenen Daten beim Besuch dieser Website verarbeitet werden und zu welchem Zweck.',
      section1Text3:
        'Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst.',
      section2Title: '2. Verantwortlicher',
      section2Text:
        'Verantwortlich für die Datenverarbeitung auf dieser Website ist:',
      section2MoreInfo: 'Weitere Angaben findest du im',
      section3Title: '3. Hosting',
      section3Text1:
        'Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet.',
      section3Text2:
        'Beim Aufruf der Website verarbeitet Vercel automatisch sogenannte Server-Logfiles. Dabei können insbesondere folgende Daten erhoben werden:',
      section3List1: 'IP-Adresse',
      section3List2: 'Datum und Uhrzeit des Zugriffs',
      section3List3: 'Browsertyp und Betriebssystem',
      section3List4: 'Referrer-URL',
      section3List5: 'Hostname',
      section3Text3:
        'Die Verarbeitung dieser Daten erfolgt zur technischen Bereitstellung der Website sowie zur Gewährleistung von Sicherheit und Stabilität.',
      section3Text4:
        'Die Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).',
      section3Text5:
        'Vercel verarbeitet Daten auch in den USA. Zur Absicherung des Datenschutzniveaus verwendet Vercel Standardvertragsklauseln gemäß Art. 46 DSGVO.',
      section3Text6: 'Weitere Informationen findest du in der',
      section3Link: 'Datenschutzerklärung von Vercel',
      section4Title: '4. Cookies',
      section4Text1:
        'Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind (z. B. zur Bereitstellung eines passwortgeschützten Bereichs).',
      section4Text2:
        'Diese Cookies dienen nicht der Analyse des Nutzerverhaltens und werden nicht zu Marketingzwecken eingesetzt.',
      section4Text3:
        'Die Verwendung technisch notwendiger Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und funktionalen Bereitstellung der Website).',
      section5Title: '5. Tracking und Analyse',
      section5Text1:
        'Auf dieser Website werden keine Tracking- oder Analyse-Tools eingesetzt.',
      section5Text2:
        'Insbesondere kommen keine Dienste wie Google Analytics, Facebook Pixel oder vergleichbare Technologien zum Einsatz.',
      section6Title: '6. Externe Links',
      section6Text1:
        'Diese Website enthält Links zu externen Websites Dritter (z. B. LinkedIn).',
      section6Text2:
        'Beim Anklicken eines externen Links verlässt du diese Website. Für die Inhalte und die Datenverarbeitung auf externen Seiten ist ausschließlich der jeweilige Anbieter verantwortlich.',
      section7Title: '7. Schriftarten',
      section7Text1:
        'Die auf dieser Website verwendeten Schriftarten werden lokal gehostet.',
      section7Text2:
        'Es erfolgt keine Verbindung zu externen Font-Anbietern wie Google Fonts.',
      section8Title: '8. Kontaktaufnahme',
      section8Text1:
        'Wenn du mich per E-Mail oder Telefon kontaktierst, werden die von dir übermittelten Daten ausschließlich zur Bearbeitung deiner Anfrage verwendet.',
      section8Text2:
        'Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Kommunikation).',
      section9Title: '9. Rechte der betroffenen Personen',
      section9Text1: 'Du hast jederzeit das Recht:',
      section9List1:
        'Auskunft über deine gespeicherten personenbezogenen Daten zu erhalten',
      section9List2: 'Berichtigung unrichtiger Daten zu verlangen',
      section9List3: 'die Löschung deiner Daten zu verlangen',
      section9List4: 'die Einschränkung der Verarbeitung zu verlangen',
      section9List5: 'der Verarbeitung zu widersprechen',
      section9List6: 'deine Daten in einem übertragbaren Format zu erhalten',
      section9Text2:
        'Außerdem hast du das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren.',
      section10Title: '10. Änderungen dieser Datenschutzerklärung',
      section10Text:
        'Ich behalte mir vor, diese Datenschutzerklärung anzupassen, wenn sich die Website oder rechtliche Anforderungen ändern.',
    },
  },
  en: {
    header: {
      position: 'Senior Product Designer',
      intro1:
        'I love sitting in front of complex, grown systems, diving deep into everything and cleaning it up. <span class="font-medium text-stone-900 dark:text-stone-100">Design Systems</span> <span class="font-medium text-stone-900 dark:text-stone-100">and</span> <span class="font-medium text-stone-900 dark:text-stone-100">Component Libraries</span> <span class="font-medium text-stone-900 dark:text-stone-100">are my thing</span> – the nerdier, the better.',
      intro2:
        'I get the most energy when I work closely with Development. <span class="font-medium text-stone-900 dark:text-stone-100">I like designing in <svg class="inline-block h-3.5 w-3.5 -translate-y-0.5 align-middle mr-1" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 300c27.614 0 50-22.386 50-50v-50H50c-27.614 0-50 22.386-50 50s22.386 50 50 50z" fill="#0ACF83"/><path d="M0 150c0-27.614 22.386-50 50-50h50v100H50c-27.614 0-50-22.386-50-50z" fill="#A259FF"/><path d="M0 50C0 22.386 22.386 0 50 0h50v100H50C22.386 100 0 77.614 0 50z" fill="#F24E1E"/><path d="M100 0h50c27.614 0 50 22.386 50 50s-22.386 50-50 50h-50V0z" fill="#FF7262"/><path d="M200 150c0 27.614-22.386 50-50 50s-50-22.386-50-50 22.386-50 50-50 50 22.386 50 50z" fill="#1ABCFE"/></svg>Figma, but I\'m just as happy working with code in <span class="whitespace-nowrap"><img src="/images/CUBE_2D_LIGHT.svg" alt="Cursor" class="inline-block h-3.5 w-3.5 -translate-y-0.5 align-middle mr-1 dark:hidden" /><img src="/images/CUBE_2D_DARK.svg" alt="Cursor" class="hidden h-3.5 w-3.5 -translate-y-0.5 align-middle mr-1 dark:inline-block" />Cursor</span></span>. Days-long design sessions are too tedious for me. verI prefer going earlier into prototyping and implementing ideas directly into production.',
      mail: 'Mail',
      telefon: 'Phone',
      copied: 'Copied!',
      tooltipMail: 'Copy email address',
      tooltipPhone: 'Copy phone number',
      tooltipCV: 'Download CV',
      tooltipLinkedIn: 'Open LinkedIn profile',
      tooltipLanguage: 'Switch language',
      tooltipTheme: 'Switch theme',
    },
    home: {
      projects: 'Projects',
    },
    login: {
      password: 'Password',
      login: 'Login',
      checking: 'Checking...',
      wrongPassword: 'Wrong password',
      error: 'An error occurred',
      rateLimit: 'Too many attempts. Please try again later.',
    },
    project: {
      context: 'Context',
      role: 'Role',
      outcome: 'Outcome',
      goal: 'The Goal:',
      previousProject: 'Back',
      nextProject: 'Next',
      backHome: 'Back to homepage',
    },
    footer: {
      builtWith: 'Built with',
      and: 'and',
      typeface: 'Typeface: Instrument.',
      designedIn: 'Designed in',
      developedWith: 'Developed with',
      hostedOn: 'Hosted on',
      noCookies: 'No tracking :)',
      lastChange: 'Last change:',
      impressum: 'Imprint',
      datenschutz: 'Privacy Policy',
    },
    impressum: {
      title: 'Imprint',
      backToHome: 'Back to homepage',
      tmgTitle: 'Information according to § 5 TMG',
      responsibleTitle: 'Responsible for content according to § 55 Abs. 2 RStV',
      email: 'Email:',
    },
    datenschutz: {
      title: 'Privacy Policy',
      backToHome: 'Back to homepage',
      section1Title: '1. General Information',
      section1Text1: 'The protection of your personal data is important to me.',
      section1Text2:
        'This privacy policy informs about which personal data is processed when visiting this website and for what purpose.',
      section1Text3:
        'Personal data is all data with which you can be personally identified.',
      section2Title: '2. Responsible Party',
      section2Text: 'Responsible for data processing on this website is:',
      section2MoreInfo: 'Further information can be found in the',
      section3Title: '3. Hosting',
      section3Text1:
        'This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.',
      section3Text2:
        'When accessing the website, Vercel automatically processes so-called server log files. The following data can be collected:',
      section3List1: 'IP address',
      section3List2: 'Date and time of access',
      section3List3: 'Browser type and operating system',
      section3List4: 'Referrer URL',
      section3List5: 'Hostname',
      section3Text3:
        'The processing of this data is for the technical provision of the website as well as to ensure security and stability.',
      section3Text4:
        'The legal basis for this processing is Art. 6 para. 1 lit. f GDPR (legitimate interest).',
      section3Text5:
        'Vercel also processes data in the USA. To secure the data protection level, Vercel uses standard contractual clauses according to Art. 46 GDPR.',
      section3Text6: 'Further information can be found in the',
      section3Link: 'Privacy Policy of Vercel',
      section4Title: '4. Cookies',
      section4Text1:
        'This website uses only technically necessary cookies that are required for the operation of the website (e.g., to provide a password-protected area).',
      section4Text2:
        'These cookies do not serve to analyze user behavior and are not used for marketing purposes.',
      section4Text3:
        'The use of technically necessary cookies is based on Art. 6 para. 1 lit. f GDPR (legitimate interest in a secure and functional provision of the website).',
      section5Title: '5. Tracking and Analytics',
      section5Text1: 'No tracking or analytics tools are used on this website.',
      section5Text2:
        'In particular, no services like Google Analytics, Facebook Pixel or comparable technologies are used.',
      section6Title: '6. External Links',
      section6Text1:
        'This website contains links to external websites of third parties (e.g. LinkedIn).',
      section6Text2:
        'When clicking on an external link, you leave this website. The respective provider is solely responsible for the content and data processing on external pages.',
      section7Title: '7. Fonts',
      section7Text1: 'The fonts used on this website are hosted locally.',
      section7Text2:
        'No connection to external font providers like Google Fonts is made.',
      section8Title: '8. Contact',
      section8Text1:
        'If you contact me by email or phone, the data you provide will be used solely to process your request.',
      section8Text2:
        'The processing of this data is based on Art. 6 para. 1 lit. b GDPR (pre-contractual measures) or Art. 6 para. 1 lit. f GDPR (legitimate interest in communication).',
      section9Title: '9. Rights of Data Subjects',
      section9Text1: 'You have the right at any time:',
      section9List1: 'To receive information about your stored personal data',
      section9List2: 'To request correction of incorrect data',
      section9List3: 'To request deletion of your data',
      section9List4: 'To request restriction of processing',
      section9List5: 'To object to processing',
      section9List6: 'To receive your data in a transferable format',
      section9Text2:
        'You also have the right to complain to a data protection supervisory authority.',
      section10Title: '10. Changes to this Privacy Policy',
      section10Text:
        'I reserve the right to adjust this privacy policy if the website or legal requirements change.',
    },
  },
};
