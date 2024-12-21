const text = document.querySelector(".element");
        const textload = () => {
            setTimeout(() => {
                text.textContent = "Frontend Developer"
            }, 0);
            setTimeout(() => {
                text.textContent = "Backend Developer"
            }, 4000);
            setTimeout(() => {
                text.textContent = ".NET Developer"
            }, 8000);
            setTimeout(() => {
                text.textContent = "Probelm Solver"
            }, 12000);
        }
        textload();
        setInterval(textload, 16000);
       