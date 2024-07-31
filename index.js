// JavaScript for toggling sidebar open/close
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const navbarItems = document.getElementById('navbar-items');

    // Show menu icon on smaller screens
    if (window.innerWidth <= 768) {
        menuIcon.style.display = 'block';
    }

    // Toggle sidebar open/close
    menuIcon.addEventListener('click', function() {
        sidebar.classList.toggle('sidebar-open');
    });

    // Close sidebar when a link is clicked (for smaller screens)
    navbarItems.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('sidebar-open');
        }
    });
    
    // Adjust sidebar open/close on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('sidebar-open');
            menuIcon.style.display = 'none';
        } else {
            menuIcon.style.display = 'block';
        }
    });
});

const menuIcon = document.getElementById('menu-icon');
        const sidebar = document.getElementById('sidebar');

        menuIcon.addEventListener('click', () => {
            sidebar.classList.toggle('open');
         });

function openResume() {
    window.open("resume.html", "_blank");
}
// Function to open Wikipedia page for a skill
function openWiki(skill) {
    // Define the Wikipedia URLs for each skill
    const wikiUrls = {
        'Python': 'https://en.wikipedia.org/wiki/Python_(programming_language)',
        'SQL': 'https://en.wikipedia.org/wiki/SQL',
        'Java': 'https://en.wikipedia.org/wiki/Java_(programming_language)',
        'C++': 'https://en.wikipedia.org/wiki/C%2B%2B',
        'Machine_Learning': 'https://en.wikipedia.org/wiki/Machine_learning',
        'Deep_Learning': 'https://en.wikipedia.org/wiki/Deep_learning',
        'Power_BI': 'https://en.wikipedia.org/wiki/Power_BI',
        'GitHub': 'https://en.wikipedia.org/wiki/GitHub',
        'Nodejs': 'https://en.wikipedia.org/wiki/Node.js',
        'Streamlit': 'https://docs.streamlit.io/',
        'Flask': 'https://en.wikipedia.org/wiki/Flask_(web_framework)',
        'MongoDB': 'https://en.wikipedia.org/wiki/MongoDB'
    };

    // Get the URL corresponding to the clicked skill
    const url = wikiUrls[skill];

    // Open the URL in a new tab
    if (url) {
        window.open(url, '_blank');
    } else {
        console.log(`No Wikipedia link found for ${skill}`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const linksContainer = card.querySelector('.project-links');

            // Toggle visibility of links container
            linksContainer.classList.toggle('hidden');
        });

        // Handle clicks on project links
        const projectOptions = card.querySelector('.project-options');
        projectOptions.addEventListener('click', (event) => {
            if (event.target.tagName === 'A') {
                event.preventDefault();
                window.open(event.target.href, '_blank');
            }
        });
    });
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});





