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
<script src="baldbuffalo2/fungames/ruffle/ruffle.js"></script>
