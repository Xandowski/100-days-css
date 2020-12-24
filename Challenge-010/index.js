const uploadBtn = document.querySelector('.btn')
const dropzone = document.querySelector('.dropzone')
const filename = document.querySelector('.filename')
const loading = document.querySelector('.bar')
let filen = 0;

dropzone.addEventListener('change', (e) => {
  if( this.files && this.files.length > 1 )
			filen = this.files.length;
		else
			filen = e.target.value.split( '\\' ).pop();

		if( filen ){
      filename.innerHTML = filen;
      dropzone.classList.toggle('-dropzone-active')
    }
		else
			label.innerHTML = '';
})

uploadBtn.addEventListener('click', function handleSyncing() {
  if(filen) {
    filename.style.display = 'none'
    dropzone.classList.toggle('-dropzone-syncing')
    loading.classList.toggle('-bar-active')
    uploadBtn.innerHTML = 'Uploading';
    window.setTimeout(showDone, 3200)
    uploadBtn.removeEventListener('click', handleSyncing)
  }
})

function showDone() {
  uploadBtn.innerHTML = 'Done';
  dropzone.classList.toggle('-dropzone-syncing')
  dropzone.classList.toggle('-dropzone-done')
}
