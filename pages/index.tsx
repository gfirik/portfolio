import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { services } from "../data";


const index = (
  // {services}
  ) => {
   
  console.log(services);

  return (
    <div>
      <h1>Bye bye world</h1>
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