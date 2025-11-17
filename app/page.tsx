import Hello from "@/components/Hello"



const Home = () => {

    console.log('This is a server side component')
    return (
        <main>
        <div className='text-5xl underline '>Welcome to NextJS</div>
        <Hello/>
        </main>
    )
}
export default Home