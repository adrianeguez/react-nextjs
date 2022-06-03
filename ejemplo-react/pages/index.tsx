import Link from 'next/link'
import Layout from '../components/Layout'
import React from "react";
const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <h1 className="text-3xl font-bold underline">
          Hello world!
      </h1>
      <p>
          <Link href="/about">
              <a>About</a>
          </Link>
      </p>

      <table className="border-collapse border border-slate-400 w-full">
          <thead>
          <tr>
              <th className="border border-slate-300 ...">State</th>
              <th className="border border-slate-300 ...">City</th>
          </tr>
          </thead>
          <tbody>
          <tr>
              <td className="border border-slate-300 ...">Indiana</td>
              <td className="border border-slate-300 ...">Indianapolis</td>
          </tr>
          <tr>
              <td className="border border-slate-300 ...">Ohio</td>
              <td className="border border-slate-300 ...">Columbus</td>
          </tr>
          <tr>
              <td className="border border-slate-300 ...">Michigan</td>
              <td className="border border-slate-300 ...">Detroit</td>
          </tr>
          </tbody>
      </table>
  </Layout>
)

export default IndexPage
