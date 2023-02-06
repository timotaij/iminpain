import PlayerProfile from '../components/PlayerProfile';
import SearchBar from '../components/SearchBar';


const PlayerProfilePage = ({ playerId }) => (
    <div>
        <SearchBar/>
        <PlayerProfile playerId={playerId} />
    </div>
);

PlayerProfilePage.getInitialProps = ({ query }) => {
    return { playerId: query.playerId };
};

export default PlayerProfilePage;


