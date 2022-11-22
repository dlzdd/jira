import { SearchPanel } from "./search-panel"

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    return <div>
        <SearchPanel></SearchPanel>
        <List></List>
    </div>
}