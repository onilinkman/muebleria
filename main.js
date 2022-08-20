const { app, BrowserWindow, nativeTheme } = require('electron');
const path = require('path');

const createWindow = () => {
	const win = new BrowserWindow({
		titleBarStyle: 'hidden',
		titleBarOverlay: {
			color: '#2f3241',
			symbolColor: '#74b1be',
			height: 30,
		},
		show: false,
		width: 800,
		height: 600,
	});
	win.loadURL("http://localhost:3000/")
	.catch(err=>{
		win.loadFile("./static/Not_Found/Not_found.html")
	})
	win.once('ready-to-show', () => {
		win.show();
	});
};

app.whenReady().then(() => {
	createWindow();
	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});
