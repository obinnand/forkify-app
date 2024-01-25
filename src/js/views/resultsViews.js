import View from './views';
import previewView from './previewView.js';
// import icons from '../img/icons.svg'; // parcel 1
import icons from 'url:../../img/icons.svg'; // parcel 1

class ResultsView extends View {
  _perentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! please try again :)';
  _message = '';

  _generateMarkup() {
    return this._data
      .map(result => previewView.render(result, false))
      .join(' ');
  }
}

export default new ResultsView();
