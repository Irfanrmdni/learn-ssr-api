
//? API for getInitialProps
export default async function handler(req, res) {
    res.status(200).json([
        {
            id: 1,
            name: 'irfan ramdani',
            website: 'http://irfanramdan.com'
        },
        {
            id: 2,
            name: 'azizah nur',
            website: 'http://azizah.com'
        },
        {
            id: 3,
            name: 'fatimah azzahra',
            website: 'http://azzahra.com'
        },
        {
            id: 4,
            name: 'ragil batra',
            website: 'http://ragil.com'
        }
    ]);
}

