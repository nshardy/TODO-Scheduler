function initThemeSelector () {
  // gets all constants
  const themeSelect = document.getElementById('themeDropdown')
  const themeStylesheet = document.getElementById('themeStylesheetLink')
  const currentTheme = localStorage.getItem('theme') || 'lightmode'

  // changes the active theme
  function activateTheme (themeName) {
    themeStylesheet.setAttribute('href', `../plugins/themes/default/${themeName}.css`)
  }

  themeSelect.addEventListener('change', () => {
    // checks if the user selected the separator
    if (themeSelect.value === 'SEPARATOR') {
      themeSelect.value = localStorage.getItem('theme') || 'lightmode'
      return
    }
    activateTheme(themeSelect.value)
    localStorage.setItem('theme', themeSelect.value)
  })

  // sets dropdown to current theme and activates it
  activateTheme(currentTheme)
  themeSelect.value = currentTheme
}

initThemeSelector()
