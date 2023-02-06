import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Papa from 'papaparse';
import Autocomplete from '@mui/material/Autocomplete';



const StyledTableCell = styled(TableCell)(({ className, theme, team }) => {
    let FirstLogoColor;

    switch (team) {
        case "LAL":
            FirstLogoColor = "gold";
            break;
        case "BOS":
            FirstLogoColor = "green";
            break;
        case "GSW":
            FirstLogoColor = "yellow";
            break;
        case "BKN":
            FirstLogoColor = "black";
            break;
        case "MLK":
            FirstLogoColor = "darkgreen";
            break;
        case "NYK":
            FirstLogoColor = "orange";
            break;
        case "DAL":
            FirstLogoColor = "darkblue";
            break;
        case "CLE":
            FirstLogoColor = "gold";
            break;
        case "TOR":
            FirstLogoColor = "red";
            break;
        case "PHO":
            FirstLogoColor = "orange";
            break;
        case "CHI":
            FirstLogoColor = "red";
            break;
        case "PHI":
            FirstLogoColor = "darkblue";
            break;
        case "LAC":
            FirstLogoColor = "red";
            break;
        case "DEN":
            FirstLogoColor = "yellow";
            break;
        case "POR":
            FirstLogoColor = "red";
            break;
        case "MIA":
            FirstLogoColor = "red";
            break;
        case "NOP":
            FirstLogoColor = "red";
            break;
        case "MEM":
            FirstLogoColor = "darkblue";
            break;
        case "UTA":
            FirstLogoColor = "darkblue";
            break;
        case "SAC":
            FirstLogoColor = "purple";
            break;
        case "MIN":
            FirstLogoColor = "darkblue";
            break;
        case "WAS":
            FirstLogoColor = "red";
            break;
        case "CHA":
            FirstLogoColor = "indigo";
            break;
        case "ATL":
            FirstLogoColor = "red";
            break;
        case "SAS":
            FirstLogoColor = "grey";
            break;
        case "IND":
            FirstLogoColor = "yellow";
            break;
        case "DET":
            FirstLogoColor = "red";
            break;
        case "OKC":
            FirstLogoColor = "orange";
            break;
        case "ORL":
            FirstLogoColor = "blue";
            break;
        case "HOU":
            FirstLogoColor = "red";
            break;
        default:
            FirstLogoColor = theme.palette.common.black;
            break;
    }

    return {
        "&.MuiTableCell-head": {
            fontSize: 20,
            backgroundColor: FirstLogoColor,
            color: theme.palette.common.white,
        },
        "&.MuiTableCell-body": {
            fontSize: 18,
            color: 'black',
        },
    };
});


const StyledTableRow = styled(TableRow)(({ theme, rowIndex, team }) => {
    let SecondLogoColour;
    let SecondTextColor = 'black';

    switch (team) {
        case 'LAL':
            SecondLogoColour = 'purple';
            break;
        case 'BOS':
            SecondLogoColour = 'white';
            SecondTextColor = 'black';
            break;
        case 'BKN':
            SecondLogoColour = 'white';
            SecondTextColor = 'black';
            break;
        case 'GSW':
            SecondLogoColour = 'gold';
            break;
        case 'MLK':
            SecondLogoColour = 'peach';
            break;
        case 'NYK':
            SecondLogoColour = 'blue';
            break;
        case 'DAL':
            SecondLogoColour = 'white';
            SecondTextColor = 'black';
            break;
        case 'CLE':
            SecondLogoColour = 'white';
            SecondTextColor = 'black';
            break;
        case 'TOR':
            SecondLogoColour = 'white';
            SecondTextColor = 'black';
            break;
        case 'POR':
            SecondLogoColour = 'white';
            SecondTextColor = 'black';
            break;
        case 'MIA':
            SecondLogoColour = 'white';
            SecondTextColor = 'black';
            break;
        case 'NOP':
            SecondLogoColour = 'white';
            SecondTextColor = 'black';
            break;
        case 'PHO':
            SecondLogoColour = 'purple';
            break;
        case 'DEN':
            SecondLogoColour = 'darkblue';
            break;
        case 'CHI':
            SecondLogoColour = 'white';
            SecondTextColor = 'black';
            break;
        case 'CHA':
            SecondLogoColour = 'white';
            SecondTextColor = 'black';
            break;
        case 'ATL':
            SecondLogoColour = 'white';
            SecondTextColor = 'black';
            break;
        case 'PHI':
            SecondLogoColour = 'blue';
            break;
        case 'LAC':
            SecondLogoColour = 'red';
            break;
        case 'MEM':
            SecondLogoColour = 'grey';
            break;
        case 'UTA':
            SecondLogoColour = 'blue';
            break;
        case 'SAC':
        case 'MIN':
            SecondLogoColour = 'grey';
            break;
        case 'WAS':
            SecondLogoColour = 'darkblue';
            break;
        case 'SAS':
            SecondLogoColour = 'black';
            break;
        case 'IND':
            SecondLogoColour = 'darkblue';
            break;
        case 'DET':
            SecondLogoColour = 'blue';
            break;
        case 'OKC':
            SecondLogoColour = 'blue';
            break;
        case 'ORL':
            SecondLogoColour = 'black';
            break;
        case 'HOU':
            SecondLogoColour = 'white';
            SecondTextColor = 'black';
            break;
        default:
            SecondLogoColour = 'white';
            SecondTextColor = 'black';
    }

    return {
        '&:nth-of-type(odd)': {
            fontSize: 20,
            backgroundColor: theme.palette.action.hover,
            color: SecondTextColor
        },
        '&:nth-of-type(1)': {
            fontSize: 18,
            backgroundColor: SecondLogoColour,
            color: SecondTextColor
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    };
});

const StyledTextField = styled(TextField)({
    margin: '10px',
});

const StyledButton = styled(Button)({
    margin: '10px',
});

const useStyles = makeStyles({
    root: {
        backgroundColor: 'blue',
    },
});


const PlayerProfile = () => {
    const [playerId, setPlayerId] = React.useState('');
    const [playerData, setPlayerData] = React.useState(null);
    const [playerName, setPlayerName] = React.useState(null);
    const [team, setTeam] = React.useState(null);
    const [combinedData, setCombinedData] = React.useState(null);
    const playerNameToIdMap = {};


    const handlePlayerIdChange = (event) => {
        setPlayerId(event.target.value);
    };






    const handleSubmit = (event) => {
        event.preventDefault();


        Papa.parse('/players1.csv', {
            header: true,
            download: true,
            dynamicTyping: true,
            complete: (results) => {
                const combinedData = results.data.map(player => `${player['Player']} ${player['Team(s)']}`);
                console.log('Combined Data:', combinedData);
                console.log('playerifed',results);
                console.log('playerId:', playerId);
                const filteredData = results.data.filter(player => player['Player ID'] === parseInt(playerId));
                console.log('filteredData:', filteredData);
                setPlayerData(filteredData[0]);
                console.log(playerData);




            }
        });
    };

    let index = 0;


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={playerId} onChange={handlePlayerIdChange} />
                <button type="submit">Load player data</button>
            </form>
            {playerData ? (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <StyledTableRow>
                            <StyledTableCell className={tableCellClasses.head} theme={index} team={playerData['Team(s)']} colSpan={4} align="center">
                                {playerData['Player ID']}
                            </StyledTableCell>
                        </StyledTableRow>
                        <TableBody>
                            <StyledTableRow key={index} rowIndex={index} team={playerData['Team(s)']}>
                                <StyledTableCell align="left" component="th" scope="row" align="left">Player ID</StyledTableCell>
                                <StyledTableCell align="center">{playerData['Player ID']}</StyledTableCell>
                                <StyledTableCell align="center" scope="row">Player ID</StyledTableCell>
                                <StyledTableCell align="center">{playerData['Player ID']}</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row" align="left">Player Name</StyledTableCell>
                                <StyledTableCell align="center">{playerData['Player']}</StyledTableCell>
                                <StyledTableCell align="center">{playerData['Player']}</StyledTableCell>
                                <StyledTableCell align="center">{playerData['Player']}</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row" align="left">Team</StyledTableCell>
                                <StyledTableCell align="center">{playerData['Team(s)']}</StyledTableCell>
                                <StyledTableCell align="center">{playerData['Team(s)']}</StyledTableCell>
                                <StyledTableCell align="center">{playerData['Team(s)']}</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row" align="left">Position</StyledTableCell>
                                <StyledTableCell align="center">{playerData['Player ID']}</StyledTableCell>
                                <StyledTableCell align="center">{playerData['Player ID']}</StyledTableCell>
                                <StyledTableCell align="center">{playerData['Player ID']}</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row" align="left">Points per Game</StyledTableCell>
                                <StyledTableCell align="center">{playerData['Player ID']}</StyledTableCell>
                                <StyledTableCell align="center">{playerData['Player ID']}</StyledTableCell>
                                <StyledTableCell align="center">{playerData['3PT_pct']}</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : null}
        </div>
    );
};

export default PlayerProfile;



