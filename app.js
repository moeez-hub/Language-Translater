const translateBtn = document.getElementById('translateBtn');
const textArea = document.getElementById('text');
const sourceSelect = document.getElementById('fromLanguage'); 
const languageSelect = document.getElementById('tolanguage');

translateBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    
    const text = textArea.value;
    const from = sourceSelect.value;
    const to = languageSelect.value;

    if(!text){
        document.getElementById('networkError').textContent = 'Please enter text to translate.';
        document.getElementById('networkError').classList.remove('hidden');
        return;
    }
if(from === to){
    document.getElementById('networkError').textContent =
        'Please select different languages for translation.';
    document.getElementById('networkError').classList.remove('hidden');
    return;
}

  try{
     networkError.classList.add('hidden');
   const url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=' + from + '|' + to;
    const response = await fetch(url);
    const data = await response.json();
    const translatedText = data.responseData.translatedText;

    textArea.value = translatedText;

} catch (error) {
    console.error('Error translating text:', error);
    alert('Error translating text. Please try again.');
}
});