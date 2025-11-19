import Link from "next/link";
import Image from "next/image";


interface Props {
    title : string;
    image: string;
}

const EventCard = ({image,title}:Props) => {
    return (
        <Link href={`/events`} id="event-card">
            <Image src={image} width={410} height={300} alt={title} className="title" />
            <p>{title}</p>
        </Link>
    )
}
export default EventCard
