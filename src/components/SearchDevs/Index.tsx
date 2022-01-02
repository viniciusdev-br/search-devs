import { useState, useEffect } from "react";
import Modal from 'react-modal'

import { api } from "../../services/api";
import { Container } from "./styles";
import lupaSearch from '../../assets/lupa-search.svg'

interface UserType {
    avatar_url: string,
    name: string,
    login: string,
    location: string,
    id: number,
    followers: number,
    public_repos: number
} 

export function SearchDevs() {
    const [user, setUser] = useState<UserType>();
    const [nickname, setNickname] = useState(""); 
    const [sending, setSending] = useState(false);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    useEffect(() => {
        api.get("/users/" + nickname)
        .then((response) => {
            setUser(response.data)
            setSending(false);
            console.log(user);
            console.log(typeof(user));
        })
        .catch((error) => {
            console.log('Erro encontrado: ' + error);
        });
    }, [sending]); 

    function handleCloseProfileModal() {
        setIsProfileModalOpen(false);
    }

    return (
        <Container>
            <div>
                <input 
                    type="text" 
                    placeholder="Enter a nickname here..."
                    onChange={event => setNickname(event.target.value)}
                    id="inputDev"
                />
                <button onClick={() => setSending(true)}>
                    <img src={ lupaSearch } alt="Pesquisar" />
                </button>
            </div>

            <div className="card-dev">
                <img src={user?.avatar_url} alt="Imagem de perfil" onClick={() => setIsProfileModalOpen(true)}/>
                <h3>{user?.name}</h3>
                <p>{user?.login}</p>
                <p>{user?.location}</p>
            </div>
            <Modal
                isOpen={isProfileModalOpen}
                onRequestClose={handleCloseProfileModal}
                overlayClassName="react-modal-overlay"
                className="modal-profile-dev"
            >
                <div className="card-dev">
                    <img src={user?.avatar_url} alt="Imagem de perfil" onClick={() => setIsProfileModalOpen(true)}/>
                    <h3>{user?.name}</h3>
                    <p>{user?.login}</p>
                    <p>{user?.location}</p>
                    <p>ID: {user?.id}</p>
                    <p>{user?.followers} followers</p>
                    <p>{user?.public_repos} public repositories</p>
                </div>

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Languages</th>
                                <th>Description</th>
                                <th>Created at</th>
                                <th>Updated at</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </Modal>
        </Container>
    );
 }