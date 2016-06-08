import Ember from 'ember';

const {
  TextField,
  isEmpty
} = Ember;

export default TextField.extend({
  type: 'file',
  attribute: null,
  attributeUrl: null,

  change(event) {
    const input = event.target;
    if (!isEmpty(input.files)) {
      this.filesDidChange(input.files);
    }
  },

  filesDidChange(files) {
    let reader = new FileReader();

    reader.onload = (e) => {
      this.set('attribute', files[0]);
      this.set('attributeUrl', e.target.result);
    };

    reader.readAsDataURL(files[0]);
  }
});