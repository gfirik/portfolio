//import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const index = (
  // {services}
  ) => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h4 className="my-2 font-medium"><span className="font-mono text-xl font-extrabold text-ming">&lt;p&gt;</span> <br/>
        I am high passionate self-taught web developer focused on front end development 
        with a great talent and creative experience in the field.<br/>
        <span className="text-xl font-extrabold text-ming">&lt;/p&gt;</span>
      </h4>
      <div 
        className="flex-grow p-4 mt-5 bg-ming"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem'}}
      >
        <h5 className="my-2 tracking-wider text-white">Who I Am?</h5>
        <div className="grid gap-6 lg:grid-cols-2">
          { services.map((service)=>(
            <div 
              key={service.title} 
              className="bg-white rounded-lg lg:col-span-1"
            >
              <ServiceCard service={service}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default index;

// export const getServerSideProps = async (
//   context:GetServerSidePropsContext
// ) => {
  
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();

//   console.log('SERVER', services);

//   return {
//     props: {
//       services: data.services,

//     }
//   }
// }

// export const getStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
  
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();

//   console.log('SERVER', services);

//   return {
//     props: {
//       services: data.services,

//     }
//   }
// }