import './newTechDialog.css'
import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Box, TextField } from '@mui/material';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


// This component is a dialog to add a new technology in the radar
// The user can select the technology type, semantic, and label 
// The confirm is only enabled when all the fields are filled
const NewTechDialog = ({ isOpen, onClose, onConfirm, className }) => {

    // variables that will be used to create the new blip
    const [type, setType] = useState('');
    const [semantics, setSemantics] = useState('');
    const [label, setLabel] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    // handle functions to set the new values defined in the dialog
    const handleTypeChange = (event) => {
        setType(event.target.value); // e.g. value 0 - Languages --> quadrant 0
        validateForm(); // to check if the confirm button can be
    };

    const handleSemanticsChange = (event) => {
        setSemantics(event.target.value);
        validateForm();
    };

    const handleLabelChange = (event) => {
        setLabel(event.target.value);
        validateForm();
    };

    // function to enable confirm button only if fields were selected
    const validateForm = () => {
        setIsFormValid(type !== '' && semantics !== '' && label !== '');
    };

    // reset the variables everytime the dialog is open
    useEffect(() => {
        if (isOpen) {
            setType('');
            setSemantics('');
            setLabel('');
            setIsFormValid(false);
        }
    }, [isOpen]);

    return (
        <Dialog open={isOpen} onClose={onClose} className="newTechDialog">
            <DialogTitle sx={{ marginBottom: '0px', marginTop: "2px", marginLeft: "8px", fontWeight:"bold"}}>
                Add a new Tech Radar
            </DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', mx:1, mb: 0 }}>
                    <DialogContentText sx={{ mb: 2 }}>Select the new technology characteristics</DialogContentText>
                    {/* TYPE TECH DROP DOWN MENU */}
                    <FormControl size="small" sx={{ mb: 2 }}>
                        <InputLabel id="select-type-label">Type</InputLabel>
                        <Select
                            labelId="select-type-label"
                            id="select-type"
                            value={type}
                            label="Type"
                            onChange={handleTypeChange}
                        >
                            <MenuItem value={0}>Languages</MenuItem>
                            <MenuItem value={1}>Infrastructure</MenuItem>
                            <MenuItem value={2}>Datastores</MenuItem>
                            <MenuItem value={3}>Data Management</MenuItem>
                        </Select>
                    </FormControl>
                    {/* SEMANTICS DROP DOWN MENU */}
                    <FormControl size="small" sx={{ mb: 2 }}>
                        <InputLabel id="select-semantics-label">Semantics</InputLabel>
                        <Select
                            labelId="select-semantics-label"
                            id="select-semantics"
                            value={semantics}
                            label="Semantics"
                            onChange={handleSemanticsChange}
                        >
                            <MenuItem value={0}>ADOPT</MenuItem>
                            <MenuItem value={1}>TRIAL</MenuItem>
                            <MenuItem value={2}>ASSESS</MenuItem>
                            <MenuItem value={3}>HOLD</MenuItem>
                        </Select>
                    </FormControl>
                    {/* LABEL FIELD */}
                    <TextField
                        label="Tech Label"
                        variant="outlined"
                        value={label}
                        size="small"
                        sx={{ mb: 2 }}
                        onChange={handleLabelChange}
                        fullWidth
                    />
                </Box>
            </DialogContent>
            {/* CANCEL AND CONFIRM BUTTONS */}
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button disabled={!isFormValid} onClick={() => onConfirm(type, semantics, label)}>Confirm</Button>
            </DialogActions>
        </Dialog>
    );
};

export default NewTechDialog;