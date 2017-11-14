export interface Group {
    category: String;
    group_name: String;
}

interface GroupID extends Group{
    id: String;
}

interface team_list extends Group{
    school_abbr: String;
    school_name: String;
    team_name: String;
}