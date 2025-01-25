import React from "react";
import styles from '../styles/contact.module.css';
import map from '../assets/images/map.webp';

import 'animate.css';

function Contact () {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactTitle}>
                <h2>5o Δημοτικό Σχολείο Μονάχου «Σωκράτης»</h2>
            </div>
            <div className={styles.contactMap}>
                <img src={map} className="animate__animated animate__leftIn" alt="map"/>
                <div className={styles.contactInfo}>
                    <p>Ταχυδρομική Διεύθυνση , Anschrift</p>
                    <p>Zamdorfer Str. 26,  81677 München</p>
                    <p>Διεύθυνσης, Schulleitung:  089 60 66 50 97</p>
                    <p>Γραφείο Εκπαιδευτικών, Büro der Lehrer : 089 99 92 96 96</p>
                    <p>Γραμματείας, Sekretariat : 089 60 66 50 97 
                        (κ. Κώστα κάθε Τετάρτη και Παρασκευή από 08:00 έως 13:00,
                        F. Kosta jeden Mittwoch und Freitag von 08:00 bis 13:00 Uhr)</p>
                    <p>Φαξ, Fax: 089 96 04 96 07</p>
                    <p><a href="mailto:schulesokrates@gmail.com" style={{ color: '#0066cc', textDecoration: 'none' }}>EMail: schulesokrates@gmail.com</a></p>
                </div>
            </div>
        </div>
    );
}

export default Contact;