import BrowserWindow from 'sketch-module-web-view'
import { getWebview } from 'sketch-module-web-view/remote'
import UI from 'sketch/ui'
const sketch = require('sketch/dom');

const webviewIdentifier = 'template-webview.webview'

export default function () {
  const options = {
    identifier: webviewIdentifier,
    width: 1350,
    height: 520,
    show: false
  }

  const browserWindow = new BrowserWindow(options)

  browserWindow.loadURL(require('../resources/index.html'))

  // only show the window when the page has loaded to avoid a white flash
  browserWindow.once('ready-to-show', () => {
    browserWindow.show()
  })

  browserWindow.webContents.on('colorBlindness', (layerid) => {

    let document = sketch.getSelectedDocument();
    let selectedLayer = null;
    if (layerid) {
      selectedLayer = document.getLayerWithID(layerid)
    } else {
      const selected = document.selectedLayers;
      if (selected && selected.layers && selected.layers.length === 1) {
        selectedLayer = selected.layers[0];
      }
    }
    if (selectedLayer) {
      const image = sketch.export(selectedLayer, { formats: 'png', output: false });
      browserWindow.webContents
      .executeJavaScript(`getPreviewImage('${`data:image/png;base64,${image.toString('base64')}`}', '${selectedLayer.id}')`);
    }
  })

  browserWindow.webContents.on('queryPreviewImage', s => {
    console.log('queryPreviewImage');
    UI.message('queryPreviewImage')
  })

}

// When the plugin is shutdown by Sketch (for example when the user disable the plugin)
// we need to close the webview if it's open
export function onShutdown() {
  const existingWebview = getWebview(webviewIdentifier)
  if (existingWebview) {
    existingWebview.close()
  }
}
