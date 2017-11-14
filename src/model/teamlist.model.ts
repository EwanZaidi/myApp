export interface TeamList {
    school_abbr: String;
    school_name: String;
    team_name: String;
}

interface TeamListID extends TeamList {
    id: String;
}