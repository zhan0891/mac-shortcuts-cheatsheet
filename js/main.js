// Render navigation
function renderNav() {
  const nav = document.getElementById('nav');

  shortcutsData.forEach(section => {
    const link = document.createElement('a');
    link.href = `#${section.id}`;
    link.textContent = section.title.replace(' Shortcuts', '');
    nav.appendChild(link);
  });
}

// Get frequency stars
function getFrequencyStars(freq) {
  const stars = '⭐'.repeat(freq);
  return `<span class="freq-${freq}">${stars}</span>`;
}

// Render shortcuts table
function renderShortcutsTable(shortcuts) {
  let html = `
    <table>
      <thead>
        <tr>
          <th>Shortcut</th>
          <th>Description</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
  `;

  shortcuts.forEach(shortcut => {
    const keys = shortcut.keys.map(key => {
      if (key === '/') {
        return ' / ';
      }
      return `<kbd>${key}</kbd>`;
    }).join(' ');

    html += `
      <tr>
        <td>${keys}</td>
        <td>${shortcut.description}</td>
        <td>${getFrequencyStars(shortcut.frequency)}</td>
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
  `;

  return html;
}

// Render main content
function renderMain() {
  const main = document.getElementById('main');

  shortcutsData.forEach(section => {
    const sectionEl = document.createElement('section');
    sectionEl.id = section.id;

    let html = `<h2>${section.title}</h2>`;

    if (section.description) {
      html += `<p class="section-desc">${section.description}</p>`;
    }

    html += renderShortcutsTable(section.shortcuts);

    sectionEl.innerHTML = html;
    main.appendChild(sectionEl);
  });

  // Add legend section
  const legendSection = document.createElement('section');
  legendSection.id = 'legend';
  legendSection.innerHTML = `
    <h2>Frequency Legend</h2>
    <ul>
      <li><span class="freq-5">⭐⭐⭐⭐⭐</span> High frequency (Daily essential)</li>
      <li><span class="freq-3">⭐⭐⭐</span> Common (Frequently used)</li>
      <li><span class="freq-1">⭐</span> Occasional (Specific scenarios)</li>
    </ul>
  `;
  main.appendChild(legendSection);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderMain();
});
