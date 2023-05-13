function set_theme(e){
    localStorage.setItem("theme", e);
    document.getElementById("dark-theme").classList.toggle("is-hidden");
    document.getElementById("light-theme").classList.toggle("is-hidden");
    document.getElementById("theme").href = e+".css";
}