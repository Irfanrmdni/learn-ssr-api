import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

//? untuk mendefinisikan props supaya tidak error ketika di build
// interface UserProps {
//    data: Array<any>;
// }

//? data fetching getInitialProps
// Home.getInitialProps = async (ctx) => {
//    const getUsers = await fetch('http://localhost:3000/api/users');
//    const dataUsers = await getUsers.json();

//    return {
//       data: dataUsers
//    }
// }

//? data fetching getStaticProps dan getStaticPath
export async function getStaticProps(ctx) {
   const getUsers = await fetch('https://jsonplaceholder.typicode.com/users');
   const respUsers = await getUsers.json();

   return {
      props: {
         data: respUsers
      }
   }
}

export default function Home(props) {
   const users = props.data;
   const router = useRouter();

   return (
      <div className={styles.container}>
         {users.map(user => (
            <p key={user.id} onClick={() => router.push(`/${user.id}`)}>
               Name: {user.name} <br /> Email: {user.email}
            </p>
         ))}
      </div>
   )
}
