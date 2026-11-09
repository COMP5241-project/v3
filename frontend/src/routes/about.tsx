import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  const milestones = [
    {
      number: '01',
      title: 'Version 1: Initial prototype',
      description:
        'Our first prototype, where we began exploring the direction of the project.',
      href: 'https://v1-tau-nine.vercel.app/',
      linkText: 'Explore version 1',
    },
    {
      number: '02',
      title: 'Interactive-content prototype',
      description:
        'Next, we experimented with interactive content as another way to support learning.',
      href: 'https://mini-game-prototype-gold-hook.vercel.app/',
      linkText: 'View the prototype',
    },
    {
      number: '03',
      title: 'Group project repository',
      description:
        'Our shared repository brings together the work behind the group project.',
      href: 'https://github.com/COMP5241-project/project',
      linkText: 'Visit the GitHub repository',
    },
    {
      number: '04',
      title: 'Version 3',
      description:
        'The latest version of the project, building on what we learned from our earlier prototypes.',
      href: 'https://v3-seven-theta.vercel.app/',
      linkText: 'Explore version 3',
    },
  ]

  return (
    <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
          About the project
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          COMP5241 Project - Group 5
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          We are a team of five students from a range of backgrounds, working
          together to explore new ways to make learning engaging. The project
          has grown through a series of prototypes, each helping shape the next
          stage.
        </p>
      </header>

      <section aria-labelledby="journey-heading" className="mt-14">
        <h2
          id="journey-heading"
          className="text-xl font-semibold text-slate-950"
        >
          Our project journey
        </h2>
        <ol className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
          {milestones.map((milestone) => (
            <li
              key={milestone.number}
              className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5"
            >
              <span className="text-sm font-semibold tabular-nums text-indigo-700">
                {milestone.number}
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">
                  {milestone.title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {milestone.description}
                </p>
                <a
                  className="mt-3 inline-flex font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-900"
                  href={milestone.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {milestone.linkText}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  )
}
