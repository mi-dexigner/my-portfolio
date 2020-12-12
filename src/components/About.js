import React,{useState,useEffect} from 'react'
import sanityClient from '../client.js'

export default function About() {
    const [author,setAuthor] = useState(null);
    useEffect(()=>{
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
           "authorImage:image.asset->url
            
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error)
    }, []);

    if(!author) return <div>Loading...</div>

    return (
        <main className="relative">
            <img src="" alt=""/>
            <div>
                <section>
                    <img src="" alt=""/>
                    <div>
                        <h1></h1>
                        <div>
                            Block COntent
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
