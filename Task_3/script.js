document.addEventListener('DOMContentLoaded', () => {
  fetch('pallete.json')
    .then(response => response.json())
    .then(data => {
      window.palettes = data;
      renderPalettes();
    })
    .catch(error => console.error('Помилка завантаження JSON:', error));
});

function renderPalettes() {
  const container = document.getElementById('palette-container');
  
  window.palettes.forEach((palette, index) => {
    const paletteDiv = document.createElement('div');
    paletteDiv.className = 'palette';
    
    const preview = palette.colors
      .slice(0, 5)
      .map(c => `<div style="background: ${c.color};"></div>`)
      .join('');
    
    paletteDiv.innerHTML = `
      <div class="preview">${preview}</div>
      <p>${palette.emoji} ${palette.paletteName}</p>
    `;
    
    paletteDiv.onclick = () => showColors(index);
    container.appendChild(paletteDiv);
  });
}

function showColors(index) {
  const palette = window.palettes[index];
  const colorsContainer = document.getElementById('colors-container');
  colorsContainer.innerHTML = '';
  
  palette.colors.forEach(colorObj => {
    const colorDiv = document.createElement('div');
    colorDiv.className = 'color-block';
    colorDiv.style.background = colorObj.color;
    colorDiv.textContent = colorObj.name;
    colorDiv.onclick = () => selectColor(colorObj);
    colorsContainer.appendChild(colorDiv);
  });
  
  document.getElementById('color-selection').classList.remove('hidden');
  document.getElementById('palette-container').classList.add('hidden');
}

function selectColor(colorObj) {
  const sound = document.getElementById('copy-sound');
  sound.currentTime = 0;
  sound.play();
  
  const fullScreen = document.getElementById('fullScreen');
  fullScreen.style.background = colorObj.color;
  
  const colorInfo = document.createElement('div');
  colorInfo.className = 'color-info';
  colorInfo.innerHTML = `
    <h2>${colorObj.name}</h2>
    <div class="color-code">${colorObj.color}</div>
    <div class="copy-message">Код кольору скопійовано!</div>
  `;
  
  fullScreen.innerHTML = '';
  fullScreen.appendChild(colorInfo);
  
  fullScreen.classList.remove('hidden');
  requestAnimationFrame(() => {
    fullScreen.classList.add('visible');
    setTimeout(() => {
      colorInfo.querySelector('.copy-message').classList.add('visible');
    }, 300);
  });
  
  navigator.clipboard.writeText(colorObj.color)
    .catch(err => console.error('Помилка копіювання:', err));
    
  setTimeout(() => {
    fullScreen.classList.remove('visible');
    setTimeout(() => {
      fullScreen.classList.add('hidden');
    }, 500);
  }, 2000);
}

document.getElementById('back-to-palettes').onclick = () => {
  document.getElementById('color-selection').classList.add('hidden');
  document.getElementById('palette-container').classList.remove('hidden');
};