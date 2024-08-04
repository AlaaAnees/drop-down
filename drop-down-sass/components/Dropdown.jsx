import React, { useState } from 'react';
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
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleSelect = (day) => {
        if (!selectedDays.includes(day.name)) {
            setSelectedDays([...selectedDays, day.name]);
        }
        setIsOpen(false);
    };

    const handleDeselect = (day) => {
        setSelectedDays(selectedDays.filter(selectedDay => selectedDay !== day));
    };

    return (
        <div className={styles.dropdown}>
            <div className={styles.customSelect} onClick={handleToggle}>
                Select a day
                <div className={styles.selectedDays}>
                    {selectedDays.map((day, index) => (
                        <div key={index} className={`${styles.day} ${styles[day.toLowerCase()]}`}>
                            {day}
                            <span className={styles.closeIcon} onClick={() => handleDeselect(day)}>×</span>
                        </div>
                    ))}
                </div>
                <div className={`${styles.options} ${isOpen ? styles.open : ''}`}>
                    {days.map((day, index) => (
                        <div
                            key={index}
                            className={`${styles.option} ${day.className}`}
                            onClick={() => handleSelect(day)}
                        >
                            {day.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
