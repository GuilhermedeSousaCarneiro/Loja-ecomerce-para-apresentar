const searchForm = document.getElementById('search-form');
const searchInput = searchForm.querySelector('input[type="text"]');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  search();
});

searchInput.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    search();
  }
});

function search() {
  const searchTerm = searchInput.value;
  // executar a pesquisa com o termo de busca
}
var currentPage = 1;
var linksPerPage = 10; // número de links por página
var links = [ // array com os links a serem exibidos
  "https://www.exemplo.com/link1",
  "https://www.exemplo.com/link2",
  "https://www.exemplo.com/link3",
  "https://www.exemplo.com/link4",
  "https://www.exemplo.com/link5",
  "https://www.exemplo.com/link6",
  "https://www.exemplo.com/link7",
  "https://www.exemplo.com/link8",
  "https://www.exemplo.com/link9",
  "https://www.exemplo.com/link10",
  "https://www.exemplo.com/link11",
  "https://www.exemplo.com/link12",
  "https://www.exemplo.com/link13",
  "https://www.exemplo.com/link14",
  "https://www.exemplo.com/link15",
  "https://www.exemplo.com/link16",
  "https://www.exemplo.com/link17",
  "https://www.exemplo.com/link18",
  "https://www.exemplo.com/link19",
  "https://www.exemplo.com/link20"
];

function displayLinks() {
  var linksDiv = document.getElementById("links");
  var linksHtml = "";
  var startIndex = (currentPage - 1) * linksPerPage;
  var endIndex = startIndex + linksPerPage;

  for (var i = startIndex; i < endIndex && i < links.length; i++) {
    linksHtml += "<li><a href='" + links[i] + "'>" + links[i] + "</a></li>";
  }

  linksDiv.innerHTML = "<ul>" + linksHtml + "</ul>";
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    displayLinks();
  }
}

function nextPage() {
  if (currentPage < Math.ceil(links.length / linksPerPage)) {
    currentPage++;
    displayLinks();
  }
}

displayLinks();

document.getElementById("prev").addEventListener("click", prevPage);
document.getElementById("next").addEventListener("click", nextPage);
