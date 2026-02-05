import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://wrlwpzxltkmuxaexnrym.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndybHdwenhsdGttdXhhZXhucnltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxMTMxNTUsImV4cCI6MjA4NTY4OTE1NX0.VlQuu1tfBcIMeBd2uZPTFIEsVmgUCuYqZlHTSi9DPLo';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface LeaderboardEntry {
    id: string;
    name: string;
    score: number;
    created_at: string;
}

export async function fetchLeaderboard(limit: number = 10): Promise<LeaderboardEntry[]> {
    const { data, error } = await supabase
        .from('leaderboard')
        .select('*')
        .order('score', { ascending: false })
        .limit(limit);

    if (error) {
        console.error('Error fetching leaderboard:', error);
        return [];
    }

    return data || [];
}

export async function submitScore(name: string, score: number): Promise<boolean> {
    const { error } = await supabase
        .from('leaderboard')
        .insert([{ name: name.toUpperCase().slice(0, 10), score }]);

    if (error) {
        console.error('Error submitting score:', error);
        return false;
    }

    return true;
}
