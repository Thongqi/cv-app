import { Resume } from "./components/cv-template";
import { Form } from "./components/form";

const CVContext = createContext(null)

export default function App() {

  let cvinfo = {
    name: "Santa Claus",
    contact:"+12345678910",
    email:"santaatnorthpole@gmail.com",
    descr:"Known for elite chimney navigation, unmatched night-shift endurance, and a strong commitment to spreading joy (and mild chaos) across all continents. Thrives under extreme deadlines, cold environments, and cookie-based compensation systems.",
    image:"",
    exp:[{
      position: "Chief Gift Officer (CGO)",
      location: "Santa’s Workshop Inc., North Pole",
      timeframe: "Year 0 - Now",
      descr: {'Execute worldwide gift delivery to billions of households in a single night—no delays, no excuses',
              'Manage and supervise a large-scale elf workforce across toy production, packaging, and quality control',
              'Maintain and update the Naughty/Nice List™ using highly questionable but festive criteria',
              'Coordinate reindeer-powered logistics operations under extreme weather conditions',
              'Specialize in stealth entry via chimneys, windows, and “creative access points”',
              'Handle annual PR campaigns every December with 100% brand recognition'}
    }],
    edu:[{
      lcoation:"North Pole University",
      course: "Bachelor of Holiday Spirit & Cheer Management",
      timeframe: "1830-1834",
      descr: {'Focus: Advanced Gift Wrapping, Sleigh Engineering, and Cookie Evaluation',
              'Capstone Project: “Optimizing Global Gift Distribution in 24 Hours Without Getting Arrested”',
              'Achievement: The only graduate'}

    }],
    skills:{'Global navigation',
            'Crisis management',
            'Reindeer management & flight coordination',
            'Data tracking'},
    language:{'Hohoho'}
  }

  [cvinfo, setcvinfo] = useState(cvinfo)
  return (
    <>
    <CVContext value={cvinfo, setcvinfo}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Form></Form>
        <Resume></Resume>
      </div>
    </CVContext>
    </>
  );
}

