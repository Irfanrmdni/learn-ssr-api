import { useRouter } from "next/router"

//? untuk mendefinisikan props supaya tidak error ketika di build
// interface User {
//     id: number,
//     name: String,
//     email: String,
//     phone: String,
//     website: String
// }

// interface UserDetail {
//     user: User;
// }

//? lalu setelah dari masing-masing user kita dapatkan. kita akan menampilkan detail seperti nama email dan lain-lain
export default function DetailUsers(props) {
    // const router = useRouter();
    // const { id } = router.query;
    const { user } = props;

    return (
        <div>
            <h5>Name: {user.name}</h5>
            <p>Address: {user.address.street}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </div>
    )
}

//? untuk mengambil id dari route user
export async function getStaticPaths() {
    const getUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    const respUsers = await getUsers.json();

    //? kita akan gunakan respUsers untuk mendapatkan list id dari masing-masing user
    const paths = respUsers.map((user) => ({
        params: {
            id: `${user.id}`,
        }
    }));

    console.log('params ' + paths);

    return {
        paths,
        //? jikta kita gunakan fallback true maka itu akan berimbas pada build nya error. dimana error tersebut
        //? dikarenakan kalo fallback true kita akan selalu memprovide atau menunggu dirender ini sampai selesai 
        //? jika ada url yang tidak ditemukan. jika ingin build nya success kita berikan fallback false.
        //? dimana jika ada url yang tidak ditemukan dia akan dilarikan ke 404 page 
        fallback: false
    };
}

//? untuk mendefinisikan props supaya tidak error ketika di build
// interface getStaticProps {
//     params: {
//         id: string
//     }
// }

//? untuk memberikan data dari permasing-masing usernya
export async function getStaticProps(ctx) {
    //? id ini diambil dari params getStaticPaths yang isinya berupa id user yang kita panggil
    const { id } = ctx.params;
    console.log(ctx);

    const getUsers = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const respUsers = await getUsers.json();

    return {
        props: {
            user: respUsers
        }
    }
}