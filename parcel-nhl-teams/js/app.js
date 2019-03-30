import api from './utils/api-actions'
import events from './utils/event-actions'
import Header from './components/Header'
import Conferences from './components/Conferences'
import Conference from './components/Conference'
import Divisions from './components/Divisions'
import Division from './components/Division'
import Teams from './components/Teams'
import Team from './components/Team'

header()
main()

function header() {
  getHeaderContext().innerHTML = Header()

  viewAllConferences()
  viewAllDivisions()
  viewAllTeams()

}

function main() {
  api.getRequest('http://localhost:8080/conferences', conferences => {
    getAppContext().innerHTML = Conferences(conferences);
  })

  viewSingleConference()
  viewSingleDivision()
  viewSingleTeam()

}

function viewAllConferences() {
  events.on(getHeaderContext(), 'click', () => {
		if(event.target.classList.contains('view__all-conferences')) {
			api.getRequest(`http://localhost:8080/conferences`, conferences => {
				getAppContext().innerHTML = Conferences(conferences)
			})
		}
	})
}

function viewSingleConference() {
	events.on(getAppContext(), 'click', () => {
		if(event.target.classList.contains('conference__name')) {
			api.getRequest(`http://localhost:8080/conferences/${event.target.id}`, conference => {
				getAppContext().innerHTML = Conference(conference)
			})
		}
	})
}

function viewAllDivisions() {
  events.on(getHeaderContext(), 'click', () => {
		if(event.target.classList.contains('view__all-divisions')) {
			api.getRequest(`http://localhost:8080/divisions`, divisions => {
				getAppContext().innerHTML = Divisions(divisions)
			})
		}
	})
}

function viewSingleDivision() {
	events.on(getAppContext(), 'click', () => {
		if(event.target.classList.contains('division__name')) {
			api.getRequest(`http://localhost:8080/divisions/${event.target.id}`, division => {
				getAppContext().innerHTML = Division(division)
			})
		}
	})
}

function viewAllTeams() {
  events.on(getHeaderContext(), 'click', () => {
		if(event.target.classList.contains('view__all-teams')) {
			api.getRequest(`http://localhost:8080/teams`, teams => {
				getAppContext().innerHTML = Teams(teams)
			})
		}
	})
}

function viewSingleTeam() {
	events.on(getAppContext(), 'click', () => {
		if(event.target.classList.contains('team__logo')) {
			api.getRequest(`http://localhost:8080/teams/${event.target.id}`, team => {
				getAppContext().innerHTML = Team(team)
			})
		}
	})
}

function getHeaderContext() {
  return document.querySelector("#header")
}

function getAppContext() {
  return document.querySelector("#app")
}
