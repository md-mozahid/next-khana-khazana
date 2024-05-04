import Link from 'next/link'

export default function About() {
  const desc =
    'Khana Khazana is a substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our bodies need to function. The energy in food is measured in units called calories'
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">About Khana Khazana</h2>
      <p className="mb-4">{desc}</p>
      <p className="mb-4">{desc}</p>
      <p className="mb-4">{desc}</p>
      <div className="text-center">
        <Link href="/recipe" className="text-blue-500 hover:underline">
          Explore Our others Recipe
        </Link>
      </div>
    </div>
  )
}
