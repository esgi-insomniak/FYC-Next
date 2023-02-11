import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div>
          <Image src="/26ae1241ca65ba8e8ff4a4d442c92566.png" alt="Logo" width={1280} height={350} />
        </div>
        <div>
          <h1>Notre blog</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec iaculis urna. Vivamus ut viverra augue. Nam a odio id nibh consectetur lobortis non nec dui. Ut condimentum scelerisque posuere. Nunc lacinia sapien ac mi malesuada, ut accumsan dolor scelerisque. Pellentesque commodo enim vitae sapien ultricies tristique. Curabitur efficitur, augue vitae pretium consequat, augue lectus elementum purus, non tristique orci nulla quis leo. Vestibulum gravida posuere nibh ac malesuada. Morbi ut aliquet est, non aliquam turpis.

Duis mollis in enim vel maximus. Morbi cursus semper urna, dapibus imperdiet diam mattis eu. Phasellus in massa a tellus dictum fringilla. Mauris cursus augue vitae eros accumsan aliquet. Suspendisse ornare sodales nisl at hendrerit. Nulla venenatis nibh sed augue laoreet, rutrum lobortis metus congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque efficitur ut ipsum in dapibus. Suspendisse sit amet turpis tellus. Praesent lacinia lacinia est, vitae congue ex tristique eu. Integer eget accumsan ipsum, et maximus turpis. Ut nibh diam, blandit ut lectus in, venenatis commodo ante. Morbi interdum suscipit lectus, quis posuere dui. Donec risus enim, mattis non dui vel, tempus dapibus est.</p>
        </div>
      </section>
    </Layout>
  );
}