import View from './views';
import previewView from './previewView';

// import icons from '../img/icons.svg'; // parcel 1
import icons from 'url:../../img/icons.svg'; // parcel 1

class BookmarkView extends View {
  _perentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and  bookmark it :)';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarkView();
