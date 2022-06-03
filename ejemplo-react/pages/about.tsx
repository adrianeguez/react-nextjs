import Link from 'next/link'
import Layout from '../components/Layout'
import dynamic from "next/dynamic";
import {ReactNode} from "react";

const DynamicHello = dynamic(
    () => import('../components/Hello'),
    {ssr: false}
)

const AboutPage = () => (
    <>
        <Layout title="About | Next.js + TypeScript Example">
            <DynamicHello>
                <h5>Yo tambien fui enviado dinamicamente</h5>
            </DynamicHello>
        </Layout>
    </>
)

export default AboutPage
