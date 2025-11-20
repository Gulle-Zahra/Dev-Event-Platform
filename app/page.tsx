import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";

const events=[{image:'/images/event1.png',title:'Event 1',slug:'event-1',date:'',time:'',location:''},
    {image:'/images/event2.png',title:'Event 2',slug:'event-1',date:'',time:'',location:''}]
const Home = () => {


    return (
        <section>
        <h1 className='text-center '>The Hub For Every Dev Event <br/>You Can't Miss</h1>
            <p className='text-center mt-5'>Hackathons, Meetups, and Conferences, All in One Place  </p>
            <ExploreBtn/>

            <div className=" mt-20 space-y-7">
                <h3>Featured Events</h3>
                <ul className="events">
                    {events.map((event)=>(<li key={event.title}> <EventCard {...event}/> </li>))}
                </ul>
            </div>
        </section>

    )
}
export default Home