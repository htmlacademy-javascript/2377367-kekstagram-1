import {renderGallery} from './gallery.js';
import {hideModal,setOnFormSubmit} from './form.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { showSuccessMessage, showErrorMessage} from './message.js';


setOnFormSubmit (async (data) => {
  try{
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});


try {
  const data = await getData();
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}
