import api from './utils/api-actions'
import Teams from './components/Teams'

main()

function main() {
  api.getRequest('http://localhost:8080/teams', teams => {
    getAppContext().innerHTML = Teams(teams);
  })
}

function getAppContext() {
  return document.querySelector("#app")
}
