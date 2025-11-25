'use strict';

//////////////////////////////
// Tabs component
function createTabs(element) {
  const header = element.querySelector('.tabs__header');
  const content = element.querySelector('.tabs__content');
  const tabHeaders = [...header.children]; // --> array of HTML elements
  const tabContents = [...content.children]; // --> array of HTML elements

  // Hide all tabs content
  tabContents.forEach((x) => (x.style.display = 'none'));

  let currentTabIndex = -1;

  function setTab(index) {
    // Hiding previous tabs content
    if (currentTabIndex > -1) {
      tabHeaders[currentTabIndex].style.fontWeight = 400;
      tabHeaders[currentTabIndex].style.color = 'var(--text-1)';
      tabHeaders[currentTabIndex].setAttribute('aria-selected', 'false');
      tabContents[currentTabIndex].style.display = 'none';
    }
    // Show current tab and content
    tabHeaders[index].style.fontWeight = 800;
    tabHeaders[index].style.color = 'var(--accent)';
    tabHeaders[index].setAttribute('aria-selected', 'true');
    tabContents[index].style.display = 'flex';

    // Update index
    currentTabIndex = index;
  }

  // Select default tab
  let defaultTabIndex = tabHeaders.findIndex((x) => {
    return [...x.classList].indexOf('default-tab') > -1;
  });

  defaultTabIndex = defaultTabIndex === -1 ? 0 : defaultTabIndex;
  setTab(defaultTabIndex);

  tabHeaders.forEach((x, i) => (x.onclick = (event) => setTab(i)));
}

// Run
[...document.querySelectorAll('.tabs')].forEach((tab) => createTabs(tab));
