<!DOCTYPE html>
<html>
<body>

player.load("pacman.swf").then(() => {
    console.info("Ruffle successfully loaded the file");
}).catch((e) => {
    console.error(`Ruffle failed to load the file: ${e}`);
});
    
    </body>
</html>
