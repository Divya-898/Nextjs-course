import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getFeaturedEvents } from "@/dummy-data"
import { useRouter } from "next/router";



export default function Home() {
  const router =useRouter()
  const events = getFeaturedEvents();

  return (
    <div>

      <EventList items={events}/>
    </div>
  )
}
