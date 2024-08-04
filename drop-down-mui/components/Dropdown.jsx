import React, { useState } from 'react';
import { Select, MenuItem, Chip, InputLabel, FormControl } from '@mui/material';
import styles from './dropdown.module.scss';

const days = [
    { name: 'Monday', className: styles.monday },
    { name: 'Tuesday', className: styles.tuesday },
    { name: 'Wednesday', className: styles.wednesday },
    { name: 'Thursday', className: styles.thursday },
    { name: 'Friday', className: styles.friday },
    { name: 'Saturday', className: styles.saturday },
    { name: 'Sunday', className: styles.sunday },
];

const Dropdown = () => {
    const [selectedDays, setSelectedDays] = useState([]);

    const handleChange = (event) => {
        setSelectedDays(event.target.value);
    };

    return (
        <div className={styles.wrapper}>
            <FormControl variant="outlined" className={styles.dropdown}>
            <InputLabel id="days-select-label" className={styles.title}>Select days</InputLabel>
            <Select
            className={styles.select}
                labelId="days-select-label"
                multiple
                value={selectedDays}
                onChange={handleChange}
                renderValue={(selected) => (
                    <div className={styles.chips}>
                        {selected.map((day) => (
                            <Chip key={day} label={day} className={styles[day.toLowerCase()]} />
                        ))}
                    </div>
                )}
            >
                {days.map((day) => (
                    <MenuItem key={day.name} value={day.name} className={day.className}>
                        {day.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        </div>
        
    );
};

export default Dropdown;
