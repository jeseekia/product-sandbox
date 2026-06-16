import './styles.css';
import { participants } from './participants.js';

let searchValue = '';
let statusFilter = "All";
let selectedParticipant = null;

const root = document.getElementById('root');

function render() {

  const filtered = participants.filter(function (participant) {

    const matchesSearch =
      participant.name.toLowerCase().includes(searchValue.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || participant.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  root.innerHTML = `
    <div class="page">

      <header>
        <h1>Participant Operations Dashboard</h1>
        <p>Starter scaffold for week 1.</p>
      </header>

      <section class="controls">
        <input id="search" placeholder="Search participants..." />

        <select id="filter">
          <option value="All">All</option>
          <option value="On Track">On Track</option>
          <option value="Needs Follow-Up">Needs Follow-Up</option>
          <option value="At Risk">At Risk</option>
        </select>
      </section>

      <section class="layout">

        <div class="list">
          ${filtered.map(function (participant) {
            return `
              <div class="card" data-name="${participant.name}">
                <div class="card-top">
                  <strong>${participant.name}</strong>
                  <span class="badge">${participant.status}</span>
                </div>
                <div>${participant.role} • ${participant.team}</div>
              </div>
            `;
          }).join('')}
        </div>

        <aside class="details">
          <h2>Participant details</h2>
          <p>
            ${
              selectedParticipant
                ? `
                  <strong>${selectedParticipant.name}</strong><br/>
                  ${selectedParticipant.role} • ${selectedParticipant.team}<br/>
                  Status: ${selectedParticipant.status}
                `
                : "Click a participant to view details"
            }
          </p>
        </aside>

      </section>

    </div>
  `;

  // SEARCH
  document.getElementById('search').oninput = function (e) {
    searchValue = e.target.value;
    render();
  };

  // FILTER
  document.getElementById('filter').onchange = function (e) {
    statusFilter = e.target.value;
    render();
  };

  // CLICK CARDS
  document.querySelectorAll('.card').forEach(function (card) {
    card.addEventListener('click', function () {

      const name = card.getAttribute('data-name');

      selectedParticipant = participants.find(function (p) {
        return p.name === name;
      });

      render();
    });
  });
}

render();