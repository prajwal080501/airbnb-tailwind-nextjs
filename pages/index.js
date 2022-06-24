import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({ exploreData, cardData }) {
  const onWheel = e => {
    e.preventDefault();
    const container = document.getElementById("container");
    const containerScrollPosition = document.getElementById("container").scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behaviour: "smooth"
    });
  };
  
  console.log(exploreData)
  return (
    <div className="">
      <Head>
        <title>Airbnb | Clone</title>
        <link rel="icon" href="/favicon.ico" />
        {/* add description */}
        <meta name="description" content="Airbnb Clone using Next JS Tailwind" />
        {/* add keywords */}
        <meta name="keywords" content="airbnb, clone, react, nextjs, javascript, html, css" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-8">
          <h2 className="text-2xl sm:text-2xl lg:text-4xl font-semibold pb-5 pt-6">Explore nearby</h2>
          {/* {data from server} */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 transition transform duration-300 ease-linear xl:grid-cols-4 mb-4 p-4">
            {exploreData?.map((item, index) => (
              <SmallCard key={item.img} img={item.img} location={item.location} distance={item.distance} />
            ))}
          </div>

        </section>

        <section>
          <h2 className="text-2xl sm:text-2xl lg:text-4xl font-semibold pb-5 pt-6 py-8">Live anywhere</h2>
          <div id="container" className="flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3 mb-3" onWheel={onWheel}>
            {cardData?.map((item, index) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard img='https://links.papareact.com/4cj' title="The Greatest Outdoors" description="Wishlists curated by Airbnb." buttonText="Get Inspired"/>
      </main>
      <Footer/>
    </div>
  )
}


export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json())
  const cardData = await fetch('https://links.papareact.com/zp1').then(res => res.json())

  return {
    props: {
      exploreData,
      cardData,
    }
  }
}