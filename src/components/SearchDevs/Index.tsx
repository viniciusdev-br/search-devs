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

interface UserRepoType {
    id: number,
    name: string,
    languages_url: string,
    description: string,
    created_at: string,
    updated_at: string,
    language: string,
    html_url: string,
}

export function SearchDevs() {
    const [user, setUser] = useState<UserType>();
    const [repositories, setRespositories] = useState<UserRepoType[]>();
    const [nickname, setNickname] = useState(""); 
    const [sending, setSending] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);
    const [firstClick, setFirstClick] = useState(true);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

    useEffect(() => {
        api.get("/users/" + nickname)
        .then((response) => {
            setUser(response.data)
            setSending(false);
        })
        .catch((error) => {
            console.log(error)
        });
    }, [sending]); 

    useEffect(() => {
        api.get("/users/" + nickname + "/repos")
        .then((response) => {
            setRespositories(response.data);
            setOpenDetails(false);
        })
        .catch((error) => {
            console.log('Erro encontrado: ' + error);
        });
    }, [openDetails])

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
                <button onClick={() => {
                    setSending(true);
                    setFirstClick(false);
                    }
                }>
                    <a href="#card-dev"><img src={ lupaSearch } alt="Pesquisar" /></a> 
                </button>
            </div>

            <div className={firstClick? "card-dev-transparent" : "card-dev"} id="card-dev">
                <img src={user?.avatar_url} alt="Imagem de perfil" onClick={() => {
                    setIsProfileModalOpen(true);
                    setOpenDetails(true);
                }
                }/>
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
                <div>
                    <img src={user?.avatar_url} alt="Imagem de perfil" onClick={() => setIsProfileModalOpen(true)}/>
                    <h3>{user?.name}</h3>
                    <p>{user?.login}</p>
                    <p>{user?.location}</p>
                    <p>ID: {user?.id}</p>
                    <p>{user?.followers} followers</p>
                    <p>{user?.public_repos} public repositories</p>
                </div>

                <div className="container-table">
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

                            {repositories?.map(repo => (
                                <tr key={repo.id}>
                                    <td><a href={repo.html_url} target="_blank">{repo.name}</a></td>
                                    <td>{repo.language}</td>
                                    <td>{repo.description}</td>
                                    <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(repo.created_at))}</td>
                                    <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(repo.updated_at))}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </Modal>
        </Container>
    );
 }