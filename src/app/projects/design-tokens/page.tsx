export const metadata = {
  title: 'Design Token Infrastructure — Fallstudie',
};

export default function DesignTokensCaseStudy() {
  return (
    <article>
      <h1 className='text-3xl font-medium tracking-tight'>
        Design Token Infrastructure
      </h1>
      <p className='text-foreground/70 mt-3 text-base leading-7'>
        Skalierbare, automatisierte Pipeline für Design Tokens über Marken und
        Produkte hinweg – mit Versionierung, Validierung und Distribution in
        mehrere Plattformen.
      </p>

      <h2 className='mt-8 text-xl font-medium tracking-tight'>Ziele</h2>
      <ul className='text-foreground/80 mt-3 list-disc space-y-1 pl-5'>
        <li>Single Source of Truth für Farben, Typografie und Spacing</li>
        <li>Automatisierte Synchronisation aus Figma in Code</li>
        <li>Qualitätssicherung und Review-Prozess über CI</li>
      </ul>

      <h2 className='mt-8 text-xl font-medium tracking-tight'>Lösung</h2>
      <p className='text-foreground/70 mt-3 text-base leading-7'>
        Aufbau eines Token-Repositories mit{' '}
        <span className='font-semibold'>Figma Tokens</span> als Eingabe,
        Transformation via{' '}
        <span className='font-semibold'>Style Dictionary</span> und Distribution
        als npm Pakete. <span className='font-semibold'>GitHub Actions</span>{' '}
        orchestriert Validierung, Preview Builds und Releases.
      </p>

      <h2 className='mt-8 text-xl font-medium tracking-tight'>Ergebnisse</h2>
      <ul className='text-foreground/80 mt-3 list-disc space-y-1 pl-5'>
        <li>Reduktion von UI-Inkonsistenzen um 60%</li>
        <li>Schnellere Rollouts neuer Markenvarianten</li>
        <li>Bessere Zusammenarbeit zwischen Design und Engineering</li>
      </ul>

      <h2 className='mt-8 text-xl font-medium tracking-tight'>Tech Stack</h2>
      <ul className='text-foreground/80 mt-3 list-disc space-y-1 pl-5'>
        <li>Figma Tokens</li>
        <li>Style Dictionary</li>
        <li>GitHub Actions</li>
        <li>TypeScript</li>
      </ul>
    </article>
  );
}
