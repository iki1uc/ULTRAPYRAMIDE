function loadOrbitSystem() {
    if (!window.PYRAMIDE_STATIONEN) {
        console.error("STATIONEN nicht geladen");
        return;
    }

    if (!window.ORBIT) {
        console.error("ORBIT nicht geladen");
        return;
    }

    console.log("ORBIT-SYSTEM: Aktiv");
}

loadOrbitSystem();
