export interface Player {
    key?: String;
    manager: String;
    assistant_coach: String;
    category: String;
    email: String;
    phone: String;
    players: Players[]; 
    reg_time: String;
    team_name: String;

}

interface Players {
    player_ic: String;
    player_jersey: number;
    player_name: String;
}