
import "./App.css"
import { TwitterFollowCart } from './TwitterFollowCard'

export function App() {
    // const [name, setName] = useState('Roddy R T R')
    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Ángel Durán',
            isFollowing: true,
            imageUser: "sindresorhus@gmail.com"
        },
        {
            userName: 'pheralb',
            name: 'Pablo H.',
            isFollowing: false,
            imageUser: "sindresorhus@gmail.com"
        },
        {
            userName: 'PacoHdezs',
            name: 'Paco Hdez',
            isFollowing: true,
            imageUser: "sindresorhus@gmail.com"
        },
        {
            userName: 'TMChein',
            name: 'Tomas',
            isFollowing: false,
            imageUser: "sindresorhus@gmail.com"
        }
    ]

    return (
        <section className="App">
            {
                users.map(user => {
                    const {userName, name, isFollowing, imageUser} = user
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <TwitterFollowCart key={userName} userName={userName} initialIsFolowing={isFollowing} imageUser={imageUser}>
                            {name}
                        </TwitterFollowCart>
                    )
                })
            }

            {/* <TwitterFollowCart userName="Roddy 1" imageUser="sindresorhus@gmail.com" initialIsFolowing={true} >
                Roddy 1
            </TwitterFollowCart>
            <TwitterFollowCart userName="Roddy 2" imageUser="sindresorhus@gmail.com">
                Roddy 2
            </TwitterFollowCart> */}

            {/* <button onClick={() => setName('Roddy Nuevo')}>Cambio nombre</button> */}
        </section>
    )
}