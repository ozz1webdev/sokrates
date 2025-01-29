// https://blogs.sch.gr/5dimmuen/epikoinonia/

import React, { useState } from "react";
import styles from '../styles/home.module.css';
import LastThree from '../components/getLastThreePost';


function Home() {

    return (
        <div className={styles.homeContainer}>
            <LastThree />
            <div className={styles.homeContext}>
                <h1>Επίσημη ιστοσελίδα του 5ου Δημοτικού Σχολείου “Σωκράτης”</h1>
                <p>Επίσημη ιστοσελίδα του 5ου Δημοτικού Σχολείου “Σωκράτης”</p>
                <p>Το 5ο Ελληνικό Ιδιωτικό Δημοτικό Σχολείο «Σωκράτης», βρίσκεται στην οδό Zamdorfer Str. 26, 81677 München και από το 2018 συστεγάζεται με το 2ο Ελληνικό Γυμνάσιο Μονάχου. Λειτουργεί ως 7/θέσιο και σε πρωινή βάρδια από τις 08:00 μέχρι τις 14:00. Διαθέτει γραφείο Διεύθυνσης, γραφείο Γραμματείας, επτά αίθουσες διδασκαλίας, γραφείο εκπαιδευτικών, δανειστική βιβλιοθήκη, κλειστό γυμναστήριο, αίθουσα εκδηλώσεων και κυλικείο.  Πρόσφατα τέθηκε σε λειτουργία και η αίθουσα υπολογιστών.</p>
                <p>Αν και Ιδιωτικό Σχολείο τα έξοδά του καλύπτονται σχεδόν αποκλειστικά από τη βαυαρική κυβέρνηση και κατά συνέπεια δεν υπάρχουν δίδακτρα για τους μαθητές.</p> 
                <h5>Αναλυτικά Προγράμματα</h5> 
                <p>Οι μαθητές όλων των τάξεων παρακολουθούν το δίγλωσσο Αναλυτικό Πρόγραμμα, που έχει εγκριθεί τόσο από το υπουργείο Παιδείας της Βαυαρίας, όσο και από το Υπουργείο Παιδείας, Έρευνας και Θρησκευμάτων. Σύμφωνα με το αναλυτικό πρόγραμμα οι μαθητές διδάσκονται μαθήματα και στις δύο γλώσσες, δηλ. τόσο της ελληνικής, όσο και της γερμανικής με τις δύο γλώσσες να αντιμετωπίζονται ως ισότιμες. Για περισσότερες πληροφορίες σχετικά με τα μαθήματα και την κατανομή του χρόνου ανά μάθημα βλέπε εδώ.</p>
                <h5>Πιστοποιητικό Γερμανικής Γλωσσομάθειας</h5>
                <p>Οι μαθητές της ΣΤ΄ τάξης του  Σχολείου μας έχουν τη δυνατότητα, μετά από ενδοσχολικές εξετάσεις, να λάβουν το Πιστοποιητικό Γερμανικής Γλωσσομάθειας επιπέδου Β1 (Deutsches Sprachdiplom). Οι δε μαθητές της Γ΄ τάξης έχουν τη δυνατότητα απόκτησης του πιστοποιητικού επιπέδου Α1 και οι  μαθητές της Ε΄τάξης το πιστοποιητικό επιπέδου Α2.</p>
                <h5> Μετακίνηση μαθητών</h5>
                <p>Όλοι οι μαθητές μετακινούνται από και προς τα σπίτια τους δωρεάν με σχολικά λεωφορεία. Για τους μαθητές που δεν μπορούν να εξυπηρετηθούν με τα σχολικά λεωφορεία τους χορηγείται δωρεάν εισιτήριο.</p>
                <h5> Εκπαιδευτικό προσωπικό</h5>
                <p>Το εκπαιδευτικό προσωπικό που επί το πλείστον είναι αποσπασμένο από την Ελλάδα, έχοντας εμπειρία πολλών ετών, συνεργάζεται αρμονικά με το μόνιμο προσωπικό του Σχολείου, δημιουργώντας ένα ιδανικό κλίμα.</p>
                <h5> Σύλλογος Γονέων και Κηδεμόνων</h5>
                <p>Το Σχολείο σε άριστη συνεργασία με τον Σύλλογο Γονέων και Κηδεμόνων αναλαμβάνει από κοινού δράσεις. Έτσι,  πραγματοποίησε ημέρα υγιεινής διατροφής, ομιλίες από ειδικούς όπως π.χ. «Το Χαμόγελο του Παιδιού» με θέματα εκφοβισμός,  κινδύνους που κρύβει το διαδίκτυο κλπ. </p>
                <h5> Μετασχολική φροντίδα</h5>
                <p>Για τους μαθητές των τμημάτων εκείνων όπου τα μαθήματα τελειώνουν πριν τις 14:00 και έως την αναχώρηση των λεωφορείων από το Σχολείο, οι μαθητές παραμένουν στον χώρο του Σχολείου (εφόσον το επιθυμούν) και απασχολούνται από τη μετασχολική φροντίδα με διάφορες δραστηριότητες Θεατρική Αγωγή, Γυμναστική, Ηλεκτρονικοί Υπολογιστές, Μουσική κ.ά. καθώς και με την προετοιμασία τους για την επόμενη ημέρα.</p>
            </div>
        </div>
    );
}

export default Home;