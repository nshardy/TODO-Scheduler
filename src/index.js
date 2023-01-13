// constants
const {app, BrowserWindow} = require('electron');

// create a window
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: 'hiddenInset',
        title: 'TODO Scheduler'
    });

    win.loadFile('src/index.html');
    if(process.env.NODE_ENV === 'developer')
        win.webContents.openDevTools();
}

// when the app is ready and loaded
app.whenReady().then(() => { 
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
 });

// when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  })