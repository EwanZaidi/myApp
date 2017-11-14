export interface Team {
    manager: String;
    assistant_coach: String;
    category: String;
    email: String;
    phone: String; 
    reg_time: String;
    team_name: String;
    team_score: number;

}

interface TeamId extends Team {
    id: String;
}
