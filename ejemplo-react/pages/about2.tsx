import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About 2</h1>
    <p>This is the about page 2</p>
    <p>
      <Link href="/">
        <a>Go home 2</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
