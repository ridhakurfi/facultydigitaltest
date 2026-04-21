import CategoryStrip from '../components/CategoryStrip'
import DestinationExplorer from '../components/DestinationExplorer'
import EditorsPick from '../components/EditorsPick'
import GlobeTrot from '../components/GlobeTrot'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import RomanticEscapes from '../components/RomanticEscapes'
import Trending from '../components/Trending'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Trending />
            <EditorsPick />
            <GlobeTrot />
            <CategoryStrip />
            <RomanticEscapes />
            <DestinationExplorer />
        </>
    )
}

export default Home