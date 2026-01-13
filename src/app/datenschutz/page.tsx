import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

export const metadata = {
  title: 'Datenschutzerklärung — Patrick Marx',
};

export default function DatenschutzPage() {
  return (
    <div className='space-y-20'>
      <div>
        <Link
          href='/'
          className='flex h-8 w-8 items-center justify-center rounded-full bg-stone-200 transition-all hover:-translate-x-1 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700'
          aria-label='Zurück zur Startseite'
        >
          <ArrowLeftIcon className='h-4 w-4' />
        </Link>
      </div>

      <section>
        <h1 className='text-3xl font-medium tracking-tight'>
          Datenschutzerklärung
        </h1>
        <div className='mt-8 space-y-8'>
          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              1. Allgemeine Hinweise
            </h2>
            <p className='text-stone-500 dark:text-stone-400'>
              Der Schutz deiner personenbezogenen Daten ist mir wichtig.
            </p>
            <p className='mt-2 text-stone-500'>
              Diese Datenschutzerklärung informiert darüber, welche
              personenbezogenen Daten beim Besuch dieser Website verarbeitet
              werden und zu welchem Zweck.
            </p>
            <p className='mt-2 text-stone-500'>
              Personenbezogene Daten sind alle Daten, mit denen du persönlich
              identifiziert werden kannst.
            </p>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              2. Verantwortlicher
            </h2>
            <p className='text-stone-500 dark:text-stone-400'>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className='mt-2'>
              <p className='text-stone-500 dark:text-stone-400'>Patrick Marx</p>
              <p className='mt-2 text-stone-500'>
                E-Mail:{' '}
                <a
                  href='mailto:patrickmrx@icloud.com'
                  className='underline hover:text-stone-900 dark:hover:text-stone-100'
                >
                  patrickmrx@icloud.com
                </a>
              </p>
              <p className='mt-2 text-stone-500'>
                Weitere Angaben findest du im{' '}
                <Link
                  href='/impressum'
                  className='underline hover:text-stone-900 dark:hover:text-stone-100'
                >
                  Impressum
                </Link>
                .
              </p>
            </div>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              3. Hosting
            </h2>
            <p className='text-stone-500 dark:text-stone-400'>
              Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut,
              CA 91789, USA, gehostet.
            </p>
            <p className='mt-2 text-stone-500'>
              Beim Aufruf der Website verarbeitet Vercel automatisch sogenannte
              Server-Logfiles. Dabei können insbesondere folgende Daten erhoben
              werden:
            </p>
            <ul className='mt-2 ml-4 list-disc space-y-1 text-stone-500 dark:text-stone-400'>
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Browsertyp und Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname</li>
            </ul>
            <p className='mt-2 text-stone-500'>
              Die Verarbeitung dieser Daten erfolgt zur technischen
              Bereitstellung der Website sowie zur Gewährleistung von Sicherheit
              und Stabilität.
            </p>
            <p className='mt-2 text-stone-500'>
              Die Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1 lit.
              f DSGVO (berechtigtes Interesse).
            </p>
            <p className='mt-2 text-stone-500'>
              Vercel verarbeitet Daten auch in den USA. Zur Absicherung des
              Datenschutzniveaus verwendet Vercel Standardvertragsklauseln gemäß
              Art. 46 DSGVO.
            </p>
            <p className='mt-2 text-stone-500'>
              Weitere Informationen findest du in der{' '}
              <a
                href='https://vercel.com/legal/privacy-policy'
                target='_blank'
                rel='noopener noreferrer'
                className='underline hover:text-stone-900 dark:hover:text-stone-100'
              >
                Datenschutzerklärung von Vercel
              </a>
              .
            </p>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              4. Cookies
            </h2>
            <p className='text-stone-500 dark:text-stone-400'>
              Diese Website verwendet keine Cookies.
            </p>
            <p className='mt-2 text-stone-500'>
              Es werden weder Tracking- noch Marketing- oder Analyse-Cookies
              eingesetzt.
            </p>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              5. Tracking und Analyse
            </h2>
            <p className='text-stone-500 dark:text-stone-400'>
              Auf dieser Website werden keine Tracking- oder Analyse-Tools
              eingesetzt.
            </p>
            <p className='mt-2 text-stone-500'>
              Insbesondere kommen keine Dienste wie Google Analytics, Facebook
              Pixel oder vergleichbare Technologien zum Einsatz.
            </p>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              6. Externe Links
            </h2>
            <p className='text-stone-500 dark:text-stone-400'>
              Diese Website enthält Links zu externen Websites Dritter (z. B.
              LinkedIn).
            </p>
            <p className='mt-2 text-stone-500'>
              Beim Anklicken eines externen Links verlässt du diese Website. Für
              die Inhalte und die Datenverarbeitung auf externen Seiten ist
              ausschließlich der jeweilige Anbieter verantwortlich.
            </p>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              7. Schriftarten
            </h2>
            <p className='text-stone-500 dark:text-stone-400'>
              Die auf dieser Website verwendeten Schriftarten werden lokal
              gehostet.
            </p>
            <p className='mt-2 text-stone-500'>
              Es erfolgt keine Verbindung zu externen Font-Anbietern wie Google
              Fonts.
            </p>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              8. Kontaktaufnahme
            </h2>
            <p className='text-stone-500 dark:text-stone-400'>
              Wenn du mich per E-Mail oder Telefon kontaktierst, werden die von
              dir übermittelten Daten ausschließlich zur Bearbeitung deiner
              Anfrage verwendet.
            </p>
            <p className='mt-2 text-stone-500'>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) oder Art. 6 Abs. 1
              lit. f DSGVO (berechtigtes Interesse an der Kommunikation).
            </p>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              9. Rechte der betroffenen Personen
            </h2>
            <p className='text-stone-500 dark:text-stone-400'>
              Du hast jederzeit das Recht:
            </p>
            <ul className='mt-2 ml-4 list-disc space-y-1 text-stone-500 dark:text-stone-400'>
              <li>
                Auskunft über deine gespeicherten personenbezogenen Daten zu
                erhalten
              </li>
              <li>Berichtigung unrichtiger Daten zu verlangen</li>
              <li>die Löschung deiner Daten zu verlangen</li>
              <li>die Einschränkung der Verarbeitung zu verlangen</li>
              <li>der Verarbeitung zu widersprechen</li>
              <li>deine Daten in einem übertragbaren Format zu erhalten</li>
            </ul>
            <p className='mt-2 text-stone-500'>
              Außerdem hast du das Recht, dich bei einer
              Datenschutzaufsichtsbehörde zu beschweren.
            </p>
          </div>

          <div className='max-w-2xl'>
            <h2 className='mb-2 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100'>
              10. Änderungen dieser Datenschutzerklärung
            </h2>
            <p className='text-stone-500 dark:text-stone-400'>
              Ich behalte mir vor, diese Datenschutzerklärung anzupassen, wenn
              sich die Website oder rechtliche Anforderungen ändern.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
