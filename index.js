<!DOCTYPE html>
<html>
<body>
<script>
    window.RufflePlayer = window.RufflePlayer || {};
    window.addEventListener("load", (event) => {
        const ruffle = window.RufflePlayer.newest();
        const player = ruffle.createPlayer();
        const container = document.getElementById("container");
        container.appendChild(player);
        player.load("pacman.swf");
    });
</script>
<script src="path/to/ruffle/ruffle.js"></script>
    
    </body>
</html>
