const path = require('path');
const { app, BrowserWindow,} = require('electron');
const isDev = process.env.NODE_ENV !== "production"
const isMac = process.platform = "darwin"



app.whenReady().then(()=> {
    const mainWindow = new BrowserWindow({
        title: "docapp",
        width: 500,
        height: 720,
        minWidth:256,
        minHeight:256,
        transparent: true,
        frame: false,
        focusable: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webviewTag: true,
            enableRemoteModule: true
            
          }});
    
    //do the dev
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
    mainWindow.loadFile(path.join(__dirname,'./renderer/index.html'));
    

    app.on("ready", ()=>{
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow()
            
        }
        
        
             });
    
});

app.on("window-all-closed", () =>{
    if (!isMac) {
        app.quit()
        console.log("you're based")
    }
})
