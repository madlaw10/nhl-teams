export default function Header() {
    return `
    <div class="main-header__title">
        <img class="nhl__logo" src="https://files.slack.com/files-pri/T14LST83D-FHH7U3VAT/image.png">
        <h1>National Hockey League</h1>
    </div>
    <nav class="main-header__nav">
        <button class="view__all-conferences button">Conferences</button>
        <button class="view__all-divisions button">Divisions</button>
        <button class="view__all-teams button">Teams</button>
    </nav>
    `
}