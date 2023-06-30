import Head from 'next/head';
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getFeaturedEvents } from "@/helpers/api-util";

import { useRouter } from "next/router";

 function Home(props) {
  return (
    <div>
    {/*  */}
      <EventList items={props.events}/>
    </div>
  )
}
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default Home;