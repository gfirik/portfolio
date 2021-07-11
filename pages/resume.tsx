import Bar from "../components/Bar"
import { languages, programmingLanguages } from "../data"

const resume = () => {
    return (
        <div className="px-6 py-2">
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h4 className="my-3 text-2xl font-bold">Education</h4>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Business Administration</h5>
                        <p className="font-semibold">Inha University, South Korea(since March, 2020)</p>
                        <p className="my-3">
                            I am currently pursuing my Bachelors degree in Business Administration from Inha University
                        </p>
                    </div>
                </div>
                <div>
                    <h4 className="my-3 text-2xl font-bold">Experience</h4>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Freelance Web Developer</h5>
                        <p className="font-semibold">esefGroup(since December, 2020)</p>
                        <p className="my-3">
                            Developed several landing pages and web applications for small business companies located in my hometown Bukhara.
                        </p>
                    </div>
                </div>
            </div>
        
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
                    <div className="my-2">
                        {programmingLanguages.map(planguage=>(
                            <Bar data={planguage} key={planguage.name}/>
                        ))}
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">World Languages</h5>
                    <div className="my-2">
                        {languages.map(language=>(
                            <Bar data={language} key={language.name}/>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default resume
