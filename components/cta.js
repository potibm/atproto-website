import Link from 'next/link'

export default function CTA() {
  return (
    <div className="bg-blue-700">
      <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Join the Federated Sandbox</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-blue-200">
          No waitlist or invite code required to join this self-hosted sandbox environment. The production network will open to federation soon.
          <br />
        </p>
        <Link href="/blog/federation-developer-sandbox">
          <a className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-600 hover:bg-blue-50 focus-visible:outline outline-yellow-500 outline-2 sm:w-auto">
            Guidelines and Instructions
          </a>
        </Link>
      </div>
    </div>
  )
}
