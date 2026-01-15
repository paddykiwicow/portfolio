import type { MinimalProjectTemplate } from '@/types/project';

export const minimalProjects: MinimalProjectTemplate[] = [
  {
    title: 'Berufsorientierungs-KI „Abby"',
    shortDescription: 'Eine persönliche Begleiterin für die Ausbildungssuche',
    slug: 'abby',
    context: [
      'Abby ist eine persönliche KI-Begleitung, die junge Menschen bei der Berufsorientierung auf Ausbildung.de unterstützt.',
      'Sie ist rund ein Jahr vor ihrem geplanten Live-Gang in einem einwöchigen Design Sprint entstanden. Ausgangsfrage war, wie Berufsorientierung und Ausbildungssuche in Zukunft aussehen können. Mit dieser Frage ist ein cross-funktionales Team auf weißem Papier gestartet.',
    ],
    goal: 'Innerhalb einer Woche eine strategische Vision für die Zukunft von Ausbildung.de zu entwickeln.',
    role: [
      'Alleinverantwortlicher Designer im Projekt',
      'Verantwortung für den gesamten Designprozess von Skizzen bis Figma-Prototypen',
      'Entwicklung einer neuen Designsprache zur visuellen Übersetzung von KI und Zukunft von Ausbildung.de',
      'Konzeption von Abby als ganzheitliche Begleitung über mehrere Touchpoints hinweg',
      'Vorbereitung und visuelle Ausarbeitung der Pitch-Präsentation mit CPO und Head of Product',
    ],
    outcome: [
      'Entwicklung einer klaren, greifbaren und zukunftsgerichteten Produktvision',
      'Verankerung von Abby als strategischer Schwerpunkt in der Drei-Jahres-Strategie von Ausbildung.de',
      'Übersetzung der Vision in zahlreiche Screens, Mockups und Präsentationen zur internen Verständigung',
      'Leitidee, Screens und Prototypen als Grundlage für die später gestartete Produktentwicklung',
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
    context: [
      'Das B2B-Dashboard von Ausbildung.de war über Jahre kaum weiterentwickelt worden. Das letzte größere Update lag rund zehn Jahre zurück, das System war entsprechend geprägt von altem Branding, inkonsistentem Design, gewachsener Informationsarchitektur und vielen UX-Problemen.',
      'Neue Features, Upselling oder nachhaltige Weiterentwicklung waren kaum möglich, weil Seiten überladen waren und es keine klaren Strukturen gab.',
    ],
    goal: 'Das Dashboard technisch und gestalterisch neu aufstellen, aufräumen und eine moderne, markenkonforme Grundlage für zukünftige Features und Upselling schaffen.',
    role: [
      'Alleinverantwortlicher Designer im Projekt',
      'Visuelle Neuausrichtung und konzeptionelles Sparring mit Product Management',
      'Aufbau einer neuen Designsprache und einer wiederverwendbaren Component Library',
      'Neustrukturierung der Informationsarchitektur inklusive zentraler Navigation',
      'Enge Zusammenarbeit mit Development, inklusive Mitarbeit am Code auf Komponentenebene',
    ],
    outcome: [
      'Aufbau eines modularen, erweiterbaren B2B-Systems',
      'Schnellere Umsetzung neuer Features durch wiederverwendbare Komponenten',
      'Spürbar bessere Nutzbarkeit zentraler Bereiche wie Stellen-, Vertrags- und Nutzerverwaltung',
      'Weniger Supportaufwand durch klarere Strukturen und verlässliches Feedback',
      'Sichtbare Modernisierung im Vergleich zu Wettbewerbern',
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
      'Visueller und struktureller Overhaul eines zentralen Bewerbungsflows',
    slug: 'direktbewerbung-redesign',
    context: [
      'Die Direktbewerbung ist das zentrale Feature für Schüler:innen auf Ausbildung.de. Gleichzeitig war die Experience über Jahre gewachsen, visuell veraltet und UX-seitig problematisch.',
      'Lange Formulare, fehlende Guidance und viele Fehlermeldungen führten zu Frustration und Abbrüchen. Mit der Integration von Kombo entstand zusätzlich die Anforderung, komplexere Formularlogiken wie Conditional Questions abzubilden.',
    ],
    goal: 'Neue funktionale Anforderungen integrieren und die Direktbewerbung visuell und strukturell neu aufstellen.',
    role: [
      'Alleinverantwortlicher Designer im Projekt',
      'Neugestaltung der Direktbewerbung von Struktur und Flow bis zu High-Fidelity-Mockups',
      'Übersetzung neuer funktionaler Anforderungen in eine verständliche Nutzerführung',
      'Entwicklung einer klar geführten, mobilen Experience',
      'Enge Zusammenarbeit mit Product und Development während der Umsetzung',
    ],
    outcome: [
      'Komplett überarbeitete Direktbewerbung mit klarer Struktur und konsistenter Designsprache',
      'Einführung von Conditional Questions als Grundlage für zukünftige Anforderungen',
      'Reduzierte Komplexität langer Formulare durch bessere Führung und Abschnittslogik',
      'Visuelles Vorzeigeprojekt für eine zeitgemäße Bewerbung auf Ausbildung.de',
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
      'Unterschiedliche Arbeiten und Experimente aus mehreren Jahren bei Ausbildung.de, von mobilen, app-nahen Interfaces im B2C-Portal über Component Libraries im B2B-Dashboard bis hin zu explorativen Brand- und UI-Arbeiten.',
    visuals: [
      {
        type: 'image',
        data: {
          src: '/images/projects/design-explorations/design-explorations_0.png',
          alt: 'Azubi-Magazin Exploration',
        },
        featured: true,
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/design-explorations/design-explorations_1.png',
          alt: 'Abby Brand Exploration (Option 1)',
        },
        subtitle: 'Abby Brand Exploration (Option 1)',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/design-explorations/design-explorations_2.png',
          alt: 'Abby Brand Exploration (Option 2)',
        },
        subtitle: 'Abby Brand Exploration (Option 2)',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/design-explorations/design-explorations_3.png',
          alt: 'Banner für nicht internationale Besucher:innen',
        },
        subtitle: 'Banner für nicht internationale Besucher:innen',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/design-explorations/design-explorations_4.png',
          alt: 'Dashboard-Komponenten Experimente',
        },
        subtitle: 'Dashboard-Komponenten Experimente',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/design-explorations/design-explorations_5.png',
          alt: 'Suchfilter-Modernisierung',
        },
        subtitle: 'Suchfilter-Modernisierung',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/design-explorations/design-explorations_6.png',
          alt: 'B2C Feedback-Komponente',
        },
        subtitle: 'B2C Feedback-Komponente',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/design-explorations/design-explorations_7.png',
          alt: 'Download-Komponente Exploration',
        },
        subtitle: 'Download-Komponente Exploration',
      },
      {
        type: 'image',
        data: {
          src: '/images/projects/design-explorations/design-explorations_8.png',
          alt: 'KI-gestützter Stellenbeschreibungs-Editor',
        },
        subtitle: 'KI-gestützter Stellenbeschreibungs-Editor',
      },
    ],
  },
];
