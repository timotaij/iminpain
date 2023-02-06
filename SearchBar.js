import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Papa from 'papaparse';



export default function SearchBar() {
    const [combinedData, setCombinedData] = React.useState({});
    const [playerId, setPlayerId] = React.useState('');

    React.useEffect(() => {
        fetch('/players1.csv')
            .then(response => response.text())
            .then(text => {
                const results = Papa.parse(text, {
                    header: true,
                    dynamicTyping: true,
                });
                setCombinedData(
                    results.data.reduce((acc, player) => {
                        const currentKey = `${player['Player']} ${player['Team(s)']}`;
                        acc[currentKey] = player['Player ID'];
                        return acc;
                    }, {})
                );
            });
    }, []);

    const [selectedOption, setSelectedOption] = React.useState(null);

    const handleChange = (event, newValue) => {
        setSelectedOption(newValue);
    };

    const handleRunClick = () => {
        if (selectedOption) {
            setPlayerId(combinedData[selectedOption]);
        }
    };

    return (
        <div>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={Object.keys(combinedData)}
                sx={{ width: 300 }}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} label="PlayerSearch" />}
            />
            <Button variant="contained" color="primary" onClick={handleRunClick}>
                Run
            </Button>
            <div>Player ID: {playerId}</div>
        </div>
    );
}