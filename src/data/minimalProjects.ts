import type { MinimalProjectTemplate } from '@/types/project';

export const minimalProjects: MinimalProjectTemplate[] = [
  {
    title: 'Berufsorientierungs-KI „Abby"',
    shortDescription: 'Eine persönliche Begleiterin für die Ausbildungssuche',
    slug: 'abby',
    context:
      'Abby ist eine KI-gestützte Begleiterin für Berufsorientierung auf Ausbildung.de. Im Rahmen eines einwöchigen Strategy- und Design-Sprints entstand eine Produktvision, die Berufsorientierung nicht als Suche, sondern als persönliche Begleitung versteht.',
    goal: 'Eine überzeugende Vision zu entwickeln, die zeigt, wie KI Berufsorientierung personalisieren kann – ohne zu überfordern oder zu bevormunden.',
    role: [
      'Mitentwicklung der Produktidee und inhaltlichen Ausrichtung von Abby',
      'Übersetzung einer offenen KI-Idee in konkrete Nutzungsszenarien und visuelle Konzepte',
      'Schneller Übergang von groben Ideen zu High-Fidelity-Mockups und klickbaren Prototypen',
      'Visuelles Framing der Vision für Abstimmungen und Präsentationen',
      'Gestaltung einer freundlichen, verständlichen Tonalität mit Fokus auf Vertrauen',
    ],
    outcome: [
      'Entwicklung einer klaren Produktvision für KI-gestützte Berufsorientierung',
      'Visuelle Grundlage, um ein komplexes und noch offenes Thema greifbar zu machen',
      'Positionierung von Abby nicht als Chatbot, sondern als integrierte KI-Schicht',
      'Basis für eine spätere Umsetzung und Weiterentwicklung Richtung Beta',
    ],
    visuals: [
      {
        type: 'image',
        data: {
          src: '/images/projects/abby/abby_0.png',
          alt: 'Chat interaction flow',
        },
        subtitle: 'Chat interaction flow',
        featured: true,
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/abby/abby_2.png',
          alt: 'Card-basierte, interaktive Komponenten',
        },
        subtitle: 'Card-basierte, interaktive Komponenten',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/abby/abby_3.png',
          alt: 'Weitere card-basierte, interaktive Komponenten',
        },
        subtitle: 'Weitere card-basierte, interaktive Komponenten',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/abby/abby_4.png',
          alt: 'Geführte Chat-Interaktion',
        },
        subtitle: 'Geführte Chat-Interaktion',
      },
      {
        type: 'video',
        data: {
          src: '/images/projects/abby/abby_5.mp4',
          alt: 'Prototyp der Chat-Interaktion',
          poster: '/images/projects/abby/abby_5.jpg',
        },
        subtitle: 'Prototyp der Chat-Interaktion',
      },
      {
        type: 'video',
        data: {
          src: '/images/projects/abby/abby_6.mp4',
          alt: 'Einstieg in die Chat-Interaktion',
          poster: '/images/projects/abby/abby_6.jpg',
        },
        subtitle: 'Einstieg in die Chat-Interaktion',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/abby/abby_7.png',
          alt: 'Chat- und Layout-Komponenten',
        },
        subtitle: 'Chat- und Layout-Komponenten',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/abby/abby_8.png',
          alt: 'Personalisierte Startseite',
        },
        subtitle: 'Personalisierte Startseite',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/abby/abby_9.png',
          alt: 'Landingpage für Unternehmen',
        },
        subtitle: 'Landingpage für Unternehmen',
      },
    ],
  },
  {
    title: 'Redesign des B2B-Portals',
    shortDescription: 'Modernisierung eines gewachsenen B2B-Systems',
    slug: 'dashboard-redesign',
    context:
      'Das B2B-Kundenportal von Ausbildung.de war über viele Jahre organisch gewachsen und entsprechend stark fragmentiert. Veraltete Seiten, eine inkonsistente Informationsarchitektur und fehlende Erweiterbarkeit machten Weiterentwicklung zunehmend schwierig – neue Features gingen im System unter oder waren technisch kaum noch sauber integrierbar.',
    goal: 'Das Dashboard nicht als einmaliges Redesign behandeln, sondern als langfristig weiterentwickelbares System neu aufbauen.',
    role: [
      'Verantwortung für die visuelle und konzeptionelle Neuausrichtung des gesamten Dashboards',
      'Definition einer neuen Design-Sprache als Grundlage für alle weiteren Seiten und Features',
      'Neustrukturierung der Informationsarchitektur und vollständiger Neuaufbau zentraler Navigations- und Layoutkonzepte',
      'Schrittweiser Ersatz von Legacy-Seiten durch neue, konsistente Interfaces unter laufendem Betrieb',
      'Enge Zusammenarbeit mit Development bei der Entwicklung wiederverwendbarer Komponenten (Figma ↔ Storybook)',
    ],
    outcome: [
      'Aufbau eines konsistenten, modularen B2B-Systems, das schrittweise erweitert werden kann',
      'Deutlich verbesserte Nutzbarkeit komplexer Bereiche wie Stellenanlage, Vertrags- und Nutzerverwaltung',
      'Reduzierter Erklär- und Supportaufwand für Customer Success durch klarere Strukturen und verlässliches Feedback',
      'Spürbar schnellere Umsetzung neuer Features durch wiederverwendbare Komponenten und einheitliche Patterns',
      'Wahrnehmbare Modernisierung des Produkts im direkten Vergleich zu Wettbewerbern',
    ],
    visuals: [
      {
        type: 'image',
        data: {
          src: '/images/projects/dashboard-redesign/dashboard-redesign_0.png',
          alt: 'Contract management',
        },
        subtitle: 'Contract management',
        featured: true,
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/dashboard-redesign/dashboard-redesign_1.png',
          alt: 'Vertrags- und Produktübersicht',
        },
        subtitle: 'Vertrags- und Produktübersicht',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/dashboard-redesign/dashboard-redesign_2.png',
          alt: 'User administration overview',
        },
        subtitle: 'Benutzerverwaltung und Rollen',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/dashboard-redesign/dashboard-redesign_3.png',
          alt: 'Startseite mit Newsfeed',
        },
        subtitle: 'Startseite mit Newsfeed',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/dashboard-redesign/dashboard-redesign_4.png',
          alt: 'Bewerbungsformular-Editor',
        },
        subtitle: 'Bewerbungsformular-Editor',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/dashboard-redesign/dashboard-redesign_5.png',
          alt: 'Stellen-Editor',
        },
        subtitle: 'Stellen-Editor',
      },
    ],
  },
  {
    title: 'Direktbewerbung Redesign',
    shortDescription:
      'Visueller und struktureller Overhaul eines zentralen B2C-Flows',
    slug: 'direktbewerbung-redesign',
    context:
      'Die Direktbewerbung ist das zentrale Feature für Schüler:innen auf Ausbildung.de – und damit einer der wichtigsten Touchpoints der Plattform. Über Jahre war der Flow gewachsen, visuell und strukturell überholt und insbesondere mobil schwer nutzbar. Lange Formulare, wenig Guidance und viele Fehlermeldungen führten zu Frustration und Abbrüchen. Durch die Integration externer Bewerbersysteme entstand zusätzlich die Anforderung, komplexere Formularlogiken wie Conditional Questions abzubilden. Das war der konkrete Anlass, den Flow neu zu denken – und die Gelegenheit, die Experience insgesamt deutlich zu verbessern.',
    goal: 'Einen zentralen, überfrachteten Bewerbungsflow in eine klare, gut geführte und mobiletaugliche Experience zu überführen.',
    role: [
      'Visueller und konzeptioneller Overhaul der Direktbewerbung auf Schüler:innen-Seite',
      'Neustrukturierung des Formulars mit Fokus auf mobile Nutzung und klare Führung',
      'Entwicklung einer app-nahen Experience mit schrittweisem Aufbau, Progress-Anzeige und kontextueller Orientierung',
      'Einführung einer konsistenten Design-Sprache und grundlegender UI-Komponenten für das Frontend',
      'Enge Zusammenarbeit mit Product und Development während Konzeption und Umsetzung',
      'Integration neuer funktionaler Anforderungen wie Conditional Questions in eine verständliche UX',
    ],
    outcome: [
      'eutlich modernisierte, mobile-optimierte Bewerbung mit klarer Struktur und besserer Führung',
      'Reduzierte visuelle und kognitive Komplexität durch Abschnittslogik, Progress-Indikatoren und kontextuelle Hilfen',
      'Technische Grundlage, um komplexere Formularlogiken und zukünftige Anforderungen abzubilden',
      'Vorzeigeprojekt für eine zeitgemäße, nutzernahe Experience auf Ausbildung.de',
      'Basis für spätere Optimierungen in Richtung Conversion und Abbruchreduktion',
    ],
    visuals: [
      {
        type: 'image',
        data: {
          src: '/images/projects/mobile-apply/mobile-apply_0.png',
          alt: 'Vorher und Nachher der Startseite',
        },
        featured: true,
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/mobile-apply/mobile-apply_1.png',
          alt: 'Vorher und Nachher der Startseite',
        },
        subtitle: 'Vorher und Nachher der Startseite',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/mobile-apply/mobile-apply_2.png',
          alt: 'Fortschrittsanzeige mit Feedback pro Abschnitt',
        },
        subtitle: 'Fortschrittsanzeige mit Feedback pro Abschnitt',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/mobile-apply/mobile-apply_3.png',
          alt: 'Neue Conditional-Komponente',
        },
        subtitle: 'Neue Conditional-Komponente',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/mobile-apply/mobile-apply_4.png',
          alt: 'Eingabe des Geburtsdatums',
        },
        subtitle: 'Eingabe des Geburtsdatums',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/mobile-apply/mobile-apply_5.png',
          alt: 'Detailansicht der Abschnitte',
        },
        subtitle: 'Detailansicht der Abschnitte',
      },
      {
        type: 'video',
        data: {
          src: '/images/projects/mobile-apply/mobile-apply_6.mp4',
          alt: 'Prototyp des Zusammenspiels von Formular und Header',
          poster: '/images/projects/abby/abby_5.jpg',
        },
        subtitle: 'Prototyp des Zusammenspiels von Formular und Header',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/mobile-apply/mobile-apply_7.png',
          alt: 'Neu gestaltete Komponenten',
        },
        subtitle: 'Neu gestaltete Komponenten',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/mobile-apply/mobile-apply_8.png',
          alt: 'Abschicken der Bewerbung',
        },
        subtitle: 'Abschicken der Bewerbung',
      },
    ],
  },
  {
    title: 'Design Explorations',
    shortDescription: 'Arbeiten aus dem Produktalltag bei Ausbildung.de',
    slug: 'design-explorations',
    context:
      'Unterschiedliche Designarbeiten aus mehreren Jahren bei Ausbildung.de – von mobilen, app-nahen Interfaces im B2C-Portal über Component Libraries im B2B-Dashboard bis hin zu explorativen Brand- und UI-Studien.',
    visuals: [
      {
        type: 'image',
        data: {
          src: '/images/projects/design-explorations/design-explorations_0.png',
          alt: 'Abby brand exploration (option 1)',
        },
        subtitle: 'Abby brand exploration (option 1)',
        featured: true,
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/design-explorations/design-explorations_1.png',
          alt: 'Apprentice magazine',
        },
        subtitle: 'Apprentice magazine',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/design-explorations/design-explorations_2.png',
          alt: 'Search filter variations',
        },
        subtitle: 'Search filter variations',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/design-explorations/design-explorations_3.png',
          alt: 'Abby brand exploration (option 2)',
        },
        subtitle: 'Abby brand exploration (option 2)',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/design-explorations/design-explorations_4.png',
          alt: 'Thumb voting feedback component',
        },
        subtitle: 'Thumb voting feedback component',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/design-explorations/design-explorations_5.png',
          alt: 'Dashboard component experiments',
        },
        subtitle: 'Dashboard component experiments',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/design-explorations/design-explorations_6.png',
          alt: 'International visitor banner',
        },
        subtitle: 'International visitor banner',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/design-explorations/design-explorations_7.png',
          alt: 'Resource download component',
        },
        subtitle: 'Resource download component',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/design-explorations/design-explorations_8.png',
          alt: 'AI-powered job description editor',
        },
        subtitle: 'AI-powered job description editor',
      },
    ],
  },
];
