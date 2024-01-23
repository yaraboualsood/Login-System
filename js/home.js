var welcomeName = document.getElementById('welcomeName')

if( localStorage.getItem("username") != null){

welcomeName.innerHTML = ` ${localStorage.getItem("username")}`
}

